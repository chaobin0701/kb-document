---
title: 更新日志
description: 记录文档站的结构性变化、迁移来源和重要调整。
prev:
  text: 贡献指南
  link: /contributing/
---

# 更新日志

## 2026-04-09

### 初始化文档站

- 创建独立的 VitePress 文档项目
- 增加 GitHub Pages 自动部署工作流
- 建立首页、导航、侧边栏、贡献指南和更新日志基础结构

### 首次迁移来源

- `KOOBOO_RULES.md`
- `CODEX_PROMPT_TEMPLATE.md`
- `examples/README.md`
- `examples/api-handler.example.ts`
- `examples/dto.example.ts`
- `examples/service.example.ts`
- `kooboo-docs/README.md`
- `kooboo-docs/src/*.md`
- `kscript-docs/*.md`
- `skills/kooboo-clone-site/*`

### 本轮重组说明

- 将旧的编号式 KScript 文档重组为主题页
- 将 `kooboo-docs` 按目录、模板层、模块与 UnoCSS 三类重排
- 将协作 Prompt 与规则文档整理为协作规范栏目
- 将 skill 资料提炼为团队接管流程，而不是原样公开内部指令
- 将 KScript 栏目调整为与 Kooboo 官网一致的结构，并引入 `kooboo.d.ts` 作为公共 API 说明来源
- 新增“内容系统”栏目，用于承载内容类型、标签、HTML Block 和电商配置相关说明

### 页面来源映射

| 现页面 | 主要来源 |
| --- | --- |
| `getting-started/workflow.md` | `KOOBOO_RULES.md`, `kscript-docs/01-remote-workflow.md`, `kscript-docs/README.md` |
| `runtime-semantics/index.md` | `KOOBOO_RULES.md`, `kscript-docs/02-runtime-and-folders.md`, `kooboo-docs/src/00-overview.md` |
| `kooboo-remote/folders-and-runtime.md` | `kooboo-docs/src/00-overview.md`, `01-api.md`, `02-codeblock.md`, `06-script.md`, `07-style.md` |
| `kooboo-remote/template-layer.md` | `kooboo-docs/src/03-layout.md`, `04-page.md`, `05-view.md`, `KOOBOO_RULES.md` |
| `kooboo-remote/modules-and-unocss.md` | `kooboo-docs/src/08-module.md`, `09-unocss.md` |
| `kscript/request-response.md` | `kooboo.d.ts`, `kscript-docs/10-request.md`, `11-response.md` |
| `kscript/database.md` | `kooboo.d.ts` |
| `kscript/account.md` | `kooboo.d.ts` |
| `kscript/web-api.md` | `kooboo.d.ts`, `kscript-docs/12-api.md` |
| `kscript/cache-cookie-session.md` | `kooboo.d.ts` |
| `kscript/commerce.md` | `kooboo.d.ts`, `kscript-docs/19-content-commerce.md` |
| `kscript/content.md` | `kooboo.d.ts`, `kscript-docs/19-content-commerce.md` |
| `kscript/file.md` | `kooboo.d.ts` |
| `kscript/mail.md` | `kooboo.d.ts` |
| `kscript/market.md` | `kooboo.d.ts` |
| `kscript/module.md` | `kooboo.d.ts` |
| `kscript/net.md` | `kooboo.d.ts` |
| `kscript/openapi.md` | `kooboo.d.ts` |
| `kscript/payment.md` | `kooboo.d.ts` |
| `kscript/security.md` | `kooboo.d.ts` |
| `kscript/site.md` | `kooboo.d.ts` |
| `kscript/state.md` | `kooboo.d.ts` |
| `kscript/utils.md` | `kooboo.d.ts` |
| `examples/layering-pattern.md` | `examples/README.md`, `dto.example.ts`, `service.example.ts`, `api-handler.example.ts`, `kscript-docs/03-layering-guide.md` |
| `collaboration/prompt-templates.md` | `CODEX_PROMPT_TEMPLATE.md` |
| `collaboration/review-and-verify.md` | `CODEX_PROMPT_TEMPLATE.md`, `KOOBOO_RULES.md` |
| `team-skills/site-takeover.md` | `skills/kooboo-clone-site/SKILL.md`, `references/runtime-folders.md`, `references/takeover-report.md` |

### 整理说明

- 本站页面优先保留真实内容，再做结构化重写
- 某些更适合内部 Prompt 场景的原始表述已改写为公开文档口吻
- 若后续发现与真实项目行为不一致，应直接以 PR 修订本知识库

## 代码示例

```md
## 2026-04-10

### 调整

- 收紧 KScript 栏目边界
- 为主要页面补充底部代码示例
```
