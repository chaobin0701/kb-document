---
title: K 模板语法
description: 总结 Kooboo 模板层里常见的 k-* 指令和基础写法。
prev:
  text: V 模板语法
  link: /template-engine/server-template-syntax
next:
  text: 内容/Content
  link: /content-system/content-types-and-data-types
---

# K 模板语法

`k-*` 是 Kooboo 自己的模板语法。

它和 `v-*` 在很多场景下看起来很像，但有两点要先记住：

- `k-*` 语法不需要显式写 `env="server"` 就可以执行
- `k-for` 和 `v-for` 不完全一样，`k-for` 不包含当前 DOM，而是对内部元素做循环

## 基本用法

### `k-if`

用于按条件输出元素。

```html
<div k-if="false"></div>
```

### `k-for`

用于循环内部内容，不会像 `v-for` 那样复制当前元素本身。

```html
<ul>
  <li k-for="item in items">{{item.title}}</li>
</ul>
```

上面的结果更接近“在当前节点内部循环输出 `li`”，而不是重复 `ul` 本身。

```html
<div class="section-content">
  <div k-for="component in components">
    {{component.name}}
  </div>
</div>
```

```html
<div class="section-content">
  <script env="server">
    const components = k.state.get("components") || [];
  </script>

  <div k-for="component in components">
    <script env="server">
      k.state.set("component", component);
      k.response.write(k.utils.template.render(`<view id="${component._viewName}"></view>`));
    </script>
  </div>
</div>
```

### `k-content`

用于把元素绑定到内容系统数据。

```html
<div k-content="article.title"></div>
```

### `k-attribute`

用于把属性值交给 Kooboo 模板层生成。

```html
<img src="/icons/envelope.svg" alt="envelope" k-attribute="alt k.label('envelope')">
```

```html
<input k-attribute="placeholder k.label('Business_Email_*')">
```

### `k-placeholder`

用于布局和页面之间的占位区域。

```html
<main k-placeholder="main" class="w-full"></main>
```

```html
<div k-placeholder="Main">.</div>
```

## 关于 `k-label`

`k-label` 属于内容系统里的 Label 用法。

它虽然写在模板里，但本质上是把固定文案接入 CMS 的标签体系，因此单独放在 [标签/Label](/content-system/labels) 里说明。

## 备注

- `k-*` 语法可以直接执行，不需要显式声明 `env="server"`。
- `k-for` 的重点不是复制当前 DOM，而是循环当前 DOM 内部的内容。
- 固定文案管理优先看 [标签/Label](/content-system/labels)。
