# syntax=docker/dockerfile:1
# Full-stack combined container: nginx (static index.html + /api proxy) + NestJS backend
# under supervisord. Required because HAS_BACKEND=true.

# ---- Backend builder ----------------------------------------------------------
FROM node:20-alpine AS backend-builder
WORKDIR /app/backend
COPY backend/package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm install --legacy-peer-deps --no-audit --no-fund
COPY backend/ ./
RUN npx prisma generate
RUN npm run build \
    && test -n "$(find /app/backend/dist -name main.js | head -1)" \
    || (echo 'ERROR: no main.js in dist — check tsconfig rootDir' && exit 1)

# ---- Runtime -----------------------------------------------------------------
FROM node:20-alpine

# Install nginx + supervisord
RUN apk add --no-cache nginx supervisor bash

# Backend runtime files
WORKDIR /app/backend
COPY backend/package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm install --omit=dev --legacy-peer-deps --no-audit --no-fund
COPY --from=backend-builder /app/backend/dist ./dist
COPY --from=backend-builder /app/backend/prisma ./prisma
# Prisma 7 `prisma-client` generator emits to src/generated/prisma (no node_modules/.prisma).
COPY --from=backend-builder /app/backend/src/generated ./src/generated
COPY backend/prisma.config.ts ./prisma.config.ts

# Static frontend (repo-root index.html placeholder)
RUN mkdir -p /usr/share/nginx/html
COPY index.html /usr/share/nginx/html/index.html

# nginx & supervisord configs
COPY nginx.conf /etc/nginx/http.d/default.conf
COPY supervisord.conf /etc/supervisord.conf

EXPOSE 8080
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
