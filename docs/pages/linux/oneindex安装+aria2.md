---
title: oneindex+aria2安装
date: 2019-08-16 08:25:30
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 在我的个人导航添加使用阿里icon图标/添加后缀小标志/添加网页搜索
categories: linux
tags:
  - vps
  - oneindex
  - OneDrive
---

VPS 安装宝塔面板、oneindex、Aria2 & AriaNg，自动上传到 onedrive，并利用 onedrive 来做下载和播放站，可以分享播放链接，充当媒体分享站。
重装：删除 oneindex 文件夹下文件重新安装

<!--more-->

### 提前准备：

VPS , 域名  
先去你的域名 DNS 服务商，提前解析三个域名到你的 VPS 的 IP。  
我用`vps.lwc.im`作为宝塔面板地址  
用`pan.lwc.im`作为 oneindex 网站地址  
用`xiazai.lwc.im`作为下载网站地址  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/1/1.png)

### VPS 安装宝塔

#### Centos 系统

`yum install -y wget && wget -O install.sh http://download.bt.cn/install/install.sh && sh install.sh`

#### Ubuntu 系统

`wget -O install.sh http://download.bt.cn/install/install-ubuntu.sh && sudo bash install.sh`

#### Debian 系统

`wget -O install.sh http://download.bt.cn/install/install-ubuntu.sh && bash install.sh`  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/1/2.png)  
会问你是否确定要安装宝塔面板，这里我们输入 y，表示确定  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/1/3.png)  
继续安装，等待它安装完毕。  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/1/4.png)  
这个显示出来面板信息，这样我们的宝塔面板就装好了。  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/1/5.png)  
记住 Bt-Panel 里的地址, 还有 username 和 password

### VPS 安装 Nginx1.8、PHP7.0

我们登陆那个网址，然后输入前面记下的 username 和 password  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/2/1.png)  
安装 Nginx, PHP，我的 VPS 是搬瓦工的，在 LNMP 这个部分里，Nginx 安装最新版本 1.8，PHP 选择 7.0，有这两个就可以了，其余的可以选择装或者不装，安装方式编译安装或极速都可以，然后点击一键安装。  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/2/2.png)  
然后它会进入安装界面，耐心等待它安装完毕，安装速度视你的 VPS 的配置情况而定。  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/2/3.png)  
当显示如下界面的时候，就是安装完了。  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/2/4.png)  
我们把这个消息盒子关掉，点击左边的面板设置，对我们的宝塔面板进行一些设置。  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/2/5.png)  
在这个界面里，我们可以修改登宝塔面板时用的域名, 就是 “提前准备” 里的`vps.lwc.im`。面板用户名和面板密码，因为系统生成的是随机的，我们可以把它改成我们自己想要的名字和密码。（域名、用户名和密码可以自己选择更改或者不更改，这个不影响使用）  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/2/6.png)

### 安装 Oneindex

添加域名: 宝塔面板左侧 > 点击 “网站”> “添加站点”  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/1.png)

输入信息后，点击提交  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/2.png)

安装 Oneindex  
用我们的 ssh 工具，先进入到我们刚刚添加的域名文件目录下，把`pan.lwc.im`改成自己的  
`cd /www/wwwroot/pan.lwc.im`  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/3.png)  
然后根据不同的系统，安装 git，我是 debian

#### Debian/Ubuntu 系统

`apt-get install git -y`

#### CentOS 系统

`yum install git -y`  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/4.png)  
然后安装 oneindex  
`git clone https://github.com/donwa/oneindex.git`  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/5.png)  
`mv oneindex/* ./`  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/6.png)  
`chmod 777 ./config && chmod 777 ./cache`  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/7.png)  
宝塔 >“网站”> 点击我们的域名右侧的 “设置”>“伪静态”，粘贴上我们的代码，然后保存。

``` yaml
location / {
if (!-f $request_filename){
set $rule_0 1$rule_0;
}
if (!-d $request_filename){
set $rule_0 2$rule_0;
}
if ($rule_0 = "21"){
rewrite ^/(.*)$ /index.php?/$1 last;
}
}
```

![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/8.png)  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/9.png)  
我们在浏览器里，打开 Oneindex 的域名，进行安装和绑定 OneDrive 密匙  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/10.png)  
点击下一步后，在下一个页面，点击 “获取应用 ID 和机密”  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/11.png)  
这个时候它会打开微软的登陆页面，登陆我们想要绑定的 onedrive 账号  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/12.png)  
登陆完成以后，会出现另外一个页面，显示应用机密，我们将文本框的字母全部复制下来，  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/13.png)  
返回到我们 Oneindex 的网页，将复制的代码填入第一个框  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/14.png)  
回到应用机密那个网页，点击 “知道了，返回到快速启动”  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/15.png)  
将 App ID 填入 oneindex 网页中的应用 ID 栏里  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/16.png)  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/17.png)  
点击下一步，之后的页面里点击 “绑定账号”  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/18.png)  
选择我们要绑定的账号  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/19.png)  
点击接受  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/20.png)  
就提示你安装成功了  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/21.png)  
我们点击 “管理后台”，输入初始密码 “oneindex”，就可以进入我们的后台了  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/22.png)  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/3/23.png)

### 安装 Aria2

返回 ssh 工具，回到主目录  
`cd /`  
用下列代码下载并安装 aria2，

``` yaml
wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubi/doubi/master/aria2.sh &amp;&amp; chmod +x aria2.sh &amp;&amp; bash aria2.sh
```

备用地址

``` yaml
wget -N --no-check-certificate https://www.moerats.com/usr/shell/Aria2/aria2.sh &amp;&amp; chmod +x aria2.sh &amp;&amp; bash aria2.sh
```

![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/4/1.png)

输入 1，等待安装，后面还有一个关于版本选择的，直接回车就好

![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/4/2.png)

出现这个就表示安装完成了，记住这些信息，我们下一步要用到

![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/4/3.png)

修改密码  
可以通过这个命令来修改，不修改也可以

`bash aria2.sh`

### 安装 AriaNg

宝塔添加域名  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/5/1.png)

上传程序  
Debian/Ubuntu 系统  
`apt-get install unzip -y`  
CentOS 系统  
`yum install unzip -y`  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/5/2.png)  
`cd /www/wwwroot/xiazai.lwc.im`  
`wget https://www.moerats.com/usr/down/aria-ng-0.2.0.zip && unzip aria-ng-0.2.0.zip`  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/5/3.png)  
打开你为 AriaNg 添加的域名  
显示未连接  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/5/4.png)  
点击左边 AriaNg 设置，然后点击 RPC，在下面 RPC 密匙中输入我们在安装 Aria2 时记下来的信息，然后右上角会蹦出来个 “重新加载页面”，点击它  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/5/5.png)  
就可以看到我们的 aria2 状态已经连接上了  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/5/6.png)  
点击左边的”Aria2 设置”，再点击”BitTorrent 设置”  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/5/7.png)  
再拉到最后，把最小做种时间改成 0，然后刷新一下网页。  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/5/8.png)

### 配置上传

回到我们的宝塔面板，点击左侧 “文件”，进入“root/.aria2” 文件夹下，然后新建一个空白文件，文件名叫”oneindexup.sh”  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/6/1.png)  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/6/2.png)  
然后将下面的代码复制进去，记住修改成自己的 oneindex 的域名，不然不会自动上传到 onedrive，之后右下角保存  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/6/3.png)

``` yaml
#!/bin/bash
path=$3
downloadpath='/usr/local/caddy/www/aria2/Download'
domain='pan.lwc.im'  #修改成自己域名

if [ $2 -eq 0 ]
		then
				exit 0
fi
while true; do
filepath=$path
path=${path%/*};
if [ "$path" = "$downloadpath" ] &amp;&amp; [ $2 -eq 1 ]
	then
	php /www/wwwroot/$domain/one.php upload:file $filepath /$folder/
	rm -rf $filepath
	php /www/wwwroot/$domain/one.php cache:refresh
	exit 0
elif [ "$path" = "$downloadpath" ]
	then
	php /www/wwwroot/$domain/one.php upload:folder $filepath /$folder/
	rm -rf "$filepath/"
	php /www/wwwroot/$domain/one.php cache:refresh
	exit 0
fi
done
```

然后在 ssh 工具里，分别输入下面的代码

``` yaml
chmod +x /root/.aria2/oneindexup.sh

echo "on-download-complete=/root/.aria2/oneindexup.sh" >>/root/.aria2/aria2.conf
```

![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/6/4.png)  
再重启 Aria2

`service aria2 restart`

---

### 打完收工

来试验一下  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/7/1.png)  
`magnet:?xt=urn:btih:WTPLPUEW5YSH2J2U4H6HTHGVN6QYVZQS`  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/7/2.png)  
会先下载种子，然后自动下载种子里面的电影  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/7/3.png)  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/7/4.png)  
速度受你的 VPS 的网速，还有你下载的资源做种人数的影响，一般速度都能跑很快，等它下载完，看看是否会自动上传到 onedrive 里，可以直接在我们 oneindex 的网站里面看到，它自动上传了。  
![](https://pic-1252861294.cos.ap-beijing.myqcloud.com/oneindex/7/5.png)

---
