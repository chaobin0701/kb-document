---
title: 邮件发送
description: 收录统一 SMTP 配置、消息组装和发送入口这类常用邮件模式。
prev:
  text: API 与表单
  link: /module-library/code/api
next:
  text: View 动态渲染
  link: /module-library/code/view-render
---

# 邮件发送

## 简介

适用于注册验证、通知邮件、表单通知和 webhook 发送邮件这类高频场景。

## 代码

```ts
type SendEmailInput = {
  to: string;
  subject: string;
  htmlBody: string;
};

function getSmtpServer() {
  const smtpServer = k.mail.createSmtpServer();
  smtpServer.host = emailConfig.smtpHost;
  smtpServer.port = emailConfig.smtpPort;
  smtpServer.username = emailConfig.smtpUsername;
  smtpServer.password = emailConfig.smtpPassword;
  return smtpServer;
}

function buildMailMessage(input: SendEmailInput) {
  const msg = k.mail.createMessage();
  msg.from = emailConfig.from;
  msg.to = input.to;
  msg.subject = input.subject;
  msg.htmlBody = input.htmlBody;
  return msg;
}
```

```ts
export function sendEmail(input: SendEmailInput): boolean {
  const smtpServer = getSmtpServer();
  const message = buildMailMessage(input);

  try {
    k.mail.smtp.send(smtpServer, message);
    return true;
  } catch (error) {
    return false;
  }
}
```

```ts
const htmlBody = `
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

sendEmail({
  to: email,
  subject: emailConfig.subject,
  htmlBody
});
```

## 备注

- SMTP 配置建议单独管理
- 真实项目里也可能按发件域名切换不同 SMTP
- 敏感信息不要直接写进代码
