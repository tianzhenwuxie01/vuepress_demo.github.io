---
title: Excel随笔
date: 2020-05-23 08:25:13
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 淘宝导入ps切图图片与图片见出现空隙，白条现象（具体测试见码云gitee）
categories: 学习
tags:
  - excel
  - 软件
---

## excel 中日期单元格为啥老是 1900

比如在日期单元格中输入`2`,会变成`1900年1月2号`
比如在日期单元格中输入`5.17`,会变成`1900年1月5号`

**原因**

输入的`5.17`,系统会识别为数字，系统日期是从`1900-1-0`开始就是`0`，从`1900-1-0`经过`5.17`天就也是`1900-1-5 04:04:48`
正确输入`5-17`或`5/17`（年份会自动识别本地计算机时间）

**比如:**

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200523222201.png)
