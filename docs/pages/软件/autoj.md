---
title: autojs
date: 2020-02-13 18:05:04
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
summary: 在Win10上使用客户端观看Netflix
categories: 软件
tags:
  - 自动化
  - 安卓
---

## autojs（autoxjs）

[autoxjs文档](http://doc.autoxjs.com/#/)
[autojs文档](https://hyb1996.github.io/AutoJs-Docs/#/)

### 与tasker转递数据（意图）

``` js
app.sendBroadcast({
    // action意图名称,无所谓和tasker一样即可
    action: 'net.dinglisch.android.taskerm.new',  
    // 转递内容.可以在tasker里直接用变量%time使用
    extras: {
       time: xxx('可以是变量')
   }
})
```
>[参考文档1](https://jingyan.baidu.com/article/7e440953743fd62fc0e2efd1.html)
>[参考文档2](https://www.jianshu.com/p/ec102bd99213)
