# Pipeline Task Decomposition

## Summary
RecipeRack is a full-auth recipe management application. Authenticated users can browse their recipes as a responsive card grid, add/view/edit/delete recipes (each with a title, one-or-more ingredients, and instructions), search recipes by title (case-insensitive), and toggle a favorite flag that persists. The stack is Angular 19 (frontend) + NestJS with a tRPC internal API + Prisma over PostgreSQL. Auth is `full_auth`: the first signup becomes `ADMIN`, subsequent users are `USER`; an `(admin)` route group and `/admin/settings` page are always present.

## Surface contract
Routes / screens (all app routes require authentication unless marked public):
- `/login` — public. User login screen.
- `/signup` — public. User signup screen (first user → ADMIN, rest → USER).
- `/` (home) — recipe card grid (responsive), search field, empty-state, favorite toggle on each card.
- `/recipes/new` — add-recipe form (title, ingredients[], instructions).
- `/recipes/:id` — recipe detail (title, ingredients list, instructions) + edit + delete (with confirm).
- `/recipes/:id/edit` — edit-recipe form.
- `/admin` route group — protected, admin role only.
- `/admin/settings` — admin settings page (always generated).

tRPC procedures (internal API — do NOT convert to REST/GraphQL):
- `auth.signup`, `auth.login`, `auth.logout`, `auth.me`
- `recipe.list` (supports optional `search` title filter, case-insensitive)
- `recipe.getById` (404 when missing/deleted)
- `recipe.create`, `recipe.update`, `recipe.delete`
- `recipe.toggleFavorite`
- `admin.settings.list`, `admin.settings.update` (admin role required)

Entities:
- `User` — id, email, passwordHash, role (`UserRole` enum), timestamps.
- `Recipe` — id, title, ingredients (list, min 1), instructions, favorite (bool, default false), ownerId → User, timestamps.
- `SystemSetting` — key (PK), value, updatedAt.

Cross-cutting response semantics: 401 + redirect to `/login` when unauthenticated; 403 when role-forbidden; 404 for missing recipe; 503 with friendly message on database unavailability; validation errors on missing required fields / empty ingredients.

## db_agent tasks
- [ ] Define `enum UserRole { ADMIN USER }` in the Prisma schema.
- [ ] Add/extend the `User` model: `id`, `email` (unique), `passwordHash`, `role UserRole @default(USER)`, `createdAt`, `updatedAt`.
- [ ] Add the `Recipe` model: `id`, `title String`, `ingredients String[]` (or a normalized `Ingredient` relation — must enforce ≥1), `instructions String`, `favorite Boolean @default(false)`, `ownerId` relation to `User`, `createdAt`, `updatedAt`; index `title` to support case-insensitive search and the 500-recipe / 300ms p95 grid load.
- [ ] Add the `SystemSetting` model: `key String @id`, `value String`, `updatedAt DateTime @updatedAt`.
- [ ] Generate the Prisma migration for User/UserRole, Recipe, and SystemSetting.
- [ ] Write a seed script that creates an initial admin account (idempotent) for local/dev bootstrap.

## backend_agent tasks
- [ ] Implement JWT auth: `auth.signup` (first user → `ADMIN`, subsequent → `USER`, hash password), `auth.login`, `auth.logout`, `auth.me`.
- [ ] Add auth middleware/guard so every non-public procedure/route returns 401 (and triggers redirect to `/login`) when unauthenticated.
- [ ] Add an admin role guard and protect the `(admin)` route group / admin procedures, returning 403 for authenticated non-admin users.
- [ ] Implement `recipe.list` returning the caller's recipes with an optional case-insensitive `search` title filter.
- [ ] Implement `recipe.getById` returning the full recipe; return 404 with a message when the recipe does not exist or was deleted.
- [ ] Implement `recipe.create` with validation: `title`, `instructions`, and ≥1 ingredient required; return a validation error (and do not save) on any empty required field, with a specific message when ingredients are empty.
- [ ] Implement `recipe.update` applying validated field changes and returning the updated recipe (reuse the create validation rules).
- [ ] Implement `recipe.delete` removing the recipe and confirming it no longer appears in `recipe.list`.
- [ ] Implement `recipe.toggleFavorite` that flips and persists the `favorite` flag and returns the new state.
- [ ] Add a global error mapping so database-unavailability errors surface as 503 Service Unavailable with a user-friendly message across load/create/update/delete.
- [ ] Create `lib/config.ts` with `resolveConfig(key: string): string | null` — reads `process.env[key]`; if it equals `PLACEHOLDER_CONFIGURE_IN_SETTINGS` or is absent, falls back to the `SystemSetting` DB row; returns null if neither is set.
- [ ] Implement `admin.settings.list` (list service keys with masked values + configured status) and `admin.settings.update` (upsert key/value pairs), both requiring the admin role; include the `postgresql` service key(s) in the list response.

## ui_agent tasks
- [ ] Add "RecipeRack" branding to the app header shown on every page; preserve `data-testid="app-ready"` on the Angular root component.
- [ ] Build `/login` and `/signup` screens as part of the main app, wired to the auth flows; show the admin nav section only to admin users.
- [ ] Build the home `/` recipe card grid: responsive grid of cards each showing the recipe title and a favorite indicator, with loading and empty states.
- [ ] Add a search field on the home page that filters the grid by title (case-insensitive) and shows an empty-state message when no recipes match.
- [ ] Add a favorite toggle control on each recipe card that reflects and optimistically updates favorite status.
- [ ] Build the add-recipe form (`/recipes/new`) with fields for title, dynamic ingredients list (add/remove rows, ≥1 required), and instructions, surfacing validation errors inline.
- [ ] Build the recipe detail screen (`/recipes/:id`) showing title, ingredients list, and instructions, plus edit and delete actions; delete requires a confirmation step.
- [ ] Build the edit-recipe form (`/recipes/:id/edit`) prefilled with existing values, reusing the add-form validation.
- [ ] Handle 404 (recipe not found), 401 (redirect to `/login`), 403 (forbidden), and 503 (friendly database-error message) states in the recipe screens.
- [ ] Build the `/admin/settings` page: list each service in the deployments (`postgresql`) with a configured/unconfigured badge and a per-service credential form; render a "The following need credentials to activate: …" banner only when placeholder services/integrations exist (none currently).

## service_agent tasks
- [ ] Set up the typed tRPC client and an auth-aware session/data layer that attaches the JWT and redirects to `/login` on 401.
- [ ] Wire the recipe grid and search field to `recipe.list` (passing the search term) with loading/empty handling.
- [ ] Wire the add and edit forms to `recipe.create` / `recipe.update`, mapping validation errors back to form fields and refreshing the grid on success.
- [ ] Wire the detail screen to `recipe.getById` and the delete action to `recipe.delete`, updating the grid cache after deletion.
- [ ] Wire the favorite toggle to `recipe.toggleFavorite` with immediate UI update and rollback on failure.
- [ ] Wire the `/admin/settings` page to `admin.settings.list` / `admin.settings.update`.
- [ ] Centralize error handling so 401/403/404/503 responses map to the correct UI states/redirects.

## tester tasks
- [ ] Auth E2E: signup makes the first user an admin and later users regular users; login/logout work; unauthenticated access to any recipe page/procedure returns 401 and redirects to `/login`; a non-admin hitting an admin resource gets 403.
- [ ] Recipe CRUD happy path: create a valid recipe → it appears in the grid; view detail; edit → changes reflected in grid and detail; delete (with confirm) → removed from grid.
- [ ] Validation edge cases: submitting with empty title, empty instructions, or an empty ingredients list each returns a validation error (and the empty-ingredients case shows the "at least one ingredient" message) and does not save.
- [ ] Search: case-insensitive title filtering shows only matching recipes; a no-match search shows the empty-state message and no cards.
- [ ] Favorite toggle: toggling on a card flips and persists favorite status and updates the indicator immediately.
- [ ] Not-found + failure paths: requesting a missing/deleted recipe returns 404 with a message; database-unavailable during load/create/update/delete surfaces a 503 and a user-friendly error.
- [ ] Branding + NFR: header shows "RecipeRack" on every page; grid loads within 300ms p95 with up to 500 recipes.

## Open questions
- Ingredient representation: spec requires "at least one ingredient" but does not specify structure (plain string list vs. quantity/unit fields). Assumed a simple ordered list of strings; db_agent should confirm.
- Recipe ownership/scoping: spec says "all recipes are displayed" and uses per-user auth but never states whether recipes are private per-user or shared across all users. Assumed per-user ownership (`ownerId`); confirm whether the grid should show only the current user's recipes.
- `postgresql` appears in deployments but is the core database (provisioned with real credentials), not a placeholder integration; the admin-settings tasks are included per pipeline rules, but the settings UI may have no actionable credential fields (no placeholder services/integrations present).
- Spec's "Unauthorized role" (403) scenario does not name a specific protected resource beyond the admin area; assumed it maps to the `(admin)` route group.
