---
title: Module
description: "`k.module` 用于模块配置、模块文件与模块本地存储操作。"
prev:
  text: Market
  link: /kscript/market
next:
  text: NET
  link: /kscript/net
---

# Module

`k.module` 主要用于模块开发场景，例如：

- 模块配置
- 模块内本地文件
- 模块内本地数据库
- 模块任务调度

## 常用成员

- `k.module.baseUrl`
- `k.module.config`
- `k.module.name`
- `k.module.localIndexedDb`
- `k.module.localSqlite`
- `k.module.localFile`
- `k.module.createModule(...)`
- `k.module.importZip(...)`
- `k.module.exportAsZip(...)`
- `k.module.openFileStream(...)`

## 代码示例

```ts
k.module.baseUrl
k.module.config
```

```ts
k.module.localFile.css.writeText('abc.css', 'div{color:red;}')
var result = k.module.localFile.css.readText('abc.css')
k.response.write(result)
```
