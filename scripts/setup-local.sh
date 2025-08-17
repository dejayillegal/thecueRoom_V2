#!/usr/bin/env bash
set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/dejayillegal/thecueRoom_V2.git}"
DEST_DIR="${1:-thecueRoom_V2}"

echo "[1/5] Cloning $REPO_URL -> $DEST_DIR"
git clone --depth=1 "$REPO_URL" "$DEST_DIR"

cd "$DEST_DIR"

echo "[2/5] Installing deps"
if command -v npm >/dev/null 2>&1; then
  npm ci || npm i
else
  echo "npm is required"; exit 1
fi

echo "[3/5] Preparing env"
[ -f .env ] || cp -n .env.example .env 2>/dev/null || true

echo "[4/5] Building"
npm run build

echo "[5/5] Done. Start dev server with: ./scripts/dev.sh"
