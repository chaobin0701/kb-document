---
title: State
description: "`k.state` 用于在当前渲染上下文中存储和读取共享状态。"
prev:
  text: Site
  link: /kscript/site
next:
  text: Utils
  link: /kscript/utils
---

# State

`k.state` 用于状态相关能力。

## 常用成员

- `k.state.set(key, value)`
- `k.state.setCurrent(key, value)`
- `k.state.get(key)`

## 代码示例

```ts
const obj = { name: "myname", fieldtwo: "value" };
k.state.set("key", obj);
k.state.setCurrent("key", obj);
k.response.json(k.state.get("key"))
```
