---
title: View 动态渲染
description: 收录根据状态或 section 动态拼装 view 的常用代码模式。
prev:
  text: 邮件发送
  link: /module-library/code/mail
next:
  text: sqlite_orm
  link: /module-library/modules/sqlite-orm
---

# View 动态渲染

## 简介

适用于根据 section、banner、组件配置动态输出多个 view 的场景。

## 代码

```ts
const id = k.request.id;
let pageInfo = formatTemplateElementContent(id);

if (pageInfo?.metaData) {
  setMetaData(pageInfo.metaData);
}
```

```ts
if (pageInfo?.banner) {
  k.state.set("index", "banner");
  k.state.set("section-banner", pageInfo.banner);
  k.response.write(k.utils.template.render(`<view id="element.banner"> </view>`));
}

for (let i = 0; i < (pageInfo?.sections || []).length; i++) {
  const section = pageInfo.sections[i];
  k.state.set(`section-${i}`, section);
  k.state.set("index", i);
  k.response.write(k.utils.template.render(`<view id="${section._viewName}"> </view>`));
}
```

```ts
const section = k.state.get("section");
const components = [];

section.Title?.forEach(item => {
  item._viewName = "page-element.common.title";
  components.push(item);
});

components.sort((a, b) => a.sequence - b.sequence);

for (const component of components) {
  k.state.set("component", component);
  k.response.write(
    k.utils.template.render(`<view id="${component._viewName}"></view>`)
  );
}
```

## 备注

- 常见组合是 `k.state` + `k.utils.template.render`
- 更适合放在 `view` 的 `env="server"` 脚本里
- 先沿用项目现有的 view 命名和分层方式
