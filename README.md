# KScript & Kooboo Docs

一个基于 GitHub + VitePress 的 KScript / Kooboo 远程开发文档站项目，用来承载团队现有的规范、工作流、示例和协作约定。

这个仓库的目标不是复制原始 Markdown，而是把已有资料整理成适合长期维护的知识库：

- 用主题化目录替代仓库内部编号式文档
- 用 GitHub PR 维护文档，而不是把规范散落在多个仓库
- 用首页、导航、贡献指南和更新日志强化“团队共建”体验

## 为什么独立成 docs 仓库

- 让规范文档与业务代码解耦，减少主仓库噪音
- 让 Markdown 协作、评审和版本追踪更清晰
- 给团队一个统一入口，降低 onboarding 成本
- 便于 GitHub Pages 自动部署与公开访问

## 文档范围

- KScript 运行时能力与开发规则
- Kooboo 远程开发工作流与目录语义
- 分层实践与示例
- Prompt 与协作规范
- 团队技能与站点接管流程
- 贡献方式与变更记录

## 本地启动

```bash
npm install
npm run docs:dev
```

默认本地地址一般为 [http://localhost:5173](http://localhost:5173)。
当前项目已固定开发端口为 [http://localhost:3033](http://localhost:3033)。

## 常用脚本

```bash
npm run docs:dev
npm run docs:build
npm run docs:preview
```

## 项目结构

```text
.
├── .github/workflows/deploy.yml
├── docs
│   ├── .vitepress
│   ├── changelog
│   ├── collaboration
│   ├── contributing
│   ├── examples
│   ├── getting-started
│   ├── kooboo-remote
│   ├── kscript
│   ├── runtime-semantics
│   └── team-skills
├── package.json
└── README.md
```

## GitHub 协作流程

1. 从 `main` 拉取最新内容并创建分支。
2. 在 `docs/` 中新增或修改 Markdown 页面。
3. 本地运行 `npm run docs:build`，确认无构建错误。
4. 提交 Pull Request，说明修改范围、影响页面和迁移来源。
5. 合并后由 GitHub Actions 自动发布到 GitHub Pages。

## 部署说明

仓库内已提供 GitHub Pages 工作流：

- 触发分支：`main`
- 构建命令：`npm run docs:build`
- 发布目录：`docs/.vitepress/dist`

默认按仓库子路径部署。若未来仓库名或组织名变化，可通过以下方式调整：

- 修改 `docs/.vitepress/config.mts` 中的默认仓库值
- 或在 CI 中注入 `DOCS_REPO` / `DOCS_BASE`

## 来源说明与迁移原则

本项目优先复用以下真实资料，并做合并、裁剪和重组：

- `/Users/a1234/Desktop/kooboo-cli/KOOBOO_RULES.md`
- `/Users/a1234/Desktop/kooboo-cli/CODEX_PROMPT_TEMPLATE.md`
- `/Users/a1234/Desktop/kooboo-cli/examples/README.md`
- `/Users/a1234/Desktop/kooboo-cli/examples/*.example.ts`
- `/Users/a1234/Desktop/kooboo-cli/kooboo-docs/README.md`
- `/Users/a1234/Desktop/kooboo-cli/kooboo-docs/src/*.md`
- `/Users/a1234/Desktop/kooboo-cli/kscript-docs/*.md`
- `/Users/a1234/Desktop/kooboo-cli/skills/kooboo-clone-site/*`

迁移原则：

- 保留有效内容，不机械复制旧目录
- 合并重复规则，减少站内冗余
- 对过于内部化的表述做公开文档化整理
- 每次结构性调整都记录到 `docs/changelog/index.md`

## 贡献建议

- 新文档优先放入现有栏目，避免随意扩散目录
- 新增页面时补充简介、适用场景和前后链接
- 规则类文档尽量引用现有工作流，不重复发明术语
- 如果内容来自旧仓库，请在 PR 描述中注明原始来源路径

详细规范见 [docs/contributing/index.md](/Users/a1234/Desktop/my-projects/kb-document/docs/contributing/index.md)。
