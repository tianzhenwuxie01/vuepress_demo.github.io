---
title: clash规则去广告和插件对比
date: 2020-05-06 09:25:00
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 奈飞客户端--安卓
categories: 科学发现
tags:
  - clash
  - 科学上网
---

## pc 端

### pc 端无规则插件（随便找了几个有广告的网站）

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200506104853.jpg)

### clash-acl 去广告规则大概两万三条

> 腾讯视频没跳过，部分广告去除

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200506105725.jpg)

### 插件 adg（Adguard）效果，abp（ Adblock Plus）效果相同

> 所有广告都去除了

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200506110941.jpg)

## 手机安卓端

### 无规则插件

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200506125337.jpg)

### clash-acl 去广告规则大概两万三条

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200506131049.jpg)

### clash 配合 adg（Adguard）效果

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200506131123.jpg)

## adg 常见问题

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200622132634.jpg)

如遇到配合 Clash For Android/ClashA 时打开 Instagram 等其他和 IPV6 有玄学冲突的问题

可以尝试打开 Adguard 设置 - 高级设置 - 低级设置的 "pref.vpn.ipv6.disable" 选项

## 手机安卓耗电（随便测的)

|   类型    |    时间     | 电量  | 耗电 |
| :-------: | :---------: | :---: | :--: |
|   默认    | 11:19-11:39 | 85-79 |  6   |
|   clash   | 11:39-1159  | 79-73 |  6   |
| clash+adg | 11:59-12:19 | 73-66 |  7   |

> 20 分钟虎牙直播

## cfa 和 surfboard 的速度测试(随便测得)

clash for 安卓
![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200513210826.png)

surfboard
![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200513210837.png)
