# Architecture

## Scaffolded Platforms

| Platform | Status | Location |
|----------|--------|----------|
| backend  | ✅ newly scaffolded | `backend/` |
| web      | ✅ newly scaffolded | `web/` |

## Template Sources

- `backend/` — copied from `template-backend/` (NestJS + Prisma)
- `web/` — copied from `template-web/` (NestJS backend + Angular frontend)

> **Note:** The plan targets a React/Vite frontend (not Angular). The coder agent should replace `web/frontend/` with a Vite/React app and adjust `colossus.yaml` accordingly. The `template-web` fingerprint (next.config.ts) was not found; files were still copied successfully.

## Directory Layout

```
.
├── backend/          # NestJS API (template-backend)
│   ├── src/          # App source: auth, user, health modules
│   ├── prisma/       # Prisma schema + migrations
│   └── nest-cli.json
├── web/              # Web platform (template-web)
│   ├── frontend/     # Angular SPA (to be replaced with React/Vite per plan)
│   └── backend/      # NestJS backend scaffold
├── k8s/              # Kubernetes manifests
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
├── Dockerfile        # nginx placeholder — replace with multi-stage build
└── colossus.yaml     # Build manifest for deploy agents
```

## Next Steps

1. **Edit `backend/.env`** — create manually (no `.env.template` in template-backend); set `DATABASE_URL`, `JWT_SECRET`, etc.
2. **Replace `web/frontend/`** with React/Vite source per the plan; update `vite.config.ts` with `base: '/faithful-e2e-a/'`.
3. **Run `docker-compose up`** in `backend/` once environment variables are set to start PostgreSQL locally.
4. **Run `npx prisma migrate dev`** inside `backend/` to apply the initial schema migration.
5. **Update `Dockerfile`** to multi-stage: build React FE → build NestJS → serve both on port 80.
6. **Update `k8s/deployment.yaml`** to add `DATABASE_URL`/`JWT_SECRET` from secrets and liveness/readiness probes on `/api/health`.
7. **Add `k8s/postgres.yaml`** for in-cluster PostgreSQL (Deployment + Service + PVC) in namespace `colossus-faithful-e2e-a`.
