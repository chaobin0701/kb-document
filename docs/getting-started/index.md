---
title: 快速开始
description: 建立 KScript / Kooboo 远程开发的基本心智模型与阅读路径。
prev:
  text: 首页
  link: /
next:
  text: 远程开发工作流
  link: /getting-started/workflow
---

# 快速开始

这部分用于帮助新加入的开发者先建立共同语言，再进入更细的 API、模板层或示例页面。

## 先理解三件事

1. Kooboo 的本地开发不是本地起服务，而是本地编辑、远端运行、通过 CLI 同步验证。
2. `kooboo.d.ts` 不是普通提示文件，而是当前项目的运行时契约。
3. 目录不仅是组织方式，它直接决定运行时语义。

## 推荐阅读顺序

1. [远程开发工作流](/getting-started/workflow)
2. [目录规范 / 运行时语义](/runtime-semantics/)
3. [Kooboo 远程开发导览](/kooboo-remote/)
4. [KScript 概览](/kscript/)
5. [示例导览](/examples/)

## 适合谁先看

- 第一次接触 Kooboo 远程开发的同学
- 需要理解 `kb pull / kb push / kb sync` 边界的协作者
- 想知道应该先读哪份规则、哪份类型契约、哪类示例的人

## 当前站点内容来源

本栏目主要根据以下现有文档整理：

- `KOOBOO_RULES.md`
- `kscript-docs/01-remote-workflow.md`
- `kscript-docs/README.md`

下一篇建议直接进入 [远程开发工作流](/getting-started/workflow)。

## 代码示例

```bash
kb pull
# 阅读最新 kooboo.d.ts
# 做最小必要修改
kb push
```
