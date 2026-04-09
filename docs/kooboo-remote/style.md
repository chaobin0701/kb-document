---
title: Style
description: 说明 `src/Style` 在远程开发中的基本作用，以及本地开发时需要特别注意的地方。
prev:
  text: Script
  link: /kooboo-remote/script
next:
  text: Module
  link: /kooboo-remote/module
---

# Style

## 更适合解决

- 放置站点样式资源
- 管理 reset、主题和业务样式
- 保持样式文件命名和引用关系稳定

## 常见对象

- `src/Style`
- reset
- 组件库样式
- 业务样式

## 不要混淆

- `Style` 是样式资源目录，不适合混入脚本逻辑
- 这里的文件名通常直接映射到站点资源路径

## 下一步阅读

- [Module](/kooboo-remote/module)
- [UnoCSS](/kooboo-remote/unocss)

## 远程开发下的基本作用

`src/Style` 更适合承载：

- reset
- 组件库样式
- 业务样式

## 本地开发时要特别注意什么

- 保持文件名与引用路径一致
- 不要把脚本逻辑混进样式目录
- 命名尽量扁平，优先用点号表达层级

## 代码示例

```html
<link rel="stylesheet" href="/reset.css" />
<link rel="stylesheet" href="/theme.dark.css" />
```
