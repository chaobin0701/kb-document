---
title: UnoCSS
description: 说明 UnoCSS 在 Kooboo 远程开发中的用法和真实项目里的常见兜底方式。
prev:
  text: Module
  link: /kooboo-remote/module
next:
  text: AI 远程开发补充说明
  link: /kooboo-remote/ai-remote-dev-notes
---

# UnoCSS

Kooboo 里的 UnoCSS 更适合理解成预扫描和预生成的样式方案。

它会扫描模板和视图里的类名，然后生成 CSS，不是浏览器运行时动态生成。

真实项目里为了确保扫描命中，常见做法是额外放扫描兜底资源，把一些容易漏掉的类名预埋进去，例如：

- `style-cache.html`
- `class-name-preloading.html`

## 本地开发时要注意

- 不要依赖动态拼接 class
- 如果必须有动态场景，要准备静态兜底或缓存承载
- 自定义规则、shortcuts、safelist 更适合集中放在 `unocss-conifg`
- 按钮类、排版类、容器类都适合提前放到扫描兜底资源里

## 代码示例

```html
<div>
  <p class="text-c-sm text-c-base text-c-lg text-c-xl text-c-hero"></p>
  <p class="gap-middle gap-none gap-small"></p>
  <p class="max-w-c-default max-w-c-small max-w-c-large"></p>
  <button class="btn-primary bg-c-blue border-c-blue text-c-white"></button>
  <button class="btn-primary bg-c-red border-c-red text-c-white"></button>
</div>
```
