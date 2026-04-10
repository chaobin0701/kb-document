---
title: CodeBlock
description: 说明 `src/CodeBlock` 或 `src/code` 的作用和真实项目里常见的组织方式。
prev:
  text: Api
  link: /kooboo-remote/api
next:
  text: Layout
  link: /kooboo-remote/layout
---

# CodeBlock

`src/CodeBlock` 或 `src/code` 更适合放服务端可复用逻辑。

真实项目里通常不只会放 service 和 utils，还会继续分成：

- `controller` / `control`
- `model`
- `module`
- `types`
- `env`
- `Script`
- 第三方能力封装

这里经常承载邮件、支付、多语言、内容查询、数据库模型这些基础能力。

## 本地开发时要注意

- 服务层可以直接使用 Kooboo 运行时，但要控制边界，不要把响应输出散落到各处
- 能集中做的格式化、错误处理、公共返回结构，尽量放在这里
- 真实项目里的命名不一定统一成单一英文词，`control`、`model`、`env`、`Script` 都很常见
- 如果项目已经有现成分层，就直接沿用
- `CodeBlock` 分级目录的导入方式要特别注意

## 导入方式

顶层文件通常直接按文件名导入：

```ts
import { successResponse, errorResponse } from "Utils";
```

如果 `CodeBlock` 下面还有分级目录，例如：

```text
src/code/control/mail.ts
src/code/model/contact.ts
```

导入时通常使用点号，而不是把目录完整写出来：

```ts
import { sendEmail } from "control.mail";
import contactModel from "model.contact";
```

不要写成：

```text
不要把 CodeBlock 的分级目录直接写成文件系统路径。
例如 control/mail.ts 不要写成 code/control/mail。
```

## 代码示例

```ts
import { successResponse, errorResponse } from "Utils";
import { sendEmail } from "control.mail";

export function successResponse(data?: any) {
  return {
    code: 0,
    data,
    msg: "success"
  };
}

export function errorResponse(msg: string, code = -1, status = 400) {
  k.response.json({ code, msg });
  return k.api.httpCode(status);
}
```

## 备注

- `CodeBlock` 的目录结构可以分级，但导入写法不按文件系统路径直接照抄。
- 顶层文件常见写法是 `"Utils"` 这种简单名。
- 分级目录常见写法是 `"control.mail"`、`"model.contact"` 这种点号形式。
