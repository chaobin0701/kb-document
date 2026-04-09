---
title: Script
description: 说明 `src/Script` 或 `src/js` 的作用和真实项目里的引用方式。
prev:
  text: View
  link: /kooboo-remote/view
next:
  text: Style
  link: /kooboo-remote/style
---

# Script

`src/Script` 或 `src/js` 用来放客户端脚本和第三方库。

真实项目里这些文件通常会直接映射成站点资源路径，例如：

- `src/js/axios.js` -> `/axios.js`
- `src/js/http.js` -> `/http.js`
- `src/js/custom.js` -> `/custom.js`
- `src/js/axios/min.js` -> `/axios/min.js`
- `src/js/vee-validate/iife.js` -> `/vee-validate/iife.js`

## 本地开发时要注意

- 不要在这里写服务端 `k.*`
- 先看 layout 里怎么引用，再决定文件名
- 第三方库升级要谨慎，远端加载顺序可能影响结果
- 如果项目已经用了子目录，就直接沿用，不要强行压平

## 代码示例

```html
<script src="/axios/min.js"></script>
<script src="/http.js"></script>
<script src="/custom.js" defer=""></script>
<script src="/vee-validate/iife.js"></script>
```
