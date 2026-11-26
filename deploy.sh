#!/bin/sh
# 构建并输出体积
set -eu
hugo
echo "---"
du -sh public
find public -name "index.html" | wc -l
