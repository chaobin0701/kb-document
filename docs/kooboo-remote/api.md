---
title: Api
description: 说明 `src/Api` 在远程开发中的基本作用，以及本地开发时需要特别注意的地方。
prev:
  text: 目录与文件作用总览
  link: /kooboo-remote/file-structure-overview
next:
  text: CodeBlock
  link: /kooboo-remote/codeblock
---

# Api

## 更适合解决

- 判断接口处理逻辑应该怎么放
- 组织请求读取、参数校验和响应输出
- 避免把服务端入口写得过重

## 常见对象

- `src/Api`
- `k.request`
- `k.response`
- `k.api`

## 不要混淆

- `Api` 更像入口层，不是业务沉淀层
- 这里解决的是接口入口，不是页面模板或可复用服务层

## 下一步阅读

- [CodeBlock](/kooboo-remote/codeblock)
- [Request Response](/kscript/request-response)

## 远程开发下的基本作用

`src/Api` 主要承担服务端入口职责。更适合在这里做的事情有：

- 读取请求参数
- 做基础校验
- 调用业务层
- 输出响应

更稳妥的写法是保持入口薄，只做编排，不在入口里堆大量业务逻辑。

## 本地开发时要特别注意什么

- 本地看到的是文件，远端看到的是接口入口
- 不要默认写成 `req` / `res` 或 `ctx` 风格
- 项目如果已经采用“文件即入口”或 `k.api` 注册风格，应延续邻近实现
- 命名尽量扁平，分组时优先用点号而不是子目录

## 代码示例

```ts
// src/Api/user.create.ts
const name = k.request.get("name");
if (!name) {
  k.response.statusCode(400);
  k.response.json({ ok: false, message: "name is required" });
  k.response.stop();
}

const result = createUser({ name });
k.response.json({ ok: true, data: result });
```
