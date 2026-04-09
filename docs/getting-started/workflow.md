---
title: 远程开发工作流
description: 理解 kb pull / kb push / kb sync、kooboo.d.ts 与事实来源优先级。
prev:
  text: 快速开始
  link: /getting-started/
next:
  text: 目录规范 / 运行时语义
  link: /runtime-semantics/
---

# 远程开发工作流

本文基于 `kscript-docs/01-remote-workflow.md`、`KOOBOO_RULES.md` 和 `kscript-docs/README.md` 重组，目的是把日常最容易踩坑的工作流先讲清楚。

## 远程开发的基本心智模型

Kooboo 的开发模式不是“本地启动一个完整应用”：

- 代码在本地编辑
- 执行和渲染发生在远端 Kooboo 站点
- 通过 CLI 把本地代码同步到远端验证

因此：

- 仅仅语法正确还不够
- 仅仅 TypeScript 类型通过也不够
- 本地验证能提高信心，但不能替代远端验证

## 核心命令

- `kb pull`：把远端站点资源同步到本地，同时刷新 `kooboo.d.ts` 等契约信息
- `kb push`：一次性把本地变更推到远端，适合明确检查点
- `kb sync`：监听文件变化并持续同步到远端，适合高频迭代，但也更容易把中间坏状态推上去

## 为什么 `kooboo.d.ts` 是项目契约

`kooboo.d.ts` 通常反映的是当前项目真实可用的能力面，而不是抽象猜测。它常常确认：

- 当前项目可用的 `k.*` API
- 当前站点内容模型和字段投影
- 电商模型、扩展能力和项目特有命名空间

实用规则：

- 修改字段、模型、`k.*` 能力前，先看 `kooboo.d.ts`
- 如果不确定远端是否已有变化，优先先做 `kb pull`
- pull 后重新读取 `kooboo.d.ts`，不要依赖过期脑内模型

## 事实来源优先级

不确定时，建议按这个顺序取证：

1. 当前项目里已可工作的现有代码
2. 当前项目的 `kooboo.d.ts`
3. 本地共享类型，如 `KScript.d.ts`
4. 项目内模板或规则文档
5. Kooboo 官方文档

如果类型提示与项目里的真实可工作写法冲突，先以项目真实代码为准，再结合官方文档核对。

## 最小安全流程

1. 判断是否应该先 `kb pull`
2. 阅读目标目录附近的可工作代码
3. 阅读最新 `kooboo.d.ts`
4. 做最小必要改动
5. 先做本地最小验证
6. 再 `kb push` 或 `kb sync`
7. 最后走远端页面或接口验证

## 日常协作建议

- 高风险改动先做 review，再决定 push
- 改动涉及模型字段时，把远端验证点写清楚
- 改入口层时保持尽量薄，把主要变化压到可抽离业务层

下一篇建议阅读 [目录规范 / 运行时语义](/runtime-semantics/)。

## 代码示例

```bash
# 先同步远端状态
kb pull

# 本地完成修改和最小验证后
kb push

# 如果需要持续高频迭代
kb sync
```
