---
title: Payment
description: "`k.payment` 提供支付方式、支付请求和支付状态查询能力。"
prev:
  text: OpenApi
  link: /kscript/openapi
next:
  text: Security
  link: /kscript/security
---

# Payment

`k.payment` 用于支付能力相关的扩展。

## 常用成员

- `k.payment.square`
- `k.payment.wechat`
- `k.payment.stripe`
- `k.payment.paypalCheckout`
- `k.payment.alipayForm`
- `k.payment.get(...)`
- `k.payment.getRequest(...)`

## 代码示例

```ts
var method = k.payment.get("stripe")
var request = k.payment.getRequest(requestId)
k.response.json({
  method: method.displayName,
  paid: request.paid
})
```
