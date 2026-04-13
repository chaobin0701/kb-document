---
title: API 与表单
description: 收录 API 注册、统一返回、表单校验和上传接口这类常用代码模式。
prev:
  text: 模块案例库
  link: /module-library/
next:
  text: 网站搜索
  link: /module-library/code/search
---

# API 与表单

## 简介

适用于接口注册、统一返回、表单提交和附件上传这类高频场景。

## 代码

```ts
//@k-url /api/auth/{action}
import { successResponse, errorResponse, getLabel, regexs } from "Utils";

k.api.post("/register", () => {
  try {
    const { email, password, firstName, lastName } = k.request;

    if (!firstName || firstName.length > 50) {
      throw new Error(getLabel("Please enter a valid First name"));
    }
    if (!lastName || lastName.length > 50) {
      throw new Error(getLabel("Please enter a valid Last name"));
    }
    if (!email || !regexs.emailRegex.test(email)) {
      throw new Error(getLabel("Please enter a valid email"));
    }
    if (!password || !regexs.passwordRegex.test(password)) {
      throw new Error(getLabel("Password format is wrong"));
    }

    return successResponse({ ok: true });
  } catch (error) {
    return errorResponse(error?.message || error);
  }
});
```

```ts
//@k-url /api/forms/{action}
import { errorResponse, successResponse } from "Utils";

k.api.post("/job-application", () => {
  const { firstname, lastname, email, city, country } = k.request;
  const errors = {};

  if (!lastname?.trim()) {
    errors.LAST_NAME = "Last name is required";
  }
  if (!email?.trim()) {
    errors.EMAIL_ADDRESS = "Please enter a valid email address";
  }
  if (!city?.trim()) {
    errors.CITY = "City is required";
  }
  if (!country?.trim()) {
    errors.COUNTRY = "Country is required";
  }

  if (Object.keys(errors).length > 0) {
    return {
      IsValid: false,
      Errors: errors,
      code: 1
    };
  }

  return successResponse({ firstname, lastname, email });
});
```

```ts
//@k-url /api/upload
import { errorResponse, successResponse } from "Utils";

k.api.post(() => {
  try {
    const file = k.request.files?.[0];
    if (!file) {
      throw new Error("file is required");
    }

    const saveDir = `user_upload/${k.utils.date.utcNow.getFullYear()}`;
    const fileInfo = k.file.writeBinary(`${saveDir}/${file.fileName}`, file.bytes);

    return successResponse({
      url: fileInfo.absoluteUrl,
      alt: fileInfo.fullName
    });
  } catch (error) {
    return errorResponse(error?.message || error);
  }
});
```

## 备注

- 常见组合是 `//@k-url` + `k.api.*`
- 表单接口里经常会先收集错误对象，再统一返回
- 上传接口常见组合是 `k.request.files` + `k.file.writeBinary`
