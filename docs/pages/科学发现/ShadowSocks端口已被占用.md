---
title: ShadowSocks 端口已被占用
date: 2019-08-16 08:25:04
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 奈飞客户端--安卓
categories: 科学发现
tags:
  - 科学上网
---

### ssr 是啥就不多说了，说下打开 ssr 出现端口占用的解决方法吧

错误页面如上图，首先我们去排查一下是自己电脑的端口占用了 SS 的 1080 还是运行 SS 的服务器上的端口被占用了，方法很简单，使用手机打开 SS 这时如果能够正常访问的话就是自己的电脑端有软件占用了 SS 的 1080 端口，这时我们打开命令行（Win+R），cmd 在如下图命令行里面输入：netstat -ano （列出所有端口的情况）

<!--more-->

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213173428.png)

我们可以看到 1080 端口对应的 PID 是 6148，然后我们就需要去找一下这个 6148 对应的什么程序，然后把它给关闭就可以正常启用 SS 继续在命令行中输入：tasklist|findstr "6148"(注意使用英文输入法的引号)

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213173429.png)

如上图，我们能发现 PID 6148 对应的程序是什么（此处显示 ShadowSocks 是因为我已经排查好了）然后我们就可以手动关闭这个软件即可重新打开 SS

如果不想使用命令行查看对应的程序，也可以打开任务管理器（Ctrl+Shift+Esc）点击进程选项，寻找 PID 是 6148 的程序进行结束进程  
![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213173526.png)

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213173527.png)

此时就可以重新打开 SS 了，回到解决方法的第一步，如果是手机客户端也没有办法访问，同时检查电脑的端口占用的时候并未发现有 1080 端口被占用的情况发生，那么我们就需要去排查一下搭建 SS 的服务器里面的程序端口使用情况，方法与上面排查的方式一样，也是去找哪个程序占用了这个端口，然后关闭它，如果出现不方便关闭的软件，我们也可以在 SS 的配置文件中进行修改端口，尽量改一个不太容易被重复使用的就好了

【注】检查端口那块也可以使用如下命令：`netstat -ano|findstr` "1080" 直接查找 1080 对应的 PID，然后打开任务管理器去关闭对应 PID 的程序既可以了…
