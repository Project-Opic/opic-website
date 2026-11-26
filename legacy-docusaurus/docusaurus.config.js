// 框架参考：Project-HAMi/website（Docusaurus 3，https://github.com/Project-HAMi/website）
const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;
const siteUrl = (process.env.DOCUSAURUS_SITE_URL || "https://opic.example.com").replace(/\/$/, "");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OPIC 开放智能算力平台",
  tagline: "本体论驱动的智算与 MaaS 一体化平台 · 23 个能力域 · 需求基线机器可校验",
  url: siteUrl,
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "opic-ontology",
  projectName: "opic-website",
  i18n: { defaultLocale: "zh-Hans", locales: ["zh-Hans"] },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: { sidebarPath: require.resolve("./sidebars.js"), showLastUpdateAuthor: false, showLastUpdateTime: false },
        blog: { showReadingTime: true, blogTitle: "OPIC 动态", blogDescription: "版本发布 · 技术评估 · 治理报告" },
        theme: { customCss: require.resolve("./src/css/custom.css") },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { defaultMode: "light", disableSwitch: false },
      navbar: {
        title: "OPIC",
        items: [
          { type: "docSidebar", sidebarId: "docs", position: "left", label: "文档" },
          { to: "/blog", label: "动态", position: "left" },
          { href: "https://github.com/sharptoolbox", label: "GitHub", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} OPIC 开放智能算力平台 · 需求基线 v3.2 定稿`,
      },
      prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
    }),
};
module.exports = config;
