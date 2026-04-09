---
title: 示例导览
description: 基于真实示例目录整理的分层开发入口。
prev:
  text: Utils
  link: /kscript/utils
next:
  text: 分层模式
  link: /examples/layering-pattern
---

# 示例导览

本栏目基于 `examples/README.md` 与三个示例代码文件整理，重点不是展示“能跑的 demo”，而是沉淀一套适合 Kooboo 远程开发的分层方式。

## 示例想解决的问题

如何把下面两件事分开：

- 依赖 Kooboo / KScript 运行时的入口逻辑
- 可以抽离、本地验证、复用的业务逻辑

## 当前包含的示例主题

- DTO / 校验层
- 业务层依赖注入
- API 入口层只做适配和编排

## 推荐阅读方式

1. 先看 [分层模式](/examples/layering-pattern)
2. 再回到真实项目里，对照 `src/Api`、`src/CodeBlock` 和模板层 server block 做映射

## 代码示例

```ts
// 入口层
const parsed = parseCreateUserDTO(k.request.form)

// 业务层
const result = await createUser(deps, parsed.value)

// 输出层
k.response.write(result)
```
