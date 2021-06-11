

### 废话不多说,第一步直接 clone-git 项目

[**地址**](https://github.com/jiahaog/nativefier)

Ⓜ️Ⓜ️ 网页打包成 app 程序的使用指令
首次安装依赖: `npm install nativefier -g`
固定开始菜单: `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\nativefier`

``` yaml
# 有icon的 (以相对地址为例)
nativefier --name "Microsoft To-Do" --platform windows --icon /Users/liuxiaofeng/Documents/dev/todo.png.icns "https://todo.microsoft.com/"

nativefier --name "gugeemail" --platform windows --icon /www/nodejs/google.ico "https://mail.google.com/mail/ca/u/0/#inbox"

nativefier --name "bilibili" --platform windows --icon /www/nodedjs/icon/bili.ico "https://www.bilibili.com/"

nativefier --name "remuxo" --platform windows --icon logo_64.ico "https://remuxo.gitee.io/"

# 无icon的
nativefier --name "导航" --platform windows  "https://git.0514.ink/cn/index.html"

nativefier --name "remuxo" --platform windows "https://remuxo.gitee.io/gitbook/"

```
