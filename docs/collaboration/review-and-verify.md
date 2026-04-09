---
title: 评审与验证
description: 将 review 和 verify 的关注点整理成团队可执行清单。
prev:
  text: Prompt 模板
  link: /collaboration/prompt-templates
next:
  text: 团队技能导览
  link: /team-skills/
---

# 评审与验证

本页继续基于 `CODEX_PROMPT_TEMPLATE.md` 与规则文档整理，重点不是模板措辞，而是团队应该形成什么样的审查与验证习惯。

## Review 时优先看什么

- 是否先判断了目录运行时语义
- 是否使用了项目真实存在的 `k.*` 能力
- 是否把入口层写得过重
- 是否忽略了模板层里的 server block
- 是否遗漏了远端验证点

## Verify 时最低要求

- 规则文档已被纳入上下文
- 当前 `kooboo.d.ts` 已阅读
- 本地 verify 已跑过
- 若 verify 失败，失败原因已经明确

## 远端验证清单建议

- 需要打开的页面
- 需要请求的接口
- 关键状态或字段的预期结果
- 最可能暴露 runtime 问题的区域
- 如果失败，应优先回查的目录和文件

## 为什么这一步不能省

Kooboo 的运行和渲染最终发生在远端站点，因此“本地看起来没问题”不等于真正安全。把远端验证写成 checklist，能显著降低团队协作里的隐性假设。

## 代码示例

```text
远端验证 checklist
1. 打开 /dashboard，确认页面正常渲染
2. 请求 /api/user.create，确认返回结构与状态码正确
3. 检查登录态、重定向和内容字段是否符合预期
```
