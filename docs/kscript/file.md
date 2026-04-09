---
title: File
description: "`k.file` 提供站点文件的读写、复制、删除和目录操作能力。"
prev:
  text: Content
  link: /kscript/content
next:
  text: Mail
  link: /kscript/mail
---

# File

`k.file` 用于文件相关操作。

## 常用成员

- `k.file.write`
- `k.file.writeBinary`
- `k.file.read`
- `k.file.readBinary`
- `k.file.exists`
- `k.file.load/get`
- `k.file.rename/copy/delete`
- `k.file.folderFiles/subFolders`
- `k.file.createFolder/deleteFolder`

## 代码示例

```ts
k.file.write("rootfile.txt", "content to write to text file");
var value = k.file.read("filename.txt");
```

```ts
if (k.file.exists("filename.txt")) {
  var info = k.file.get("filename.txt")
  k.response.json(info)
}
```

```ts
var bytes = k.file.readBinary("file.pdf");
var info = k.file.writeBinary("newname.pdf", bytes);
```

```ts
const file = k.request.files[0];
const saveDir = `user_upload/${k.utils.date.utcNow.getFullYear()}`;
const fileInfo = k.file.writeBinary(`${saveDir}/${file.fileName}`, file.bytes);
k.response.json({ url: fileInfo.absoluteUrl });
```
