---
title: 正当防卫4-epic版怎么设置中文.md
date: 2020-06-22 08:25:15
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 淘宝导入ps切图图片与图片见出现空隙，白条现象（具体测试见码云gitee）
categories: 游戏
tags:
  - 游戏
---

设置中文

正当防卫 4 的游戏语言是会根据 Epic 平台的语言进行自动适配的，

而 Epic 平台默认的是根据系统的语言来自适应的中文，

正当防卫 4 应该是没有完全匹配的语言，

在这种情况下检测到的默认语言也还是英文，

我们可以通过切换繁体中文后来使游戏匹配到正确的语言。

首先我们依次打开`C:\Users\用户名\AppData\Local\EpicGamesLauncher\Saved\Config\Windows下的GameUserSettings.ini`文件，

然后再将文件的最后部分修改成以下内容：

``` ini
[Internationalization]
Culture=zh-Hans
```

在保存之后重启 Epic 平台再运行正当防卫 4 就是中文了。

如果我们设置成 zh-Hant 的话，

那么 Epic 平台会显示为繁体而游戏里显示的是简体；

如果设置成 zh-Hans 的话，

那么 Epic 平台是简体而游戏里则变成了繁体。
