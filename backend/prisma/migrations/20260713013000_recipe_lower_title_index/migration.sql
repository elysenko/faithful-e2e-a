-- Replace the plain title index with a case-insensitive functional index that
-- backs the `ILIKE '%q%'` title search (lower(title)).
--
-- NOTE: Prisma Migrate applies each migration inside a transaction, and
-- `CREATE INDEX CONCURRENTLY` is illegal inside a transaction block — using it
-- here would crash `prisma migrate deploy`. A plain `CREATE INDEX` is used
-- instead; on a fresh/small table this is equivalent and keeps deploys safe.

-- DropIndex
DROP INDEX IF EXISTS "Recipe_title_idx";

-- CreateIndex (functional, case-insensitive)
CREATE INDEX IF NOT EXISTS "Recipe_lower_title_idx" ON "Recipe" (lower("title"));
