---
title: Commerce
description: "`k.commerce` 提供商品、分类、购物车、订单等电商能力。"
prev:
  text: Cache Cookie Session
  link: /kscript/cache-cookie-session
next:
  text: Content
  link: /kscript/content
---

# Commerce

`k.commerce` 主要用于电商相关模型与业务能力。

## 常用成员

- `k.commerce.category`
- `k.commerce.product`
- `k.commerce.cart`
- `k.commerce.order`
- `k.commerce.customer`
- `k.commerce.discount`
- `k.commerce.shipping`
- `k.commerce.membership`
- `k.commerce.currency`
- `k.commerce.settings`

## 代码示例

```ts
k.commerce.category.create({
  description: "<div>category description</div>",
  image: "14.png",
  seoName: "create-from-code",
  tags: ["a", "b"],
  title: "create from code",
})
```

```ts
k.commerce.product.updateField(
  "41e9df9dd67f4e5e8eb80d8a4644e0d7",
  "seoName",
  "hello-world"
)
```
