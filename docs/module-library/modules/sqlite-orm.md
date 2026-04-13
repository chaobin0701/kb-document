---
title: sqlite_orm
description: 一个基于 `k.DB.sqlite` 的常用模块，用来快速创建表模型并封装常见 CRUD。
prev:
  text: View 动态渲染
  link: /module-library/code/view-render
---

# sqlite_orm

`sqlite_orm` 是一个非常常用的基础模块，用来基于 `k.DB.sqlite` 快速创建表模型，并统一常见的增删改查能力。

它当前的真实路径是：

```text
src/module/sqlite_orm
├── code/
│   ├── index.ts
│   ├── types.ts
│   └── utils.ts
└── root/
    └── Module.config
```

## 简介

- 适合在 Kooboo 项目里快速建立 SQLite 表模型
- 把建表、默认值、校验、时间戳、查询和更新都收在一个统一入口里
- 更适合放在基础能力层，被 `code/control`、`code/model`、`api` 等位置复用

## 常用用法

模块的核心入口是 `createModel(...)`，常见能力包括：

- `create`
- `save`
- `findById`
- `findOne`
- `findAll`
- `updateById`
- `updateOne`
- `updateMany`
- `deleteById`
- `deleteOne`
- `deleteMany`

## 导入方式

模块导入时直接使用模块名即可，不需要把路径继续写到 `code/index`，也不需要写 `module/` 前缀。

## 代码示例

```ts
import { createModel } from "sqlite_orm";

export const adminModel = createModel("admin", {
  user_id: {
    type: "string",
    required: true
  },
  name: {
    type: "string",
    required: true
  },
  surname: {
    type: "string",
    required: true
  },
  avatar: {
    type: "string"
  },
  role: {
    type: "string",
    default: "staff"
  }
}, {
  timestamps: true
});
```

```ts
const created = adminModel.create({
  user_id: "u_001",
  name: "Jia",
  surname: "Xiang",
  role: "admin"
});

const one = adminModel.findOne({ user_id: "u_001" });
const list = adminModel.findAll({ role: "admin" });

adminModel.updateById(created._id, {
  avatar: "/avatars/u_001.png"
});
```

```ts
const row = adminModel.findOne({ user_id: "u_001" });

if (row) {
  const safeData = row.exclude(["_id"]);
  const idOnly = row.pick(["_id"]);
  k.response.json({ safeData, idOnly });
}
```

## 备注

- 这个模块底层仍然是 `k.DB.sqlite`
- 默认入口会自动指向模块的主导出，不需要手动写 `code/index`
- 导入时直接写 `sqlite_orm`
- `timestamps: true` 时会自动补时间字段
- 字段校验是通过 schema 里的 `validate(...)` 完成的
- 文档示例保留真实用法方向，但字段和业务对象可以按项目自行调整
