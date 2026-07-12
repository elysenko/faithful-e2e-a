# RecipeRack — Architecture

## Requested stack
- `enterprise` — Angular 19 + NestJS + tRPC + Prisma + PostgreSQL

## Scaffold status
- **enterprise** — ✅ newly scaffolded from `template-enterprise` (no prior app source existed)

## Layout
- `frontend/` — Angular 19 SPA (standalone components, signals). Root component carries
  `data-testid="app-ready"`. Home component at `frontend/src/app/home/`.
- `backend/` — NestJS API. tRPC routers under `src/`, Prisma under `backend/prisma/`,
  health check at `GET /health`.
- `.pipeline/surface.json` — generated surface manifest (routes, components, test ids).
- `.colossus-acceptance.json` — post-deploy render gate contract.
- `colossus.yaml` — build manifest for deploy agents.
- `docker-compose.yml` — local Postgres + services (from template).

## Domain (from plan)
RecipeRack: authenticated recipe CRUD — card grid, detail view, add/edit/delete,
title search (case-insensitive), favorite toggle. Auth: full_auth (JWT), role `user`.
Deployment dependency: PostgreSQL.

## Next steps for the developer
1. `cp backend/.env.template backend/.env` (if/when a template is added) and set `DATABASE_URL`.
2. Install deps: `cd frontend && npm install` and `cd backend && npm install`.
3. Start local infra: `docker-compose up -d` (PostgreSQL).
4. Apply schema: `cd backend && npx prisma migrate dev`.
5. Build the Recipe model/routes/components on top of the scaffolded template.

## Template source
- `/app/scaffold-templates/template-enterprise`
