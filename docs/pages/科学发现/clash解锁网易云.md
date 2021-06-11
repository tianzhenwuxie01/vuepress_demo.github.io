

## 搭建远程设置

- 需要工具
- UnblockNeteaseMusic
- vps

## 简介

UnblockNeteaseMusic 是一款可以让网易云曲库里的灰色歌曲能够正常播放的神器。
项目地址：[https://github.com/nondanee/UnblockNeteaseMusic](https://github.com/nondanee/UnblockNeteaseMusic)

**特性：**

- 使用 QQ / 虾米 / 百度 / 酷狗 / 酷我 / 咪咕 / JOOX 音源替换变灰歌曲链接 (默认仅启用一、五、六)
- 为请求增加 X-Real-IP 参数解锁海外限制，支持指定网易云服务器 IP，支持设置上游 HTTP / HTTPS 代理
- 完整的流量代理功能 (HTTP / HTTPS)，可直接作为系统代理 (同时支持 PAC)

## 正式安装

### 安装 nodejs

CentOS 系统

``` bash
curl -sL https://rpm.nodesource.com/setup_10.x | bash -
yum -y install nodejs
```

Debian/Ubuntu 系统

``` bash
curl -sL https://deb.nodesource.com/setup_10.x | bash -
apt install -y nodejs git
```

> 使用 node -v 命令查看是否安装成功。

## 安装 Supervisor

CentOS 系统

``` yaml
yum -y install epel-release
yum -y install supervisor
```

Debian/Ubuntu 系统

```
apt-get install supervisor
```

## 拉取文件

没有 git 的话可以执行此命令`yum install git`安装

```git
git clone https://github.com/nondanee/UnblockNeteaseMusic.git
cd UnblockNeteaseMusic
```

## 配置 supervisor 并在后台运行(守护程序)

没有 nano 编辑器的话可以执行此命令`yum -y install nano`安装

```nano
nano /etc/supervisord.d/netease.ini
```

进入后并写下

``` yaml
[supervisord]
nodaemon=false

[program:netease]
user=root
directory=/root/UnblockNeteaseMusic
command=/usr/bin/node app.js -p 8848
autostart=true
autorestart=true
```

> 我选择的端口号是 8848，可自定义更换
> Tip:按下 Ctrl+X 然后按 Y 即可退出编辑界面。

## 启动项目

``` yaml
systemctl start supervisord
systemctl enable supervisord
```

> 查看状态`systemctl status supervisord`
> 如果启动后还是连不上重载下配置`supervisorctl reload`

至此已搭建完成。可以使用了。

> 注意：如果一切顺利，但仍然无法访问代理服务器，请检查 VPS 的安全组或防火墙设置，放行你的 UnblockNeteaseMusic 服务端口
> 宝塔-安全-放行端口

## Clash 配置文件写法

### 节点信息

节点信息只需用四项

``` yaml
Proxy:
  - name: "网易云解锁"
    type: http
    server: 47.102.220.211(根据实际情况改成自己服务器的ip)
    port: 8848(根据实际情况改成自己服务器的端口)
```

sub 生成会多几项无所谓

``` yaml
proxies:
  - name: 网易云解锁
    server: 213.59.123.110
    port: 8848
    type: http
    username: ""
    password: ""
    tls: false
```

### 规则

lhie1 大佬的规则

``` yaml
# > Netease Music
AND,((OR,((USER-AGENT,NeteaseMusic*), (USER-AGENT,网易云音乐*), (USER-AGENT,%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90*), (USER-AGENT,neteasemusic*))), (DOMAIN,apm.music.163.com))
AND,((OR,((USER-AGENT,NeteaseMusic*), (USER-AGENT,网易云音乐*), (USER-AGENT,%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90*), (USER-AGENT,neteasemusic*))), (DOMAIN,apm3.music.163.com))
AND,((OR,((USER-AGENT,NeteaseMusic*), (USER-AGENT,网易云音乐*), (USER-AGENT,%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90*), (USER-AGENT,neteasemusic*))), (DOMAIN,interface.music.163.com))
AND,((OR,((USER-AGENT,NeteaseMusic*), (USER-AGENT,网易云音乐*), (USER-AGENT,%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90*), (USER-AGENT,neteasemusic*))), (DOMAIN,interface3.music.163.com))
AND,((OR,((USER-AGENT,NeteaseMusic*), (USER-AGENT,网易云音乐*), (USER-AGENT,%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90*), (USER-AGENT,neteasemusic*))), (DOMAIN,music.163.com))
IP-CIDR,101.71.154.241/32,no-resolve
IP-CIDR,103.126.92.132/32,no-resolve
IP-CIDR,103.126.92.133/32,no-resolve
IP-CIDR,112.13.119.17/32,no-resolve
IP-CIDR,112.13.122.1/32,no-resolve
IP-CIDR,115.236.118.33/32,no-resolve
IP-CIDR,115.236.121.1/32,no-resolve
IP-CIDR,118.24.63.156/32,no-resolve
IP-CIDR,193.112.159.225/32,no-resolve
IP-CIDR,223.252.199.66/32,no-resolve
IP-CIDR,223.252.199.67/32,no-resolve
IP-CIDR,39.105.63.80/32,no-resolve
IP-CIDR,45.254.48.1/32,no-resolve
IP-CIDR,47.100.127.239/32,no-resolve
IP-CIDR,59.111.160.195/32,no-resolve
IP-CIDR,59.111.160.197/32,no-resolve
IP-CIDR,59.111.181.35/32,no-resolve
IP-CIDR,59.111.181.38/32,no-resolve
IP-CIDR,59.111.181.60/32,no-resolve
```

## 网易云音乐设置

### 普通客户端

设置 ie 代理

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200418214318.png)

### uwp 应用

正常开环回就可以

### 网页。。。

日了狗了，不知道什么鬼网页版打不开。。。。。

## 效果

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200418214950.png)
![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200418215004.png)
![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200418215028.png)
