---
title: Mail
description: "`k.mail` 提供邮件发送、收取和邮件工具能力。"
prev:
  text: File
  link: /kscript/file
next:
  text: Market
  link: /kscript/market
---

# Mail

`k.mail` 用于邮件发送或相关邮件能力。

## 更适合解决

- 创建邮件消息对象
- 配置 SMTP 服务器
- 发送验证码、通知邮件和系统邮件

## 常见对象

- `k.mail.createMessage()`
- `k.mail.createSmtpServer()`
- `k.mail.smtp.send(...)`

## 不要混淆

- 邮件内容对象和 SMTP 配置对象是两层不同概念
- 发件账号、密码和 host 不适合直接写死在业务代码里

## 下一步阅读

- [优秀代码](/module-library/code-patterns)
- [内容系统](/content-system/)

## 常用成员

- `k.mail.utility`
- `k.mail.smtp`
- `k.mail.imap`
- `k.mail.module`
- `k.mail.createMessage()`
- `k.mail.createSmtpServer()`

## 更合理的发送流程

更适合把邮件发送分成三层：

1. 读取邮件配置
2. 组装消息对象
3. 调用统一发送函数

这样更方便以后替换 SMTP 配置、补日志、加错误处理，或者把不同类型邮件统一到一个出口。

## 代码示例

```ts
var message = k.mail.createMessage()
message.subject = "Hello"
message.body = "Mail from KScript"
```

```ts
function getSmtpServer() {
  const smtpServer = k.mail.createSmtpServer();
  smtpServer.host = "smtp.example.com";
  smtpServer.port = 587;
  smtpServer.username = "mailer@example.com";
  smtpServer.password = "smtp-password-from-config";

  return smtpServer;
}

export function sendEmail(mailMessage) {
  const smtpServer = getSmtpServer();
  try {
    k.mail.smtp.send(smtpServer, mailMessage);
    return true;
  } catch (error) {
    return false;
  }
}
```

```ts
const msg = k.mail.createMessage();
msg.from = emailConfig.from;
msg.to = email;
msg.subject = emailConfig.subject;
msg.htmlBody = `
  <div>
    <p>Hello ${user.first_name} ${user.last_name}</p>
    <p>${emailConfig.content}</p>
    <p>
      <a href="${baseUrl}/api/auth/verify?_id=${record._id}&${params}">
        Verify email
      </a>
    </p>
  </div>
`;

return sendEmail(msg);
```
