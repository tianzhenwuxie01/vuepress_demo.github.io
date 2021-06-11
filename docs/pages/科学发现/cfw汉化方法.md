

本文记录一下 Clash for Windows 的汉化过程，其实是比较简单的。Clash 的文字相关配置都在`Clash for Windows\resources\app.asar`中，用 node.js 将其解包，修改为中文后，再重新打包即可。

> 来自幽游地

## 下载 ClashR

项目地址：[https://github.com/Fndroid/clash_for_windows_pkg/releases](https://github.com/Fndroid/clash_for_windows_pkg/releases)

截至本文发布时，最新版是 0.9.8

下载后解压

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200824213828.jpg)

[20200425-224.jpg](https://img.uud.me/dispatch/9113a9e77861532bfb272430fa82b27e)

## 安装 Node.js

下载地址：[https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)

下载后自行安装即可，不赘述

安装完毕后，打开 Powershell，输入 `npm -v`，检查是否安装成功，通常会返回版本号，如果没有就需要手动配置环境变量，这个就自行搜索解决吧

## 汉化过程

### 安装 asar

首先进入 `app.asar` 所在目录，然后用 npm 安装 asar，在 Powershell 中输入：

```
npm install -g asar

```

等待安装完毕：

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200824213904.jpg)

[20200425-226.jpg](https://img.uud.me/dispatch/87dfef685148d2dc6b80e5619aef2f34)

需要注意一下 `asar` 的安装路径，如上图中红框部分就是路径。

输入 `asar --version` 确认安装是否成功，返回版本号即成功，否则手动设置环境变量

### 解包

输入如下命令解包：

```
asar extract app.asar 文件夹名

```

示例：

```
asar extract app.asar jiebao

```

解包之后，在你指定的文件夹中，会在 `Clash for Windows\resources\` 下生成一个文件夹 `jiebao`，进入此文件夹下，目录结构如下：

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200824214051.jpg)

[20200425-227.jpg](https://img.uud.me/dispatch/64858a782708afe8fd23de2f01960994)

进入 `Clash.for.Windows-0.9.8-win\resources\jiebao\dist\electron`，打开文件 `renderer.js`：

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200824214150.jpg)

[20200425-228.jpg](https://img.uud.me/dispatch/d5343c144b90c2ca00ce6cc69a43fa6d)

打开后会发现格式比较乱，可以网上找一个 js 格式美化工具美化一下，修改时看起来比较容易。

### 替换

整个汉化过程，主要就是将原版英文界面出现的字符替换为中文

举个例子：

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200824214226.jpg)

[20200425-229.jpg](https://img.uud.me/dispatch/cc38b77a83b300176444b49822be0d04)

如上图红框，我们需要将其汉化，那么我们就在 `renderer.js` 里搜索 `"General"`：

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200824214243.jpg)

[20200425-230.jpg](https://img.uud.me/dispatch/58f6169bd760b1e4b644c8b8bc3f108f)

将其进行替换即可。

想要汉化哪个就搜索哪个，逐个替换，是个体力活。

### 重新打包

当你汉化完成后，就可以将文件重新打包：

```
asar pack 文件夹名 app.asar

```

示例：

```
asar pack jiebao app.asar

```

如果替换过程没有错误的话，打包完成后，打开 ClashR，就可以看到汉化效果：

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200824214329.jpg)

## 总结

方法步骤是比较简单的，麻烦的是替换的过程。
