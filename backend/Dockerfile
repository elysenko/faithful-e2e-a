FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
# Generate the Prisma client (output: src/generated/prisma) BEFORE compiling —
# prisma.service.ts imports it, so the build fails without this step.
RUN npx prisma generate
RUN pnpm build \
    && test -f /app/dist/main.js \
    || (echo 'ERROR: dist/main.js missing after build' && exit 1)

FROM node:22-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
# prisma.config.ts supplies the datasource url (from DATABASE_URL) to the
# Prisma CLI so `migrate deploy` can run at startup.
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts
COPY package*.json ./
EXPOSE 3000
# Run pending migrations (idempotent) before starting the API. A failed
# migration exits non-zero so K8s will not route traffic to a broken pod.
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]
