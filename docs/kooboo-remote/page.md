---
title: Page
description: 说明 `src/Page` 或 `src/page` 的作用和真实项目里的常见写法。
prev:
  text: Layout
  link: /kooboo-remote/layout
next:
  text: View
  link: /kooboo-remote/view
---

# Page

`src/Page` 或 `src/page` 用来放页面入口资源。

真实项目里的 page 通常非常薄，主要就是：

- 声明页面 URL
- 选择 layout
- 绑定 placeholder
- 引用页面主体 view

## 本地开发时要注意

- 不要把它写成页面业务总控
- 真实项目里很多 page 文件只有几行
- `layout id`、`placeholder id`、`view id` 的写法要直接跟随现有项目
- 大小写也要保持一致，不要自行改成另一个习惯

## 代码示例

```html
<!-- @k-url / -->
<layout id="template">
  <placeholder id="Main">
    <view id="_page/home"></view>
  </placeholder>
</layout>
```
