---
title: UnoCSS
description: 说明 UnoCSS 在 Kooboo 远程开发中的基本作用，以及本地开发时需要特别注意的地方。
prev:
  text: Module
  link: /kooboo-remote/module
next:
  text: AI 远程开发补充说明
  link: /kooboo-remote/ai-remote-dev-notes
---

# UnoCSS

## 更适合解决

- 理解 UnoCSS 在 Kooboo 里的工作方式
- 判断 class 写法哪些安全，哪些容易失效
- 管理 shortcuts、safelist 和自定义规则

## 常见对象

- UnoCSS 类名
- `unocss-conifg`
- shortcuts
- safelist

## 不要混淆

- UnoCSS 在这里更像预扫描和预渲染结果
- 不要假设浏览器端会动态计算和生成 class

## 下一步阅读

- [AI 远程开发补充说明](/kooboo-remote/ai-remote-dev-notes)
- [模块案例库](/module-library/)

## 远程开发下的基本作用

UnoCSS 更适合被理解成站点里的默认样式方案之一。它会预扫描模板和视图里的 class，然后生成 CSS，而不是在浏览器里动态计算。

## 本地开发时要特别注意什么

- 不要依赖动态拼接 class
- 更适合写静态类名或有限集合分支
- 自定义规则、shortcuts、safelist 更适合集中放在 `unocss-conifg`

## 代码示例

```ts
const buttonClass = isPrimary
  ? "bg-blue-600 text-white px-4 py-2"
  : "bg-gray-100 text-gray-900 px-4 py-2";
```
