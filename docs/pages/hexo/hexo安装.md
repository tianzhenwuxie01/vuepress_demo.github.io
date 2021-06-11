---
title: hexo搭建
date: 2019-08-16 08:25:19
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: sourceTree，gittub同步工具支持中文
categories: hexo
tags:
  - 博客搭建
---

## HEXO+GitHub Page 搭建博客方法

Github Page + Hexo 搭建个人博客的方式。Github Page 是 Github 提供的一种免费的静态网页托管服务（所以想想免费的空间不用也挺浪费的哈哈哈），可以用来托管博客、项目官网等静态网页。支持 Jekyll、Hugo、Hexo 编译静态资源，这次我们的主角就是 Hexo 了，具体的内容下面在文章内介绍。

<!--more-->

### hexo 安装

下面就开始吧~

#### 准备环境

准备 node 和 git 环境，
首先，安装 NodeJS，因为 Hexo 是基于 Node.js 驱动的一款博客框架
然后，安装 git，一个分布式版本控制系统，用于项目的版本控制管理，作者是 Linux 之父。

官网地址：[node.js](https://nodejs.org/en/ "node.js")
一直下一步就可以

#### 在命令行中输入相应命令验证是否成功，如果成功会有相应的版本号

``` yaml
git version
node -v
npm -v
```

![Snipaste_2019-08-15_16-01-48](https://i.loli.net/2019/08/15/Drb6gle827oBHtA.png)

#### 安装 Hexo

如果以上环境准备好了就可以使用 npm 开始安装 Hexo 了。也可查看 Hexo 的详细文档。
在命令行输入执行以下命令：

``` yaml
npm install -g hexo-cli
```

等待安装完成

#### 安装 Hexo 完成后，再执行下列命令，Hexo

将会在指定文件夹中新建所需要的文件。

``` yaml
hexo init myBlog
cd myBlog
npm install
```

> 注意如果 hexo init 指令报错请更新 node，npm 版本

- hexo init：初始化并建立一个叫 myBlog 的文件夹，并下载相关文件
- cd：进入 myBlog 文件夹
- npm install:安装依赖
  新建文件夹目录如下

``` yaml
── _config.yml # 网站的配置信息，您可以在此配置大部分的参数。
	├── package.json
	├── scaffolds # 模版文件夹
	├── source  # 资源文件夹，除 _posts 文件，其他以下划线_开头的文件或者文件夹不会被编译打包到public文件夹
	|   ├── _drafts # 草稿文件
	|   └── _posts # 文章Markdowm文件
	└── themes  # 主题文件夹
```

好了，如果上面的命令都没报错的话，就恭喜了，运行 hexo s 命令，其中 s 是 server 的缩写，在浏览器中输入 http://localhost:4000 回车就可以预览效果了。以默认主题显示

```
hexo s
```

### git 的部署

#### 检验 git 密钥

ssh -T git@github.com
首次使用还需要确认并添加主机到本机 SSH 可信列表。若返回 Hi xxx! You've successfully authenticated, but GitHub does not provide shell access. 内容，则证明添加成功。

---

#### 部署到 Github

此时，本地和 Github 的工作做得差不了，是时候把它们两个连接起来了。你也可以查看官网的部署教程。
先不着急，部署之前还需要修改配置和安装部署插件。
第一：打开项目根目录下的 \_config.yml 配置文件配置参数。拉到文件末尾，填上如下配置（gitee 同理更换 url）
![Snipaste_2019-08-15_16-28-03](https://i.loli.net/2019/08/15/ljGwBKScnt2gPiD.png)
第二：要安装一个部署插件[hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git)

`npm install hexo-deployer-git --save`

最后执行以下命令就可以部署上传啦，以下 g 是 generate 缩写，d 是 deploy 缩写：

`hexo g -d`

稍等一会，在浏览器访问网址： https://你的用户名.github.io 就会看到你的博客啦！！

> 若部署 gitee 主题样式没有记载
> 更改一下\_config.yml 文件，其中的 url 和 root 属性。
> url: https://remuxo.gitee.io/blog/
> root: /blog
> root 下面应该设置成 /你的项目名 而不是/
> 然后重新部署一下就成功了。
