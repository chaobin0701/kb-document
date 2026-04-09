---
title: 贡献指南
description: 适用于团队共建知识库的文档新增、修改与 PR 规范。
prev:
  text: 站点接管流程
  link: /team-skills/site-takeover
next:
  text: 更新日志
  link: /changelog/
---

# 贡献指南

这个文档站默认按“团队共建知识库”维护。我们希望它足够稳定、可追踪、又不增加过多流程负担。

## 如何新增文档

1. 先判断内容是否能放进现有栏目。
2. 在对应目录下新增 Markdown 文件。
3. 为页面补充清晰标题、简介和适用场景。
4. 更新 `.vitepress/config.mts` 中的导航或侧边栏。
5. 本地运行 `npm run docs:build`。

## 如何修改文档

- 优先直接改主题页，而不是在多个页面复制同一段规则
- 修改规则时，尽量注明依据来自哪份现有资料或真实项目
- 如果改变了结构或命名，顺手更新 README 与 changelog

## Markdown 与 frontmatter 约定

建议每页至少包含：

- `title`
- `description`
- 合适的 `prev` / `next`

正文建议包含：

- 页面简介
- 适用场景
- 推荐阅读顺序或关联页面

## 文件命名规范

- 使用小写英文与连字符，如 `runtime-capabilities.md`
- 栏目首页统一使用 `index.md`
- 不再沿用旧仓库中的数字编号命名

## 栏目与目录规范

- `getting-started/`：上手与流程
- `kscript/`：能力面与 API
- `kooboo-remote/`：目录语义与模板层
- `examples/`：实践模式与代码示例
- `collaboration/`：Prompt、review、verify
- `team-skills/`：接管与团队工作流

新增目录前，请先确认是否真的需要一个新的一级栏目。

## 链接与交叉引用规范

- 尽量链接到站内主题页，而不是引用旧仓库绝对路径
- 在正文中说明“本文根据哪些资料整理”
- 结构性来源映射统一记录到 README 或 changelog

## Pull Request 规范

建议 PR 标题尽量清晰，例如：

- `docs: 重组 KScript 能力面页面`
- `docs: 新增 Kooboo 模块接管流程`
- `docs: 修正 runtime 语义与 sidebar 链接`

PR 描述建议包含：

- 修改目的
- 涉及页面
- 迁移来源或依据
- 是否需要同步更新 changelog

## Review 关注点

- 内容是否来自真实资料，而不是空泛补完
- 是否与现有术语保持一致
- 是否与导航和侧边栏结构匹配
- 是否引入重复页面或重复规则

## 什么时候更新 changelog

以下情况建议更新：

- 新增一级栏目或重要主题页
- 对信息架构做了结构性调整
- 完成一轮较大规模迁移
- 改写了关键规范且影响团队使用方式

## 代码示例

```md
---
title: 新页面标题
description: 一句话说明本文解决什么问题。
---

# 新页面标题

本文根据某份现有资料整理。
```
