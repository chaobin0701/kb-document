---
title: Kooboo 远程开发
description: "`kooboo-cli` 是 Kooboo 本地远程开发环境的核心项目。"
prev:
  text: 目录规范与运行时语义
  link: /runtime-semantics/
next:
  text: 目录与文件作用总览
  link: /kooboo-remote/file-structure-overview
---

# Kooboo 远程开发

`kooboo-cli` 是 Kooboo 本地远程开发环境的核心项目，用来把本地代码编辑、编译和远程站点同步连接起来。

## 项目地址

- 仓库地址：[https://cnb.cool/kooboo.com/kooboo-cli/cli](https://cnb.cool/kooboo.com/kooboo-cli/cli)

## 项目定位

这个项目主要负责几件事：

- 提供本地开发脚手架
- 将代码编译成可适配 Kooboo 的形态
- 将本地代码实时同步到远程站点
- 提供 KScript 类型和相关开发支撑
- 提供预设模板和工具包，方便快速建立项目

从仓库首页说明看，主要包包括：

- `cli`
- `compile`
- `sync`
- `types`
- `utils`
- `template-xxx`

## 基础使用

仓库说明里的核心使用流程包括：

1. 克隆仓库到本地
2. 使用 `pnpm` 安装依赖
3. 编译项目
4. 将 `packages/cli` 链接到全局
5. 使用 `kb` 命令进行建站、克隆和同步

## 常用命令

```bash
pnpm i
pnpm build

cd packages/cli
pnpm setup
pnpm link -g

kb new [serverUrl]
kb clone <siteUrl>
kb sync
pnpm dev
```

## 主要贡献人 / 发明人

- 嘉翔

## 适用说明

这一栏现在只保留项目本身的基础说明和仓库入口，不再重复展开目录语义、模板层规则或运行时细节。

如果你要看目录和文件在远程开发中的实际作用，可以继续阅读：

- [目录与文件作用总览](/kooboo-remote/file-structure-overview)
- [Api](/kooboo-remote/api)
- [CodeBlock](/kooboo-remote/codeblock)
- [Layout](/kooboo-remote/layout)
- [Page](/kooboo-remote/page)
- [View](/kooboo-remote/view)
- [Script](/kooboo-remote/script)
- [Style](/kooboo-remote/style)
- [Module](/kooboo-remote/module)
- [UnoCSS](/kooboo-remote/unocss)
- [AI 远程开发补充说明](/kooboo-remote/ai-remote-dev-notes)
