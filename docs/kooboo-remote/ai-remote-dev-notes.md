---
title: AI 远程开发补充说明
description: 说明 AI 在 Kooboo 远程开发项目里如何理解目录结构、运行时和改动边界。
prev:
  text: UnoCSS
  link: /kooboo-remote/unocss
next:
  text: Concept
  link: /kscript/
---

# AI 远程开发补充说明

这一页用于补充说明：当 AI 参与 Kooboo 远程开发时，应该如何理解项目结构、运行时边界和改动方式。

## 更适合解决

- 判断目录结构的运行时意义
- 分清入口层、模板层、浏览器层和模块区
- 在动手前判断改动应该落在哪一类目录

## 常见对象

- `src/Api`
- `src/CodeBlock`
- `src/Layout`
- `src/Page`
- `src/View`
- `src/Module`

## 不要混淆

- 目录名不只是组织方式，很多时候也代表运行时边界
- 这一页解释的是项目结构，不替代 `KScript` 的对象定义页

## 下一步阅读

- [AI 工作顺序](/ai-navigation/ai-workflow)
- [模块案例库](/module-library/)

## 先建立一个基本认识

这类项目不是普通的本地 Web 项目。代码虽然在本地编辑，但很多结果最终要在远程站点里运行、渲染或验证。

因此 AI 在处理需求时，不能只把它当成：

- 普通前端项目
- 普通 Node.js 项目
- 普通 Express / Koa 项目

更稳妥的做法是先判断目录语义，再判断运行时，再决定怎么写代码。

## 目录结构怎么理解

在 Kooboo 远程开发项目里，目录不仅仅是组织方式，它通常也代表运行时边界。

常见理解方式如下：

- `src/Api`
  - 服务端入口
  - 负责读请求、调业务、写响应

- `src/CodeBlock` 或 `src/code`
  - 更适合承载业务逻辑、服务、模型和工具函数

- `src/Layout`
  - 布局层
  - 可能包含服务端脚本

- `src/Page`
  - 页面入口资源
  - 更偏页面组合与声明式入口

- `src/View`
  - 可复用视图层
  - 可能同时包含模板和脚本

- `src/Script` / `src/js`
  - 浏览器侧脚本资源

- `src/Style`
  - 样式资源

- `src/Module`
  - 模块化资源区
  - 结构通常更复杂，修改前应先看现有模式

## AI 应该优先看什么

在真正开始改代码前，更适合先看这几类信息：

1. 当前项目的目录结构
2. 当前项目的 `kooboo.d.ts`
3. 目标目录附近已经能工作的文件
4. 是否存在同类实现

这样做的目的不是保守，而是减少把项目误写成另一种技术栈风格的风险。

## AI 改动时更适合的原则

- 入口层尽量保持薄
- 优先复用已有写法
- 先读 `k.*` 的真实能力面，再写 KScript 调用
- 模板层和浏览器层不要混着猜
- 模块区和内容区不要凭空发明结构

## 哪些地方最容易误判

- 把模板层文件当成纯前端页面
- 在 `src/Api` 里写出普通框架的 `req` / `res` 风格
- 把 `k.content`、`k.site.labels`、`k.site.htmlBlocks` 只看成脚本 API，而忽略它们背后的 CMS 对象
- 在 `src/Module` 里不看现有结构就直接新建目录和资源

## 更适合 AI 的工作顺序

1. 先看项目结构
2. 先看 `kooboo.d.ts`
3. 再看目标目录的邻近实现
4. 再开始写最小必要改动
5. 最后回到远程开发流程里做验证

## 代码示例

```text
src/
├── Api/
├── CodeBlock/
├── Layout/
├── Page/
├── View/
├── Script/
├── Style/
└── Module/
```

```ts
// 更适合的做法：
// 先确认这是 Api 入口，再读 k.request / k.response 的已有写法

const id = k.request.queryString.id
if (!id) {
  k.response.statusCode(400)
  k.response.json({ ok: false, message: "id is required" })
  k.response.stop()
}
```
