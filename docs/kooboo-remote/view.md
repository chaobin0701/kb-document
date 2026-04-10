---
title: View
description: 说明 `src/View` 或 `src/view` 的作用和真实项目里的常见写法。
prev:
  text: Page
  link: /kooboo-remote/page
next:
  text: Script
  link: /kooboo-remote/script
---

# View

`src/View` 或 `src/view` 用来放可复用视图和组件。

真实项目里它经常承担很重的角色，例如：

- `common.*` 公共片段
- `card.*` 卡片组件
- `element.*` 页面元素
- `page-element.*` 页面元素编排
- `vue.*` Vue 挂载和组件装配
- `_page.*` 页面主体 view
- `compoentns.*` 这类项目内已有分层
- server script 注入
- `k.utils.template.render(...)` 动态拼装 view

## 本地开发时要注意

- 真实项目里经常存在分层目录，不要强行压平
- 很多 view 会带 `env="server"` 脚本
- `_page.*` 在真实项目里常常就是页面主体内容的落点
- `k.state` 也常在 view 之间传递 section、component 这类上下文
- view 分级引用通常使用点号，不用 `/`

## 代码示例

```ts
const section = k.state.get("section");
const components = [];

section.Title?.forEach(item => {
  item._viewName = "page-element.common.title";
  components.push(item);
});

components.sort((a, b) => a.sequence - b.sequence);
```

```ts
k.state.set("component", component);
k.response.write(
  k.utils.template.render(`<view id="${component._viewName}"></view>`)
);
```
