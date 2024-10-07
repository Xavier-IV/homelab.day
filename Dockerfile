FROM imbios/bun-node:20-slim AS deps
ARG DEBIAN_FRONTEND=noninteractive

# Refresh GPG keys and fix invalid signature issues
RUN apt-get -y update && \
  apt-get install -y --no-install-recommends gnupg && \
  apt-key update

RUN apt-get -y update && \
  apt-get install -yq openssl git ca-certificates tzdata && \
  ln -fs /usr/share/zoneinfo/Europe/Berlin /etc/localtime && \
  dpkg-reconfigure -f noninteractive tzdata
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Build the app
FROM deps AS builder
WORKDIR /app
COPY . .

RUN bun run build && ls -la .next

# Production image, copy all the files and run next
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

# COPY --from=builder  /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static

# Copy the standalone output
COPY --from=builder /app/.next/standalone ./

# Manually copy the static and public files
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public



EXPOSE 3100

ENV PORT=3100
ENV HOST=0.0.0.0

CMD ["node", "server.js"]
