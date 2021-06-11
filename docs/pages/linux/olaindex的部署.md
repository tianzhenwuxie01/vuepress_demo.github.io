---
title: olaindex的部署
date: 2019-08-16 08:29:29
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 在我的个人导航添加使用阿里icon图标/添加后缀小标志/添加网页搜索
categories: linux
tags:
  - vps
  - OneDrive
  - olaindex
---

### 1 准备工作

服务器一台，配置要求不高，低配版就可以。  
onedrive 网盘账号一个，家庭版、教育版或商业版都可以。  
时间和耐心两斤。

### 2 简介

主要有这么几类：

1. 原版 oneindex：开山鼻祖，使用的人较多，安装方便。但是经常会白屏（API 被吞失效）
2. pyone：听说看片方便，有一键安装代码，容易失败
3. onelist：轻便简洁，不支持看视频和看图。另外该作者还有魔改版的 oneindex，优化了图片分类。
4. olaindex：界面精美，API 稳定，方便看图、看视频，支持多网盘。安装有点困难，本文的主角。
5. cuteone：听说功能多，但我没用过。
6. 其他 oneindex 修改版：各种修改版其实挺多的，建议自己寻找合适的。

### 3 正文开始

#### 安装宝塔

[宝塔](https://www.bt.cn/download/linux.html)

#### 正式安装

**安装环境**

- nginx+php
- PHP >= 7.2

#### php 禁用函数

安装好宝塔后，进入软件设置，找到 php7.2，安装，然后打开设置，安装 fileinfo 和 opcache 这两个拓展。（如下图）

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200217144548.png)

在禁用函数中，分别禁用是 exec 、 shell_exec 、 proc_open 、proc_get_status 这四个函数。
为防止失败，我们可以进行饱和式设置，即多删几个函数，防止接下来安装的时候出错。可以参考我的单子，只保留这些就可以了：

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200217144723.png)

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200217144753.png)

设置完后，在 PHP 服务中重启 php。一定要重启！一定要重启！一定要重启！

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200217144813.png)

这个宝塔面板已经默认自带了，但是为避免出错，我们进行饱和式设置，再执行一边.

接下来用 ssh（不建议直接宝塔的 ssh，推荐用云服务器的 ssh），一行一行分开输入以下代码，并执行：

``` yaml
curl -s https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```

在站点中新建一个网站，输入域名，不需要数据库，版本选择 php7（我这里用的是 7.3），截图里是错的。

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200217144847.png)

这里坑很多，请配合填坑指南仔细观看。

新的 readme[new](https://github.com/WangNingkai/OLAINDEX)

``` yaml
cd /www/wwwroot/你的域名
git clone https://github.com/WangNingkai/OLAINDEX.git tmp
mv tmp/.git .
rm -rf tmp
git reset --hard
composer install -vvv  # Install Dependencies
chmod -R 777 storage # Important！！！Ensure that the cache directory has read and write permissions
chown -R www:www * # this 'www' refer to the serve user group
composer run install-app # installation app
```

<details>
<summary><b style="color:#B47CFD">老版配置及其常见错误</b></summary>

```
cd /www/wwwroot/你的域名
rm -rf *
git clone https://github.com/WangNingkai/OLAINDEX.git tmp
mv tmp/.git .
rm -rf tmp
git reset --hard composer install -vvv
chmod -R 777 storage/
chown -R www:www *php artisan od:install
chmod 777 storage/app/config.json
```

有好多次是因为禁用函数出的问题，再然后就是权限的问题。
禁用函数我们通过饱和式设置，多删了几个函数，应该已经没有问题了，那我们接下来看第一行。

第 1 行：这里的域名一定要换成自己的域名，别傻乎乎的就复制上去了。
第 5 行：这里如果出现了和下图一样的错误，那就是第一行的路径输入错误，请检查路径，重新开始。

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200217145610.png)

第 6 行：执行完之后，一切顺利的话，应该是下图这个样子

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200217145637.jpg)

第 7 行：这里如果出错了，很大概率是禁用函数和 Composer 的问题，请重新输入有关安装 Composer 的代码。

第 8 行：这里的权限原本是 755，我改成了 777，或者可以在宝塔面板 - 文件中（/www/wwwroot / 你的域名 /）的目录下找到这个叫做 storage / 的文件下，手动设置权限为 777。或者干脆全部 777

第 10 行：输入代码后，会让你输入网站地址，一定要加上 https:// 接着会问你 yes 还是 no，我试了几遍，两个选项都没有区别，所以我选择了 no，接着就会给你默认的账号密码：账号 admin，密码 12345678

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200217145713.png)

第 12 行：这里是一个大坑，因为我们执行这句命令后会发现，返回的命令告诉我们 “设置出错，没有这个文件”。
用命令 find storage 搜索了一下后发现，没有 config.json 这个文件，与之相近的是 example.config.json

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200217145744.png)

进入到宝塔面板 - 文件里查看之后，我们发现，在 storage/app / 这个目录下果然是没有 config.json 这个文件的，只有一个叫做 example.config.json 的文件。所以我推测，这里应该是版本更新后，官方教程和文件不匹配导致的一个 BUG。

现在我们有两个选项，把 example.config.json 改名为 config.json，然后执行 12 行的命令，或者直接修改第 12 行的命令。

按照我们宁愿多走一步 ，不愿多出一次错的思想，进行饱和式设置，把 example.config.json 复制一份到其他文件夹，改名为 config.json，再复制回来，将两个文件的权限都改为 755 或 777。

手动设置权限之后，就不需要再输入命令行了。达到下图的标准就可以了：

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200217145857.png)

</details>

打开网站设置，在网站目录中，把运行目录改成 / public，关闭 “防跨站攻击 (open_basedir)”，然后重启 php7.2。

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200217145924.png)

接着修改伪静态：

新版宝塔选择伪静态-选择`Laravel 5`即可

```
location / {
      try_files $uri $uri//index.php$is_args$query_string;
}
```

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200217150055.png)

设置 SSL，申请之后打开右上角 “强制 HTTPS”

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200217150222.png)

网站--配置里--注释掉以下代码
![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200823230451.png)

然后就 ok 了
输入 https:// 你的域名/admin 登录，将你的网站和 onedrive 账号相绑定。
输入账号：admin，密码 12345678，进入到 API 申请页面。

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200823230836.png)

### 常见错误

#### 密码死活不对，忘记密码

进入对应目录执行
`php artisan helper:reset-password`

[iuess](https://github.com/WangNingkai/OLAINDEX/issues/307)
