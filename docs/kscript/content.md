---
title: Content
description: "`k.content` 用于访问站点内容模型和内容数据。"
prev:
  text: Commerce
  link: /kscript/commerce
next:
  text: File
  link: /kscript/file
---

# Content

`k.content` 用于访问内容模型。内容类型和字段依赖当前站点配置，因此实际可用成员应以 `kooboo.d.ts` 和当前项目数据模型为准。

## 常用方式

- 先确认当前项目里有哪些内容类型
- 再从 `k.content.<TypeName>` 读取内容
- 使用前优先查看 `kooboo.d.ts` 里的具体字段定义和注释

## 代码示例

```ts
const list = k.content.blog.all()
k.response.json(list)
```
