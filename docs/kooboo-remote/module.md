---
title: Module
description: 说明 `src/Module` 在远程开发中的基本作用，以及本地开发时需要特别注意的地方。
prev:
  text: Style
  link: /kooboo-remote/style
next:
  text: UnoCSS
  link: /kooboo-remote/unocss
---

# Module

## 更适合解决

- 组织模块化资源
- 识别模块区的内部结构
- 判断何时复用模块内 Code，何时抽到公共层

## 常见对象

- `src/Module`
- `Root`
- `Api`
- `Code`
- `//@k-url`

## 不要混淆

- `Module` 的结构复杂度通常高于普通资源目录
- 不要把它理解成 npm module

## 下一步阅读

- [UnoCSS](/kooboo-remote/unocss)
- [模块案例库](/module-library/)

## 远程开发下的基本作用

`src/Module` 更适合承载模块化资源。很多时候一个模块内部会有自己的：

- `Root`
- `Api`
- `Code`

因此这里不适合凭空猜结构，最好先看已有模块。

## 本地开发时要特别注意什么

- 本地编辑时最容易误判目录结构
- 如果项目已有 `//@k-url` 或固定模块布局，就优先沿用
- 复用优先从模块内已有 `Code` 开始，再考虑抽到公共层

## 代码示例

```ts
// 模块内 API 更适合先延续已有结构
//@k-url /module/demo/list
k.response.json({ ok: true, items: [] });
```
