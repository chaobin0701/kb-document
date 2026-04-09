---
title: 目录规范与运行时语义
description: 融合 KOOBOO_RULES、目录文档与 KScript 总览后的统一运行时规则页面。
prev:
  text: 远程开发工作流
  link: /getting-started/workflow
next:
  text: Kooboo 远程开发导览
  link: /kooboo-remote/
---

# 目录规范与运行时语义

这页融合了 `KOOBOO_RULES.md`、`kscript-docs/02-runtime-and-folders.md` 与 `kooboo-docs/src/00-overview.md` 的核心结论。

## 最高优先级规则

在 Kooboo 项目里，目录不仅是组织结构，它直接决定运行时。

你改动 `src` 下代码时，先判断它在哪个目录、默认跑在什么环境，再讨论具体语法。

## 目录与默认运行时

| 目录 | 默认语义 | 关键提醒 |
| --- | --- | --- |
| `src/Api` | 服务端入口 | 直接读 `k.request` / 写 `k.response` |
| `src/CodeBlock` 或 `src/code` | 服务端业务层 | 尽量承载可复用逻辑 |
| `src/Layout` | 模板层，混合运行时 | 看 `env="server"` 与模板指令 |
| `src/Page` | 页面入口，混合运行时 | 不是纯静态 HTML |
| `src/View` | 可复用视图层，混合运行时 | 既可能有客户端代码，也可能有服务端块 |
| `src/Script` 或 `src/js` | 客户端脚本 | 不要把它当 KScript 入口 |
| `src/Style` | 客户端样式 | 只放样式资源 |
| `src/Module` | 模块资源 | 结构复杂，先看邻近可工作示例 |

## 模板层判断规则

`Layout` / `Page` / `View` 不要粗暴地视为纯前端或纯后端。它们属于混合模板层，通常要结合上下文判断：

- `<script env="server">` 是强信号，说明这里按服务端处理
- `k-*` 指令默认是 Kooboo 服务端模板能力
- `v-*` 与 `{{ }}` 可能出现在服务端或客户端上下文中，要结合环境判断

## 资源命名约定

根据现有目录文档，站点资源目录更适合扁平命名，而不是深层子目录：

- 不要在 `src/View`、`src/Script`、`src/Style`、`src/Page` 下随意建层级子目录
- 优先用点号表达层次，如 `home.page.html`、`app-header.component.html`

这样做的目的不是形式统一，而是减少 Kooboo 资源映射和引用时的歧义。

## 远端优先的运行时模型

这些项目的代码虽然在本地编辑，但最终可信的执行环境是远端 Kooboo 站点。

因此在工程上更稳妥的做法是：

- 先复用项目里已验证的模式
- 先看 `kooboo.d.ts` 再写 `k.*`
- 不把普通 Node / Express / Koa / Next.js 习惯直接带进来

## 这页适用的场景

- 你准备开始改动某个 `src/*` 目录，但还不确定它实际跑在哪
- 你怀疑自己正在把模板层写成普通前端项目
- 你要给团队解释为什么“目录语义”比“代码看起来像什么”更重要

建议下一步进入 [Kooboo 远程开发导览](/kooboo-remote/) 或 [KScript 概览](/kscript/)。

## 代码示例

```html
<!-- 模板层里的 server block -->
<script env="server">
  const text = "Server Rendered";
</script>

<script>
  // 这里才是浏览器脚本
  console.log('client side')
</script>
```
