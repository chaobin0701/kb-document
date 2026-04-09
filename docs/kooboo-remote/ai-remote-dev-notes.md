---
title: AI 远程开发补充说明
description: 说明 AI 在 Kooboo 远程开发项目里应该怎么理解目录和改动边界。
prev:
  text: UnoCSS
  link: /kooboo-remote/unocss
next:
  text: Concept
  link: /kscript/
---

# AI 远程开发补充说明

Kooboo 远程开发项目不能按普通前端项目或普通 Node.js 项目来理解。

更稳妥的做法是先判断目录语义，再决定代码应该写在哪里。

## AI 改动前更适合先看什么

1. 当前项目的目录结构
2. 当前项目的 `kooboo.d.ts`
3. 目标目录附近已经能工作的文件
4. 是否存在同类实现

## 最容易误判的地方

- 误以为 `view` 不能分层，实际很多项目会有 `view/common`、`view/card`、`view/element`、`view/_page`
- 误以为 `page` 里要写大量逻辑，实际很多项目里的 page 只有布局声明和 view 引用
- 误以为 `api` 只有一种暴露方式，实际可能同时存在 `//@k-url` 和 `k.api.get/post/put`
- 误以为脚本和样式目录必须和当前文档里的目录名完全一致，实际常见的是 `src/js`、`src/css`
- 误以为动态 class 一定能被 UnoCSS 扫到，实际往往需要静态兜底
- 误以为 layout 只能有一套，实际项目里可能同时有 `common`、`template` 之类多套布局
- 误以为 placeholder id 一定是固定大小写，实际 `main` 和 `Main` 都可能存在
- 误以为 script 目录不能有子目录，实际常见 `js/axios/min.js`、`js/vue/prod/min.js`

## 更适合的工作顺序

1. 先看项目结构
2. 先看 `kooboo.d.ts`
3. 再看邻近实现
4. 再写最小必要改动
5. 最后回到远端做验证

## 代码示例

```text
src/
├── api/
├── code/
├── layout/
├── page/
├── view/
├── js/
├── css/
└── module/
```
