---
title: 标签与 HTML Block
description: 说明 Label 与 HTML Block 在 Kooboo 内容系统中的边界与使用方式。
prev:
  text: 内容类型与数据类型
  link: /content-system/content-types-and-data-types
next:
  text: 电商配置与内容关联
  link: /content-system/commerce-and-settings
---

# 标签与 HTML Block

## 更适合解决

- 管理短文本和多语言文案
- 管理可复用 HTML 片段
- 区分站点文案资源和内容文件夹实例

## 常见对象

- `k.site.labels`
- `k.site.htmlBlocks`

## 不要混淆

- `Label` 不是内容文件夹实例
- `HTML Block` 不是普通模板文件

## 下一步阅读

- [电商配置与内容关联](/content-system/commerce-and-settings)
- [模块案例库](/module-library/)

`Label` 和 `HTML Block` 是两类职责边界很清晰的内容资源。

## Label 更适合短文本与文案

在 `kooboo.d.ts` 中，`k.site.labels` 对应 `LabelRepository`，它提供的核心能力包括：

- `all()`
- `get(nameOrId)`
- `getOrAdd(nameOrId, defaultValue)`
- `getValue(nameOrId)`
- `add(name, value, culture?)`
- `update(name, value, culture?)`
- `delete(nameOrId)`

从这些接口可以看出，Label 的定位更接近：

- 可命名的短文本资源
- 支持多语言
- 适合作为站点文案、按钮文案、标题、提示词等复用文本

## HTML Block 更适合可复用 HTML 片段

同样在 `kooboo.d.ts` 中，`k.site.htmlBlocks` 对应 `HtmlBlockRepository`，它也支持：

- `all()`
- `get(nameOrId)`
- `getOrAdd(nameOrId, defaultValue)`
- `getValue(nameOrId)`
- `add(name, value, culture?)`
- `update(name, value, culture?)`
- `delete(nameOrId)`

它和 Label 在接口上非常像，但对象语义不同。HTML Block 更适合：

- 富文本片段
- 一段可复用 HTML
- 页面中重复出现的说明区、营销区、嵌入片段

## 两者怎么选

可以用一个简单判断：

- 如果内容本质上是“文案”，优先用 Label
- 如果内容本质上是“结构化 HTML 片段”，优先用 HTML Block

这样做的好处是：

- 文案和片段分层更清晰
- 多语言文案管理更自然
- 页面模板里不会把所有可编辑内容都塞进同一种对象

## 运行时入口

在运行时：

- `k.site.labels.getValue(...)` 更适合直接取文案
- `k.site.htmlBlocks.getValue(...)` 更适合直接取 HTML 内容

这两类对象都属于内容系统，但它们并不是 `k.content` 下的文件夹实例，而是站点级内容仓库对象。

## 代码示例

```ts
var title = k.site.labels.getValue("site.title");
var slogan = k.site.labels.getOrAdd("site.slogan", "Default slogan");
```

```ts
k.site.labels.add("home.button.text", "Learn more");
k.site.labels.update("home.button.text", "Start now", "en");
```

```ts
var hero = k.site.htmlBlocks.getValue("home.hero");
k.site.htmlBlocks.update("home.hero", "<div class='hero'>Hello</div>");
```
