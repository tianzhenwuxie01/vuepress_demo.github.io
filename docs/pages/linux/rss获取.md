---
title: rss源获取与tinyrss服务器搭建
date: 2021-08-09 08:25:24
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 在我的个人导航添加使用阿里icon图标/添加后缀小标志/添加网页搜索
categories: linux
tags:
---

## 搭建RssHub

### 安装 Git

### 安装 nodejs（好像需要把）

### 安装 RSSHub

1.直接克隆git源码`git clone https://github.com/DIYgod/RSSHub.git`
2.进入文件夹安装依赖`cd RSSHub` `npm install`
3.启动`npm start`
4.上面方式命令窗口关掉就停止了，可以使用 Supervisor

``` ini
[program:rsshub]
command=npm start
directory=/www/wwwroot/rsshub.0514.ink/
autorestart=true
startsecs=3
startretries=3
stdout_logfile=/www/server/panel/plugin/supervisor/log/rsshub.out.log
stderr_logfile=/www/server/panel/plugin/supervisor/log/rsshub.err.log
stdout_logfile_maxbytes=2MB
stderr_logfile_maxbytes=2MB
user=root
priority=999
numprocs=1
process_name=%(program_name)s_%(process_num)02d
```

5.使用域名访问，宝塔随便建立个网站，反代1200端口即可

## 安装Tiny Tiny RSS服务  已放弃，改用FreshRSS

安装ttrss也有两种比较常见的方案，一种是`docker`，一种是通过`源码`。这里，我们采用源码的方式。

首先，利用宝塔新建一个站点：`xxx.0514.ink`，然后配置PHP为`7.4 `（只要大于5.5就行，7.x性能更好），打开PHP的`fileinfo`，然后打开终端：

`git clone https://tt-rss.org/git/tt-rss.git `

git速度慢，这里有个别人打包好的。[天翼云下载链接](https://www.machunjie.com/go/?url=https://cloud.189.cn/t/qUZv6z2uUnim%EF%BC%88%E8%AE%BF%E9%97%AE%E7%A0%81%EF%BC%9A8fws%EF%BC%89)

下载完成之后，将里面的内容移动到`xxx.0514.ink`目录下，注意把之前的里面的文件删掉。

在宝塔中配置SSL，打开强制HTTPS。完成之后，打开`xxx.0514.ink/install`，开始安装：

### 常见错误

1.`PHP function mime_content_type() is missing, try enabling fileinfo module.`
> 解决方法：pip版本设置里安装`fileinfo`模块

2.`Exception while creating PDO object:could not find driver`
> 莫名其妙，下载了一个老版本的程序，放上去成功运行。[阿里oss备份下载](https://remuxo.oss-cn-hangzhou.aliyuncs.com/bf/tt-rss.zip)

### 安装Fever插件

下载[插件](https://remuxo.oss-cn-hangzhou.aliyuncs.com/bf/fever.7z)放到plugins，plugins.local下面，设置里启动插件，设置插件密码，打开`https://tinyrss.0514.ink/plugins/fever/`即可

## 安装FreshRSS

>因为不知道什么鬼原因，Tiny Tiny RSS的更新一直有问题，改用FreshRSS

[git地址：](https://github.com/FreshRSS/FreshRSS)

FreshRSS 安装要求比较低，一种部署方式是直接上传安装包，一般的虚拟主机或 VPS 都能搭

我的 VPS 安装的宝塔面板，所以首先去域名 DNS 解析一个新网址，然后在宝塔里用该网址新建站点ph7.x，MySQL 数据库，顺便 SSL 证书也一起申请了。
还有一个问题，PHP 得安装 Fileinfo 扩展，其实这个扩展 Tiny Tiny RSS 也是需要的。宝塔面板安装扩展还是很简单的，php设置-安装拓展里添加

### 安装

[git](https://github.com/FreshRSS/FreshRSS)里下载压缩包，解压上传站点，浏览器输入站点，下一步下一步即可。数据库填写：表前缀可以不填，数据库主机127.0.0.1即可

### 更新及手机客户端

手机客户端我用的 FeedME，API 支持 fever 和 greader。TT RSS 要安装 fever 插件才支持，而 FreshRSS 则自带。
FreshRSS 设置->用户账户->API 管理，设置访问密码。
打开链接 https://域名/p/api/ 可以看到两种 API 链接，选择一个填写。
用户名是 FreshRSS 的登录名，密码是前面设置的访问密码或api密码。

``` ini
http://域名/p/api/fever.php
http://域名/p/api/greader.php
```

> 1. 设置--认证里打开允许AP访问(用于手机应用)
> 1. 设置--用户账户--api管理设置api密码

### 自动更新

[官方文档](https://freshrss.github.io/FreshRSS/en/users/03_Main_view.html#refreshing-feeds)

1. 如果使用网页更新则需要打开认证里的

* 允许匿名阅读默认用户(admin)的文章
* 允许匿名刷新文章
* 访问url`https://feverrss.0514.ink/p/i/?c=feed&a=actualize`更新
* 访问url`https://feverrss.0514.ink/p/i/?c=feed&a=actualize&force=1`全文更新

2. 如果脚本更新

* `php /www/wwwroot/feverrss.0514.ink/app/actualize_script.php > /tmp/FreshRSS.log 2>&1`
* 完整定时更新命令`*/20 7-23 * * * php /www/wwwroot/feverrss.0514.ink/app/actualize_script.php > /tmp/FreshRSS.log 2>&1`
* `crontab -e`添加定时命令

### 常见问题

#### openlog报错

`Warning: openlog() has been disabled for security reasons in /www/wwwroot/rss.mianao.info/lib/lib_rss.php on line 15`
在安装下一步下一步时候上面会弹出，安装结束无法登录

> 解决方法：
到 `/www/server/php/70/etc/php.ini` 打开 `php.ini` 文件大概到 299 行（不一定）中`openlog`删掉

其实就是禁用函数，在php设置--禁用函数里改也一样

``` ini
disable_functions = passthru,exec,system,chroot,chgrp,chown,shell_exec,popen,proc_open,ini_alter,ini_restore,dl,syslog,openlog,readlink,symlink,popepassthru
```

#### 定时更新脚本`actualize_script.php`失败

忘记截图了报错翻译翻译吧，大概率`syslog`问题

>解决方法如上面`openlog`，禁止函数里吧syslog也禁止了就可以了

