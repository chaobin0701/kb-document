---
title: Market
description: "`k.market` 提供市场服务和扩展能力。"
prev:
  text: Mail
  link: /kscript/mail
next:
  text: Module
  link: /kscript/module
---

# Market

`k.market` 属于扩展能力面的一部分，是否可用应以当前项目的 `kooboo.d.ts` 为准。

## 常用成员

- `k.market.ImageClassify`
- `k.market.audio`
- `k.market.face`
- `k.market.translation`
- `k.market.chatgpt`
- `k.market.deepseek`
- `k.market.ocr`
- `k.market.inboxpreview`

## 代码示例

```ts
var result = k.market.ImageClassify.Animal(image);
```

```ts
var result = k.market.translation.TextTranslate("zh","en",text)
```

```ts
var res = k.market.chatgpt.image_generate("a cute cat")
```
