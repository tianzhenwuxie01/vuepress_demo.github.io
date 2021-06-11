---
title: 网页转word
date: 2020-05-18 08:25:12
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 淘宝导入ps切图图片与图片见出现空隙，白条现象（具体测试见码云gitee）
categories: 学习
tags:
  - word
---

### 网页上的内容如何快速转 word

#### 谷歌浏览器

**1. （谷歌浏览器）打开要保持的网页，右键选择——另存为。选择个位置保持：例如桌面**

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200518112025.png)

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200518112041.png)

#### 其他浏览器（某 60）

> 360 浏览器保存网页在右上角三个横条中

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200518112953.png)

#### 导入 word

**2. 打开 word，选择打开——浏览文件——选择之前保持的 html 文件**

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200518112055.png)

> 图片加载需要网络

**3. 效果**

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200518112122.png)

### 常见问题--图片加载缓慢，图片加载不出来

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200518112137.png)

#### 解决方法一，使用离线 html 导入（利用插件）

**1. 安装浏览器插件 simpread,点击 simpread**

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200518113029.png)

**2. 选择更多——动作——导出——离线 html,等它转码完成开始下载(图片转为 base64)**

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200518113226.png)

> 这样到处的 html 加载图片不需要网络

#### 解决方法一，右键保存时选择 mhtml 保存（谷歌浏览器自带 mhtml）

mhtml 将网站的所有元素（包括文本和图形）都保存到单个文件中，**可离线访问，且 word 也支持**
