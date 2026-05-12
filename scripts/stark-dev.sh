#!/usr/bin/env bash
# Stabiele lokale dev: oude Next op dezelfde poort stoppen, ulimit, polling-watchers.
# Standaard: klassieke webpack (`next.config.mjs` zet dev-cache uit).
# Turbopack (experimenteel): NEXT_USE_TURBOPACK=1 npm run dev:turbo
set -euo pipefail
PORT="${PORT:-3456}"
cd "$(dirname "$0")/.."

ulimit -n 10240 2>/dev/null || true

if command -v lsof >/dev/null 2>&1; then
  lsof -tiTCP:"$PORT" -sTCP:LISTEN 2>/dev/null | xargs kill -9 2>/dev/null || true
fi

export CHOKIDAR_USEPOLLING="${CHOKIDAR_USEPOLLING:-1}"
export WATCHPACK_POLLING="${WATCHPACK_POLLING:-true}"

if [ "${NEXT_USE_TURBOPACK:-0}" = "1" ]; then
  exec npx next dev --turbo -p "$PORT"
else
  exec npx next dev -p "$PORT"
fi
