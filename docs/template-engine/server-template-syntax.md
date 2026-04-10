---
title: V 模板语法
description: 总结 Kooboo 项目里最常见的 v-* 模板语法和基础写法。
prev:
  text: Concept
  link: /template-engine/concept
next:
  text: K 模板语法
  link: /template-engine/k-directives
---

# V 模板语法

Kooboo 项目里更常见的是 `v-*` 这一套模板语法。

它保留了和 Vue 很接近的表达方式，常见写法包括：

- Mustache 插值
- `v-if`
- `v-for`
- `v-html`
- `:attr`
- `:class`
- `:style`

在 Kooboo 里，如果要让这套语法按服务端模板方式执行，通常需要显式写 `env="server"`。

## 基本用法

### Mustache 插值

用于输出变量或表达式结果。

常见写法是 `\{\{ expression \}\}`。

```html
<div><span k-label="To:">To:</span> {{order.FirstName}} {{order.LastName}}</div>
```

### `v-if`

用于条件渲染。

```html
<div v-if="order.CompanyName">
  {{order.CompanyName}}
</div>
```

### `v-for`

用于列表渲染，行为和 Vue 保持一致，会重复当前元素本身。

```html
<tr v-for="item in order.Lines">
  <td>{{item.title}}</td>
  <td>{{item.totalQuantity}}</td>
</tr>
```

### `v-html`

用于输出 HTML 内容。

```html
<div v-if="item.instructionsEmail" v-html="item.instructionsEmail"></div>
```

### `:attr`

用于属性绑定，例如 `:src`、`:class`、`:style`。

```html
<script env="server" v-if="recaptchaSiteKey" :src="`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`"></script>
```

```html
<input
  v-model="formData.email"
  :placeholder="t('Email*')"
  :class="{'input-error':errors.email}"
>
```

## `env="server"`

`v-*` 语法如果要读取服务端数据、执行服务端模板逻辑，通常需要写在带 `env="server"` 的上下文里。

```html
<script env="server">
  const index = k.state.get("index");
  const elementContent = k.state.get(`section-${index}`);
</script>
```

## 代码示例

```html
<script env="server">
  const order_id = k.request.id;
  const orderDetail = k.commerce.order.get(order_id);
</script>

<table env="server" v-if="orderDetail">
  <tr v-for="item in orderDetail.lines">
    <td>{{item.title}}</td>
    <td>{{item.totalQuantity}}</td>
  </tr>
</table>
```

```html
<script env="server">
  const heroImage = k.site.labels.getValue("home_hero_image");
</script>

<img v-if="heroImage" :src="heroImage" alt="hero">
```

## 备注

- `v-*` 是项目里更常见的模板写法。
- 在服务端模板场景里，通常要配合 `env="server"` 使用。
- `v-for` 会重复当前 DOM，本身和 Vue 的行为保持一致。
