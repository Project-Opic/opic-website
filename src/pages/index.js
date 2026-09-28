import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const stats = [
  ["23", "能力域（本体论域层）"],
  ["927", "项机器校验 · 零失败"],
  ["20/20", "业界必备能力达标"],
  ["88", "条评审发现全链闭环"],
];

const features = [
  ["🧩 本体论需求工程", "23 个能力域的需求是机器可校验的语义体系：927 项自动审核、130 条跨域引用零断链、SHA-256 冻结清单——验收不靠文档承诺，靠闸门记录。"],
  ["🔌 第 3 层可整体替换", "K8s、Kueue/Volcano、vLLM/SGLang、ZITADEL、Pigsty、Temporal、NATS 全部隔离在开源依赖层（C1 铁律：正文只写语义、不绑产品名），替换引擎不触发需求变更。"],
  ["🛡️ 安全与合规内建", "零信任授权判定、凭据谱系八位置、生成内容标识三要素（GB 45438-2025）、上线前置闸门、机密计算部署档与 HYOK 归属声明。"],
  ["🧠 智算 + MaaS 一体", "从物理算力入网、gang 调度、算力切分到 OpenAI 兼容接口、批量推理、prompt registry、评测服务与模型退役承诺——全链路一个语义层。"],
  ["💰 计量诚实、成本可答", "账本只增不改、计价时点固化、缓存分列让利显式、账单可复现；TCO/分摊/ROI 方法论与平台原语分离（事实在本域、方法在外部）。"],
  ["🚦 治理可回放", "版本链 v1.1→v3.2 全程变更单驱动；四轮全域评审 88 条发现全链闭环；任何历史时点的口径可重放。"],
];

function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="首页" description={siteConfig.tagline}>
      <header className="hero hero--primary">
        <div className="container" style={{ textAlign: "center", padding: "3.5rem 0" }}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="stat-grid">
            {stats.map(([n, l]) => (
              <div className="stat-box" key={l}><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Link className="button button--secondary button--lg" to="/docs/intro" style={{ marginRight: "1rem" }}>平台简介</Link>
            <Link className="button button--outline button--lg" to="/blog" style={{ color: "#fff" }}>首发动态</Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container" style={{ padding: "2.5rem 0" }}>
          <div className="row">
            {features.map(([t, d]) => (
              <div className="col col--4" key={t} style={{ marginBottom: "1rem" }}>
                <div className="feature-card"><h3>{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
export default Home;
