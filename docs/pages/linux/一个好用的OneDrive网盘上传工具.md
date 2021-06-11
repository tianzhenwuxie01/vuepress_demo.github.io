---
title: 一个好用的OneDrive网盘上传工具
date: 2020-02-05 08:25:27
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
  - OneDriveUploader
---

## 主要功能

--

- 支持上传文件和文件夹到指定目录，并保持上传前的目录结构。
- 支持命令参数使用，方便外部程序调用。
- 支持自定义上传分块大小。
- 支持多线程上传 (多文件同时上传)。
- 支持根据文件大小动态调整重试次数，对抗不好的网络环境。

## 使用

--
**Github 地址：**[https://github.com/MoeClub/OneList/tree/master/OneDriveUploader](https://github.com/MoeClub/OneList/tree/master/OneDriveUploader)

这里只详细说下`Linux`的用法，`Windows`后面大概说下。

`Windows`、`MacOS`系统下载地址 →[传送门](https://github.com/MoeClub/OneList/tree/master/OneDriveUploader/amd64)，直接将程序下载到本地后，按照下面方法进行授权、初始化，然后就可以使用命令上传了。

#### 1、授权认证

点击右侧`URL`登录并授权，授权地址 →【[国际版、个人版 (家庭版)](https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=78d4dc35-7e46-42c6-9023-2d39314433a5&response_type=code&redirect_uri=http://localhost/onedrive-login&response_mode=query&scope=offline_access%20User.Read%20Files.ReadWrite.All)】、【[中国版 (世纪互联)](https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize?client_id=dfe36e60-6133-48cf-869f-4d15b8354769&response_type=code&redirect_uri=http://localhost/onedrive-login&response_mode=query&scope=offline_access%20User.Read%20Files.ReadWrite.All)】。

授权后会获取一个`localhost`开头打不开的链接，这里复制好整个链接地址，包括`localhost`。

#### 2、安装 OneDriveUploader

``` yaml
#64位系统下载
wget https://raw.githubusercontent.com/MoeClub/OneList/master/OneDriveUploader/amd64/linux/OneDriveUploader -P /usr/local/bin/
#32位系统下载
wget https://raw.githubusercontent.com/MoeClub/OneList/master/OneDriveUploader/i386/linux/OneDriveUploader -P /usr/local/bin/
#arm架构下载
wget https://raw.githubusercontent.com/MoeClub/OneList/master/OneDriveUploader/arm/linux/OneDriveUploader -P /usr/local/bin/

#给予权限
chmod +x /usr/local/bin/OneDriveUploader
```

#### 3、初始化配置

``` yaml
#国际版，将url换成你上面复制的授权地址，包括http://loaclhost。
OneDriveUploader -a "url"

#个人版(家庭版)，将url换成你上面复制的授权地址，包括http://loaclhost。
OneDriveUploader -ms -a "url"

#中国版(世纪互联)，将url换成你上面复制的授权地址，包括http://loaclhost。
OneDriveUploader -cn -a "url"
```

如果提示`Init config file: /path/to/file/auth.json`类似信息，则初始化成功。

#### 4、配置使用命令

``` json
Usage of OneDriveUploader:
  -a string
        // 初始化授权
        Setup and Init auth.json.
  -b string
        // 自定义上传分块大小, 可以提高网络吞吐量, 受限于磁盘性能和网络速度.
        Set block size. [Unit: M; 5<=b<=60;] (default "10")
  -c string
        // 配置文件路径
        Config file. (default "auth.json")
  -n string
        // 上传单个文件时,在网盘中重命名
        Rename file on upload to remote.
  -r string
        // 上传到网盘中的某个目录, 默认: 根目录
        Upload to reomte path.
  -s string
        // *必要参数, 要上传的文件或文件夹
        Upload item.
  -t string
        // 线程数, 同时上传文件的个数. 默认: 2
        Set thread num. (default "2")
  -f
        // 开关(推荐)
        // 加上 -f 参数，强制读取 auth.json 中的块大小配置和多线程配置.
        // 不加 -f 参数, 每次覆盖保存当前使用参数到 auth.json 配置文件中.
        Force Read config form config file. [BlockSize, ThreadNum]
  -skip
        // 开关
        // 跳过上传网盘中已存在的同名文件. (默认不跳过)
        Skip exist file on remote.
  -cn
        // 开关
        // 授权中国版(世纪互联), 需要此参数.
        OneDrive by 21Vianet.
  -ms
        // 开关
        // 授权个人版(家庭版), 需要此参数.
        OneDrive by Microsoft.
```

#### 5、命令示例

``` yaml
#将当前目录下的mm00.jpg文件上传到OneDrive网盘根目录
OneDriveUploader -c /path/to/file/auth.json -s "mm00.jpg"
#将当前目录下的mm00.jpg文件上传到OneDrive网盘根目录，并改名为mm01.jpg
OneDriveUploader -c /path/to/file/auth.json -s "mm00.jpg" -n "mm01.jpg"
#将当前目录下的Download文件夹上传到OneDrive网盘根目录
OneDriveUploader -c /path/to/file/auth.json -s "Download"
#将当前目录下的Download文件夹上传到OneDrive网盘Test目录中
OneDriveUploader -c /path/to/file/auth.json -s "Download" -r "Test"
#将同目录下的Download文件夹上传到OneDriv网盘Test目录中，使用10线程
OneDriveUploader -c /path/to/file/auth.json -t 10 -s "Download" -r "Test"
#将同目录下的Download文件夹上传到OneDrive网盘Test目录中，使用15线程，并设置分块大小为20M
OneDriveUploader -c /path/to/file/auth.json -t 15 -b 20 -s "Download" -r "Test"
```

`/path/to/file/auth.json`为初始化时，生成的`auth.json`绝对路径地址，以你自己生成的路径为准，自行调整。我的是/root/auth.json

**注意：**如果你之前上传手动中断过，再上传的时候，请使用`-skip`参数，默认会跳过你已经上传过的文件 / 文件夹。

#### 6；常用命令

``` yaml
 `/root/auth.json`.
OneDriveUploader -s "测试.png" -r "上传视频"
#把当前目录叫测试.png的图片上传到根目录下的上传视频文件夹内
OneDriveUploader -c /root/auth.json -s "测试.png" -r "上传视频"
#把当前目录叫测试.png的图片上传到根目录下的上传视频文件夹内（当不在OneDriveUploader的文件夹内需要指定auth.json位置）
OneDriveUploader -c /root/auth.json -s "10.mp4" -r "上传视频"
```

> 进入需要上传的文件夹，使用上面命令

``` yaml
# 一些示例:
# 将同目录下的 mm00.jpg 文件上传到 OneDrive 网盘根目录
OneDriveUploader -s "mm00.jpg"

# 将同目录下的 mm00.jpg 文件上传到 OneDrive 网盘根目录,并改名为 mm01.jpg
OneDriveUploader -s "mm00.jpg" -n "mm01.jpg"

# 将同目录下的 Download 文件夹上传到 OneDrive 网盘根目录
OneDriveUploader -s "Download"

# 将同目录下的 Download 文件夹上传到 OneDrive 网盘Test目录中
OneDriveUploader -s "Download" -r "Test"
```
