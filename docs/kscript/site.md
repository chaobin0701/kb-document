---
title: Site
description: "`k.site` 提供站点资源仓库、站点信息和站点级管理能力。"
prev:
  text: Security
  link: /kscript/security
next:
  text: State
  link: /kscript/state
---

# Site

`k.site` 主要用于站点资源和站点相关信息访问。

## 常用成员

- `k.site.version`
- `k.site.info`
- `k.site.pages`
- `k.site.views`
- `k.site.layouts`
- `k.site.htmlBlocks`
- `k.site.labels`
- `k.site.scripts`
- `k.site.styles`
- `k.site.images`
- `k.site.files`
- `k.site.routes`
- `k.site.search`
- `k.site.menus`
- `k.site.multilingual`
- `k.site.getHomeUrl()`
- `k.site.runJob(name)`

## 代码示例

```ts
var siteUrl = 'http://testsite.kooboo.com';
var role = 'master';
var expire = new Date().getTime() + 3600 * 1000 * 24 * 7;
k.site.createPublishUser(siteUrl, role, expire)
```

```ts
var home = k.site.getHomeUrl()
k.response.write(home)
```
