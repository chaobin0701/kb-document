---
title: Module
description: 说明 `src/Module` 或 `src/module` 的作用和真实项目里的常见结构。
prev:
  text: Style
  link: /kooboo-remote/style
next:
  text: UnoCSS
  link: /kooboo-remote/unocss
---

# Module

`src/Module` 或 `src/module` 用来放模块化资源。

真实项目里的模块区不只有业务模块，也可能放底层能力包，例如：

- `sqlite_orm`
- 页面元素模块
- 可复用功能模块

很多模块内部会继续分成：

- `code`
- `view`
- `api`
- `Root`

## 本地开发时要注意

- 不要凭空猜模块结构，先看现有模块
- 如果项目已有 `//@k-url` 或固定模块布局，就优先沿用
- 模块区经常同时包含代码和视图资源
- 有些模块并不直接暴露页面或 API，而是提供底层能力

## 代码示例

```ts
import { createModel } from "module/sqlite_orm";

//@k-url /module/demo/list
k.response.json({ ok: true, items: [] });
```
