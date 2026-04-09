---
title: 协作总览
description: 把规则文档与 Prompt 模板整理成适合团队复用的协作约定。
prev:
  text: 分层模式
  link: /examples/layering-pattern
next:
  text: Prompt 模板
  link: /collaboration/prompt-templates
---

# 协作总览

本栏目主要根据 `CODEX_PROMPT_TEMPLATE.md` 和 `KOOBOO_RULES.md` 整理，目的是把日常协作中高频重复的背景说明沉淀为可复用约定。

## 这部分关注什么

- 开发前应该先补哪些上下文
- 什么情况下先 `kb pull`
- 代码审查应该重点看什么
- 本地 verify 通过后，远端还应该怎么验证

## 协作底线

- 不把 Kooboo 项目当普通本地 Web 项目对待
- 不跳过 `kooboo.d.ts`
- 不凭感觉杜撰 `k.*`、字段或模型
- 不在没有上下文的前提下做大范围风格改写

## 推荐配合方式

- 开发任务用标准 Prompt 明确项目路径、需求和验证目标
- push 前优先走 review 或 verify 流程
- 改动完成后写清楚远端验证页面、接口和预期结果

## 代码示例

```text
请先读取 KOOBOO_RULES.md 和当前项目的 kooboo.d.ts。
先判断是否需要 kb pull，再阅读最接近的同类实现。
完成最小必要修改后运行本地 verify，并给出远端验证清单。
```
