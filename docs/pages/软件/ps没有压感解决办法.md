---
title: ps是没有压感解决办法
date: 2020-02-13 17:49:04
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
summary: ps是没有压感解决办法，添加配置文件
categories: 软件
tags:
  - 设计
  - photoshop
---

### ps 数位板没有压感解决方法

#### 1.重启软件，电脑。（重启解决 99%问题）

#### 2.先检查数位板驱动，重装驱动

[wacom 驱动下载](https://www.wacom.com/zh-cn/support/product-support/drivers)

[友基驱动下载](https://www.ugee.com.cn/Download/index)

#### 3.如果驱动没问题还是没有压感，查看 ps 压感配置文件

在资源管理器（我的电脑）中输入`%appdata%\Adobe`然后回车，找到并打开 Adobe Photoshop CC 20xx 文件夹，随后打开 Adobe Photoshop CC 20xx Settings 文件夹。如下图

> 20xx 根据自己情况定

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213175651.png)

在这个文件夹中右键新建一个文本文档，取名为`PSUserConfig.txt`
打开这个文本文档，在里面输入

```
# Use WinTab
UseSystemStylus 0
```

随后保存

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213175650.png)

#### 4.丢了吧（重买解决 100%问题）
