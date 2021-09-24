---
title: adb命令
date: 2021-07-17 08:25:24
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 在我的个人导航添加使用阿里icon图标/添加后缀小标志/添加网页搜索
categories: adb
tags:
---

## settings(修改安卓一些设置的值)

1.global：所有的偏好设置对系统的所有用户公开，第三方APP有读没有写的权限；
2.system：包含各种各样的用户偏好系统设置；
3.secure：安全性的用户偏好系统设置，第三方APP有读没有写的权限。

列出所有的值

`adb shell settings list global`

>**语法**

adb shell settings (get/put/delete) (global/system/secure) xxx属性  (如果需要修改，则需要再加上修改的值)

### 获取 无障碍 的值 (0未打开，1打开)

``` shell
adb shell settings get secure accessibility_enabled
```


### 获取 无障碍 的具体的值

``` shell
adb shell settings get secure enabled_accessibility_services
```

### 修改 无障碍 的值

``` shell
adb shell settings put secure enabled_accessibility_services "org.autojs.autojs/com.stardust.autojs.core.accessibility.AccessibilityService:org.autojs.autojs/org.autojs.autojs.accessibility.AccessibilityService"
```
