

### 关闭更新提示

#### 打开 Submine Text，找到 Preferences -> Settings-User

写入 "update_check":false,
PS:一定要加逗号.不会可以看图片

![subilime插件安装 ()](https://i.loli.net/2019/08/16/LbVCe2gNSc8hMTJ.png)

### 安装 packge control

要安装安装中文插件，就必须先安装 package control

因为通过代码的方式安装经常出现各种各样的错误，所以这里不就介绍代码在安装方式了，本文介绍的手动安装 package control

#### 点击 Preferences----->Browse Packages

![subilime插件安装 (1)](https://i.loli.net/2019/08/16/3ePYc9sqfmBj6kI.png)

#### 点击该界面后，点击 Sublime Text 3

![subilime插件安装 (2)](https://i.loli.net/2019/08/16/iFpXuIPJV6YBagQ.png)

#### 点击 Installed Packagees

![subilime插件安装 (3)](https://i.loli.net/2019/08/16/zJ5dg8ejY7nUqkZ.png)

#### 手动下载，

下载地址为 [https://sublime.wbond.net/Package%20Control.sublime-package](https://sublime.wbond.net/Package%20Control.sublime-package)，并将下载的 Package Control.sublime-package 复制到 Installed Packagees 目录下，及安装完成，如下图所示

#### 5. 下载地址备份：/网盘/Sublime Text Build 3176/Package Control 安装包

![subilime插件安装 (4)](https://i.loli.net/2019/08/16/9zB5whYrSTsqkXE.png)

### 安装中文插件

#### 按住快捷键 shift+ctrl+p，或者 Preferences----->Package Control

![subilime插件安装 (5)](https://i.loli.net/2019/08/16/sP4rOckzUFJpe5G.png)

#### 输入 Install Package

![subilime插件安装 (6)](https://i.loli.net/2019/08/16/qO3pWQatmSNo4BG.png)

#### 然后在弹出的命令界面，输入 Chinese，选择 ChineseLocalization，就会进行安装并切换

若按住没有自动切换，则手动切换方法如下

![subilime插件安装 (7)](https://i.loli.net/2019/08/16/eg9l3WHUEojQznV.png)

### 安装 md 预览插件 (按 alt+m 可以再浏览器里预览)

ctrl + shift + p

```
 Package Control: Install
```

#### 搜索安装插件

- markdown preview
- Markdown Editting
- LiveReload

#### 将 Markdown Preview 的 enable_autoreload 设置为 true

打开 Preferences – Package Settings – Markdown Preview – Setting，在 user 设置中添加：

``` yaml
{ "enable_autoreload": true }
```

#### 启用 LiveReload

打开 ctrl + shift + p，输入 `LiveReload: Enable/disable plug-ins`，选择 `Enable: Simple Reload`

#### 设置预览快捷键

选择 Preferences — Key Bindings-User，将下面的内容添加进去:

``` yaml
{
  "keys": ["alt+m"],
  "command": "markdown_preview",
  "args": { "target": "browser", "parser": "markdown" },
}
```

### 安装 View In Browser 插件（按住 ctrl+alt+c 浏览器预览 html 文件）

#### 安装方法如上

打开`Package Control: Install`搜索`View In Browser`

#### 快捷键

安装完成后，使用默认的快捷键：
Firefox 浏览器： Ctrl + Alt + f
Chrome 浏览器： Ctrl + Alt + c
IE 浏览器： Ctrl + Alt + i
Safari 浏览器： Ctrl + Alt + s
如果想要自定义快捷键的话，可以在 Keybindings 中配置各浏览器快捷键。

``` yaml
{ "keys": [ "ctrl+alt+v" ], "command": "view_in_browser" },
{ "keys": [ "f5" ], "command": "view_in_browser", "args": { "browser": "firefox" } },
{ "keys": [ "f3" ], "command": "view_in_browser", "args": { "browser": "chrome" } },
{ "keys": [ "ctrl+alt+i" ], "command": "view_in_browser", "args": { "browser": "iexplore" } },
{ "keys": [ "f4" ], "command": "view_in_browser", "args": { "browser": "safari" } }
```

### 移除插件

`command + shift + p`,输入`pcr`

选择`Package Control: Remove Package`

然后选择你想要移除的插件

### 开启代码折叠小三角

一、显示折叠小三角

#### 点击 Sublime 的`Preferences`->`Setting-Default`菜单，打开它的配置文件。

#### 找到行

``` yaml
// Fold buttons are the triangles shown in the gutter to fold regions of text
"fold_buttons": true,
// Hides the fold buttons unless the mouse is over the gutter
"fade_fold_buttons": false,
// Fold buttons are the triangles shown in the gutter to fold regions of text
"fold_buttons": true,
 
// Hides the fold buttons unless the mouse is over the gutter
"fade_fold_buttons": false,

```

\*. 不推荐你直接改它的默认配置文件，你可以在`Setting-User`里覆盖此变量值。

###重启生效

### 折叠快捷键

```
Ctrl+Shift+[ 折叠代码
Ctrl+Shift+] 展开代码
Ctrl+KT 折叠属性
Ctrl+K0 展开所有
Ctrl+Shift+[ 折叠代码
Ctrl+Shift+] 展开代码
Ctrl+KT 折叠属性
Ctrl+K0 展开所有

```
