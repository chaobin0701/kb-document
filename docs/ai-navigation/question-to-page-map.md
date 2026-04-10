---
title: 问题到页面映射
description: 按问题语言反向定位到最相关的栏目和页面。
prev:
  text: 对象与能力索引
  link: /ai-navigation/object-capability-index
next:
  text: AI 工作顺序
  link: /ai-navigation/ai-workflow
---

# 问题到页面映射

| 你现在的问题 | 先读页面 | 说明 |
| --- | --- | --- |
| 我要读请求参数 | [Request Response](/kscript/request-response) | 先确定 `k.request` 的读取入口 |
| 我要返回 JSON、文件或重定向 | [Request Response](/kscript/request-response) | 先确认 `k.response` 的输出能力 |
| 我要新增内容字段 | [内容/Content](/content-system/content-types-and-data-types) | 先区分 Type、Folder 和字段类型 |
| 我要改标签文案 | [标签/Label](/content-system/labels) | 先判断是不是固定文案标签 |
| 我要改富文本片段或可复用 HTML | [HTML Block](/content-system/html-blocks) | 先判断是不是 HTML Block |
| 我要做商品配置或商品相关内容 | [电商/Commerce](/content-system/commerce-and-settings) | 先判断是不是内容系统对象 |
| 我要让 AI 先接手项目 | [开箱提示词](/kooboo-remote/ai-prompts) | 先给 AI 正确上下文 |
| 我要找经过校验的技能 | [推荐 Skills](/kooboo-remote/recommended-skills) | 先复用稳定 skills |
| 我要找已验证方案 | [模块案例库](/module-library/) | 优先参考已有模块和优秀代码 |
| 我要理解项目目录是什么意思 | [AI 远程开发补充说明](/kooboo-remote/ai-remote-dev-notes) | 先判断目录语义和运行时边界 |
| 我要写一个可复用模块 | [优秀模块](/module-library/modules/) | 先看已有模块和代码分类，再决定结构 |
| 我要理解 k-label | [标签/Label](/content-system/labels) | 先理解它作为内容系统标签的管理方式 |
| 我要写服务端模板语法 | [V 模板语法](/template-engine/server-template-syntax) | 先确定模板表达式和 `env=\"server\"` 的边界 |
| 我要分清 k-if 和 v-if | [K 模板语法](/template-engine/k-directives) | 先分清 `k-*` 和 `v-*` 的职责 |

## 代码示例

```ts
// 按问题语言做站内跳转，而不是先从头翻所有页面
const questionMap = {
  "我要读请求参数": "/kscript/request-response",
  "我要新增内容字段": "/content-system/content-types-and-data-types",
  "我要做一个可复用模块": "/module-library/modules/",
  "我要理解 k-label": "/content-system/labels"
};
```
