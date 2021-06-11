---
title: 关于Geoip库及更新
date: 2020-05-24 17:25:00
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 奈飞客户端--安卓
categories: 科学发现
tags:
  - clash
---

## 1 GeoIP 简介

GeoIP是IP地理位置数据库，可以根据IP地址(支持 IPv4 和 IPv6), 定位该 IP 所在的地理位置和 ASN 等信息。

GeoIP目前已经升级到 GeoIP2，GeoIP2 有两个版本，一个免费版(GeoLite2)，一个收费版本(GeoIP2, 200$起步)。

两者对比可以参考官网说明 <https://www.maxmind.com/en/geoip2-city-accuracy-comparison>

与付费版相比，最大的差别就是免费版的精确度相对较低 **（其实差别不是很大）**

## 2 GeoIP 的作用

GeoIP库被广泛运用在各种科学上网工具中，比如Clash, Shadowrocket, Quantumult(X), Surge...
用于提高分流规则判断的准确性。
软件都内置有GeoIP数据库（尤其是 Clash for Windows ），一般也不需要经常更新。
IP地址判断是哪个国家的IP，再根据不同的规则走不同的节点。

``` yaml
  - GEOIP,US,🎫 小美国
  - GEOIP,JP,🎫 小日本
  - GEOIP,CN,🎫 全球直连
```

1. 变局
自 2019 年 12 月 30 日起，MaxMind 要求用户必须注册帐户并获取许可密钥以下载 GeoLite2 数据库。

2. 解决方案
① 为防止注册失败，请在直连状态下（不翻墙）访问 MaxMind 帐户注册地址
[https://www.maxmind.com/en/geolite2/signup](https://www.maxmind.com/en/geolite2/signu)

② 登陆账号并找到许可密钥生成界面，路径如下：Service - My License Key - Generate new license key ，生成许可密钥(License key)【务必妥善保管】

③ GeoLite2数据库的下载地址为：<https://download.maxmind.com/app/geoip_download?edition_id=GeoLite2-Country&license_key>=[第②步获得的许可密钥]&suffix=tar.gz

## 3 网络上公开的GeoIP数据库

[https://github.com/Dreamacro/maxmind-geoip/releases](https://github.com/Dreamacro/maxmind-geoip/releases)

[https://github.com/alecthw/mmdb_china_ip_list](https://github.com/alecthw/mmdb_china_ip_list)

[https://geolite.clash.dev](https://geolite.clash.dev)

[https://static.clash.to/GeoIP2/GeoIP2-Country.tar.gz](https://static.clash.to/GeoIP2/GeoIP2-Country.tar.gz)

[https://quantumult.crossutility.com/download/geoip/database/GeoLite2-Country.mmdb](https://quantumult.crossutility.com/download/geoip/database/GeoLite2-Country.mmdb)

## 4 使用

clash填链接下载或者替换`用户\.config\clash`文件夹下`Country.mmdb`文件

## 5 常见问题

### 0
