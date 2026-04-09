---
title: Database
description: "`k.DB` 提供多种数据库访问能力。"
prev:
  text: Request Response
  link: /kscript/request-response
next:
  text: Account
  link: /kscript/account
---

# Database

## 能力范围

数据库能力统一通过 `k.DB` 访问，不同数据库类型的操作方式尽量保持一致。

## 常用成员

- `k.DB.indexedDb`
- `k.DB.mongo`
- `k.DB.mysql`
- `k.DB.sqlServer`
- `k.DB.sqlite`
- `k.DB.sequenceDb`
- `k.DB.keyValue`

## 代码示例

```ts
k.DB.indexedDb.tablename.all()
k.DB.mongo.tablename.all()
k.DB.mysql.tablename.all()
k.DB.sqlServer.tablename.all()
k.DB.sqlite.tablename.all()
k.DB.sequenceDb.openDb('path', 'filename').range(0, 1000)
k.DB.keyValue.get('key')
```

```ts
var user = {}
user.FirstName = 'Joe'
user.LastName = 'Smith'
k.DB.sqlite.User.add(user)
```
