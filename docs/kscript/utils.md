---
title: Utils
description: "`k.utils` 提供通用工具和 URI 等辅助能力。"
prev:
  text: State
  link: /kscript/state
next:
  text: 内容系统
  link: /content-system/
---

# Utils

`k.utils` 通常用于通用工具与服务端到客户端的数据桥接。

## 常用成员

- `k.utils.uri.parse(uri)`
- `k.utils.uri.setQueryParam(uri, name, value)`
- `k.utils.uri.getQueryParam(uri, name)`
- `builder.toUri()`

## 代码示例

```ts
var builder = k.utils.uri.parse("http://www.kooboo.com:80/?name=abc")
builder.setQueryParam("lang", "zh")
k.response.write(builder.toUri())
```
