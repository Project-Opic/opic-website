---
sidebar_position: 2
title: 总体架构
---

# 总体架构

## 三层架构

| 层 | 内容 | 关键约束 |
|---|---|---|
| 第 1 层 · 用户层 | 平台运营方 / 租户 / 开发者 / 终端用户 | 共用同一套身份与授权语义 |
| 第 2 层 · 能力层（本体论域层） | 23 个域 + 统一底座 | 唯一语义权威；域间契约双向闭合 |
| 第 3 层 · 开源依赖层 | K8s/DRA、Kueue/Volcano、vLLM/SGLang、ZITADEL/Casdoor、Pigsty、Temporal、NATS 等 | 可整体替换；替换不溯本体 |

## MCC：多独立能力中心

- 每个能力中心**独立编译、独立部署、独立演进**；
- 中心间只走 **HTTP API + 事件总线**，**禁止共享业务数据库表**（`opicdb` 按 schema 前缀隔离，禁 AutoMigrate）；
- **Tier 2 → Tier 1 禁止调用**；
- 认证：运维侧 OIDC、租户侧 Casdoor；授权「Casbin RBAC 优先 → 拒绝则查 IdP → 任一通过即允许」；审计头 `X-Trace-Id` / `X-User-Id` 全链透传。

## 八条功能链

| 链 | 域 |
|---|---|
| ① 信任与底座 | SEC · SYS · ARC · CRT · DBS |
| ② 物理资源 | AST · VPN · OSC · CLC · ADD · CSC |
| ③ 制品与应用交付 | REG · IGN · PIP · APP |
| ④ 流量与消费 | APF · OPR |
| ⑤ 观测 | MON |
| ⑥ 租户 | USR |
| ⑦ 数据与智能资产 | DAT · MDL · KNB → APP |
| ⑧ 合规治理（横切） | CMP |
