---
title: Page
description: 说明 `src/Page` 在远程开发中的基本作用，以及本地开发时需要特别注意的地方。
prev:
  text: Layout
  link: /kooboo-remote/layout
next:
  text: View
  link: /kooboo-remote/view
---

# Page

## 更适合解决

- 判断页面入口资源应该怎么组织
- 选择 layout 与主体 view
- 避免让页面入口承担过多业务逻辑

## 常见对象

- `src/Page`
- `<layout />`
- `<view />`

## 不要混淆

- `Page` 更像页面入口，不是业务层
- 它负责组合，不适合承载很重的服务端逻辑

## 下一步阅读

- [View](/kooboo-remote/view)
- [Layout](/kooboo-remote/layout)

## 远程开发下的基本作用

`src/Page` 更适合作为页面入口资源，用来：

- 选择 layout
- 绑定 placeholder
- 引用 view 作为页面主体

更适合保持声明式，不要让页面入口承担过多业务逻辑。

## 本地开发时要特别注意什么

- 本地编辑时容易把它写成“页面业务总控”，但更适合把它保持得很薄
- 文件命名尽量扁平，不要在 `src/Page` 下继续分子目录

## 代码示例

```html
<!-- src/Page/home.html -->
<layout src="/main.html" />
<view src="/home.page.html" k-placeholder="Main" />
```
