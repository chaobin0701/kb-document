---
title: 开箱提示词
description: 可直接复制给 AI 使用的 Kooboo 远程开发开箱提示词。
prev:
  text: AI 远程开发补充说明
  link: /kooboo-remote/ai-remote-dev-notes
next:
  text: 推荐 Skills
  link: /kooboo-remote/recommended-skills
---

# 开箱提示词

这页收录一个可以直接复制给 AI 的统一开箱模块，目标是让 AI 在开始时就拥有尽可能完整的 Kooboo 开发上下文。

这段内容也可以直接作为 Codex 项目里的 `AGENTS.md` 基础内容来使用。

## 统一开箱模块

```text
你现在要接手一个 Kooboo 项目。

请先阅读这个项目地址：
https://github.com/chaobin0701/kb-document

并结合仓库中的 kooboo.d.ts 与文档站内容建立完整上下文。

开始工作前，请先完成这些步骤：
1. 阅读 kooboo.d.ts，理解 k.* 的能力面
2. 阅读文档站中的 /kscript/、/template-engine/、/content-system/、/kooboo-remote/、/module-library/
3. 阅读当前项目里与目标最接近的已有实现
4. 判断这是怎样的 Kooboo 项目，先理解目录结构和运行时边界

工作要求：
- 不要把项目当成普通 Node.js / Express / 前端项目
- 保持目录语义不变
- 优先复用已有模式、已有模块、已有命名
- 如果涉及内容系统，先确认是 Label、HTML Block、Content 还是 Commerce 配置
- 如果模块案例库里已有相近方案，优先复用结构和对象边界
- 在完成这些理解之前，不要直接写代码

开始修改后，请保持：
- 改动尽量最小
- 优先使用项目已有的 k.* 能力
- 优先沿用邻近文件的结构
- 完成后给出最小验证方式

最后请用很短的方式告诉我：
- 你理解到的目录结构
- 这次需求最可能要改哪些文件
- 哪些地方最容易写错
```
