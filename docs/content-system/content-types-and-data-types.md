---
title: 内容类型与数据类型
description: 说明 Content Type、Content Folder、内容实例与字段数据类型之间的关系。
prev:
  text: 内容系统
  link: /content-system/
next:
  text: 标签与 HTML Block
  link: /content-system/labels-and-html-blocks
---

# 内容类型与数据类型

`Content Type`、`Content Folder` 和 `Content` 分别对应三层不同的概念：

- Content Type：字段结构定义
- Content Folder：某一类内容的集合
- Content：具体内容实例

## Content Type 是结构定义

Content Type 更像“模型模板”。它规定了这一类内容有哪些字段，以及这些字段分别使用什么数据类型。

在当前 `kooboo.d.ts` 里，可以直接看到很多由内容类型生成出来的字段注释，例如：

- `TextBox`
- `TextArea`
- `AdvancedMediaFile`
- 以及更业务化的字段名称与说明

这意味着对 Kooboo 来说，字段数据类型不是抽象概念，而是直接影响：

- 编辑器的表单形态
- 存储的数据结构
- 在模板与 KScript 中读取时的数据预期

## Content Folder 是内容集合

当一个 Content Type 被用于实际内容管理时，通常会形成某个内容文件夹。到了 KScript 这一层，它表现为 `k.content.<FolderName>`。

在当前 `kooboo.d.ts` 里，`k.content` 已经展开成很多具体文件夹，例如：

- `Blog`
- `Category`
- `WebsiteConfigs`
- `TemplatePage`
- 以及项目里大量业务化文件夹

这说明 `k.content` 不是一个泛型容器，而是由站点当前内容模型直接生成出来的强类型入口。

## Content 是具体实例

内容实例是真正被查询、读取、更新和删除的数据对象。`kooboo.d.ts` 已经给出了一套统一操作方式：

- `all()`
- `get(nameOrId)`
- `add(content)`
- `update(content)`
- `delete(nameOrId)`
- `find(query)`
- `findAll(query)`
- `move(source, prev, next)`

这套接口说明了一个关键点：内容系统不是“只读内容池”，而是一个可通过脚本参与管理和重排的数据层。

## 数据类型怎么理解

在 Kooboo 的语境里，数据类型更接近“字段编辑器 + 数据形态”的组合：

- `TextBox`、`TextArea` 更偏普通文本
- `AdvancedMediaFile` 往往意味着媒体文件引用
- 数字、布尔、日期等字段会影响查询与排序方式
- 多语言字段会进一步影响 `getValue`、当前文化和渲染结果

因此描述内容类型时，不能只写“这里有个字段”，更要写清楚这个字段是什么类型、编辑器期望是什么、渲染时会以什么形式使用。

## 运行时入口

`k.content` 是 CMS 内容模型在运行时的映射。脚本层更稳妥的做法是：

1. 先确认当前站点生成出的具体 folder 名称
2. 再使用 `k.content.<FolderName>` 访问
3. 再结合字段类型注释理解具体字段

## 代码示例

```ts
var blogs = k.content.Blog.all();
var blog = k.content.Blog.get("ef4e634b-87a6-b2d2-ec14-5139287beb6e");
```

```ts
var created = k.content.Blog.add({
  title: "blog1",
  body: "My first blog"
});
```

```ts
var item = k.content.Blog.find("title contains 'hello'");
var items = k.content.Blog.findAll("online == true");
```
