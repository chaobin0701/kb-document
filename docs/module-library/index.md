---
title: 模块案例库
description: 收录已经写顺、值得重复参考的代码模式，作为开发者与 AI 的优先参考库。
prev:
  text: 电商配置与内容关联
  link: /content-system/commerce-and-settings
next:
  text: 优秀代码
  link: /module-library/code-patterns
---

# 模块案例库

这一栏专门用来沉淀在 Kooboo 开发过程中已经写顺、值得复用的代码模式。

## 更适合解决

- 查找已经验证过的模块结构
- 查找相似问题的成熟代码
- 在开始新实现前先找可复用方案

## 常见对象

- `module`
- `src/Module`
- 页面模块
- 通用 API 返回
- 内容查询方案

## 不要混淆

- 这一栏不是 API 定义页
- 这一栏优先解决“有没有现成方案可参考”

## 下一步阅读

- [优秀代码](/module-library/code-patterns)

## 导览

这里更适合收录两类内容：

- 已经在项目里验证过的代码模式
- AI 在遇到相似问题时应优先参考的写法

## 按问题类型找方案

- 内容展示类
- API 类
- 内容查询类
- 文案类
- 电商类
- 模块类

## 优先参考规则

- 如果案例库里已经有相近方案，优先参考这里
- 只有在案例库没有相近实现时，才从零生成结构
- 新实现完成后，如果足够稳定，也应该回流到这里作为后续参考

## 阅读顺序

1. [优秀代码](/module-library/code-patterns)

## 代码示例

```ts
// 这里将来更适合沉淀“已经在项目里验证过”的模块或代码
// AI 在生成相似实现时，应优先参考这里的方案，而不是从零猜测
const preferredSource = "module-library";
```
