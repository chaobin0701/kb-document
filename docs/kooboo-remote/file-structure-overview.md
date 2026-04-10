---
title: 目录与文件作用总览
description: 说明 `src` 下常见目录的基本作用，以及真实项目里常见的目录命名。
prev:
  text: Kooboo 远程开发
  link: /kooboo-remote/
next:
  text: Api
  link: /kooboo-remote/api
---

# 目录与文件作用总览

在 Kooboo 项目里，目录不只是组织方式，也会影响运行时语义。

同类项目里的目录大小写、命名细节、子目录组织可能不同，但语义层通常稳定。

| 通用概念 | 真实项目常见目录 | 基本作用 |
| --- | --- | --- |
| `Api` | `src/Api` / `src/api` | API / 后端处理入口 |
| `CodeBlock` | `src/CodeBlock` / `src/code` | 服务端业务逻辑、模型、工具 |
| `Layout` | `src/Layout` / `src/layout` | 布局模板与公共资源装配 |
| `Page` | `src/Page` / `src/page` | 页面入口资源 |
| `View` | `src/View` / `src/view` | 可复用视图、组件、页面片段 |
| `Script` | `src/Script` / `src/js` | 客户端脚本、第三方库 |
| `Style` | `src/Style` / `src/css` | 样式资源 |
| `Module` | `src/Module` / `src/module` | 模块资源区 |

真实项目里还经常继续细分子目录，例如：

- `src/view/page-element`
- `src/view/vue`
- `src/code/control`
- `src/code/Script`

这些目录在文件系统里虽然继续分层，但在引用时通常会转成点号形式，例如：

- `view/common/head.html` -> `common.head`
- `view/page-element/common/title.html` -> `page-element.common.title`
- `view/_page/home.html` -> `_page.home`

## 本地开发时要注意

- 最终可信结果仍然来自远端站点
- 更稳妥的顺序是先 `kb pull`，再编辑，最后 `kb push` 或 `kb sync`
- 不要把目录名理解成唯一标准，很多项目会用小写目录
- 改代码前先看邻近文件的组织方式，不要只凭抽象规则判断
- 如果项目已经有子目录分层，就直接跟随现有结构

## 代码示例

```text
src/
├── api/
├── code/
│   ├── control/
│   └── Script/
├── layout/
├── page/
├── view/
│   ├── common/
│   ├── page-element/
│   └── vue/
├── js/
├── css/
└── module/
```
