#!/bin/sh
# OPIC 官网发布脚本：在目标机上构建并用 rsync 发布到站点根
# 用法：SITE_ROOT=/srv/opic-website ./deploy/build-publish.sh [remote-user@host]
set -eu

HUGO="$(command -v hugo || echo /usr/local/bin/hugo)"
SITE_ROOT="${SITE_ROOT:-/srv/opic-website}"
REMOTE="${1:-}"

echo "[1/2] hugo build ..."
"$HUGO" --quiet

if [ -n "$REMOTE" ]; then
  echo "[2/2] rsync public/ -> ${REMOTE}:${SITE_ROOT}/ ..."
  rsync -az --delete public/ "${REMOTE}:${SITE_ROOT}/public/"
else
  # 本机直接发布
  echo "[2/2] copy public/ -> ${SITE_ROOT}/ ..."
  mkdir -p "$SITE_ROOT"
  rsync -az --delete public/ "$SITE_ROOT/public/"
fi
echo "发布完成"
