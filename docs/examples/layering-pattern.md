---
title: 分层模式
description: 结合 README 与真实示例代码，说明入口薄、DTO 校验和可抽离业务层的协作方式。
prev:
  text: 示例导览
  link: /examples/
next:
  text: 协作总览
  link: /collaboration/
---

# 分层模式

本页根据 `examples/README.md`、`dto.example.ts`、`service.example.ts`、`api-handler.example.ts` 进行整理。

## 推荐三层

### 1. 入口层

典型位置：

- `src/Api/*`
- 模板层中的 `<script env="server">`

职责：

- 读取 `k.request`
- 调用 DTO 解析
- 调用业务层
- 写入 `k.response`

原则：保持很薄，只做适配和编排。

### 2. DTO / 校验层

职责：

- 把不可信输入转换为可信结构
- 集中做字段校验和规范化

现有示例 `dto.example.ts` 展示了这种思路：

```ts
export function parseCreateUserDTO(input: Record<string, unknown>): Result<CreateUserDTO> {
  // 校验 email、displayName，并规范化输入
}
```

这类代码不依赖 `k.*`，更适合本地验证和复用。

### 3. 业务层

职责：

- 封装业务规则
- 通过依赖注入接收仓储、日志、时间等外部能力

现有示例 `service.example.ts` 的重点不是具体“创建用户”，而是演示如何避免在核心业务函数里直接耦合 `k.*`。

```ts
export async function createUser(deps: CreateUserServiceDeps, dto: CreateUserDTO) {
  // 只依赖注入的 repository / logger / clock
}
```

## API 入口示例在表达什么

`api-handler.example.ts` 用一个 `KoobooLike` 接口说明入口层如何只做这四步：

1. 读请求
2. 调 DTO
3. 调 service
4. 写响应

这和文档站里一直强调的“入口薄”是同一件事。

## 为什么这种分层适合远程开发

- 改动更集中，远端验证时更容易缩小问题范围
- 业务层和 DTO 层更容易做本地检查
- 入口层保持轻量，减少对远端运行时的直接耦合面

## 代码示例

```ts
export async function createUserApiEntry(k: KoobooLike, deps: { users: UserRepository }) {
  const parsed = parseCreateUserDTO(k.request.form ?? {})
  if (!parsed.ok) {
    k.response.statusCode(400)
    k.response.write(parsed)
    return
  }

  const result = await createUser(
    {
      users: deps.users,
      logger: k.logger,
      clock: { nowISO: () => new Date().toISOString() },
      idFactory: () => `u_${Math.random().toString(16).slice(2)}`
    },
    parsed.value
  )

  k.response.write(result)
}
```
