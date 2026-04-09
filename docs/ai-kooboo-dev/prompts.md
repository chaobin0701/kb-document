---
title: 开箱提示词
description: 可直接复制给 AI 使用的 Kooboo 开发提示词模板。
prev:
  text: AI Kooboo 开发
  link: /ai-kooboo-dev/
next:
  text: 推荐 Skills
  link: /ai-kooboo-dev/skills
---

# 开箱提示词

这页收录的是可以直接复制给 AI 的提示词模板，目标是让 AI 尽快获得 Kooboo 项目的正确上下文。

## 1. 项目接管提示词

适合让 AI 在真正动手前先理解一个 Kooboo 项目。

```text
你现在要接手一个 Kooboo 项目。

请先阅读这个项目地址：
https://cnb.cool/kooboo.com/kooboo-cli/cli

并结合当前工作区里的 kooboo.d.ts、KScript 文档、内容系统文档来理解项目。

要求：
- 先判断这是怎样的 Kooboo 项目
- 先理解目录结构和运行时边界
- 先确认 k.* 的能力面
- 先找与本次需求最接近的已有实现
- 不要直接把它当成普通 Node.js / Express / 前端项目

最后请用很短的方式告诉我：
- 你理解到的目录结构
- 这次需求最可能要改哪些文件
- 哪些地方最容易写错
```

## 2. 功能开发提示词

适合让 AI 在已有上下文基础上直接实现功能。

```text
你现在在一个 Kooboo 项目里开发功能。

在开始修改前，请先：
1. 阅读 kooboo.d.ts
2. 阅读当前文档站中的 /kscript/、/content-system/、/kooboo-remote/
3. 阅读最接近目标文件的现有实现

开发要求：
- 保持目录语义不变
- 优先复用项目已有模式
- 尽量使用当前项目已存在的 k.* 能力
- 如果涉及内容系统，请先确认是 Label、HTML Block、Content 还是 Commerce 配置
- 改动完成后给出最小验证方式
```

## 3. 获取 Kooboo 编程能力提示词

这个提示词适合在 AI 一开始还没有 Kooboo 背景时使用。

```text
请先阅读以下内容，以获得 Kooboo 开发能力：

1. 项目地址：
https://cnb.cool/kooboo.com/kooboo-cli/cli

2. 当前工作区中的 kooboo.d.ts

3. 当前文档站中的这些栏目：
- /kscript/
- /content-system/
- /kooboo-remote/
- /module-library/

请先建立这些认知：
- 什么是 KScript
- 什么是内容系统
- 远程开发项目的目录结构如何理解
- 哪些能力来自 k.*
- 哪些对象属于 CMS 内容层

在你完成这些理解之前，不要直接写代码。
```

## 4. 模块复用提示词

适合让 AI 优先参考已有优秀模块和代码。

```text
这次任务请优先参考当前文档站中的 /module-library/。

如果模块案例库里已经有相近方案，请优先：
- 复用结构
- 复用命名
- 复用对象边界
- 不要重新发明另一套风格
```
