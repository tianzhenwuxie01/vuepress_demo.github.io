

> 段落引用 h5ai 是一款基于 PHP 的现代化的 WEB 列目录程序，h5ai 这个名字的含义是 HTML5 Apache Index 的缩写，顾名思义作者最开始是将这个程序与 Apache 相结合的，但随着多个版本的更新，现在已经可以支持更多的 WEB 服务器了，比如：Nginx。

<!--more-->

#### CentOS7，首先安装一下宝塔面板：

``` yaml
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install.sh && sh install.sh
```

然后安装一个 LNMP 环境，PHP 选择 7.0，其他随意，安装完成后新建一个站点。

进入到站点根目录，点击宝塔内的 “远程下载”，下载 h5ai 的源码，下载地址：

https://release.larsjung.de/h5ai/h5ai-0.29.0.zip

如图所示：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_10-20-21.png)

解压压缩包，现在你的站点根目录内的结构应该是这样的：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_10-21-29.png)

点击 “软件管理”，找到对应你 PHP 版本的设置，在“禁用函数” 这里删除 exec 这个函数：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_10-27-48.png)

然后点击 “安装扩展”，在里面安装 EXIF：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_10-28-19.png)

接着点击 “网站管理”，编辑你的站点设置，找到“配置文件” 选项，在里面找到 index 这一行，如图所示：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_10-40-14.png)

在这一行的末尾加上如下内容（注意前面要加一个空格）：

``` yaml
/_h5ai/public/index.php
```

如图所示：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_10-39-15.png)

现在回到终端内，安装 ffmpeg（用于在 h5ai 界面内显示视频缩略图）：

``` yaml
rpm --import http://li.nux.ro/download/nux/RPM-GPG-KEY-nux.ro
rpm -Uvh http://li.nux.ro/download/nux/dextop/el7/x86_64/nux-dextop-release-0-1.el7.nux.noarch.rpm
yum -y install ffmpeg
ffmpeg -version
```

成功如图所示可以看到 ffmpeg 的版本信息：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_10-31-05.png)

安装 GraphicsMagick：

``` yaml
wget ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/1.3/GraphicsMagick-1.3.30.tar.gz
tar -zxvf GraphicsMagick-1.3.30.tar.gz
cd GraphicsMagick-1.3.30
./configure
make
make install
gm -version
```

成功如图所示可以看到 gm 的版本信息：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_12-41-37.png)

现在打开你的站点域名 +/\_h5ai/public/index.php，不出意外可以看到这样一个需要输入密码的界面：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_12-42-27.png)

初次使用不需要输入密码，直接登录就行了，登录进去之后，确保所有检查选项都是正常的：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_10-58-32.png)

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_10-58-14.png)

#### 至此，h5ai 就安装完成了，接下来是一些配置选项，可根据自己的需要更改。

编辑 h5ai 的配置文件，路径如下：

``` yaml
_h5ai/private/conf/options.json
```

在这个文件内，首先我们找到 l10n，将 lang 的值改为 zh-cn，如下图所示，这样就可以让 h5ai 默认以中文显示：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_11-02-42.png)

其次找到 search，把 enabled 的值改为 true 可以开启 h5ai 内置的文件搜索功能：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_11-06-38.png)

接着，如果你有打包下载的需求，可以找到 download，把 enabled 的值改为 true，这样你就可以在 h5ai 一次选中多个文件，然后 h5ai 自动把这些文件打包成 tar 压缩包：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_11-04-27.png)

注意，开启打包下载这个功能，务必要开启如下图所示的 select 功能，不然你不能选中多个文件怎么打包。。。

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_11-07-00.png)

还有更多其他的设置这里就不多介绍了，反正一般我自己用的话就只修改这些。下面说一下如何自定义 h5ai 的站点标题。

首先要自定义标题，需要把这个功能关闭掉：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_12-54-38.png)

接着编辑 h5ai 的首页文件，路径如下：

``` yaml
/_h5ai/private/php/pages/index.php
```

在这个文件内修改 title 就行了：

![](https://lala.im/wp-content/uploads/2018/07/lala.im_2018-07-11_12-56-05.png)

写在最后：

h5ai 是一个功能比较强大的 WEB 列目录程序，但是需要 PHP 的支持，其次设置有点繁琐，所以不是特别方便。相比较之下，现在市面上还有很多其它不错的列目录程序可以选择。
