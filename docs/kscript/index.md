---
title: Concept
description: KScript 是运行于 Kooboo 里的 JavaScript，并通过 k 命名空间扩展服务端能力。
prev:
  text: Kooboo 远程开发
  link: /kooboo-remote/
next:
  text: TypeScript & ES Module
  link: /kscript/typescript-es-module
---

# Concept

KScript 是对运行于 Kooboo 里面的 JavaScript 的叫法。它兼容 ES6+ 与 TypeScript，但和普通浏览器脚本或普通 Node.js 脚本相比，它多了一层 Kooboo 提供的运行时能力。

## JavaScript 做所有编程

Kooboo 的思路很直接：尽量用一种语言完成 Web 开发里更多的工作。之所以选择 JavaScript，是因为它本来就是大多数 Web 开发者最熟悉的语言，学习成本低，能够更快进入开发状态。

放到这个文档站语境里，这句话的实际含义是：

- 前端页面里能写 JavaScript
- 服务端脚本里也可以写 JavaScript
- Kooboo 再通过 `k` 命名空间把一些服务端能力补进来

## 页面脚本

KScript 最容易和普通前端 JavaScript 拉开差异的地方，就是页面里的服务端脚本。

如果想让页面中的脚本在服务端运行，只需要在 `<script>` 上加 `env="server"`。这段脚本不会原样输出到浏览器，而是在 Kooboo 服务端先执行，再把结果渲染到最终 HTML。

下面这个例子和官网概念页保持同一思路：

```html
<script env="server">
  var text = "Hello World";
</script>

<div>
  <h2 k-content="text">text</h2>
</div>
```

生成后的 HTML 会更接近下面这样，服务端脚本本身不会出现在前台页面：

```html
<div>
  <h2>Hello World</h2>
</div>
```

## 扩展功能

JavaScript 本身并不直接提供 Kooboo 需要的那些服务端能力，所以 Kooboo 把这部分扩展统一放在 `k` 命名空间下面。

也就是说，下面这些内容才是 KScript 相比普通 JavaScript 的“特殊用法”来源：

- `k.request`
- `k.response`
- `k.account`
- `k.content`
- `k.commerce`
- `k.site`
- `k.utils`

后续页面会分别解释这些能力，但 KScript 首页只负责把概念建立起来，不再混入远程开发流程、目录语义或团队协作规则。

## 目录

本栏目包含以下主题：

1. [Concept](/kscript/)
2. [TypeScript & ES Module](/kscript/typescript-es-module)
3. [Request Response](/kscript/request-response)
4. [Database](/kscript/database)
5. [Account](/kscript/account)
6. [Web API](/kscript/web-api)
7. [Cache Cookie Session](/kscript/cache-cookie-session)
8. [Commerce](/kscript/commerce)
9. [Content](/kscript/content)
10. [File](/kscript/file)
11. [Mail](/kscript/mail)
12. [Market](/kscript/market)
13. [Module](/kscript/module)
14. [NET](/kscript/net)
15. [OpenApi](/kscript/openapi)
16. [Payment](/kscript/payment)
17. [Security](/kscript/security)
18. [Site](/kscript/site)
19. [State](/kscript/state)
20. [Utils](/kscript/utils)

## 代码示例

```html
<script env="server">
  var text = "Hello World";
</script>

<div>
  <h2 k-content="text">text</h2>
</div>
```
