---
title: you-get的使用
date: 2020-08-28 18:25:12
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 淘宝导入ps切图图片与图片见出现空隙，白条现象（具体测试见码云gitee）
categories: 学习
tags:
  - python
---

### 简介

[You-Get](https://github.com/soimort/you-get)(基于 python) 乃一小小哒命令行程序，提供便利的方式来下载网络上的媒体信息。

[readme](https://github.com/soimort/you-get/wiki/%E4%B8%AD%E6%96%87%E8%AF%B4%E6%98%8E#supported-sites)

利用 you-get 下载这个网页的视频:

``` bash
$ you-get http://www.fsf.org/blogs/rms/20140407-geneva-tedx-talk-free-software-free-society
Site:       fsf.org
Title:      TEDxGE2014_Stallman05_LQ
Type:       WebM video (video/webm)
Size:       27.12 MiB (28435804 Bytes)

Downloading TEDxGE2014_Stallman05_LQ.webm ...
100.0% ( 27.1/27.1 MB) ├████████████████████████████████████████┤[1/1]   12 MB/s
```

### 安装

pip 安装

``` bash
pip3 install you-get
```

scoop 安装

``` bash
scoop install you-get
```

### 使用

#### 下载视频

当观赏感兴趣之视频，您可以使用 --info/-i 以查看所有可用画质与格式、s:

``` bash
$ you-get -i 'https://www.youtube.com/watch?v=jNQXAC9IVRw'
site:                YouTube
title:               Me at the zoo
streams:             # Available quality and codecs
    [ DEFAULT ] _________________________________
    - itag:          43
      container:     webm
      quality:       medium
      size:          0.5 MiB (564215 bytes)
    # download-with: you-get --itag=43 [URL]

    - itag:          18
      container:     mp4
      quality:       medium
    # download-with: you-get --itag=18 [URL]

    - itag:          5
      container:     flv
      quality:       small
    # download-with: you-get --itag=5 [URL]

    - itag:          36
      container:     3gp
      quality:       small
    # download-with: you-get --itag=36 [URL]

    - itag:          17
      container:     3gp
      quality:       small
    # download-with: you-get --itag=17 [URL]
```

> 标有 DEFAULT 为默认画质。如认同，可下载:

如你有 URL，也可以直接使用/或下载其他文件:

``` bash
$ you-get https://stallman.org/rms.jpg
Site:       stallman.org
Title:      rms
Type:       JPEG Image (image/jpeg)
Size:       0.06 MiB (66482 Bytes)

Downloading rms.jpg ...
100.0% (  0.1/0.1  MB) ├████████████████████████████████████████┤[1/1]  127 kB/s
```

#### 如果视频需要密码 则用-p 参数

`you-get -P 123456 http://v.youku.com/v_show/id_XMzg1NTk1NzI2OA==.html`

#### 如果下载视频

`you-get 视频A网址 视频B网址`
`you-get -l https://www.bilibili.com/video/av4050443`
`you-get --playlist https://www.bilibili.com/video/av5123229`

#### 暂停与恢复下载

可以使用 Ctrl+C 暂停下载.

临时的.download 文件将保存于输出目录。下次使用 you-get 传入相同参数时，下载将从上次继续开始. 如果下载已经完成 (临时的.download 扩展名消失), you-get 将忽略下载.

用--force/-f 强行重下载. (注意: 将覆盖同名文件或临时文件!)

#### 设置输出文件名或路径

默认下载到当前目录
使用--output-dir/-o 设定路径, --output-filename/-O 设定输出文件名:

`$ you-get -o ~/Videos -O zoo.webm 'https://www.youtube.com/watch?v=jNQXAC9IVRw'`

#### 使用 --http-proxy/-x 为 you-get 设置 HTTP 代理:

`$ you-get -x 127.0.0.1:7890 'https://www.youtube.com/watch?v=jNQXAC9IVRw'`

使用 socks 代理下载一个视频(需要安装一个啥啥啥,会报错提示)

`$ you-get -s 127.0.0.1:7890 'https://www.youtube.com/watch?v=jNQXAC9IVRw'`
然而系统代理 (即系统变量 http_proxy) 自动使用. 使用--no-proxy 强行关闭.

[参考](https://typefo.com/tool/youget-tool-tutorial.html)
