

## 编辑器中大佬

### 切换语言

Vscode 是一款开源的跨平台编辑器。默认情况下，vscode 使用的语言为英文(us)

- 打开 vscode 工具
- 使用快捷键组合`Ctrl+Shift+p`，在搜索框中输入“configure display language”，点击确定后；
- 修改 locale.json 文件下的属性“locale”为“zh-CN”
- 重启 vscode 工具

如果重启后 vscode 菜单等仍然是英文显示，在商店查看已安装的插件，把中文插件重新安装一遍（如下图），然后在重启工具
![](https://i.loli.net/2019/08/18/5cPYZBzAHqryvaw.png)
在上图中商店中搜索 Chinese（Simplied） Lang，安装即可。

### 切换字体

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200509174504.png)

> Fira Code 为字体名称

### 以安装插件




#### Auto fileName

> 貌似是支持文件提示

#### Bookmarks

> 书签

#### Chinese(simplified) Language Pack for Visual Studio Code

> 中文语言包

#### Code Runner

> 运行选中代码

#### Dracula official

> 一款高亮的暗色主题，很漂亮

#### Live server

> 浏览器运行 html 文件

#### markdown 预览

> vscode 自带 markdown 预览，快捷键`ctrl+k v`开启侧边预览`ctrl+shift+v`全界面预览

#### Markdown all in one

> markdown 快捷键，格式化插件

#### vscode-icons

> vscode 文件前面有小图标

#### python

> 运行 python

#### CSS Peek

> emmm 不知道是个啥玩意

#### lit-html

> 不知道啥玩意

#### HTML Boilerplate

> 不知道啥玩意

### 已禁用插件

#### One Dark Pro

> 漂亮的暗色主题，和 Dracula official 比偏暗

#### Open in Browser

> 浏览器运行 html 文件



## 常见问题

### vscode 找不到 git 了

1. 文件--首选项--设置，搜索 git，并在 setting.json 中打开

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200409173919.png)

2. 找到你的 git.exe 的位置，如图这是我的 git.exe 的位置，将地址复制
   > 注意：是安装目录下 cmd 文件夹里面的 git.exe，不是 git-bash.exe

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200409174431.png)

3. 直接复制在 setting.json 中
   > 使用双斜杠

``` json
{
  "liveServer.settings.donotShowInfoMsg": true,
  "git.autofetch": true,
  // "terminal.integrated.shell.windows": "E:\\360\\git\\Git\\bin\\bash.exe",
  "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
  "gitlens.advanced.messages": {
    "suppressCommitHasNoPreviousCommitWarning": true
  },
  "workbench.iconTheme": "vscode-icons",
  "workbench.colorTheme": "Dracula",
  "editor.renderWhitespace": "all",
  "editor.renderControlCharacters": false,
  "vsicons.dontShowNewVersionMessage": true,
  "editor.minimap.enabled": true,
  "git.path": "E:\\360\\git\\Git\\cmd\\git.exe",
  "diffEditor.ignoreTrimWhitespace": true
}
```

4. 重启就 ok 了

### sCode 内的终端无法使用 node, git 等后来安装的程序，但是 Windows 下直接使用终端可以用

安装 git，node 等在 Windows 中的终端打开，正常可用
在 VS Code 中调用各种终端（cmd，powershell，gitbash 等）均无法使用 node，git 等程序，提示找不到，如 git:无法将“git”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次 。

重启系统后正常了.......(不知道什么玄学原因)

> 参考 git-issue[https://github.com/Microsoft/vscode/issues/36142](https://github.com/Microsoft/vscode/issues/36142)
