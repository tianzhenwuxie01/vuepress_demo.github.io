---
title: sourceTree 添加 ssh key 方法
date: 2019-08-18 08:25:18
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
summary: sourceTree，gittub同步工具支持中文
categories: github
tags:
  - github
  - 软件
---

### 使用 git 客户的生成公私钥：id_rsa、id_rsa.pub

#### 设置 Git 的 user name 和 email：

``` bash
$ git config --global user.name "xxx"
$ git config --global user.email "xxx.mail@xxx.com"

```

#### 生成 SSH 密钥过程：

检查是不是已经存在密钥（能进去说明已经存在，就删掉文件夹，重新创建）：  
cd ~/.ssh
生成 SSH 密钥：

``` bash
$ ssh-keygen -t rsa -C “xxx.mail@xxx.com”
```

按 3 个回车，密码为空。

文件存放位置 ~/.ssh，如果是 window 的话就在：`C:\Users\Administrator.ssh `下面，当然如果你不是 Administrator 用户的话，需要换成对应的用户。

### 设置 SourceTree 的 SSH 客户端

**配置 SourceTree 的 SSH 客户的为：OpenSSH**
工具 -> 选项  
![](https://img-blog.csdn.net/20170107104616094?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGVuZ2Rhemhhbmc3NzA5NjA0MzY=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

**设置 OpenSSH, 这时候，SSH 密钥这一栏自然会去选择当前用户下的 .ssh 目录下的 id_rsa 这个私钥**

![](https://img-blog.csdn.net/20170107104654561?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGVuZ2Rhemhhbmc3NzA5NjA0MzY=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

**添加 ~/.ssh/id_rsa.pub 文件内容到 git 服务器里面去**

比如你的 git 服务是 github，那么你需要在 [https://github.com/settings/keys](https://github.com/settings/keys) 里面添加 SSH key

![](https://img-blog.csdn.net/20170107105602777?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGVuZ2Rhemhhbmc3NzA5NjA0MzY=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

![](https://img-blog.csdn.net/20170107110027846?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGVuZ2Rhemhhbmc3NzA5NjA0MzY=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

### SourceTree 来下载 git 项目

复制你的 git 地址：git@github.com:ztd770960436/justgame.git
从 SourceTree 里面新建一个地址，这时候你发现你本地已经可以下载远程的 git 代码了
![](https://img-blog.csdn.net/20170107110045393?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGVuZ2Rhemhhbmc3NzA5NjA0MzY=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

### 解释：

```
是公钥私钥的非对称加密方式：
公钥：用于向外发布，任何人都能获取。
私钥：要自己保存，切勿给别人
公钥私钥加解密的原理
客户端把自己的公钥存放到要链接的远程主机上（相当于我们把自己的 id_rsa.pub 存放到 git 服务器上）
客户端要链接远程主机的时候，远程主机会向客户的发送一条随机的字符串，客户的收到字符串之后使用自己的私钥对字符串加密然后发送到远程主机，远程主机根据自己存放的公钥对这个字符串进行解密，如果解密成功证明客户端是可信的，直接允许登录，不在要求登录。
```
