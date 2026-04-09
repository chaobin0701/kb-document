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

## 备注

- 真实项目里经常会先统一封装 SMTP 配置，再在业务层调用发送函数
- 也经常会在 webhook、表单处理、验证邮件这些入口里复用同一套发送逻辑
- 真实项目里也可能按发件域名切换不同 SMTP，并记录成功或失败状态
- 文档示例里仍然只使用占位值，不展示真实账号密码

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

function logEmailResult(mailMessage, status) {
  return { to: mailMessage.to, status };
}

export function sendEmail(mailMessage) {
  const smtpServer = getSmtpServer();
  try {
    k.mail.smtp.send(smtpServer, mailMessage);
    logEmailResult(mailMessage, "success");
    return true;
  } catch (error) {
    logEmailResult(mailMessage, "fail");
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
