---
title: AI 工作顺序
description: 为 AI 和开发者提供进入项目后的固定阅读顺序。
prev:
  text: 问题到页面映射
  link: /ai-navigation/question-to-page-map
next:
  text: 术语别名映射
  link: /ai-navigation/term-aliases
---

# AI 工作顺序

## 推荐顺序

1. 先看项目类型和目录
2. 再看 `kooboo.d.ts`
3. 再选最相关栏目
4. 再看案例库里有没有相似方案
5. 最后才开始写代码

## 具体怎么判断

### 先看项目类型和目录

- 先判断目标文件是在 `Api`、`Layout`、`Page`、`View`、`Script` 还是 `Module`
- 目录语义不清时，先去看 [AI 远程开发补充说明](/kooboo-remote/ai-remote-dev-notes)

### 再看 `kooboo.d.ts`

- 如果问题落在 `k.*` 对象上，优先看类型和已有注释
- 先分清运行时对象，再决定代码写法

### 再选栏目

- 运行时对象问题：去 `KScript`
- CMS 对象问题：去 `内容系统`
- 项目接手、提示词和 skills：去 `AI Kooboo 开发`
- 相似方案复用：去 `模块案例库`

### 再看案例库

- 如果案例库已有相近方案，应优先参考已有方案
- 只有在案例库没有相近实现时，才从零生成结构

## 代码示例

```ts
const preferredOrder = [
  "understand-project-structure",
  "read-kooboo-d-ts",
  "choose-doc-section",
  "search-module-library",
  "write-minimal-code"
];
```
