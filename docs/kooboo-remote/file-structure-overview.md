---
title: 目录与文件作用总览
description: 先说明远程开发下各目录的基本作用，再补充本地开发时的特殊性与注意事项。
prev:
  text: Kooboo 远程开发
  link: /kooboo-remote/
next:
  text: Api
  link: /kooboo-remote/api
---

# 目录与文件作用总览

## 更适合解决

- 快速判断某个目录里的代码是做什么的
- 分清服务端入口、业务层、模板层、客户端资源和模块区
- 在远程开发与本地开发之间建立统一理解

## 常见对象

- `src/Api`
- `src/CodeBlock`
- `src/Layout`
- `src/Page`
- `src/View`
- `src/Script`
- `src/Style`
- `src/Module`

## 不要混淆

- 目录不只是组织方式，也决定运行时语义
- 本地目录存在，不代表最终运行也发生在本地

## 下一步阅读

- [Api](/kooboo-remote/api)
- [CodeBlock](/kooboo-remote/codeblock)

## 先看远程开发下的基本作用

在 Kooboo 项目里，目录首先决定“这段代码在哪跑、怎么被引用、由谁触发”。因此更稳妥的理解顺序是先看远程站点里的运行时作用，再回头理解本地开发只是承载这些资源的编辑方式。

| 目录 | 基本作用 | 默认运行时 |
| --- | --- | --- |
| `src/Api` | API / 后端处理入口 | 服务端 |
| `src/CodeBlock` | 服务端业务逻辑、模型、工具 | 服务端 |
| `src/Layout` | 布局模板与服务端准备逻辑 | 混合 |
| `src/Page` | 页面入口资源 | 混合 |
| `src/View` | 可复用视图、组件、局部模板 | 混合 |
| `src/Script` | 客户端脚本、第三方库 | 客户端 |
| `src/Style` | 样式资源 | 客户端 |
| `src/Module` | 模块资源区 | 视模块类型而定 |

## 再看本地开发的特殊性

本地开发主要是为了更舒服地编辑、组织和同步这些资源，但最终可信结果仍然来自远端站点。

更适合遵守的顺序是：

1. 先 `kb pull`
2. 再本地编辑
3. 做最小检查
4. 再 `kb push` 或 `kb sync`
5. 最后在远端验证

本地阶段最容易出现的误判有两类：

- 把它当成普通 Node.js 或前端项目来理解
- 只看本地代码组织，而忽略这些目录在远端站点里的运行时意义

## 通用约束

- 入口保持薄，业务逻辑尽量放到可复用层
- `k.*`、内容字段和对象名称以当前项目和 `kooboo.d.ts` 为准
- 不要默认照搬 Express、Koa、Next.js 的写法
- 资源目录尽量保持扁平命名，优先用点号表达层级

## 代码示例

```text
src/
├── Api/
├── CodeBlock/
├── Layout/
├── Page/
├── View/
├── Script/
├── Style/
└── Module/
```
