---
title: Web API
description: "`k.api` 用于定义 GET、POST、PUT、DELETE 等 API 入口。"
prev:
  text: Account
  link: /kscript/account
next:
  text: Cache Cookie Session
  link: /kscript/cache-cookie-session
---

# Web API

## 能力范围

`k.api` 提供了更便于创建接口的方式，并支持 `get`、`put`、`post`、`delete`。

## 常用成员

- `k.api.get(action)`
- `k.api.post(action)`
- `k.api.put(action)`
- `k.api.delete(action)`
- `k.api.badRequest()`

## 代码示例

```ts
k.api.get(function (id) {
  return id
})
```

```ts
k.api.post(function (id, body) {
  return {
    id: id,
    body: body
  }
})
```

```ts
k.api.get(function () {
  return k.api.badRequest()
})
```

```ts
//@k-url /api/auth/{action}
k.api.post("/register", () => {
  const body = JSON.parse(k.request.body || "{}");
  if (!body.email) {
    return k.api.badRequest();
  }
  return {
    code: 0,
    msg: "success"
  };
});
```

```ts
//@k-url /api/contact
k.api.post(() => {
  const { name, email, message } = k.request;
  return {
    code: 0,
    data: { name, email, message }
  };
});
```

```ts
k.api.put("user", () => {
  return {
    code: 0,
    msg: "updated"
  };
});
```
