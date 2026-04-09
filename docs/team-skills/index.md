---
title: 团队技能导览
description: 将现有 skill 资料整理为团队接管与协作工作流。
prev:
  text: 评审与验证
  link: /collaboration/review-and-verify
next:
  text: 站点接管流程
  link: /team-skills/site-takeover
---

# 团队技能导览

这一栏不是公开原始 agent 指令，而是把 `skills/kooboo-clone-site` 中真正适合团队复用的部分沉淀为工作流说明。

## 为什么保留这部分

- 新成员接管一个刚 clone 下来的 Kooboo 站点时，最容易在第一步就走偏
- 团队需要一套统一的“接管前检查”方式
- 技能文档里其实已经有很好的 checklist，可以转换成通用流程

## 当前保留的主题

- 站点接管前应该读哪些资料
- 如何识别 `src` 目录与运行时的关系
- 如何判断是否应该先 `kb pull`
- 接管报告里应该写哪些内容

## 代码示例

```text
接管前最小动作：
1. 读规则
2. 看 kooboo.d.ts
3. 映射 src 目录
4. 判断是否先 kb pull
5. 输出接管报告
```
