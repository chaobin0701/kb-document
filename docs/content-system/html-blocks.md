---
title: HTML Block
description: 说明 HTML Block 在 Kooboo 内容系统中的定位、使用方式和运行时入口。
prev:
  text: 标签/Label
  link: /content-system/labels
next:
  text: 电商/Commerce
  link: /content-system/commerce-and-settings
---

# HTML Block

`HTML Block` 和 Label 功能类似，但更适合管理富文本或可复用 HTML 片段。

它不是单纯的模板文件，更像是由内容系统托管的一段 HTML 内容。

## 适合用在哪

- 富文本片段
- 一段可复用 HTML
- 页面中重复出现的说明区、营销区、嵌入片段

## 运行时入口

在 `kooboo.d.ts` 中，`k.site.htmlBlocks` 对应 `HtmlBlockRepository`，常见能力包括：

- `all()`
- `get(nameOrId)`
- `getOrAdd(nameOrId, defaultValue)`
- `getValue(nameOrId)`
- `add(name, value, culture?)`
- `update(name, value, culture?)`
- `delete(nameOrId)`

## 使用方式

HTML Block 更适合把一整段富文本或 HTML 结构交给 CMS 管理。

和 Label 不同，它管理的不是一个短词或短句，而是一段 HTML 内容。

因此它更适合：

- 营销区块
- 可编辑说明内容
- 可复用嵌入片段

## 代码示例

```ts
var hero = k.site.htmlBlocks.getValue("home.hero");
k.site.htmlBlocks.update("home.hero", "<div class='hero'>Hello</div>");
```

```ts
var footerNotice = k.site.htmlBlocks.getOrAdd(
  "footer.notice",
  "<p>Default footer notice</p>"
);
```

```html
<div env="server">
  <script env="server">
    const hero = k.site.htmlBlocks.getValue("home.hero");
    k.response.write(hero);
  </script>
</div>
```
