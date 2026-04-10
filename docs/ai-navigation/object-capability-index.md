---
title: 对象与能力索引
description: 按对象名和能力边界快速定位到站内最相关页面。
prev:
  text: AI 导航索引
  link: /ai-navigation/
next:
  text: 问题到页面映射
  link: /ai-navigation/question-to-page-map
---

# 对象与能力索引

| 问题对象 | 所属系统 | 推荐入口页 | 常见运行时对象 | 常见误判点 |
| --- | --- | --- | --- | --- |
| `k.request` | KScript | [Request Response](/kscript/request-response) | `k.request.queryString` `k.request.form` | 不要写成普通框架的 `req` |
| `k.response` | KScript | [Request Response](/kscript/request-response) | `k.response.json` `k.response.file` | 不要把模板输出和 API 响应混在一起 |
| `k.api` | KScript | [Web API](/kscript/web-api) | `k.api.get` `k.api.post` | 不等于浏览器端 fetch 封装 |
| `k.db` | KScript | [Database](/kscript/database) | `k.db.sql` `k.db.transaction` | 不要直接按 ORM 习惯猜方法 |
| `k.account` | KScript | [Account](/kscript/account) | `k.account.currentUser` | 不要和站点内容权限混为一谈 |
| `k.site.labels` | 内容系统 | [标签/Label](/content-system/labels) | `getValue` `getOrAdd` | 不是 `k.content` 内容文件夹 |
| `k.site.htmlBlocks` | 内容系统 | [HTML Block](/content-system/html-blocks) | `getValue` `update` | 不是普通模板片段文件 |
| `k.content.Blog` | 内容系统 | [内容/Content](/content-system/content-types-and-data-types) | 文件夹实例、内容查询 | 不等于 Type 定义本身 |
| `Commerce Settings` | 内容系统 | [电商/Commerce](/content-system/commerce-and-settings) | 商品字段、配置对象 | 不只是 KScript API |
| `src/Api` | Kooboo 远程开发 | [AI 远程开发补充说明](/kooboo-remote/ai-remote-dev-notes) | 服务端入口 | 不要按 Express 目录理解 |
| `src/Module` | Kooboo 远程开发 | [AI 远程开发补充说明](/kooboo-remote/ai-remote-dev-notes) | 模块资源区 | 不等于 npm module |
| `module` | 模块案例库 | [模块案例库](/module-library/) | 模块方案、代码模式 | 不要一上来从零生成 |

## 代码示例

```ts
// 看到对象名时，先做归类，再决定去哪一页看正文
const lookup = {
  "k.request": "/kscript/request-response",
  "k.site.labels": "/content-system/labels",
  "src/Api": "/kooboo-remote/ai-remote-dev-notes",
  "module": "/module-library/"
};
```
