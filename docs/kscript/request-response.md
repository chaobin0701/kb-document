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

## 更适合解决

- 读取请求参数
- 读取表单、Header 和上传文件
- 输出 JSON、文本、文件和重定向

## 常见对象

- `k.request`
- `k.response`

## 不要混淆

- 这里解决的是运行时请求与响应对象
- 不要把 CMS 内容对象和模板层规则混进这一页

## 下一步阅读

- [Web API](/kscript/web-api)
- [内容系统](/content-system/)

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
