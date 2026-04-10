---
title: kb 命令
description: 说明 kooboo-cli 中常见的 kb 命令、参数和当前适用场景。
prev:
  text: 项目说明
  link: /kooboo-remote/
next:
  text: AI 远程开发补充说明
  link: /kooboo-remote/ai-remote-dev-notes
---

# kb 命令

`kb` 是 `kooboo-cli` 的全局命令入口。

在当前仓库里，命令定义主要位于：

- `packages/cli/src/index.ts`
- `packages/cli/src/exec/*`

## 常用命令

### `kb new`

用于创建一个新的 Kooboo 站点，并在本地生成项目模板。

```bash
kb new [name] --host <host>
```

说明：

- `name` 是新站点名称
- `--host` 用于指定 Kooboo 服务器地址
- 实际执行时会要求登录，并在站点创建后选择模板

### `kb clone`

用于从远程站点克隆代码到本地项目。

```bash
kb clone <siteUrl> [dir] -t empty -u <username> -p <password>
```

说明：

- `<siteUrl>` 是要克隆的站点地址
- `[dir]` 是目标目录，不填时默认用站点名
- `-t, --template` 当前支持 `empty` 和 `vitest`
- `-u, --username`、`-p, --password` 可直接传入，也可以在交互里输入
- 克隆时会同时拉取资源、模块和 `kooboo.d.ts`

### `kb pull`

用于把远程站点代码拉回本地。

```bash
kb pull [resource] [name]
```

说明：

- `[resource]` 可指定资源类型
- `[name]` 可指定资源名或过滤名
- 如果不传参数，会拉取全部资源和模块
- 执行前需要准备：
  - `KOOBOO_SITE_URL`
  - `KOOBOO_USERNAME`
  - `KOOBOO_PASSWORD`

### `kb push`

用于把本地资源推送到远程站点。

```bash
kb push [resource] [name]
```

说明：

- 当前源码里不传参数时会扫描本地资源路径并批量推送
- 同样依赖：
  - `KOOBOO_SITE_URL`
  - `KOOBOO_USERNAME`
  - `KOOBOO_PASSWORD`

### `kb sync`

用于启动本地到远程的同步。

```bash
kb sync --site-url <url> -u <username> -p <password> --init --common-module-path <path>
```

说明：

- `--site-url` 指定站点地址
- `-u, --username`、`-p, --password` 指定登录信息
- `--init` 表示先做一次全量初始化同步
- `--common-module-path` 用于把公共模块同步到各模块

很多项目里也会直接把它挂到：

```bash
pnpm dev
```

### `kb config`

用于读取或写入配置值。

```bash
kb config [key] [value] --global
```

说明：

- 不带值时更偏向读取
- 带值时更偏向写入
- `--global` 表示写入全局配置

### `kb export`

用于把站点资源导出成 zip。

```bash
kb export --site-url <url> -u <username> -p <password> -f site.zip
```

说明：

- 命令会读取站点可导出的 store 列表
- 可以交互选择导出内容
- 也可以把导出设置保存到 `.env`

### `kb generate`

用于生成资源骨架。

```bash
kb generate <resource> <name>
```

说明：

- 当前源码里已经注册了这个命令
- 支持的资源类型和 `pull/push` 一致
- 但当前实现还是占位状态，主要是打印参数，暂时不适合当成完整生成器来依赖

## 资源类型

`pull`、`push`、`generate` 相关命令里，当前代码里识别的资源类型包括：

- `api`
- `codeblock`
- `module`
- `layout`
- `page`
- `view`
- `script`
- `style`

## 代码示例

```bash
kb clone https://example.com my-site -t empty
kb pull page home
kb push
kb sync --init
```

## 备注

- `kb clone` 更适合第一次接手已有站点。
- `kb pull` 更适合把远端最新资源拉回本地。
- `kb push` 更适合手动推送本地改动。
- `kb sync` 更适合作为持续开发时的同步入口。
- `kb generate` 当前还不是完整实现，使用前要先确认当前版本源码。
