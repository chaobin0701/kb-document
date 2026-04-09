---
title: Security
description: "`k.security` 提供哈希、加密和 JWT 等安全能力。"
prev:
  text: Payment
  link: /kscript/payment
next:
  text: Site
  link: /kscript/site
---

# Security

`k.security` 用于安全和加密相关能力。

## 常用成员

- `k.security.hashGuid`
- `k.security.md5`
- `k.security.sha1`
- `k.security.sha256`
- `k.security.sha256Binary`
- `k.security.sha512`
- `k.security.encrypt`
- `k.security.decrypt`
- `k.security.jwt`
- `k.security.rsa`

## 代码示例

```ts
const input = "myvalue";
const md5value = k.security.md5(input);
const shavalue = k.security.sha1(input);
```

```ts
const encrptyValue = k.security.encrypt(input, "hashkey");
const decryptValue = k.security.decrypt(encrptyValue, "hashkey");
```
