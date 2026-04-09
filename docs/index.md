---
layout: home

hero:
  name: KScript & Kooboo Docs
  text: Kooboo 开发文档
  tagline: 聚焦 KScript、内容系统与 Kooboo 远程开发，把当前最核心的概念和对象先整理清楚。
  image:
    src: /logo.svg
    alt: KScript & Kooboo Docs
  actions:
    - theme: brand
      text: 浏览 KScript
      link: /kscript/
    - theme: alt
      text: 浏览内容系统
      link: /content-system/

features:
  - title: KScript
    details: 聚合请求、响应、API、模型与扩展能力，便于快速查阅和团队引用。
    link: /kscript/
  - title: 内容系统
    details: 聚焦内容类型、内容实例、标签、HTML Block 与电商配置之间的关系。
    link: /content-system/
  - title: AI Kooboo 开发
    details: 提供可直接使用的提示词和已经验证过的 skills，帮助 AI 更快进入正确上下文。
    link: /ai-kooboo-dev/
  - title: 模块案例库
    details: 收录优秀模块、优秀代码和可复用方案，为开发者和 AI 提供优先参考。
    link: /module-library/
  - title: Kooboo 远程开发
    details: 用目录语义、模板层约束、模块与 UnoCSS 规则解释“代码放在哪就决定怎么跑”。
    link: /kooboo-remote/
---

<div class="kb-home-section">

## AI 快速入口

- [先读哪一页](/ai-navigation/ai-workflow)
- [如何选栏目](/ai-navigation/question-to-page-map)
- [哪里找已验证方案](/module-library/)

</div>

<div class="kb-home-section">

## 这个站点在维护什么

这个项目来自现有 Kooboo / KScript 资料的重组，而不是重新虚构一套规范。我们把原本分散在规则文档、示例目录、Prompt 模板、目录语义说明和技能脚本里的有效内容重新整理成一套团队共享知识库。

<div class="kb-grid">
  <div class="kb-card">
    <h3>运行时规则</h3>
    <p>突出“目录决定运行时”这条最高优先级原则，帮助大家在修改前先判断代码实际跑在哪。</p>
  </div>
  <div class="kb-card">
    <h3>工程实践</h3>
    <p>把 API 入口、模板层、业务层和 DTO 校验层拆开讲，减少远端验证时的回归面。</p>
  </div>
  <div class="kb-card">
    <h3>内容系统</h3>
    <p>把 Content Type、Label、HTML Block 和电商配置放回 CMS 语境，而不是混进脚本 API 列表里。</p>
  </div>
  <div class="kb-card">
    <h3>模块案例库</h3>
    <p>把优秀模块、代码片段和成熟解法沉淀下来，方便开发者复用，也方便 AI 在二次开发时优先参考。</p>
  </div>
  <div class="kb-card">
    <h3>AI Kooboo 开发</h3>
    <p>把提示词、skills 和可直接复用的 AI 开发入口整理成工作台，减少每次重复解释背景。</p>
  </div>
</div>

</div>

<div class="kb-home-section">

## 推荐阅读路径

1. 先读 [KScript](/kscript/) 理解运行时对象和脚本入口。
2. 再读 [内容系统](/content-system/) 理解内容类型、Label、HTML Block 和电商配置。
3. 如果不知道该看哪一页，先用 [AI 导航索引](/ai-navigation/) 快速定位。
4. 如果要让 AI 更快进入正确上下文，进入 [AI Kooboo 开发](/ai-kooboo-dev/)。
5. 如果要寻找成熟模块、优秀代码和可复用方案，进入 [模块案例库](/module-library/)。
6. 如果要落到项目资源目录，再看 [Kooboo 远程开发](/kooboo-remote/) 和 [目录规范 / 运行时语义](/runtime-semantics/)。

</div>

<div class="kb-home-section">

## 当前整理范围

- 当前主要维护五块内容：
  - KScript
  - 内容系统
  - AI Kooboo 开发
  - 模块案例库
  - Kooboo 远程开发
- 其他栏目暂时保留文件，但不作为主导航的一部分。
- 后续会按需要逐步把更多文档重新加回来。

<p class="kb-note">现在优先把概念、对象和基础说明整理清楚，再继续扩展协作类和工程类页面。</p>

</div>

<div class="kb-home-section">

## 现在先聚焦核心对象

当前阶段更重要的是先把下面这些概念讲明白：

- KScript 是什么
- `k.*` 里哪些对象属于运行时 API
- 哪些对象其实属于 CMS 内容系统
- 模板层、内容层和电商配置层之间怎么分工

</div>
