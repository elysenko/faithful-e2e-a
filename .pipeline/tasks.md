# Pipeline Task Decomposition

## Summary
RecipeRack is a single-container full-stack app: a NestJS + TypeORM + PostgreSQL API with JWT `full_auth`, serving a React (Vite) SPA. Authenticated users manage a per-owner recipe collection through a searchable, favorite-able CRUD grid. The API lives under `/api`, the SPA is served from the same Node process on port 80 under base path `/faithful-e2e-a/`, and Postgres runs in-cluster with health probes on `/api/health`.

## Surface contract

### Backend routes (all under global `/api` prefix)
- `POST /api/auth/signup` — create user; first signup → `admin`, subsequent → `user`; returns JWT.
- `POST /api/auth/login` — email + password → JWT.
- `POST /api/auth/logout` — client token discard endpoint.
- `GET /api/auth/me` — current authenticated user (JwtAuthGuard).
- `GET /api/health` — public liveness (no DB).
- `GET /api/health/deep` — public readiness; runs `SELECT 1`; 503 if DB down.
- `GET /api/recipes?q=` — list current owner's recipes, case-insensitive `ILIKE` title search (JwtAuthGuard).
- `POST /api/recipes` — create recipe scoped to `req.user.id`.
- `GET /api/recipes/:id` — owner-scoped fetch; 404 on miss.
- `PATCH /api/recipes/:id` — owner-scoped update.
- `DELETE /api/recipes/:id` — owner-scoped delete.
- `PATCH /api/recipes/:id/favorite` — toggle `isFavorite`.
- `GET /api/admin/settings` — list service/config keys with masked values + configured status (admin role).
- `PATCH /api/admin/settings` — upsert key-value settings (admin role).

### Frontend routes (React Router, `basename="/faithful-e2e-a"`)
- `/login` — public.
- `/signup` — public.
- `/` — HomePage: recipe grid + search bound to `?q=` (RequireAuth).
- `/recipes/new` — RecipeFormPage create (RequireAuth).
- `/recipes/:id` — RecipeDetailPage; delete confirm via `?confirm=delete` (RequireAuth).
- `/recipes/:id/edit` — RecipeFormPage edit (RequireAuth).
- `/admin/settings` — admin settings page (RequireAuth + admin role in nav).

### Entities
- `User` — `id`, `email` (unique), `passwordHash`, `role` (`admin | user`), `createdAt`, `updatedAt`.
- `Recipe` — `id` (uuid), `ownerId` (FK → User), `title`, `ingredients` (string array), `instructions` (text), `isFavorite` (bool, default false), `createdAt`, `updatedAt`; index on `ownerId` + functional index `lower(title)`.
- `SystemSetting` — `key` (PK), `value`, `updatedAt`.

## db_agent tasks
- [ ] Create `backend/src/config/data-source.ts` — TypeORM `DataSource` reading `DATABASE_URL`, registering all entities + `src/migrations/*` for CLI migration generation/run.
- [ ] Create `src/users/user.entity.ts` — `User` with `id`, `email` (unique), `passwordHash`, `role` column, and `createdAt`/`updatedAt` timestamps.
- [ ] Add `enum UserRole { ADMIN, USER }` and `role UserRole @default(USER)` semantics to the `User` entity (TypeORM enum column, default `user`); admin assigned to first signup by backend logic.
- [ ] Create `src/recipes/recipe.entity.ts` — `Recipe` with `id` (uuid), `ownerId` (FK to `User`), `title`, `ingredients` (`text[]`/jsonb string array), `instructions` (text), `isFavorite` (bool default false), timestamps; add index on `ownerId` and functional index on `lower(title)`.
- [ ] Create `src/system-settings/system-setting.entity.ts` — `SystemSetting` with `key String @id`, `value String`, `updatedAt DateTime @updatedAt`.
- [ ] Create `src/migrations/*` — initial schema migration covering `User`, `Recipe` (with both indexes), and `SystemSetting`; ensure idempotent run-on-startup to avoid crash-loops on redeploy.

## backend_agent tasks
- [ ] Scaffold NestJS project: `backend/package.json`, `tsconfig.json`, `nest-cli.json` with dependencies (`@nestjs/*`, `typeorm`, `pg`, `@nestjs/typeorm`, `@nestjs/jwt`, `@nestjs/passport`, `passport`, `passport-jwt`, `bcrypt`, `class-validator`, `class-transformer`, `@nestjs/serve-static`).
- [ ] Create `src/main.ts` — bootstrap with global `/api` prefix, global `ValidationPipe({ whitelist: true })`, `ServeStaticModule` SPA serving of `frontend/dist` (fallback excluding `/api*`), bind `0.0.0.0:80`.
- [ ] Create `src/app.module.ts` — TypeORM root config from `DATABASE_URL`, `ServeStaticModule`, and feature modules (users, auth, recipes, health, system-settings).
- [ ] Create `src/users/users.service.ts` + `users.module.ts` — user lookup/creation, bcrypt password hashing helpers, first-user-is-admin count check.
- [ ] Create `src/auth/auth.module.ts`, `auth.service.ts`, `auth.controller.ts` — `POST /api/auth/signup` (first user → `admin`, else `user`), `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me`; JWT issuance via `@nestjs/jwt`.
- [ ] Create `src/auth/dto/signup.dto.ts` + `login.dto.ts` — class-validator DTOs (email format, password non-empty).
- [ ] Create `src/auth/jwt.strategy.ts`, `jwt-auth.guard.ts` (401 on missing/invalid token), `roles.guard.ts` + `roles.decorator.ts` (403 on role mismatch); wire admin guard for `/admin` route group.
- [ ] Create `src/recipes/recipes.controller.ts` — `GET /api/recipes?q=`, `POST`, `GET/:id`, `PATCH/:id`, `DELETE/:id`, `PATCH/:id/favorite`; all under `JwtAuthGuard`, scoped to `req.user.id`.
- [ ] Create `src/recipes/recipes.service.ts` — owner-scoped CRUD, case-insensitive `ILIKE '%q%'` title search, favorite toggle, throw `EntityNotFoundError` on miss.
- [ ] Create `src/recipes/dto/create-recipe.dto.ts` + `update-recipe.dto.ts` — validate `title` non-empty, `ingredients` `@ArrayNotEmpty`, `instructions` non-empty.
- [ ] Create `src/common/filters/all-exceptions.filter.ts` — global filter mapping TypeORM connection errors → 503, `EntityNotFound` → 404, validation → 400.
- [ ] Create `src/health/health.controller.ts` — public `GET /api/health` (liveness) and `GET /api/health/deep` (runs `SELECT 1`, 503 on DB failure).
- [ ] Create `src/lib/config.ts` — `resolveConfig(key: string): string | null` reading `process.env[key]` first, falling back to `SystemSetting` DB row when value is absent or equals `PLACEHOLDER_CONFIGURE_IN_SETTINGS`, returning null if neither set.
- [ ] Create `src/system-settings/settings.controller.ts` + service — `GET /api/admin/settings` (list service keys for `postgresql` and `minio` with masked values + configured status) and `PATCH /api/admin/settings` (upsert key-value pairs), both admin-role protected.

## ui_agent tasks
- [ ] Scaffold Vite/React frontend: `frontend/package.json`, `vite.config.ts` (`base: '/faithful-e2e-a/'`), `index.html`, `tsconfig.json` with deps (`react`, `react-dom`, `react-router-dom`, `@tanstack/react-query`, `vite`, `typescript`).
- [ ] Create `src/main.tsx` — React Router with `basename="/faithful-e2e-a"` and TanStack Query provider; register all routes.
- [ ] Create `src/auth/AuthContext.tsx` + `RequireAuth.tsx` — token storage, auth state, route guard redirecting to `/login` on missing/expired token.
- [ ] Create `src/pages/LoginPage.tsx` and `src/pages/SignupPage.tsx` — public auth screens as part of main app.
- [ ] Create `src/pages/HomePage.tsx` — responsive `RecipeGrid` of `RecipeCard`, `SearchBar` bound to `?q=`, `EmptyState` when no matches, loading/error states.
- [ ] Create `src/pages/RecipeDetailPage.tsx` — shows title/ingredients/instructions with edit + delete (delete confirm via `?confirm=delete` using `ConfirmDialog`).
- [ ] Create `src/pages/RecipeFormPage.tsx` — create/edit form validating title non-empty, ≥1 ingredient (specific "at least one ingredient" message), instructions non-empty.
- [ ] Create `src/components/AppHeader.tsx` (renders "RecipeRack"), `RecipeCard.tsx`, `RecipeGrid.tsx`, `SearchBar.tsx`, `FavoriteToggle.tsx`, `EmptyState.tsx`, `ConfirmDialog.tsx`; show admin nav link (to `/admin/settings`) only when current user role is `admin`.
- [ ] Create `src/styles.css` — responsive CSS grid + loading/empty/error styling.
- [ ] Create `src/pages/AdminSettingsPage.tsx` at `/admin/settings` — list `postgresql` and `minio` services each with a configured/unconfigured badge and per-service credential form wired to `GET`/`PATCH /api/admin/settings`.

## service_agent tasks
- [ ] Create `src/api/client.ts` — fetch wrapper with base URL `/faithful-e2e-a/api`, attaches JWT header, redirects to `/login` on 401, surfaces 503/404 messages with friendly text.
- [ ] Add auth data layer (TanStack Query hooks/mutations) wiring signup/login/logout/me to `/api/auth/*` and persisting the returned JWT via AuthContext.
- [ ] Add recipes data layer — query/mutation hooks for list (`?q=` search), get-by-id, create, update, delete, and favorite toggle against `/api/recipes*`, with cache invalidation so grid/detail reflect changes immediately.
- [ ] Add admin settings data layer — hooks for `GET`/`PATCH /api/admin/settings` used by the AdminSettingsPage.

## tester tasks
- [ ] Auth tests: first signup → `admin`, second → `user`; login returns JWT; unauthenticated API call → 401 + FE redirect to `/login`; role-gated admin endpoint with `user` role → 403.
- [ ] CRUD tests: create with valid fields appears in grid; missing title/ingredients/instructions → 400; empty ingredients → specific "at least one ingredient" error; edit reflects in grid + detail; delete removes from grid; `GET` missing id → 404.
- [ ] Search tests: case-insensitive substring filters the grid; no match renders empty-state message.
- [ ] Favorite tests: toggle flips + persists; reload retains state; indicator updates immediately.
- [ ] Resilience tests: stop Postgres → load/create/update/delete return 503 + friendly UI message; `/api/health/deep` reflects DB down.
- [ ] Performance test: seed 500 recipes, load grid, assert p95 < 300ms (validates `ownerId` + `lower(title)` indexes).
- [ ] Deploy/routing tests: SPA + assets load under `/faithful-e2e-a/` via ingress; deep links (`/recipes/:id`) resolve via SPA fallback.

## Open questions
- The provisioned `minio` deployment is listed in `<spec_deployments>` but the spec body never references object storage or any MinIO usage. Admin-settings tasks include a `minio` credential entry per the settings rules, but no backend integration consumes it — confirm whether MinIO is actually needed or should be dropped.
- `<spec_integrations>` contains only a placeholder "None" entry (no real third-party API). No integration client modules were created; confirm this is correct.
- Docker/K8s infra changes (`Dockerfile` multi-stage build, `k8s/deployment.yaml` probes/secrets, `k8s/postgres.yaml`, `kustomization.yaml`) are in the spec's implementation plan but fall outside the five pipeline agents' scopes — confirm which agent owns containerization/deploy artifacts.
- Storage: spec notes PVC may need an `emptyDir` fallback if the cluster lacks a default StorageClass — decide the default before deploy.
