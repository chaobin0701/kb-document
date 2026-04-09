---
title: 优秀代码
description: 收录值得重复使用的代码模式，方便开发者和 AI 快速复用。
prev:
  text: 模块案例库
  link: /module-library/
---

# 优秀代码

这一页用于收录在现实项目里已经写顺、值得重复使用的代码模式。

## 导览

- 请求读取与响应输出模式
- DTO 校验模式
- 内容查询模式
- 标签与 HTML Block 读取模式
- 商品与内容联动模式
- 模板层 server block 模式
- 常见工具函数

## 记录方式

每段代码建议附带：

- 这段代码解决什么问题
- 它为什么值得复用
- 它依赖哪些对象
- 它更适合放在哪个目录

## 邮件发送模式

这一类代码更适合先保留成基础模式，因为它通常会同时涉及：

- SMTP 配置
- 邮件模板变量替换
- 统一发送出口
- 错误捕获

### 适合解决

- 注册验证邮件
- 密码重置邮件
- 通知邮件
- 表单提交后的自动邮件

### 目录建议

```text
src/
├── Api/
├── CodeBlock/
│   ├── Services/
│   └── Utils/
└── View/
```

### 更稳妥的组织方式

- SMTP 配置读取单独封装
- 发送函数单独封装
- 邮件正文组装和变量替换放在更靠近业务的地方
- 账号密码这类敏感信息不要直接写在代码里

### 代码示例

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

const success = sendEmail({
  to: email,
  subject: emailConfig.subject,
  htmlBody
});
```

### 为什么这段模式值得保留

- 它把配置、消息组装和发送动作拆开了
- 它比把 SMTP 信息和模板逻辑全部塞进一个函数更容易维护
- 对 AI 来说，这类代码也更适合作为后续二次编程的默认参考

## 其他代码示例

```ts
const title = k.site.labels.getValue("site.title");
const hero = k.site.htmlBlocks.getValue("home.hero");
const blogs = k.content.Blog.findAll("online == true");

k.response.json({
  title,
  hero,
  blogs
})
```

```ts
const input = {
  name: k.request.queryString.name,
  email: k.request.form.email
}

if (!input.email) {
  k.response.statusCode(400)
  k.response.json({ ok: false, message: "email is required" })
  k.response.stop()
}
```
