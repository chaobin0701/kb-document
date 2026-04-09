---
title: 术语别名映射
description: 统一常见术语、同义词和容易混淆的对象名称。
prev:
  text: AI 工作顺序
  link: /ai-navigation/ai-workflow
next:
  text: 模块案例库
  link: /module-library/
---

# 术语别名映射

| 术语 | 更接近的含义 | 不要混淆 |
| --- | --- | --- |
| `Label` | 文案资源、多语言短文本 | 不是内容文件夹实例 |
| `HTML Block` | 可复用 HTML 片段、富文本块 | 不是普通页面模板文件 |
| `Content Type` | 内容结构定义 | 不是某条内容记录 |
| `Content Folder` | 某类内容集合 | 不是 Type 本身 |
| `k.content.Blog` | `Blog` 内容文件夹的运行时入口 | 不是 Type 声明对象 |
| `Api` | 服务端入口、接口处理位置 | 不是浏览器端请求封装 |
| `Module` | 站点里的模块资源区或模块方案 | 不等于 npm module |
| `Site` | 站点资源仓库对象 | 不等于部署域名或站点 URL |
| `Commerce Settings` | 电商相关配置和内容关系 | 不只是单个脚本对象 |

## 代码示例

```ts
// 先统一术语，再决定实现
const aliases = {
  Label: "site text resource",
  HtmlBlock: "reusable html fragment",
  ContentFolder: "collection of a content type",
  Module: "site module resource area"
};
```
