---
title: Concept
description: 说明 Kooboo 模板引擎的整体概念，以及服务端模板和模板表达式如何协同工作。
prev:
  text: 模板引擎
  link: /template-engine/
next:
  text: 服务端模板语法
  link: /template-engine/server-template-syntax
---

# Concept

Kooboo 模板引擎可以理解成 TPL + VUE 的组合。

它一方面支持模板表达式、模板指令和属性绑定，另一方面又允许在模板里直接使用 Kooboo 的服务端能力，例如 `env="server"`、`k.*`、`<view id="...">` 和内容系统对象。

## 核心概念

- 模板不是纯前端运行，它经常和服务端渲染一起工作
- `env="server"` 可以在模板里直接执行服务端逻辑
- Mustache 插值、`v-if`、`v-for`、`:attr` 这类语法用于模板表达
- `k-if`、`k-for`、`k-label`、`k-attribute` 这类语法是 Kooboo 模板层的重要扩展
- `<view id="...">` 是页面、布局、片段之间的拼装方式

## 常见工作方式

- 先在 `env="server"` 脚本里准备数据
- 再通过模板表达式或模板指令输出
- 需要公共片段时，用 `<view id="...">` 继续组合

## 代码示例

```html
<script env="server" type="module">
  import { getRecaptchaSiteKey } from "module.recaptcha";
  const recaptchaSiteKey = getRecaptchaSiteKey();

  if (recaptchaSiteKey) {
    k.utils.clientJS.setVariable("__recaptchaSiteKey__", recaptchaSiteKey);
  }
</script>

<script env="server" v-if="recaptchaSiteKey" :src="`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`"></script>
```

```html
<script env="server">
  const order_id = k.request.id;
  const orderDetail = k.commerce.order.get(order_id);
  k.state.set("order", orderDetail);
</script>

<div v-if="orderDetail">
  {{orderDetail.id}}
</div>
```
