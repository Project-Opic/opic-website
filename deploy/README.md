# OPIC 官网部署

静态站（Hugo + OINK），`public/` 即产物。部署任选其一。

## 方案 A：任意静态服务器 / CDN

```bash
hugo                 # 产出 public/
# 把 public/ 上传到 Nginx / OSS / Pages / S3 ...
```

## 方案 B：rsync 到服务器（推荐）

```bash
# 服务器预装 caddy + hugo
bash deploy/build-publish.sh root@server.example.com
```

前置：目标机 `SITE_ROOT=/srv/opic-website`，把 `deploy/Caddyfile` 装到 Caddy。

## 方案 C：Caddy 容器

```bash
docker run -d --name opic-site -v /srv/opic-website/public:/srv/opic-website/public:ro \
  -v ./deploy/Caddyfile:/etc/caddy/Caddyfile:ro \
  -p 80:80 -p 443:443 caddy:2
```

`deploy/Caddyfile` 内置：zstd/gzip、TLS(自动)、CSP 默认从严/docs 放宽、
搜索索引 no-store、静态资源 7 天长缓存、访问日志。

## 刷新节奏

- 手动：`bash deploy/build-publish.sh`
- 定时：可选 systemd timer（见 `deploy/opic-site-refresh.{service,timer}`，5 分钟拉 git 重建）
