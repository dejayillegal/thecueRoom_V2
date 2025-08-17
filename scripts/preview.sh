#!/usr/bin/env bash
set -euo pipefail
PORT="${PORT:-4173}"
echo "Previewing dist on http://localhost:$PORT"
npx vite preview --port "$PORT" --host
