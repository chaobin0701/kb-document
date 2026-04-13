---
title: kbs 命令
description: 说明 kooboo-cli-self 中常见的 kbs 命令、参数和当前适用场景。
prev:
  text: 项目说明
  link: /kooboo-remote/
next:
  text: AI 远程开发补充说明
  link: /kooboo-remote/ai-remote-dev-notes
---

# kbs 命令

`kbs` 是 `kooboo-cli-self` 当前使用的全局命令入口。

在当前仓库里，命令定义主要位于：

- `packages/cli/src/index.ts`
- `packages/cli/src/exec/*`

当前仓库地址：

- [https://github.com/chaobin0701/kooboo-cli-self](https://github.com/chaobin0701/kooboo-cli-self)

## 常用命令

### `kbs new`

用于创建一个新的 Kooboo 站点，并在本地生成项目模板。

```bash
kbs new [name] --host <host>
```

说明：

- `name` 是新站点名称
- `--host` 用于指定 Kooboo 服务器地址
- 实际执行时会要求登录，并在站点创建后写入初始化项目

### `kbs clone`

用于从远程站点克隆代码到本地项目。

```bash
kbs clone <siteUrl> [dir] -u <username> -p <password>
```

说明：

- `<siteUrl>` 是要克隆的站点地址
- `[dir]` 是目标目录，不填时默认用站点名
- `-u, --username`、`-p, --password` 可直接传入，也可以在交互里输入
- 克隆时会同时拉取资源、模块和 `kooboo.d.ts`
- 初始化时会提示是否生成 `AGENTS.md`
- 站点配置会落到 `.kooboo-cli/siteConfig.json`
- labels 会落到 `.kooboo-cli/labels.json` 和 `.kooboo-cli/labels.raw.json`

### `kbs pull`

用于把远程站点代码拉回本地。

```bash
kbs pull [resource] [name]
```

说明：

- `[resource]` 可指定资源类型
- `[name]` 可指定资源名或过滤名
- 如果不传参数，会拉取全部资源和模块
- 执行前需要准备：
  - `KOOBOO_SITE_URL`
  - `KOOBOO_USERNAME`
  - `KOOBOO_PASSWORD`

### `kbs push`

用于把本地资源推送到远程站点。

```bash
kbs push [resource] [name]
```

说明：

- 当前源码里不传参数时会扫描本地资源路径并批量推送
- 同样依赖：
  - `KOOBOO_SITE_URL`
  - `KOOBOO_USERNAME`
  - `KOOBOO_PASSWORD`

### `kbs deploy`

用于手动指定文件、目录或 glob，并精准部署到远程站点。

```bash
kbs deploy <files...> -s <site-url> -u <username> -p <password>
```

说明：

- 支持一次传入多个文件、目录或匹配模式
- 会先解析本地目标，再只部署指定资源
- 更适合精准发布单个改动，而不是整站批量推送

### `kbs sync`

用于启动本地到远程的同步。

```bash
kbs sync --site-url <url> -u <username> -p <password> --init --common-module-path <path>
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

### `kbs config`

用于读取或写入配置值。

```bash
kbs config [key] [value] --global
```

说明：

- 不带值时更偏向读取
- 带值时更偏向写入
- `--global` 表示写入全局配置

当前还支持一组独立的站点配置子命令：

```bash
kbs config site pull
kbs config site push
kbs config site show
```

说明：

- `siteConfig` 会单独维护在 `.kooboo-cli/siteConfig.json`
- `pull` 用于把远端站点配置拉到本地
- `push` 用于把本地站点配置推回远端
- `show` 用于直接查看当前缓存

### `kbs label`

用于独立管理站点多语言标签。

```bash
kbs label pull
kbs label show
kbs label set <key> --values '{"en":"Hello"}'
kbs label import <file>
```

说明：

- `pull` 把远端 labels 拉到本地缓存
- `show` 查看本地缓存
- `set` 新增或覆盖单个 label
- `import` 从 JSON 文件批量导入
- 当前缓存文件位于：
  - `.kooboo-cli/labels.json`
  - `.kooboo-cli/labels.raw.json`

### `kbs export`

用于把站点资源导出成 zip。

```bash
kbs export --site-url <url> -u <username> -p <password> -f site.zip
```

说明：

- 命令会读取站点可导出的 store 列表
- 可以交互选择导出内容
- 也可以把导出设置保存到 `.env`

### `kbs generate`

用于生成资源骨架。

```bash
kbs generate <resource> <name>
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
kbs clone https://example.com my-site
kbs pull page home
kbs deploy src/view/common/head.html
kbs label pull
kbs sync --init
```

## 备注

- `kbs clone` 更适合第一次接手已有站点。
- `kbs pull` 更适合把远端最新资源拉回本地。
- `kbs push` 更适合批量推送当前工作区改动。
- `kbs deploy` 更适合精确部署单个文件、目录或 glob。
- `kbs sync` 更适合作为持续开发时的同步入口。
- `kbs label` 更适合把多语言文案从代码流里独立出来管理。
- `kbs generate` 当前还不是完整实现，使用前要先确认当前版本源码。
