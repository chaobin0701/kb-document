---
title: CodeBlock
description: 说明 `src/CodeBlock` 在远程开发中的基本作用，以及本地开发时需要特别注意的地方。
prev:
  text: Api
  link: /kooboo-remote/api
next:
  text: Layout
  link: /kooboo-remote/layout
---

# CodeBlock

## 更适合解决

- 沉淀服务端可复用逻辑
- 组织模型、服务和工具函数
- 把业务逻辑从入口层拆出来

## 常见对象

- `src/CodeBlock`
- Models
- Services
- Utils

## 不要混淆

- `CodeBlock` 更像服务端可复用层，不是接口入口
- 这里适合放业务逻辑，不适合承担页面模板职责

## 下一步阅读

- [Layout](/kooboo-remote/layout)
- [模块案例库](/module-library/)

## 远程开发下的基本作用

`src/CodeBlock` 更适合承载：

- Models
- Services
- Utils
- 可复用的服务端逻辑

如果一个逻辑将来可能在多个入口复用，更适合先放在 `CodeBlock`。

## 本地开发时要特别注意什么

- 本地可以把它当作服务和模型区，但最终仍然跑在 Kooboo 服务端环境里
- 能通过参数传入的东西，尽量不要在底层函数里直接耦合 `k.*`
- 响应格式、错误格式更适合集中处理，不要散落在很多文件里
- 如果项目已有直接使用 `k.*` 的服务层写法，更适合先延续现状，再逐步抽离

## 代码示例

```ts
// src/CodeBlock/Services/user.ts
export function createUser(input: { name: string }) {
  return {
    id: Date.now().toString(),
    name: input.name
  };
}
```
