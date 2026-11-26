---
title: Platform Intro
weight: 10
type: docs
---

# OPIC Open Intelligent Computing Platform

OPIC is an **ontology-driven** intelligent computing + MaaS platform: 23 capability domains form a complete semantic layer, covering the full path from physical compute onboarding to AI application consumption.

## Three differentiators

1. **Ontology-driven requirements engineering** — requirements are a machine-verifiable semantic system: one Requirements Specification plus one Editorial Note per domain, gated by 927 automated checks, a consistency scan (130 cross-domain references, zero dangling links), and 13 self-checks in Chapter 9; the baseline is frozen by a SHA-256 manifest.
2. **Layer 3 is fully swappable** — all open-source dependencies are isolated in the dependency layer; swapping an engine does not trigger requirement changes except when the swap exposes a semantic gap.
3. **All 20 industry-benchmark must-haves met** (2026-09 refresh: batch inference, structured output, guardrail as independent API, split caching billing, model retirement commitments, etc.).

## Snapshot (requirements baseline v3.2)

| Metric | Value |
|---|---|
| Capability domains | 23 |
| Spec / editorial lines | 47,628 / 9,421 |
| Machine checks | 927 · FAIL 0 / WARN 0 |
| Cross-domain refs | 130 · broken 0 |
| Four review rounds | 88 findings · 86 closed / 2 tracked |
