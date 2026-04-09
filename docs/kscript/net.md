---
title: NET
description: "`k.net` 提供 HTTP、WebSocket、IP 等网络能力。"
prev:
  text: Module
  link: /kscript/module
next:
  text: OpenApi
  link: /kscript/openapi
---

# NET

`k.net` 提供网络能力，例如 URL 请求、WebSocket 和 IP 查询。

## 常用成员

- `k.net.url`
- `k.net.IP`
- `KScript.Net.Http`

## 代码示例

```ts
var result = k.net.url.get('https://www.kooboo.com')
k.response.write(result)
```

```ts
var myip = k.net.IP.myIP
```
