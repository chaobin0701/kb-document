---
title: View
description: 说明 `src/View` 在远程开发中的基本作用，以及本地开发时需要特别注意的地方。
prev:
  text: Page
  link: /kooboo-remote/page
next:
  text: Script
  link: /kooboo-remote/script
---

# View

## 更适合解决

- 组织可复用视图和组件
- 承载通用资源引入与页面片段
- 处理模板层里的局部服务端注入

## 常见对象

- `src/View`
- `common.html`
- 组件片段
- `<script env="server">`

## 不要混淆

- `View` 不只是纯静态 HTML
- 这里可以包含服务端注入，但不等于接口入口

## 下一步阅读

- [Script](/kooboo-remote/script)
- [AI 远程开发补充说明](/kooboo-remote/ai-remote-dev-notes)

## 远程开发下的基本作用

`src/View` 更适合承载：

- 可复用片段
- 页面组件
- 通用资源引入
- 有时也包含服务端注入逻辑

很多项目会把 common、页面片段和组件都放在这里。

## 本地开发时要特别注意什么

- 本地项目里经常会自然地想继续建层级目录，但这里更适合用点号命名
- 前端组件里不要假设存在普通本地 dev server 接口
- 如果项目已有 `common.html` 一类公共资源文件，应优先沿用

## 代码示例

```html
<!-- src/View/common.html -->
<script env="server">
  k.utils.clientJS.setVariable("siteName", "Demo");
</script>
```
