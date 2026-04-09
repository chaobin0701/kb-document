---
title: Account
description: "`k.account` 用于登录、当前用户和组织信息访问。"
prev:
  text: Database
  link: /kscript/database
next:
  text: Web API
  link: /kscript/web-api
---

# Account

## 能力范围

`k.account` 主要用于用户登录、登录态检查、当前用户信息读取，以及组织相关信息获取。

## 常用成员

- `k.account.login(...)`
- `k.account.ensureLogin(...)`
- `k.account.user.current`
- `k.account.organization.current`

## 代码示例

```ts
let loginUser = k.account.login('username', 'password')
```

```ts
k.account.ensureLogin('/redirecttologin')
```

```ts
let user = k.account.user.current
let org = k.account.organization.current
```
