// Prisma 7 configuration file.
//
// DATABASE_URL is injected via environment variable at runtime (K8s secret /
// Docker ENV). dotenv is intentionally absent — it is not installed in
// backend/package.json and is not needed in Docker or K8s contexts.
//
// datasource.url is read from process.env.DATABASE_URL. This value is used
// ONLY by the Prisma CLI (migrate deploy / migrate status / migrate dev),
// which run at container startup and in CI. The runtime PrismaClient still
// connects via the @prisma/adapter-pg driver adapter (see prisma.service.ts),
// so this does not change how the application connects at request time.
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
