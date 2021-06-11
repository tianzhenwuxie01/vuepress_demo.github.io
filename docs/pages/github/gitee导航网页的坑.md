---
title: gitee导航网页的坑
date: 2020-02-15 19:57:18
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
summary: gitee导航网页的坑
categories: github
tags:
  - github
  - gitee
---

#### 为导航添加彩带背景，蜘蛛线条，鼠标点击动画

github 可以正常加载，而 gitee 却嗝屁了，根本不理添加的 js。。。。难受 😒

经过多次尝试发现只有新添加的 js 文件夹和 index.html 同级是 gitee 才会加载（如下）

``` html
<script type="text/javascript" src="dist/aixin.js"></script>
```

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200215200525.png)

不知道是我操作问题，还是 gitee 的奇妙之处 🤣

咱也不会呀，咱也不知道该咋问
