# opic-website

> English: [README.md](README.md)

[![License](https://img.shields.io/badge/License-MulanPSL--2.0-2E7D32)](LICENSE)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.7-3ECC5F?logo=docusaurus&logoColor=white)](package.json)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](package.json)
[![Node](https://img.shields.io/badge/Node-%E2%89%A520-339933?logo=node.js&logoColor=white)](package.json)

[文档](#文档) | [架构](#架构) | [使用](#使用) | [部署](#部署) | [路线图](#路线图) | [许可证](#许可证)

**opic-website 是 OPIC 开放智能算力平台的官网**：基于 Docusaurus 3 构建，发布平台简介、总体架构、23 个能力域、本体论工程方法、安全与合规、计量与运营方法论、业界对标、技术选型评估与实施路线图。

官网侧关注的是评估者与合作伙伴的反复之问：OPIC 到底是什么、怎么建的？每一页都落到冻结的事实来源——OPIC 需求基线 v3.2 定稿交付件（`opic-design` 仓库的 `review/` 与各中心 `spec/`），口径与《110-版本冻结基线》一致；本文不引入基线之外的新承诺。

本仓库包含 Docusaurus 站点（classic preset）、文档树、博客与首页。

## 文档

| 文档 | 内容 |
|---|---|
| [平台简介](docs/intro.md) | 一页看懂 OPIC |
| [总体架构](docs/architecture.md) | 平台级架构视图 |
| [23 个能力域](docs/domains.md) | 能力域全景图 |
| [本体论工程方法](docs/ontology-method.md) | 核心差异化：本体驱动开发 |
| [安全与合规](docs/security.md) | 安全与合规姿态 |
| [计量与运营方法论](docs/cost.md) | 计量与运营方法论 |
| [业界对标](docs/benchmark.md) | 业界对标（2026-09 刷新口径） |
| [技术选型评估](docs/tech-selection.md) | 技术选型评估：Temporal 与 NATS |
| [实施路线图](docs/roadmap.md) | 实施路线图 |
| [部署系列](docs/deploy/prod-deployment-plan.md) | 生产部署方案、第一步容器化部署、第一步运维手册 |
| [技术底座系列](docs/techbase/onboarding.md) | 技术底座的入门、部署、运维、离线介质与 FAQ |

## 架构

opic-website 是由 Docusaurus 3 生成的静态站点：

- **Docusaurus core + classic preset**（`@docusaurus/core` / `@docusaurus/preset-classic` 3.7）—— docs / blog / pages 插件与 classic 主题；`prism-react-renderer` 负责语法高亮。
- **`docs/`** —— 文档树：九个平台页面 + `deploy/` 系列 + `techbase/` 系列（各带 `_category_.json` 决定侧栏顺序）。
- **`blog/`** —— 版本发布与技术评估。
- **`src/pages/index.js`** —— 首页：特性卡片 + 平台统计。
- **`static/`** —— 原样服务的静态资源。

构建路径：`docs/` 与 `blog/` 下的 Markdown / MDX → Docusaurus build → `build/` 静态产物 → 任意静态托管或平台自有入口。

工程实践参考 [Project-HAMi/website](https://github.com/Project-HAMi/website)：node ≥ 20、classic preset、i18n 目录约定、markdownlint / prettier 工程化。

### 核心能力

| 能力 | 说明 |
|---|---|
| **平台文档** | 九个平台页面：简介 / 架构 / 能力域 / 本体方法 / 安全 / 计量 / 对标 / 选型 / 路线图 |
| **部署系列** | 生产部署方案 + 第一步容器化部署 + 第一步运维手册，镜像自 `opic-deploy` |
| **技术底座系列** | 技术底座的入门 / 部署 / 运维 / 离线介质 / FAQ，镜像自 `opic-techbase` |
| **博客** | 版本发布与技术评估；首发公告记录 2026-09-28 官网上线与 v3.2 基线定稿 |
| **首页** | 特性卡片 + 平台统计（`src/pages/index.js`） |
| **i18n 就绪** | 目录约定已预留（`defaultLocale` + `i18n/<locale>/`）；首发仅 `zh-Hans`，英文按需启用 |

## 与其他工具的关系

opic-website 是**发布面**，不是事实来源：只转载冻结基线，不产出新承诺。

| 层次 | 相关工具 | 关系 |
|---|---|---|
| 事实来源 | `opic-design` 仓库（需求基线 v3.2） | 全部内容取自 `review/` 与各中心 `spec/`；《110-版本冻结基线》为口径锚点 |
| 文档来源 | [opic-techbase](https://github.com/Project-Opic/opic-techbase)、[opic-deploy](https://github.com/Project-Opic/opic-deploy) | `techbase/` 与 `deploy/` 文档系列镜像自上述仓库 |
| 框架 | [Docusaurus](https://github.com/facebook/docusaurus)（MIT） | 站点框架；React 18 + classic preset |
| 工程参考 | [Project-HAMi/website](https://github.com/Project-HAMi/website) | 工程约定：node ≥ 20、classic preset、i18n 布局、markdownlint / prettier |

## 仓库结构

| 组件 | 路径 | 说明 |
|---|---|---|
| **站点配置** | [`docusaurus.config.js`](docusaurus.config.js)、[`sidebars.js`](sidebars.js) | 站点配置与侧栏结构 |
| **文档** | [`docs/`](docs) | 九个平台页面 + `deploy/` 与 `techbase/` 系列 |
| **博客** | [`blog/`](blog) | 版本发布与技术评估 |
| **首页** | [`src/pages/`](src/pages) | 首页（特性卡片 + 平台统计） |
| **静态资源** | [`static/`](static) | 原样服务的资源 |
| **i18n（预留）** | `i18n/<locale>/` | 翻译目录约定；按需启用 |

## 基础软件依赖

版本锁定在 `package.json`。

| 组件 | 版本 | 上游仓库 |
|---|---|---|
| Node.js | ≥ 20 | <https://github.com/nodejs/node> |
| `@docusaurus/core` | ^3.7.0 | <https://github.com/facebook/docusaurus> |
| `@docusaurus/preset-classic` | ^3.7.0 | <https://github.com/facebook/docusaurus> |
| `prism-react-renderer` | ^2.4.0 | <https://github.com/PrismJS/prism> |
| `react` / `react-dom` | ^18.3.1 | <https://github.com/facebook/react> |

以上第三方组件均使用宽松许可证（MIT），具体条款以上游仓库为准。

## 使用

### 本地开发

前置：Node.js 20 及以上。

```bash
npm install
npm start          # 开发服务 http://localhost:3000
npm run build      # 产物在 build/
npm run serve      # 本地预览构建产物
```

### 内容结构

- `docs/`：平台简介 / 总体架构 / 23 能力域 / 本体论方法 / 安全合规 / 计量与运营方法论 / 业界对标 / 技术选型 / 路线图
- `blog/`：版本发布与技术评估（首发公告：需求基线 v3.2 定稿）
- `src/pages/index.js`：首页（特性卡片 + 平台统计）

### 内容事实来源

全部内容取自 OPIC 需求基线 v3.2 定稿交付件（`opic-design` 仓库 `review/` 与各中心 `spec/`），口径与《110-版本冻结基线》一致；本文不引入基线之外的新承诺。

### 多语言

框架已预留 i18n 目录约定（参考 HAMi：`defaultLocale` + `i18n/<locale>/`）；首发仅启用 `zh-Hans`，英文按需启用。

## 部署

站点构建为静态产物，可交给任意静态托管：

```bash
npm ci
npm run build      # → build/
```

将 `build/` 置于平台入口之后，或发布到任意静态托管即可。平台自身的生产拓扑见[生产部署方案](docs/deploy/prod-deployment-plan.md)。

## 贡献

提交前请确认：

1. `npm run build` 通过且无死链；
2. 新增页面均可追溯到冻结事实来源（v3.2 基线或具名仓库文档），不引入基线之外的新承诺；
3. 新文档声明 `sidebar_position`；`deploy/` 与 `techbase/` 系列保持与来源仓库一致的镜像结构；
4. Markdown 通过 markdownlint / prettier 检查。

分支与提交信息沿用 `feat|fix|docs|chore(scope): 说明` 格式。

提交贡献即表示同意以[木兰宽松许可证第 2 版](LICENSE)授权该贡献。

## 路线图

本仓库不维护长期功能路线图，计划与进展以下列方式公开：

- **已完成**（近期）：首发（2026-09-28）——九个平台页面、部署与技术底座文档系列、首页。
- **待办**（已知缺口）：英文语言包已预留未启用；对标页刷新跟随基线刷新节奏。
- **限制**：本站只转载冻结基线——事实来源本身在 `opic-design` 仓库与各中心规格；本站不是权威出处。

## 社区

- **问题与建议**：通过仓库 Issue 反馈，请附页面与所涉事实来源。
- **内部沟通**：OPIC 平台团队。

## 安全与支持

- **报告漏洞**：请勿公开提交 Issue，直接联系平台团队。
- **支持范围**：当前主分支与已发布站点。

## 许可证

Copyright © 2026 wjluo

本项目采用**木兰宽松许可证第 2 版（Mulan PSL v2）**，全文见 [`LICENSE`](LICENSE)，也可从 <http://license.coscl.org.cn/MulanPSL2> 获取。

在遵守许可证条款的前提下，你可以自由复制、使用、修改和分发本软件，包括商业使用；分发时需保留版权与许可声明。许可证第 3 条明确不授予商标许可，第 5 条按「现状」提供软件、不附带任何明示或默示担保。

### 第三方组件

以上第三方组件（Docusaurus、React、prism-react-renderer）均使用宽松许可证（MIT），具体条款以上游仓库为准。
