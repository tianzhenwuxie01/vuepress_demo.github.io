---
title: PotPlayer播放器的设置备份
date: 2020-07-27 11:25:10
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 淘宝导入ps切图图片与图片见出现空隙，白条现象（具体测试见码云gitee）
categories: 软件
tags:
  - PotPlayer
---

### 导出 PotPlayer 配置方法：

右击画面点`选项-(按快捷键F5`)。左下角`导出当前配置`。

PotPlayer 配置文件的导出导入有`reg`和`ini`两种，默认的保存类型为`.reg`（注册表文件，优点：导入文件直接双击运行注册表就行，方便；缺点：32 位和 64 位的配置参数不能通用），我们一般选择.ini 配置文件-保存，（最好将该文件上传到网盘）。

### 导入 PotPlayer 配置方法：（PotPlayer 没有导入配置选项，只能手动导入）

**.reg 文件方法**：双击运行即可

**.ini 文件方法：**

如果你的 PotPlayer 安装在 C 盘等需要管理员权限的文件夹下,`ini`设置文件就在 C 盘的`AppData`个人设置文件夹下

如果 PotPlayer 没在需要管理员权限的文件夹下,则 ini 设置文件就可以在 potplayer 安装目录下，如：`D:\Program Files (x86)\DAUM\PotPlayer`
PS:需改成和主程序同样的名字，如`PotPlayerMini64.ini`
