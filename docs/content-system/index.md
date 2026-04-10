---
title: 内容系统
description: 围绕 Kooboo CMS 的内容类型、标签、HTML Block 与电商配置建立统一说明。
prev:
  text: Utils
  link: /kscript/utils
next:
  text: 内容/Content
  link: /content-system/content-types-and-data-types
---

# 内容系统

这一栏用于专门说明 Kooboo 里偏 CMS 的对象和建模方式。

内容系统至少包含这些核心对象：

- Content Type
- Content Folder
- Content
- HTML Block
- Label

而在当前仓库根目录的 [`kooboo.d.ts`](/Users/a1234/Desktop/my-projects/kb-document/kooboo.d.ts) 里，这些对象又分别以两种方式出现：

- 站点仓库入口：如 `k.site.labels`、`k.site.htmlBlocks`
- 内容入口：如 `k.content.<FolderName>`

因此这个栏目不讲“脚本 API 本身”，而是讲这些对象分别代表什么、怎么建模、以及运行时如何访问。

## 为什么单独拆出这个栏目

如果只看运行时入口，很容易把 `k.content`、`k.site.labels`、`k.site.htmlBlocks` 误解成单纯的脚本调用方式。但它们背后其实对应的是 CMS 对象本身：

- 内容类型决定字段结构
- 内容文件夹决定实例集合
- Label 更适合短文本、多语言文案
- HTML Block 更适合可复用富文本或 HTML 片段
- 电商配置既有内容侧建模，也有 `k.commerce.settings` 这类运行时配置面

## 阅读顺序

1. [内容/Content](/content-system/content-types-and-data-types)
2. [标签/Label](/content-system/labels)
3. [HTML Block](/content-system/html-blocks)
4. [电商/Commerce](/content-system/commerce-and-settings)

## 代码示例

```ts
// 内容入口
var blogs = k.content.Blog.all();

// Label 与 HTML Block
var title = k.site.labels.getValue("site.title");
var hero = k.site.htmlBlocks.getValue("home.hero");
```
