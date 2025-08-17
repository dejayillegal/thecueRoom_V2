#!/usr/bin/env bash
set -euo pipefail
PORT="${PORT:-5173}"
echo "Starting dev server on port $PORT"
npm run dev -- --port "$PORT"
