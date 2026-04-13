---
title: 网站搜索
description: 收录基于 Kooboo 原生搜索能力实现 Content 搜索的基础代码模式。
prev:
  text: API 与表单
  link: /module-library/code/api
next:
  text: 邮件发送
  link: /module-library/code/mail
---

# 网站搜索

## 简介

适用于实现基于 Content 的站内搜索。  
这类搜索比较基础，而且直接有 Kooboo 原生 API 支持，通常可以先封装成一个函数，再给页面或 API 调用。

## 代码

```ts
export function searchContent(keyword): Searchresult {
  const searchResult = [];

  if (!keyword || !keyword.trim()) {
    return searchResult;
  }

  const folders = ["Blog", "News"];

  const res = k.site.search.findAll(keyword, {
    folders,
    maxCount: 500
  });

  res.forEach((item) => {
    const { Id, Type, Additional } = item;
    const folder = Additional?.folder;

    if (Type !== "textcontent" || !Id || !folder || !k.content[folder]) {
      return;
    }

    const articleInfo = k.content[folder].get(Id);
    if (!articleInfo) {
      return;
    }

    if (folder === "Blog") {
      searchResult.push({
        name: articleInfo.Title,
        intro: articleInfo.IntroText,
        folder,
        id: Id
      });
    }

    if (folder === "News") {
      searchResult.push({
        name: articleInfo.title || item.locationData_Name,
        intro: articleInfo.locationData_Subtext,
        folder,
        id: Id
      });
    }
  });

  return searchResult;
}
```

## 备注

- Content 搜索通常先限制 folder，再做结果映射。
- `k.site.search.findAll(...)` 负责搜索，`k.content[folder].get(...)` 负责补全内容详情。
- 这类代码更适合先封装成函数，再给页面、View 或 API 复用。
