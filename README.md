# OPIC 官网（Hugo + OINK）

OPIC 开放智能算力平台官网与文档，基于 [OINK](https://github.com/pgsty/oink)（Hugo 主题）构建。

## 技术栈

- **Hugo** ≥ 0.169（推荐 0.170.x，与 OINK CI 一致）—— 构建仅需一个二进制
- **OINK 主题**：`themes/oink/`（vendor 自 pgsty/oink，Apache-2.0）
- **零 Node 依赖**：无 npm / Vite / PostCSS / CDN
- 内置：离线 BM25 中文搜索、多语言、Markdown、图表、公式、`llms.txt`

## 目录

| 路径 | 说明 |
|---|---|
| `content/` | 网站内容（Hugo Markdown） |
| `content/_index.md` | 首页（数据驱动，见 `data/home/zh.yaml`） |
| `content/docs/` | 文档（18 页，含 techbase / deploy 子域） |
| `content/blog/` | 动态 |
| `data/home/zh.yaml` | 首页区块数据 |
| `themes/oink/` | OINK 主题（vendor 完整副本） |
| `legacy-docusaurus/` | 旧 Docusaurus 3 源码归档（内容已迁移） |
| `public/` | 构建产物（gitignore） |

## 本地预览

```bash
hugo server -D     # http://localhost:1313
```

## 构建

```bash
hugo               # 输出到 public/
deploy.sh          # 构建 + 统计
```

## 多语言 (zh / en)

- 中文（默认）：`content/docs/**`；英文：`content/en/docs/**`
- 语言切换由 OINK 自动完成（`hreflang` alternate + 导航切换器），仅展示**已翻译**的页面
- 首页数据：`data/home/zh.yaml` 与 `data/home/en.yaml` 各管一版
- 已译核心页：intro / architecture / ontology-method / roadmap（en 侧其余页面持续补齐）

## 内容维护

- 文档放在 `content/docs/**`，用 `weight` 控制顺序（迁移自 Docusaurus 的 `sidebar_position`）。
- 新增文档：`hugo new docs/xxx.md`，写 `title` / `weight` frontmatter。
- 首页：编辑 `data/home/zh.yaml`，`sections` 顺序 = 出现顺序。

## 迁移说明（2026-11-26）

本站原为 Docusaurus 3（`legacy-docusaurus/`），已完整迁移：

- 17 篇文档 + 首页 + 1 篇博客全部迁入 `content/`，顺序保留；
- 主题/导航/搜索切换到 OINK；
- 旧 Docusaurus 源码保留在 `legacy-docusaurus/` 供追溯，不再参与构建。

详见 `docs/` 或提交历史。
