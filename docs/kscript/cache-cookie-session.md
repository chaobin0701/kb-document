---
title: Cache Cookie Session
description: "`k.cache`、`k.cookie` 和 `k.session` 提供缓存、Cookie 与会话能力。"
prev:
  text: Web API
  link: /kscript/web-api
next:
  text: Commerce
  link: /kscript/commerce
---

# Cache Cookie Session

## 能力范围

`k.cache`、`k.cookie`、`k.session` 都提供了相似的操作方式，但存储位置与生命周期不同。

## 常用成员

- `k.session.set/get/remove/clear`
- `k.cookie.set/get/remove/clear`
- `k.cache.set/getOrCreate/remove/containsKey`

- `cache` 更偏服务端缓存
- `cookie` 依赖浏览器请求头
- `session` 常用于会话级状态

## 代码示例

```ts
k.session.set('key', 'value')
k.cookie.set('key', 'value', 2)
k.cache.set('key', 'value', 12000)

var value = k.session.get('key')
var hasValue = k.cache.containsKey('key')
k.cache.remove('key')
```

```ts
k.cache.getOrCreate('mykey', function () {
  return 'myvalue'
}, 12000)
```
