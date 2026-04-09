---
title: Layout
description: 说明 `src/Layout` 在远程开发中的基本作用，以及本地开发时需要特别注意的地方。
prev:
  text: CodeBlock
  link: /kooboo-remote/codeblock
next:
  text: Page
  link: /kooboo-remote/page
---

# Layout

## 更适合解决

- 判断布局层该承载哪些公共结构
- 放置鉴权、重定向和全局变量注入
- 区分模板层与纯前端布局文件

## 常见对象

- `src/Layout`
- `<script env="server">`
- `k-placeholder`

## 不要混淆

- `Layout` 不是纯前端壳子
- 这里可以包含服务端逻辑，但不适合堆大量业务代码

## 下一步阅读

- [Page](/kooboo-remote/page)
- [AI 远程开发补充说明](/kooboo-remote/ai-remote-dev-notes)

## 远程开发下的基本作用

`src/Layout` 更适合负责：

- HTML 基础结构
- head / body 公共部分
- 占位符
- 服务端准备逻辑

如果有鉴权、重定向、全局变量注入，这一层通常是更稳的放置位置。

## 本地开发时要特别注意什么

- 本地看到的是模板文件，但远端可能会执行其中的服务端脚本
- 服务端脚本应明确标注 `env="server"`
- 服务端到客户端的数据注入更适合集中处理

## 代码示例

```html
<!-- src/Layout/main.html -->
<script env="server">
  if (!k.account.currentUser) {
    k.response.redirect("/login");
    k.response.stop();
  }
</script>

<div k-placeholder="Main"></div>
```
