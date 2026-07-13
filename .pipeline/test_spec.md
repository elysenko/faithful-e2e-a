# Test Specification

> ⚠️ **Warning:** `.pipeline/surface.json` was not found. The API surface below was
> derived from the `## Surface contract` section of `.pipeline/tasks.md` and the approved
> spec. Endpoint counts are therefore best-effort against that contract (14 endpoints).
> `requirements/spec.md` was also absent; the spec supplied in the pipeline prompt was used.

## Coverage summary
- Total cases: 78
- API endpoints covered: 14 / 14 (from tasks.md surface contract)
- User journeys covered: 11

Base paths: API is served under `/api`; the SPA and its API client run under `/faithful-e2e-a/`
(client base URL `/faithful-e2e-a/api`). All `/api/recipes*` and `/api/admin/*` routes require a
valid JWT via `JwtAuthGuard` (401 on missing/invalid); `/admin/*` additionally requires `admin`
role via `RolesGuard` (403 on mismatch). Public routes: `/api/health`, `/api/health/deep`,
`/api/auth/signup`, `/api/auth/login`.

---

## API tests

### `POST /api/auth/signup`
- **Happy path (first user → admin)**: on an empty users table, body `{ email: "admin@x.com", password: "secret123" }` → `201`, body `{ token: <jwt>, user: { id, email, role: "admin" } }`; `passwordHash` never returned.
- **Happy path (second user → user)**: with one existing user, signup `{ email: "u2@x.com", password: "secret123" }` → `201`, `user.role === "user"`.
- **Validation failure — bad email**: `{ email: "not-an-email", password: "secret123" }` → `400`, message references `email`.
- **Validation failure — empty password**: `{ email: "a@x.com", password: "" }` → `400`.
- **Validation failure — extra/whitelisted field stripped**: `{ email, password, role: "admin" }` from a non-first user must NOT grant admin (whitelist strips `role`; server assigns role) → resulting `user.role === "user"`.
- **Duplicate email**: signing up an already-registered email → `409` (or `400`) with a conflict message; no second row created.

### `POST /api/auth/login`
- **Happy path**: correct `{ email, password }` for an existing user → `200`, `{ token: <jwt>, user }`; decoding the JWT yields the user id + role.
- **Wrong password**: valid email, wrong password → `401`, generic "invalid credentials" (no user-enumeration leak).
- **Unknown email**: → `401`, same generic message as wrong password.
- **Validation failure**: missing `email` or `password` → `400`.

### `POST /api/auth/logout`
- **Happy path (authenticated)**: with valid Bearer token → `200`/`204`; treated as client token discard (server is stateless).
- **Unauthenticated**: no token → behaves per implementation; if guarded → `401`. (Document actual behavior; endpoint must not error 500.)

### `GET /api/auth/me`
- **Happy path**: valid Bearer token → `200`, `{ id, email, role }` matching the token subject; no `passwordHash`.
- **Auth failure — no token**: → `401`.
- **Auth failure — malformed/expired token**: → `401`.

### `GET /api/health`
- **Happy path**: no auth → `200`, body indicates liveness (e.g. `{ status: "ok" }`). Must NOT touch the DB (still `200` when Postgres is down).

### `GET /api/health/deep`
- **Happy path**: no auth, DB reachable → `200`, indicates DB check passed (`SELECT 1`).
- **DB down**: with Postgres stopped → `503`, body indicates DB unavailable.

### `GET /api/recipes?q=`
- **Happy path (list, owner-scoped)**: authenticated user with N own recipes → `200`, array of only that owner's recipes; another user's recipes never appear.
- **Search — case-insensitive substring**: recipes titled "Chicken Curry" & "Beef Stew"; `?q=curry` → returns only "Chicken Curry"; `?q=CURRY` and `?q=Cur` return the same (ILIKE `%q%`).
- **Search — no match**: `?q=zzznomatch` → `200`, empty array `[]`.
- **Empty q**: `?q=` or omitted → returns all of the owner's recipes.
- **Auth failure**: no token → `401`.

### `POST /api/recipes`
- **Happy path**: valid `{ title: "Soup", ingredients: ["water","salt"], instructions: "Boil." }` → `201`, body includes generated uuid `id`, `ownerId === req.user.id`, `isFavorite === false`.
- **Validation — missing title**: `title` absent/empty → `400`.
- **Validation — empty ingredients**: `ingredients: []` → `400` with specific "at least one ingredient" message (`@ArrayNotEmpty`).
- **Validation — missing instructions**: `instructions` empty → `400`.
- **Auth failure**: no token → `401`.

### `GET /api/recipes/:id`
- **Happy path**: owner requests own recipe id → `200`, full recipe body.
- **Not found**: non-existent uuid → `404` (mapped from `EntityNotFoundError`).
- **Cross-owner isolation**: user A requests user B's recipe id → `404` (owner-scoped; not `403`, to avoid leaking existence).
- **Auth failure**: no token → `401`.

### `PATCH /api/recipes/:id`
- **Happy path**: owner updates `{ title: "New Title" }` → `200`, updated fields reflected; `ownerId` unchanged.
- **Validation failure**: update sets `ingredients: []` → `400` "at least one ingredient".
- **Not found**: unknown id → `404`.
- **Cross-owner**: user A patches user B's recipe → `404`.
- **Auth failure**: no token → `401`.

### `DELETE /api/recipes/:id`
- **Happy path**: owner deletes own recipe → `200`/`204`; subsequent `GET /api/recipes/:id` → `404`.
- **Not found**: unknown id → `404`.
- **Cross-owner**: user A deletes user B's recipe → `404`; B's recipe still exists.
- **Auth failure**: no token → `401`.

### `PATCH /api/recipes/:id/favorite`
- **Happy path (toggle on)**: recipe with `isFavorite:false` → `200`, `isFavorite:true`.
- **Happy path (toggle off / idempotent flip)**: calling again → `isFavorite:false`. Persisted value matches a fresh `GET`.
- **Not found**: unknown id → `404`.
- **Cross-owner**: user A toggles user B's recipe → `404`.
- **Auth failure**: no token → `401`.

### `GET /api/admin/settings`
- **Happy path (admin)**: admin token → `200`, list of service/config keys (`postgresql`, `minio`) each with **masked** values and a `configured` boolean; raw secret values never returned.
- **Auth failure — role**: `user`-role token → `403`.
- **Auth failure — no token**: → `401`.

### `PATCH /api/admin/settings`
- **Happy path (admin)**: admin upserts `{ key: "postgresql.url", value: "..." }` → `200`; subsequent `GET` shows `configured:true` with masked value.
- **Validation failure**: malformed body (missing `key`) → `400`.
- **Auth failure — role**: `user`-role token → `403`; no write performed.
- **Auth failure — no token**: → `401`.

---

## UI / journey tests

### Journey: Sign up (first user becomes admin)
- **Steps**: navigate `/faithful-e2e-a/signup` → type email + password → submit.
- **Expected outcomes**: redirected to `/` (authenticated); `AppHeader` shows "RecipeRack"; admin nav link to `/admin/settings` is visible (first user is admin); token persisted so reload keeps session.
- **Negative path**: invalid email or empty password → inline validation error, no navigation; duplicate email → server error surfaced as friendly message.

### Journey: Sign up (subsequent user is non-admin)
- **Steps**: with an existing admin, sign up a second account.
- **Expected outcomes**: lands on `/`; admin nav link to `/admin/settings` is NOT shown (role `user`).
- **Negative path**: attempting to visit `/admin/settings` as `user` → API returns `403`; page shows unauthorized/empty state, no settings data.

### Journey: Log in
- **Steps**: `/login` → enter valid credentials → submit.
- **Expected outcomes**: redirect to `/`; grid loads the user's recipes.
- **Negative path**: wrong password → "invalid credentials" message shown; stays on `/login`; no token stored.

### Journey: Route guard & 401 redirect
- **Steps**: with no/expired token, navigate directly to `/` (or `/recipes/new`).
- **Expected outcomes**: `RequireAuth` redirects to `/login`; any API `401` from `client.ts` also forces redirect to `/login`.
- **Negative path**: token present but rejected by server (401) mid-session → redirected to `/login`.

### Journey: Browse & search recipe grid
- **Steps**: on `/`, view responsive `RecipeGrid`; type "curry" into `SearchBar`.
- **Expected outcomes**: URL updates to `/?q=curry`; grid filters to case-insensitive title matches; each `RecipeCard` shows title + `FavoriteToggle`.
- **Negative path**: query with no matches → `EmptyState` message rendered (no cards).

### Journey: Create a recipe
- **Steps**: click "New"/navigate `/recipes/new` → fill title, add ≥1 ingredient line, instructions → submit.
- **Expected outcomes**: navigates back to grid; new recipe card appears immediately (cache invalidation); detail page shows entered data.
- **Negative path**: submit with empty title → client validation error; submit with zero ingredients → specific "at least one ingredient" message; missing instructions → error. Client blocks and server also enforces `400`.

### Journey: View recipe detail
- **Steps**: click a `RecipeCard` → `/recipes/:id`.
- **Expected outcomes**: shows title, ingredient list, instructions, and Edit + Delete actions.
- **Negative path**: deep-link to a non-existent/other-owner id → friendly 404/not-found message (from `client.ts` 404 handling).

### Journey: Edit a recipe
- **Steps**: from detail, click Edit → `/recipes/:id/edit` → change title → save.
- **Expected outcomes**: returns to detail; updated title shown; grid card reflects change on next view (cache invalidation).
- **Negative path**: clear ingredients to empty → "at least one ingredient" error; save blocked.

### Journey: Delete a recipe (with confirm)
- **Steps**: on `/recipes/:id`, click Delete → `?confirm=delete` opens `ConfirmDialog` → confirm.
- **Expected outcomes**: recipe removed; redirected to grid; deleted card no longer present.
- **Negative path**: cancel in `ConfirmDialog` → dialog closes, recipe unchanged, `?confirm=delete` cleared from URL.

### Journey: Toggle favorite
- **Steps**: click `FavoriteToggle` on a card (or detail).
- **Expected outcomes**: indicator flips immediately (optimistic/refetched); state persists — reload page and the favorite state is retained.
- **Negative path**: toggle while server returns error → indicator reverts / friendly error; state not corrupted.

### Journey: Resilience — database unavailable
- **Steps**: with Postgres stopped, attempt to load grid / create / update / delete.
- **Expected outcomes**: API returns `503`; UI shows a friendly "service unavailable" message rather than a crash/blank screen; `/api/health/deep` reflects DB down while `/api/health` stays up.
- **Negative path**: after DB recovers, retrying the same action succeeds without reload of the whole app.

---

## Data integrity tests
- After signup, exactly one `User` row exists per unique email; `email` uniqueness enforced at DB level (duplicate insert rejected).
- The first-ever `User` row has `role = "admin"`; every subsequent row has `role = "user"`.
- Passwords are stored only as bcrypt `passwordHash`; plaintext never persisted or returned by any endpoint.
- Every `Recipe` row has a non-null `ownerId` FK referencing an existing `User`; recipes are never returned to a non-owner.
- On create, `Recipe.id` is a valid uuid and `isFavorite` defaults to `false`.
- `PATCH /favorite` changes only `isFavorite` (and `updatedAt`); `ownerId`, `id`, and other fields are unchanged.
- After `DELETE`, no `Recipe` row with that id remains; no orphaned references.
- `updatedAt` advances on any mutation (`PATCH`, favorite toggle); `createdAt` is immutable.
- `ownerId` index and functional `lower(title)` index exist (validates search + perf: seed 500 recipes, grid list p95 < 300ms).
- `SystemSetting` upsert is keyed on `key` (PK) — repeated `PATCH` of the same key updates the row rather than inserting duplicates.
- Migrations are idempotent: re-running startup migration on an already-migrated DB does not error or duplicate schema (no crash-loop).

## Out of scope
- **MinIO / object storage behavior**: admin settings expose a `minio` credential entry, but the spec body defines no MinIO-backed feature; no functional MinIO integration is tested (open question in tasks.md — no consumer to assert against).
- **Third-party integrations**: spec `<integrations>` is "None"; no external-service contract tests.
- **JWT expiry/refresh semantics**: spec does not define token TTL or refresh flow, so only presence/validity (401) is asserted, not time-based expiry.
- **Password strength / complexity rules**: spec only requires non-empty password; no min-length/complexity policy is tested.
- **Rate limiting, CSRF, and brute-force protection**: not specified.
- **Containerization/deploy artifacts** (`Dockerfile`, `k8s/*`, ingress rewrite) beyond the routing assertion that assets and SPA deep links resolve under `/faithful-e2e-a/`; full cluster/PVC/StorageClass behavior is an infra concern outside these functional cases.
- **Pagination / sorting of the recipe grid**: spec is silent; list returns all owner recipes.
