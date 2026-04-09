---
title: Request Response
description: "`k.request` 与 `k.response` 提供请求读取和响应输出能力。"
prev:
  text: TypeScript & ES Module
  link: /kscript/typescript-es-module
next:
  text: Database
  link: /kscript/database
---

# Request Response

## `k.request`

`k.request` 是读取请求数据的入口。

## 常用成员

- `k.request.queryString`
- `k.request.form`
- `k.request.files`
- `k.request.body`
- `k.request.headers`
- `k.request.method`
- `k.request.url`
- `k.request.get(key)`

常见读取方式包括：

- `k.request.queryString.foo`
- `k.request.form.foo`
- `k.request.headers['header-name']`

## `k.response`

- `k.response.write(value)`
- `k.response.json(value)`
- `k.response.statusCode(code)`
- `k.response.setHeader(key, value)`
- `k.response.file(path, contentType?, fileName?)`
- `k.response.redirect(url)`
- `k.response.unauthorized()`
- `k.response.notFound()`
- `k.response.execute(url)`
- `k.response.stop()`

## 代码示例

```ts
var value = k.request.queryString.queryname;
var value2 = k.request.form.queryname;
var value3 = k.request.get("key");
```

```ts
k.response.write("hello world");
k.response.json({ fieldone: "valueone", fieldtwo: "valuetwo" });
k.response.setHeader("Access-Control-Allow-Origin", "*");
```

```ts
k.response.redirect("/relativepath");
k.response.statusCode(301);
k.response.notFound();
```

```ts
const body = JSON.parse(k.request.body || "{}");
if (!body.email) {
  k.response.statusCode(400);
  k.response.json({ code: -1, msg: "email is required" });
  k.response.stop();
}
```

```ts
const { name, email, message } = k.request;
if (!name || !email || !message) {
  k.response.json({ code: -1, msg: "missing fields" });
  k.response.stop();
}
```

```ts
const file = k.request.files[0];
if (!file) {
  k.response.statusCode(400);
  k.response.json({ code: -1, msg: "file is required" });
  k.response.stop();
}
```
