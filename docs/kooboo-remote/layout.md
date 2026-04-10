---
title: Layout
description: 说明 `src/Layout` 或 `src/layout` 的作用和真实项目里的常见写法。
prev:
  text: CodeBlock
  link: /kooboo-remote/codeblock
next:
  text: Page
  link: /kooboo-remote/page
---

# Layout

`src/Layout` 或 `src/layout` 用来放布局模板。

真实项目里的 layout 往往不只是壳子，而是资源总装层。项目里也可能同时存在多套 layout，例如 `common` 和 `template`。

它经常负责：

- head / body 基础结构
- 全局 CSS 与 JS 引用
- 公共 `<view id="...">` 挂载
- `k-placeholder="main"` 或 `k-placeholder="Main"` 这样的页面占位

## 本地开发时要注意

- 模板里可能同时有普通标签、`<view id="...">` 和服务端脚本
- 服务端脚本要明确标注 `env="server"`
- 这一层适合放公共资源装配，不适合堆具体业务逻辑
- `placeholder` 的大小写要跟现有项目保持一致
- 公共 head、navigation、footer、vue 挂载点通常都在这里装配

## 代码示例

```html
<!DOCTYPE html>
<html lang="en">
<view id="common.head"></view>
<body class="min-w-[375px]">
<script env="server">
  if (k.content.GTM?.body) {
    k.response.write(k.content.GTM.body);
  }
</script>
<view id="common.navigation"></view>
<div k-placeholder="Main"></div>
<view id="common.footer"></view>
<view id="vue.before"></view>
<view id="vue.store"></view>
<view id="vue.components"></view>
</body>
</html>
```
