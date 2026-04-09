---
title: 站点接管流程
description: 基于现有 skill 与 reference 文档整理的新项目接管流程。
prev:
  text: 团队技能导览
  link: /team-skills/
next:
  text: 贡献指南
  link: /contributing/
---

# 站点接管流程

本页根据以下资料整理而来：

- `skills/kooboo-clone-site/SKILL.md`
- `skills/kooboo-clone-site/references/runtime-folders.md`
- `skills/kooboo-clone-site/references/takeover-report.md`

## 适用场景

- 刚用 `kb clone` 或其他方式拿到一个 Kooboo 站点本地副本
- 需要先做项目接管，再进入具体开发
- 要给其他协作者一个统一的 onboarding 模板

## 接管前先读什么

推荐顺序：

1. 共享规则文档
2. 目录语义文档
3. KScript 总览
4. 示例目录
5. 当前项目自己的 `README` 与 `kooboo.d.ts`

## 最小接管流程

1. 确认目标项目根目录
2. 判断这是不是一个典型 Kooboo 站点项目
3. 检查 `kooboo.d.ts` 是否存在
4. 映射 `src` 目录与运行时语义
5. 读取邻近可工作文件，确认本地模式
6. 判断是否应该先 `kb pull`
7. 输出一份简短接管报告

## 接管报告建议包含什么

### Project Shape

- 目标根目录
- 这看起来是站点项目、模板项目还是混合工作区

### Runtime Map

- 找到了哪些关键 `src` 目录
- 它们大概率分别运行在什么环境

### Contract Check

- `kooboo.d.ts` 是否存在
- 它确认了哪些关键 `k.*` 能力
- 是否存在内容模型或 commerce 模型风险

### Sync State

- 是否建议先 `kb pull`
- 为什么

### Validation Path

- 最小可用的本地验证方式
- 仍然必须做的远端验证

### Risks

- 缺少类型契约
- 目录约定不清晰
- 模块结构特殊
- 运行时耦合过重

## 目录识别速记

- `src/Api`：服务端入口
- `src/CodeBlock` 或 `src/code`：服务端可复用逻辑
- `src/Layout` / `src/Page` / `src/View`：混合模板层
- `src/Script` / `src/js`：浏览器脚本
- `src/Style`：样式资源
- `src/Module`：结构更复杂，优先看邻近示例

## 代码示例

```text
## Project Shape
- target root: /path/to/site
- project type: Kooboo site

## Contract Check
- kooboo.d.ts: present
- key runtime: k.request / k.response / k.account

## Sync State
- kb pull: recommended
```
