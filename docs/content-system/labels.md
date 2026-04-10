---
title: 标签/Label
description: 说明 Label 在 Kooboo 内容系统中的定位、开发方式和运行时入口。
prev:
  text: 内容/Content
  link: /content-system/content-types-and-data-types
next:
  text: HTML Block
  link: /content-system/html-blocks
---

# 标签/Label

`Label` 是内容系统里的短文本资源。

官网对 Label 的定义很直接：它是一个短语或单词。实际开发里更适合把它理解成页面固定文案的 `key:value` 管理方式。

## 为什么使用 Label

当我们在模板里给固定文案加上 `k-label`，保存之后，Kooboo 会在内容系统内部生成对应的 Label。后续修改文案时，不需要改代码，只需要改 Label 的值。

这样做的价值是：

- 页面固定文案可以从代码里抽离
- CMS 里可以直接改显示内容
- 多语言站点可以按语言分别维护

## 运行时入口

在 `kooboo.d.ts` 中，`k.site.labels` 对应 `LabelRepository`，常见能力包括：

- `all()`
- `get(nameOrId)`
- `getOrAdd(nameOrId, defaultValue)`
- `getValue(nameOrId)`
- `add(name, value, culture?)`
- `update(name, value, culture?)`
- `delete(nameOrId)`

## 开发方式

开发里最常见的写法是直接在固定文案上加 `k-label`。

```html
<span k-label="labelname">Original Text</span>
```

保存之后，会生成一个名字为 `labelname`、默认值为 `Original Text` 的标签。页面渲染时，元素里的文本会被 Label 的值替换。

这类写法更适合：

- 标题
- 按钮文字
- 表头
- 静态说明文案

如果要处理属性值，通常配合 `k-attribute` 使用：

```html
<img src="/icons/envelope.svg" alt="envelope" k-attribute="alt k.label('envelope')">
```

```html
<input
  placeholder="Business Email *"
  k-attribute="placeholder k.label('Business_Email_*')"
>
```

## 代码示例

```ts
var title = k.site.labels.getValue("site.title");
var slogan = k.site.labels.getOrAdd("site.slogan", "Default slogan");
```

```ts
k.site.labels.add("home.button.text", "Learn more");
k.site.labels.update("home.button.text", "Start now", "en");
```

```html
<h2 class="custom-h2 mb-3" k-label="Stay ahead with TABS Insights">Stay ahead with TABS Insights</h2>

<button type="submit" k-label="Subscribe">Subscribe</button>
```
