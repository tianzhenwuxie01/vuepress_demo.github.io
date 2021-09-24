---
title: python-win桌面自动化
date: 2021-09-24 09:25:12
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

## win32gui

安装`pip install pywin32`

启动软件或打开win设置

``` python
import win32api
win32api.ShellExecute(1, 'open', r'ms-settings:network-mobilehotspot', '', '', 1)  #打开win设置热点界面
win32api.ShellExecute(1, 'open', r'D:\Naraka\xxx.exe', '', '', 1)  # 启动软件路径
```

## 桌面应用自动化python——uiautomation

[gethub地址：](https://github.com/yinkaisheng/Python-UIAutomation-for-Windows)

[git-中文readme](https://github.com/yinkaisheng/Python-UIAutomation-for-Windows/blob/master/readme_cn.md)

[参考1](https://www.cnblogs.com/baihuitestsoftware/articles/9340462.html)

[参考2](https://www.cxymm.net/article/yaoliuwei1426/88354482)

``` python
uiautomation.SetGlobalSearchTimeout(3)
# 限制查找控件时间（单位s秒）

#---------------------------------------------------------------------------------------

try:
    a = uiautomation.TextControl(searchDepth=5, ClassName='TextBlock', Name='已连接的设备:')
except LookupError as ex:
    return
# 当找不到控件时候会报错，用try异常处理防止报错停止

#---------------------------------------------------------------------------------------

cas = automation.WindowControl(searchDepth=1, AutomationId='myMainWindow', Name='Login')
# 可以判断window是否存在，如果不判断，找不到window的话会抛出异常
if automation.WaitForExist(cas, 3):
    automation.Logger.WriteLine("CAS exists now",logFile="cas.txt")
else:
    automation.Logger.WriteLine("CAS does not exist after 3 seconds",logFile="cas.txt")
cas.SetActive()
# 貌似也能防止报错停止，没试过

```

### 扫描控件树

在python目录的Scripts文件夹下有个`automation.py`文件

``` python
automation.py c –t3            # 3秒后枚举当前窗口所有控件
automation.py c –d2 –t3         # 3秒后枚举当前窗口前三层控件
automation.py c –r –d1 –t0 -n    # 0秒后从根部枚举前两层控件，并显示控件完整名称
automation.py c –c –t3             # 3秒后显示鼠标光标下面的控件信息

# -t intValue     延迟枚举时间，单位秒
# -r                  从树的根部枚举，如果不指定，从当前窗口枚举
# -d intValue    枚举控件树的的深度，如果不指定，枚举整个树
# -f                  从焦点控件枚举，如果不指定，从当前窗口枚举
# -c                  从光标下的控件枚举，如果不指定，从当前窗口枚举
# -a                  获取光标下控件及其所有父控件
# -n                 显示控件的完整Name, 如果不指定，只显示前30个字符
# -m                显示控件更多属性，默认只显示控件的四个属性
```

在`automation.py`的同目录下会生成控件文件

### Control有很多类型，具有看automation.py生成的文件内容

``` python
1. WindowContrl(searchDepth,ClassName,SubName)          查找窗口中的程序，如果有中文则需用Unicode;可用window.Exists(maxSearchSeconds)来判断此窗口是否存在；

2. EditControl(searchFromControl)                 查找编辑位置，找到后可用DoubleClick()来改变电脑的focus;edit.SetValue("string")输入值；

3. Win32API.SendKeys("string")                      如果已在编辑位置，则可用此方法来输入值，{Ctrl}为ctrl键，其他类似；{@  8}格式可输入8个@，对于数字也可实现此功能，但对于字母不能...;

4. MenuItemControl(searchFromControl,Name)                   查找菜单按钮；

5. ComboBoxControl(searchFromControl,AutomationI)       查找下拉框，然后在此基础上用Select("name")方法来选择需要的选项；

6. BottonControl(searchFromControl,Name,SubName)        查找按钮；

7. automation.FindControl(firefoxWindow,ambda c:(isinstance(c, automation.EditControl) or isinstance(c, automation.ComboBoxControl)) and c.Name == 'Enter your search term') 按条件搜索handle

```


### 句柄常用操作及其程序常用操作

``` python
Click()            #点击；
RighClik()       #右键点击；
SendKeys()     #发送字符；
SetValue()      #传值，一般对EditControl用；

subprocess.Popen('Name')  　　#用进程打开程序；
window.Close()    　　　　　 　 #关闭窗口；
window.SetActive()       　　　　#使用；
window.SetTopMost()   　　　　#设置为顶层
window.ShowWindow(uiautomation.ShowWindow.Maximize)  #窗口最大化
window.CaptureToImage('Notepad.png')  #截图；
uiautomation.Win32API.PressKey(uiautomation.Keys.VK_CONTROL)    #按住Ctrl键
uiautomation.Win32API.ReleaseKey(uiautomation.Keys.VK_CONTROL) #释放Ctrl键
automation.GetConsoleWindow()      #return console window that runs python，打开控制台
automation.Logger.ColorfulWriteLine('\nI will open <Color=Green>Notepad</Color> and <Color=Yellow>automate</Color> it. Please wait for a while.')  #控制台传值（彩色字体），普通传值用WriteLine；
automation.ShowDesktop() #显示桌面；
```