---
title: 常用shell指令
date: 2019-08-16 08:25:25
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 在我的个人导航添加使用阿里icon图标/添加后缀小标志/添加网页搜索
categories: linux
---

| 指令          | 说明               | column3   |
| ------------- | ------------------ | --------- |
| ls            | 显示当前文件       |           |
| ls-l          | 以列表形式显示文件 |
| ls-a          | 显示所有文件       |
| ls-al         | 以列表显示所有文件 |
| pwd           | 当前所在文件夹     |
| cd            | 跳转到指令目录     |
| cd+目录       | 跳转指定目录       | cd /boot/ |
| cd..          | 跳转到上一级目录   |
| cd+~          | 跳转到自己家       |
| clear         | 清屏               |
| ctrl+ait+f1   | 切换到图像界面     |
| ctrl+ait+f2~6 | 切换到字符界面     |
| logout        | 推出管理员         |
| shutdown      | 关机指令           |
| halt          | 立刻关机           |
| reboot        | 立刻重启           |

<!--more-->

#### shutdown 指令只能是超级管理员使用

shutdown -t 分钟数：多少分钟后关机（直接关机）
shutdown -t 分钟数：多少分钟后重启
shutdown -k 分钟数：多少分钟后关机（只发出关机警告，不关机）
shutdown -c 分钟数：取消关机。快捷键 ctrl+c

| su root  | 切换超级管理员 | column3  |
| -------- | -------------- | -------- |
| content1 | content2       | content3 |

:::
