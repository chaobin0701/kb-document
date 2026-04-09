---
title: 电商配置与内容关联
description: 说明电商模块配置、内容建模与 k.commerce.settings 的关系。
prev:
  text: 标签与 HTML Block
  link: /content-system/labels-and-html-blocks
next:
  text: Kooboo 远程开发导览
  link: /kooboo-remote/
---

# 电商配置与内容关联

Kooboo 的电商能力不能只理解成一组 `k.commerce.*` API。更准确的理解应该是：

- 一部分是运行时能力，如 `k.commerce.product`、`k.commerce.order`
- 一部分是配置面，如 `k.commerce.settings`
- 另一部分则通过内容系统参与建模，例如产品相关内容、营销内容、展示内容

## 电商不只是商品 API

在 `kooboo.d.ts` 中，`k.commerce` 已经包含：

- `category`
- `product`
- `cart`
- `order`
- `customer`
- `discount`
- `shipping`
- `address`
- `membership`
- `wishlist`
- `currency`
- `settings`

这说明 Kooboo 电商模块本身就是一套完整领域模型，而不是单独几个下单接口。

## `settings` 是配置入口

`k.commerce.settings` 说明电商模块除了数据对象之外，还有一层全局配置。虽然当前类型文件没有把 `settings` 的所有字段直接展开，但它已经明确表达了：

- 电商存在系统级设置
- 这些设置和具体 `product`、`order` 等对象不是同一层

因此文档里应把“配置”和“实例数据”分开写，不要混成一页“商品 API”。

## CMS 视角下如何理解电商

从内容系统角度看，电商常常会同时依赖三层对象：

1. 电商核心对象
   - 商品、分类、购物车、订单、客户

2. 内容建模对象
   - 产品介绍页、营销内容、品牌说明、FAQ、活动文案

3. 站点级复用对象
   - Label
   - HTML Block
   - 全局配置内容

也就是说，电商页面往往并不是“只从 `k.commerce.product` 读数据”，而是内容系统和电商系统一起工作。

## 文档里推荐怎么描述

在内容相关文档里，更推荐用下面这种方式描述电商配置：

- 业务数据：来自 `k.commerce.*`
- 展示内容：来自 `k.content.*`
- 短文案：来自 `k.site.labels`
- 复用片段：来自 `k.site.htmlBlocks`
- 全局配置：来自 `k.commerce.settings` 或内容系统中的配置型内容

这样比简单说“这是商品模块”更贴近 Kooboo 的实际组织方式。

## 代码示例

```ts
var product = k.commerce.product.get("hello-world");
var categories = k.commerce.category.list();
var settings = k.commerce.settings;
```

```ts
var promoTitle = k.site.labels.getValue("shop.promo.title");
var promoBlock = k.site.htmlBlocks.getValue("shop.promo.hero");
```

```ts
var pageConfig = k.content.WebsiteConfigs.get("default");
k.response.json({
  product: product,
  categories: categories,
  settings: settings,
  pageConfig: pageConfig
})
```
