# AGENTS.md

本文件用于约束后续在这个仓库中进行文档维护、整理和补充时的工作方式。

## 项目定位

这是一个基于 VitePress 的 Kooboo / KScript 文档站。

它的目标不是机械镜像旧资料，也不是一次性写完一套说明书，而是持续整理一套可被团队和 AI 共同使用的知识库。

当前站点重点围绕这些栏目维护：

- `docs/kscript`
- `docs/content-system`
- `docs/kooboo-remote`
- `docs/ai-kooboo-dev`
- `docs/module-library`
- `docs/ai-navigation`

## 信息来源优先级

后续编辑文档时，优先级按下面顺序处理：

1. 用户在当前对话中的明确纠正和新增要求
2. 当前仓库中已经存在的页面结构、术语和栏目边界
3. 根目录 [`kooboo.d.ts`](/Users/a1234/Desktop/my-projects/kb-document/kooboo.d.ts)
4. 原始资料仓库中的真实 Markdown
   - `/Users/a1234/Desktop/kooboo-cli/kooboo-docs`
   - `/Users/a1234/Desktop/kooboo-cli/kscript-docs`
   - `/Users/a1234/Desktop/kooboo-cli/examples`
   - `/Users/a1234/Desktop/kooboo-cli/skills`
5. 真实项目源码
   - `/Users/a1234/Desktop/kooboo-projects/tabs/src`
   - `/Users/a1234/Desktop/kooboo-projects/Ubuntu-Mundo/src`
6. Kooboo 官方站点中的概念和术语

如果这些来源之间有冲突，以用户最新纠正为准。

## 文档写作口径

- 默认使用中文写作，保留必要英文术语。
- 页面口吻要像正式文档，不要写“参考了”“对齐官网”“第一版”“后续再补充”这类过程性语言。
- 对象说明页直接写定义、边界、示例，不解释整理过程。
- 示例代码可以是说明性代码，不要求绝对可运行，但不要故意杜撰明显不存在的 API。
- 敏感信息必须替换成占位值，不要把真实密钥、密码、Token、邮箱口令写进文档或类型文件。

## 栏目边界

### `docs/kscript`

- 这一栏只负责 KScript 本身和 `k.*` 运行时对象。
- 结构应尽量保持和 Kooboo 官方 KScript 目录一致。
- 不把远程开发流程、目录规范、团队协作内容混进来。

### `docs/content-system`

- 这一栏负责 CMS 相关对象和建模语义。
- 例如：`Label`、`HTML Block`、`Content Type`、`Content Folder`、电商配置与内容关系。

### `docs/kooboo-remote`

- 这一栏以远程开发为主，本地开发为辅。
- 每个目录单独成页，不要再把多个目录混成一页。
- 目录语义可以稳定，但目录名、大小写、子目录组织都可能因项目而异。
- 推荐粒度保持为：
  - `Api`
  - `CodeBlock`
  - `Layout`
  - `Page`
  - `View`
  - `Script`
  - `Style`
  - `Module`
  - `UnoCSS`
- 写法顺序固定为：
  1. 先解释远程开发下的基本作用
  2. 再写本地开发时的特殊性与注意点
- `Page` 默认按“很薄的入口层”理解。
- `View` 可以很重，也可以继续分层，不要强行要求扁平。
- `Script` 不默认禁止子目录，先跟随项目已有结构。
- `UnoCSS` 要明确扫描兜底资源这一层，不只写“不要动态拼 class”。

### `docs/module-library`

- 这一栏当前只保留：
  - `导览`
  - `优秀代码`
- 不再恢复“优秀模块”“收录规范”这类页，除非用户明确要求。
- 这里更像“优先参考代码库”，不是完整模块市场。

### `docs/ai-kooboo-dev`

- 这一栏用于存放可直接给 AI 使用的提示词和经过验证的 skills。
- 更关注“如何让 AI 快速进入正确上下文”，不是对象定义。

### `docs/ai-navigation`

- 这是给 AI 和开发者共用的索引层。
- 保持结构化、短小、机器可读。
- 主要作用是选路，不替代正文页。

## 页面更新规则

- 优先在现有栏目下补充，不要轻易新开一级栏目。
- 如果新增页面，要同步检查：
  - `docs/.vitepress/config.mts`
  - 页面 `prev/next`
  - 首页或相关导览页是否需要接入口
- 如果删除页面，要同步清理所有旧链接和侧边栏引用。
- 如果用户明确要求“不要放一起”，就必须按单页粒度拆分。

## 示例代码整理规则

- 优先把示例放到最合适的两类位置：
  - 对象说明页
  - `docs/module-library/code/*`
  - `docs/module-library/modules/*`
- 如果一段代码既能说明 API，又值得长期复用，可以两边都放，但表达角度要不同：
  - API 页更偏对象说明
  - 案例页更偏组织方式和复用价值
- 对示例代码的优化方向优先考虑：
  - 拆分配置、组装、执行三层
  - 减少入口层负担
  - 避免敏感信息直写
  - 更适合 AI 二次编程复用
- 如果示例来自真实项目，必须先去掉真实密码、Token、邮箱口令等敏感值

## 用户持续纠正文档时的处理方式

- 用户纠正优先于历史写法。
- 如果用户指出“这页不要这样写”，优先直接改正文，不保留解释性废话。
- 如果用户提供新的示例代码，应优先尝试整合进现有栏目，而不是单独堆一页。
- 如果用户希望页面更短、更直接，优先删冗余描述，再保留核心定义和示例。

## 工程约定

- 本地开发端口固定为 `3033`
- 常用命令：

```bash
npm run docs:dev
npm run docs:build
npm run docs:preview
```

- 每次改动后，默认运行：

```bash
npm run docs:build
```

- 不要把以下内容提交进仓库：
  - `docs/.vitepress/cache`
  - `docs/.vitepress/dist`
  - 任何本地临时缓存文件

## GitHub Pages

- 当前仓库使用 GitHub Actions 自动部署到 GitHub Pages。
- 工作流文件：
  - [`/.github/workflows/deploy.yml`](/Users/a1234/Desktop/my-projects/kb-document/.github/workflows/deploy.yml)
- 如果 Pages 再次出现未启用报错，优先检查 `configure-pages` 的 `enablement` 配置和仓库的 Pages Source 是否是 `GitHub Actions`。

## 默认工作方式

后续继续维护这个仓库时，更推荐按这个顺序行动：

1. 先读用户当前要求
2. 再读相关栏目现有页面
3. 再读 `kooboo.d.ts` 或原始资料
4. 再做最小必要修改
5. 运行 `npm run docs:build`
6. 如已接入 GitHub，必要时提交并推送

这个仓库不是一次性整理完成的项目，而是会随着用户的持续修正不断演进。后续所有改动都应服务于“让文档更准、更短、更可复用、更适合 AI 与人共同使用”。
