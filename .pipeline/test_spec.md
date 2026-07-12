# Test Specification

> **⚠️ Warning — surface.json is a generic scaffold.** `.pipeline/surface.json`
> only lists `GET /health`, `GET /trpc/users.findAll`, and `GET /trpc/users.findById`.
> These do **not** reflect the RecipeRack surface described in the spec and
> `.pipeline/tasks.md`. This test spec covers the three scaffold routes (so the
> contract file stays honest) **and** the real tRPC procedures derived from the
> spec + task decomposition. The tester/implementer should regenerate
> `surface.json` from the tRPC router once it exists.

## Coverage summary
- Total cases: 71
- API endpoints covered: 17 / 3 in surface.json (3 scaffold routes + 14 spec-derived tRPC procedures)
- User journeys covered: 13

## API tests

> tRPC procedures are invoked over HTTP. Convention below: `query` procedures →
> `GET /trpc/<proc>`, `mutation` procedures → `POST /trpc/<proc>`. Unless a case
> says otherwise, every non-public procedure requires a valid session/JWT and
> returns **401** (with a redirect hint to `/login`) when unauthenticated, and a
> **503** with a user-friendly message when PostgreSQL is unavailable.

### `GET /health` *(from surface.json)*
- **Happy path**: no auth required → `200` with a body indicating liveness (e.g. `{ status: "ok" }`).
- **Validation failures**: n/a (no inputs).
- **Auth failures**: none — endpoint is public.
- **Idempotency / edge cases**: repeated calls return identical `200`; must not touch the database (so it stays green during a DB outage).

### `GET /trpc/users.findAll` *(from surface.json — scaffold)*
- **Happy path**: authenticated request → `200` with a JSON array of users. If the scaffold route is removed during implementation, mark this case **obsolete** in the run report rather than failing.
- **Validation failures**: n/a (no inputs).
- **Auth failures**: unauthenticated → `401`.
- **Idempotency / edge cases**: empty dataset → `200` with `[]`.

### `GET /trpc/users.findById` *(from surface.json — scaffold)*
- **Happy path**: authenticated request with a valid `id` → `200` with the matching user object.
- **Validation failures**: missing/malformed `id` → `4xx` validation error.
- **Auth failures**: unauthenticated → `401`.
- **Idempotency / edge cases**: unknown `id` → `404`.

### `POST /trpc/auth.signup` *(public)*
- **Happy path**: `{ email, password }` for a brand-new email → `200` with the created session/user; the **first-ever** signup is assigned role `ADMIN`, every subsequent signup is assigned role `USER`.
- **Validation failures**: missing email, missing password, malformed email, or duplicate email → `4xx` validation error; no user created for the duplicate.
- **Auth failures**: none — endpoint is public.
- **Idempotency / edge cases**: two signups with the same email — second returns a conflict `4xx`; role assignment logic must remain correct across concurrent first-signups (exactly one ADMIN).

### `POST /trpc/auth.login` *(public)*
- **Happy path**: correct `{ email, password }` → `200` with a valid session token/JWT.
- **Validation failures**: missing email or password → `4xx`.
- **Auth failures**: wrong password or unknown email → `401` with a generic "invalid credentials" message (no user-existence disclosure).
- **Idempotency / edge cases**: repeated successful logins issue independent valid sessions.

### `POST /trpc/auth.logout`
- **Happy path**: authenticated request → `200`; the prior session token is invalidated and can no longer be used.
- **Validation failures**: n/a.
- **Auth failures**: unauthenticated → `401`.
- **Idempotency / edge cases**: logging out an already-invalidated token → still resolves without error (idempotent).

### `GET /trpc/auth.me`
- **Happy path**: authenticated request → `200` with the current user's `{ id, email, role }` (no `passwordHash`).
- **Validation failures**: n/a.
- **Auth failures**: unauthenticated / expired token → `401` (with redirect-to-`/login` hint).
- **Idempotency / edge cases**: response never leaks `passwordHash` or other secrets.

### `GET /trpc/recipe.list`
- **Happy path**: authenticated → `200` with an array of the caller's recipes, each including `{ id, title, favorite }`; no `search` arg returns all of the caller's recipes.
- **Validation failures**: malformed `search` type (non-string) → `4xx`.
- **Auth failures**: unauthenticated → `401` + redirect hint.
- **Idempotency / edge cases**:
  - `search="pie"` → returns only recipes whose title **contains** "pie" **case-insensitively** (matches "Apple Pie" and "PIED").
  - `search` matching nothing → `200` with `[]` (drives the UI empty state).
  - Caller sees only their own recipes, never another user's.
  - With 500 recipes the response body is well-formed (ties to the NFR latency test).

### `GET /trpc/recipe.getById`
- **Happy path**: authenticated, existing `id` owned by the caller → `200` with full recipe `{ id, title, ingredients[], instructions, favorite }`.
- **Validation failures**: missing/malformed `id` → `4xx`.
- **Auth failures**: unauthenticated → `401`.
- **Idempotency / edge cases**: non-existent or previously deleted `id` → `404` with a "recipe not found" message.

### `POST /trpc/recipe.create`
- **Happy path**: `{ title, ingredients: [">=1 item"], instructions }` → `200` with the persisted recipe (`favorite` defaults to `false`, `ownerId` = caller); it subsequently appears in `recipe.list`.
- **Validation failures**:
  - Empty/absent `title` → `4xx`, not saved.
  - Empty/absent `instructions` → `4xx`, not saved.
  - `ingredients` empty `[]` or absent → `4xx` with a message specifically indicating **"at least one ingredient is required"**, not saved.
- **Auth failures**: unauthenticated → `401`.
- **Idempotency / edge cases**: whitespace-only `title`/`instructions` treated as empty → `4xx`; DB down → `503`.

### `POST /trpc/recipe.update`
- **Happy path**: `{ id, ...updatedFields }` for an owned recipe → `200` with the updated recipe reflecting the changes.
- **Validation failures**: same rules as `create` — clearing `title`, `instructions`, or `ingredients` to empty → `4xx`, no change persisted.
- **Auth failures**: unauthenticated → `401`; updating a recipe not owned by the caller → `403` or `404` (not another user's data).
- **Idempotency / edge cases**: updating a deleted/missing `id` → `404`; DB down → `503`.

### `POST /trpc/recipe.delete`
- **Happy path**: `{ id }` for an owned recipe → `200`; the recipe no longer appears in `recipe.list` and `recipe.getById` now returns `404`.
- **Validation failures**: missing/malformed `id` → `4xx`.
- **Auth failures**: unauthenticated → `401`; deleting a recipe not owned by the caller → `403`/`404`.
- **Idempotency / edge cases**: deleting an already-deleted `id` → `404`; DB down → `503`.

### `POST /trpc/recipe.toggleFavorite`
- **Happy path**: `{ id }` for an owned recipe with `favorite=false` → `200` with `favorite=true` persisted; calling again → `favorite=false`.
- **Validation failures**: missing/malformed `id` → `4xx`.
- **Auth failures**: unauthenticated → `401`.
- **Idempotency / edge cases**: the returned/persisted state must match; two sequential toggles return to the original state; missing `id` → `404`; DB down → `503`.

### `GET /trpc/admin.settings.list` *(admin role required)*
- **Happy path**: authenticated **admin** → `200` with a list of service keys (including the `postgresql` service key) with masked values and a configured/unconfigured status.
- **Validation failures**: n/a.
- **Auth failures**: unauthenticated → `401`; authenticated **non-admin (USER)** → `403`.
- **Idempotency / edge cases**: secret values are masked, never returned in cleartext.

### `POST /trpc/admin.settings.update` *(admin role required)*
- **Happy path**: authenticated **admin** with `{ key, value }` (or a batch) → `200`; the upserted value is persisted (verifiable via a subsequent `admin.settings.list` showing "configured").
- **Validation failures**: missing `key` → `4xx`.
- **Auth failures**: unauthenticated → `401`; authenticated non-admin → `403`.
- **Idempotency / edge cases**: updating an existing key upserts (no duplicate rows); DB down → `503`.

## UI / journey tests

### Journey: RecipeRack branding on every page
- **Steps**: Log in; visit `/`, a recipe detail page, `/recipes/new`.
- **Expected outcomes**: The app header shows the text "RecipeRack" on every page; the Angular root component still exposes `data-testid="app-ready"`.
- **Negative path**: n/a (branding is unconditional for logged-in users).

### Journey: Browse recipe card grid
- **Steps**: Log in as a user who has ≥1 recipe; navigate to `/` (home).
- **Expected outcomes**: Recipes render as cards in a responsive grid; each card shows the recipe title and a favorite indicator; a loading state is shown while `recipe.list` is in flight.
- **Negative path**: User with no recipes → empty-state message, no cards.

### Journey: Add a recipe (happy path)
- **Steps**: Go to `/recipes/new`; enter a title; add ≥1 ingredient row; enter instructions; submit.
- **Expected outcomes**: `recipe.create` succeeds; the user is returned to the grid (or detail) and the new recipe card appears immediately without a full reload.
- **Negative path**: covered by the two validation journeys below.

### Journey: Add a recipe — missing required fields
- **Steps**: On `/recipes/new`, submit with an empty title (repeat for empty instructions).
- **Expected outcomes**: Inline validation error is shown next to the offending field; no recipe is created; grid unchanged.
- **Negative path**: This *is* the negative path — assert nothing is persisted.

### Journey: Add a recipe — empty ingredients list
- **Steps**: On `/recipes/new`, fill title + instructions but remove all ingredient rows (0 ingredients); submit.
- **Expected outcomes**: A validation error is shown stating **at least one ingredient is required**; no recipe is created.
- **Negative path**: Adding one valid ingredient clears the error and allows submission.

### Journey: View recipe detail
- **Steps**: On `/`, click a recipe card.
- **Expected outcomes**: Navigate to `/recipes/:id`; the detail view shows the title, the full ingredients list, and instructions.
- **Negative path**: Navigating directly to `/recipes/:id` for a missing/deleted id → 404 not-found message.

### Journey: Edit a recipe
- **Steps**: From a recipe detail page, open edit (`/recipes/:id/edit`), change the title and an ingredient, submit.
- **Expected outcomes**: `recipe.update` succeeds; the detail view and the grid card both reflect the updated title.
- **Negative path**: Clearing a required field surfaces the same validation errors as the add form; no change persisted.

### Journey: Delete a recipe
- **Steps**: On a recipe detail page, click delete; confirm in the confirmation step.
- **Expected outcomes**: `recipe.delete` succeeds; user returns to the grid; the deleted recipe no longer appears; navigating back to its URL → 404.
- **Negative path**: Dismissing the confirmation dialog cancels; the recipe remains.

### Journey: Search recipes by title (case-insensitive)
- **Steps**: On `/` with recipes "Apple Pie" and "Banana Bread", type "pie" in the search field.
- **Expected outcomes**: Only "Apple Pie" remains in the grid; matching is case-insensitive (typing "PIE" or "apple" behaves the same for the relevant match).
- **Negative path**: Clearing the field restores the full grid.

### Journey: Search returns no results
- **Steps**: On `/`, search for a string that matches no recipe title (e.g. "zzzzz").
- **Expected outcomes**: An empty-state message is displayed and no cards are shown.
- **Negative path**: Correcting the query to a matching term re-populates the grid.

### Journey: Toggle favorite from a card
- **Steps**: On `/`, click the favorite toggle on a card currently not favorited.
- **Expected outcomes**: The indicator flips immediately (optimistic update); the state is persisted via `recipe.toggleFavorite` and survives a page reload.
- **Negative path**: If the toggle request fails, the optimistic change is rolled back and the prior state is restored.

### Journey: Authentication & authorization gating
- **Steps**:
  1. While logged out, attempt to open `/`, `/recipes/new`, `/recipes/:id`, and call a protected procedure.
  2. Log in as a non-admin USER and attempt to open `/admin/settings` (or call `admin.settings.*`).
- **Expected outcomes**:
  1. Each protected page/API returns `401` and the browser is redirected to `/login`.
  2. The admin resource returns `403 Forbidden`; the admin nav section is not shown to non-admins.
- **Negative path**: A valid admin can reach `/admin/settings` successfully.

### Journey: Database-unavailable error handling
- **Steps**: With PostgreSQL made unavailable, attempt to load the grid, and to create/update/delete a recipe.
- **Expected outcomes**: Each action surfaces a `503 Service Unavailable` mapped to a user-friendly error message in the UI (not a raw stack trace or blank screen).
- **Negative path**: Once the DB is restored, the same actions succeed normally.

## Data integrity tests
- After `recipe.create`: exactly one new `Recipe` row exists, owned by the caller (`ownerId`), with `favorite=false` by default and `ingredients.length >= 1`.
- A `Recipe` can never be persisted with an empty `title`, empty `instructions`, or zero ingredients (enforced at the DB/schema level, not only the form).
- After `recipe.update`: the row's `updatedAt` advances and no duplicate row is created; `ownerId` is unchanged.
- After `recipe.delete`: the row is removed (or tombstoned) and is absent from all `recipe.list` results and `recipe.getById` (→ 404).
- After `recipe.toggleFavorite`: the persisted `favorite` boolean equals the value returned by the call; two toggles return to the original value.
- `auth.signup`: `email` is unique; the very first user has role `ADMIN` and all later users have role `USER`; `passwordHash` is stored (never the plaintext password) and never returned by any read procedure.
- `admin.settings.update`: upserts `SystemSetting` by `key` (primary key) with no duplicate rows; `updatedAt` advances.
- Cross-user isolation: no procedure returns or mutates a `Recipe` whose `ownerId` differs from the authenticated caller.

## Out of scope
- **Non-functional latency (300ms p95 / 500 recipes)**: captured as a separate performance/load test rather than a functional assertion; listed here because it is measured by tooling, not by the functional suite. The functional suite only asserts correctness of the 500-recipe grid response, not its timing.
- **Ingredient structure** (quantity/unit fields): the spec only requires "at least one ingredient"; ingredients are treated as a plain ordered string list per the task decomposition's open question. Structured-ingredient behavior is not under test.
- **Recipe sharing/visibility across users**: the spec is silent on whether recipes are shared; per-user ownership is assumed and cross-user isolation is tested, but any multi-user sharing feature is out of scope.
- **`admin.settings` credential activation for `postgresql`**: `postgresql` is the core provisioned database, not a placeholder integration, so the settings page may expose no actionable credential fields; only presence/masking/role-gating is tested, not credential-driven service activation.
- **Password-reset, email verification, and session-expiry timing**: not described in the spec; not under test.
- **`/health` schema specifics** beyond returning `200` and staying green during a DB outage.

Wrote .pipeline/test_spec.md (71 cases across 17 endpoints / 13 journeys).
