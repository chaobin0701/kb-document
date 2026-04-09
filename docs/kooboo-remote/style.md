---
title: Style
description: 说明 `src/Style` 或 `src/css` 的基本作用和引用路径上的注意点。
prev:
  text: Script
  link: /kooboo-remote/script
next:
  text: Module
  link: /kooboo-remote/module
---

# Style

`src/Style` 或 `src/css` 就是用来存放 CSS 文件的。

## 注意点

- 保持文件名与引用路径一致
- 真实项目里常见 `src/css/index.css` 直接映射成 `/index.css`
- 不要把脚本逻辑混进样式目录
- 先看 layout 或 view 里怎么引用，再决定文件名

## 代码示例

```html
<link rel="stylesheet" href="/index.css" />
<link rel="stylesheet" href="/fonts.css" />
<link rel="stylesheet" href="/test.css" />
```

## 备注

- 如果样式没有生效，先检查引用路径是不是和文件名一致
