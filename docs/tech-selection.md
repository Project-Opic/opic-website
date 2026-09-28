---
sidebar_position: 8
title: 技术选型评估
---

# 技术选型评估：Temporal 与 NATS

**结论：不新建能力中心；NATS 单归属平台底座域（O-SYS），Temporal 双归属应用域（业务语义）+ 平台底座域（底座接入）。**

- **NATS** = 事件总线的第 3 层可替换实现（Core NATS 发布订阅 / JetStream 持久化）；各中心只依赖事件契约（subject 命名、审计头透传、统一信封），不得直绑 NATS API。
- **Temporal** = 持久工作流执行引擎。工作流业务语义已在应用域（`WorkflowDefinition`，执行明细显式「不落本域」——Temporal 恰是该声明的域外承载）；引擎平台接入语义（集群编目、namespace / task-queue 治理、跨中心访问、审计）归平台底座域。每中心一个 task queue、各自 Worker，跨中心编排走网关/事件。
- **不新建中心的判据**：新域门槛是「新的业务事实领地」；引擎可整体替换是第 3 层纪律。
- **首批落点**：联邦部署编排、批量推理作业完成窗口、智能体会话恢复、交付任务桥接补偿（Temporal）；事件总线实现、告警投递、变更通知（NATS）。
- **工程落地**：部署与适配代码归 platform-base-center；Worker SDK 集成归 application-center；技术底座脚手架新增消息与工作流封装模块。
