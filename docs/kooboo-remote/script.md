---
title: Script
description: 说明 `src/Script` 在远程开发中的基本作用，以及本地开发时需要特别注意的地方。
prev:
  text: View
  link: /kooboo-remote/view
next:
  text: Style
  link: /kooboo-remote/style
---

# Script

## 更适合解决

- 放置客户端脚本和第三方库
- 组织轻量前端工具代码
- 区分客户端资源和服务端脚本

## 常见对象

- `src/Script`
- 第三方库
- 页面脚本

## 不要混淆

- `Script` 默认是客户端资源目录
- 不要在这里写服务端 `k.*`

## 下一步阅读

- [Style](/kooboo-remote/style)
- [UnoCSS](/kooboo-remote/unocss)

## 远程开发下的基本作用

`src/Script` 更适合承载：

- 页面通过 `<script src="...">` 引入的脚本
- 第三方库
- 轻量前端工具函数

## 本地开发时要特别注意什么

- 命名尽量扁平，优先用点号表达分组
- 不要在这里写服务端 `k.*`
- 第三方库升级要谨慎，远端加载顺序可能影响结果

## 代码示例

```html
<script src="/vendor.vue-router.js"></script>
<script src="/http.js"></script>
```
