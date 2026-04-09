---
title: TypeScript & ES Module
description: KScript 支持 ES Module 与 TypeScript 语法。
prev:
  text: Concept
  link: /kscript/
next:
  text: Request Response
  link: /kscript/request-response
---

# TypeScript & ES Module

## ES Module

Kooboo 支持 ECMAScript 标准模块语法。你可以在一个文件里导出对象或方法，再在另一个文件里通过 `import` 引入。

## TypeScript

Kooboo 支持在 JavaScript 文件中直接书写 TypeScript，并在运行时进行编译。

## 常用写法

- 使用 `export` / `import` 组织模块
- 在脚本中直接书写类型注解
- 在服务端入口中通过 `k.response` 输出结果

## 代码示例

```ts
export function foo() {
  return 'bar'
}
```

```ts
import { foo } from './sample'

let text = foo()
k.response.write(text)
```

```ts
class Person {
  private name: string

  public constructor(name: string) {
    this.name = name
  }

  public getName(): string {
    return this.name
  }
}

var newUser = new Person('Smith')
k.response.write(newUser.getName())
```
