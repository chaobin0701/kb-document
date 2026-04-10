---
title: Api
description: 说明 `src/Api` 或 `src/api` 的作用和真实项目里常见的接口组织方式。
prev:
  text: 目录与文件作用总览
  link: /kooboo-remote/file-structure-overview
next:
  text: CodeBlock
  link: /kooboo-remote/codeblock
---

# Api

`src/Api` 或 `src/api` 用来放接口入口。

真实项目里常见两种写法：

- `//@k-url` + 文件即入口
- `k.api.get/post/put(...)` 在文件里注册 action

这两种风格可能同时存在。

## 本地开发时要注意

- 入口层尽量保持薄，主要负责读参数、校验、调用服务层、输出响应
- 不要默认写成 `req` / `res` 或 `ctx` 风格
- 项目如果已经采用某一种接口风格，就优先延续邻近实现
- `CodeBlock` 如果做了分级目录，导入时经常是点号写法，例如 `control.mail`、`model.contact`
- 除普通 JSON 接口外，也常见上传、Webhook、支付回调、订阅回调这类特殊入口

## 代码示例

```ts
//@k-url /api/contact
import { successResponse, errorResponse } from "Utils";
import contactModel from "model.contact";
import { sendEmail } from "control.mail";

k.api.post(() => {
  try {
    const { name, email, message } = k.request;
    const record = contactModel.create({ name, email, message });
    sendEmail(k.mail.createMessage());
    return successResponse(record);
  } catch (error) {
    return errorResponse(error?.message || error);
  }
});
```

```ts
//@k-url /api/auth/{action}
import { successResponse, errorResponse } from "Utils";

k.api.post("/register", () => {
  const body = JSON.parse(k.request.body || "{}");
  if (!body.email) {
    return errorResponse("email is required", -1, 400);
  }
  return successResponse({ ok: true });
});
```

```ts
//@k-url /api/upload
import { getFilePath, errorResponse, successResponse } from "Utils";

k.api.post(() => {
  try {
    const file = k.request.files[0];
    const dir = `user_upload/${k.utils.date.utcNow.getFullYear()}`;
    const savePath = getFilePath(dir, file.fileName);
    const fileInfo = k.file.writeBinary(savePath, file.bytes);
    return successResponse({ url: fileInfo.absoluteUrl });
  } catch (error) {
    return errorResponse(error?.message || error);
  }
});
```
