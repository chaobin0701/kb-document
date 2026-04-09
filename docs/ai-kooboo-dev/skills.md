---
title: 推荐 Skills
description: 收录适合 Kooboo 开发场景、并且经过验证值得优先使用的 skills。
prev:
  text: 开箱提示词
  link: /ai-kooboo-dev/prompts
next:
  text: 模块案例库
  link: /module-library/
---

# 推荐 Skills

这页用于收录在 Kooboo 开发中已经证明比较好用、值得优先启用的 skills。

## 1. `kooboo-clone-site`

适合场景：

- 刚 clone 一个 Kooboo 站点
- 需要先做项目接管
- 需要先理解结构，再开始改代码

推荐原因：

- 它强调先看规则、先看 `kooboo.d.ts`
- 它会先建立目录与运行时映射
- 它更适合接管型任务，而不是一上来直接乱改

适合优先级：高

## 2. `kooboo-unocss-config`

适合场景：

- 项目里使用了 Kooboo 内置 UnoCSS
- 需要提取 shortcuts / safelist / 规则配置
- 需要维护一个统一的 UnoCSS 配置文件

推荐原因：

- 可以把零散 class 规则收敛成统一配置
- 对远程项目里的样式维护更稳

适合优先级：高

## 3. `generate-sitemap-function`

适合场景：

- 需要生成 sitemap
- 需要把内容类型、产品类型和系统页面拼成稳定 sitemap
- 需要把逻辑写成可复用函数

推荐原因：

- 这类需求在 CMS / 内容站项目中很常见
- 如果每次从零生成，容易漏掉系统页或内容驱动路径

适合优先级：高

## 4. 适合 Kooboo 的使用原则

对于 Kooboo 项目，skills 的使用更适合遵循下面的顺序：

1. 先用接管类 skill 获得正确上下文
2. 再用具体任务型 skill 处理某一块需求
3. 优先使用和当前需求强相关的 skill，而不是一次性堆很多

## 5. 收录标准

只有满足下面这些条件的 skill 更适合进入这页：

- 真实任务里经常用得到
- 能显著减少上下文解释成本
- 能降低 AI 在 Kooboo 项目里写偏的概率
- 不是一次性、只适用于单一项目的技能
