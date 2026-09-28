# opic-website · OPIC 开放智能算力平台官网

基于 **Docusaurus 3** 构建（框架参考 [Project-HAMi/website](https://github.com/Project-HAMi/website) 的工程实践：node ≥20、classic preset、i18n 目录约定、markdownlint/prettier 工程化）。

## 本地开发

```bash
npm install
npm start          # 开发服务 http://localhost:3000
npm run build      # 产物在 build/
npm run serve      # 本地预览构建产物
```

## 内容结构

- `docs/`：平台简介 / 总体架构 / 23 能力域 / 本体论方法 / 安全合规 / 计量与运营方法论 / 业界对标 / 技术选型 / 路线图
- `blog/`：版本发布与技术评估（首发公告：需求基线 v3.2 定稿）
- `src/pages/index.js`：首页（特性卡片 + 平台统计）

## 内容事实来源

全部内容取自 OPIC 需求基线 v3.2 定稿交付件（`opic-design` 仓库 review/ 与各中心 spec/），口径与《110-版本冻结基线》一致；本文不引入基线之外的新承诺。

## 多语言

框架已预留 i18n 目录约定（参考 HAMi：defaultLocale + `i18n/<locale>/`）；首发仅启用 `zh-Hans`，英文按需启用。
