---
title: GitHub + jsDelivr 打造高效免费图床
date: 2020-02-13 19:51:18
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
summary: GitHub + jsDelivr 打造高效免费图床
categories: github
tags:
  - github
  - 图床
---

### 前言

> 为什么要使用图床呢？

因为在不同平台发布同一篇文章的时候，最一个痛苦的点就是，图片存储问题，各个平台的文件存储方式各不相同，无法直接 `Ctrl + C` 的方式一键搞定，为了解决这个问题，使用 `MarkDown + 图床` 的方式进行文章的写作，将图片放到一个统一的地方，在文章中引入图片外链。  
所谓图床，就是将图片储存到第三方静态资源库中，其返回给你一个 URL 进行获取图片。`MarkDown` 支持使用 URL 的方式显示图片，我想这也是程序员为什么对其偏爱的原因之一。  
作为程序员，你会发现，现在很多论坛和社区都开始支持使用 `MarkDown`，如果你没使用图床的情况下，你分享同一篇文章，你要在不同的平台，各自重新编辑排版一遍和上传图片一次。  
有了图床，情况就不一样了，`Ctrl+C` 的方式就搞定了，根本不用再 Check 文章内容一遍。

> 图床的选择？

1.  `微博图床`：以前用的人比较多，从 2019 年 4 月开始开启了防盗链，凉凉
2.  `SM.MS`：运营四年多了，也变得越来越慢了，到了晚上直接打不开图片，速度堪忧
3.  `其他小众图床`：随时有挂掉的风险
4.  `Imgur 等国外图床`：国内访问速度太慢，随时有被墙的风险
5.  `大厂储存服务`：例如七牛云、又拍云、腾讯云 COS、阿里云 OSS 等，操作繁琐，又是实名认证又是域名备案的，麻烦，而且还要花钱（有钱又不怕麻烦的当我没说）
6.  `GitHub 图床`：免费，但是国内访问速度慢（不过没关系，利用 `jsDelivr` 提供的免费的 CDN 加速 速度足够了）

### 使用流程

1.  新建 GitHub 仓库
2.  生成一个 Token
3.  配置 PicGo 并使用 jsdelivr 作为 CDN 加速
4.  使用 Imagine 进行图片压缩
5.  上传图片到 PicGo 并使用图床

### 新建 GitHub 仓库

- 登录 / 注册 GitHub
- 新建一个仓库，填写好仓库名
- 仓库描述
- 将权限设置成 `public`
- 根据需求选择是否为仓库初始化一个 `README.md` 描述文件

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213194849.png)

### 生成一个 Token

#### Settings

1.  点击用户头像 -> 选择 `Settings`

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213195440.png)

#### Developer settings

2.  点击 `Developer settings`

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213195553.png)

#### Personal access tokens

3.  点击 `Personal access tokens`

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213195618.png)

#### Generate new token

4.  点击 `Generate new token`

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213195653.png)

#### 填写 Token 描述

5.  填写 `Token` 描述，勾选 `repo`，然后点击 `Generate token` 生成一个 `Token`

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213195715.png)

#### 获取 Token 密钥

1.  获取 `Token` 密钥

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213195733.png)

> 注意这个 Token 只会显示一次，自己先保存下来，或者等后面配置好 PicGo 后再关闭此网页

### 配置 PicGo 并使用 jsdelivr 作为 CDN 加速

前往下载 [PicGo](https://sitoi.cn/go.html?u=aHR0cHM6Ly9naXRodWIuY29tL01vbHVuZXJmaW5uL3BpY2dvL3JlbGVhc2Vz)（[点击下载](https://sitoi.cn/go.html?u=aHR0cHM6Ly9naXRodWIuY29tL01vbHVuZXJmaW5uL3BpY2dvL3JlbGVhc2Vz)），安装好后开始配置图床

- 设定仓库名：按照 `用户名/图床仓库名` 的格式填写
- 设定分支名：`master`
- 设定 Token：粘贴之前生成的 `Token`
- 指定存储路径：填写想要储存的路径，如 `img/`，这样就会在仓库下创建一个名为 `img` 的文件夹，图片将会储存在此文件夹中
- 设定自定义域名：它的的作用是，在图片上传后，PicGo 会按照`自定义域名+上传的图片名`的方式生成访问链接，放到粘贴板上，因为我们要使用 `jsDelivr` 加速访问，所以可以设置为`https://cdn.jsdelivr.net/gh/用户名/图床仓库名`

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213200018.png)

#### 配置 PicGo

```
Q：什么是 jsdelivr ?

A：jsDelivr 为开发者提供免费公共 CDN 加速服务
```

## [](#使用-Imagine-进行图片压缩 "使用 Imagine 进行图片压缩")使用 Imagine 进行图片压缩

通常情况下，图片大小都是超过 200KB 的，所以网页加载的时候会特别慢，一般我们会对图片进行压缩，这里我推荐 [Imagine](https://sitoi.cn/go.html?u=aHR0cHM6Ly9naXRodWIuY29tL21lb3d0ZWMvSW1hZ2luZS9yZWxlYXNlcw==)（[点击下载](https://sitoi.cn/go.html?u=aHR0cHM6Ly9naXRodWIuY29tL21lb3d0ZWMvSW1hZ2luZS9yZWxlYXNlcw==)） 支持全平台。

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213200146.png)

#### 使用 Imagine 进行图片压缩

> Imagine 采用的是有损压缩，介意的可以忽略这一步

顺便推荐一个无损压缩的网站：[https://tinypng.com/](https://sitoi.cn/go.html?u=aHR0cHM6Ly90aW55cG5nLmNvbS8=)

#### 上传图片到-PicGo-并使用图床

配置好 `PicGo` 后，我们就可以进行高效创作了，将`压缩后的图片`拖拽到`上传区`，将会自动上传并复制`访问链接`，将链接粘贴到博文中就行了，访问速度杠杠的

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213200222.png)

此外 `PicGo` 还有相册功能，可以对已上传的图片进行删除，修改链接等快捷操作，`PicGo` 还可以生成不同格式的链接、支持批量上传、快捷键上传、自定义链接格式、上传前重命名等，更多功能自己去探索吧！
