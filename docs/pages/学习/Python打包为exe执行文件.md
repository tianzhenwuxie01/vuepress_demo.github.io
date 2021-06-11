## Python打包为exe执行文件（window系统）

## window系统下发布：

### 一、安装pyinstaller（PyInstaller 3.3.1）

```python
pip install pyinstaller
```

### 二、python程序打包（不带参数）

文件命名规范：不支持中文命令的python文件；

路径：建议路径中不带中文目录；

命令：pyinstaller -F 文件名（带后缀py）

```python
#命令语法：pyinstaller -F 文件名（带后缀py）
#常用参数说明：
#–icon=图标路径
#-F 打包成一个exe文件
#-w 使用窗口，无控制台
#-c 使用控制台，无窗口
#-D 创建一个目录，里面包含exe以及其他一些依赖性文件
#pyinstaller -h 来查看参数

#将cmd的目录切换至（命令：cd 文件路径(注意空格)）需要打包的py文件目录下：
#有命令窗口弹出
pyinstaller -F shjys_rjjqk.py  
#无命令窗口弹出
pyinstaller -F -w shjys_rjjqk.py  
#或者
pyinstaller -F shjys_rjjqk.py  --noconsole
# 带图标
# my.ico 是一个图标名，和当前的shjys_rjjqk.py文件在同一个目录下
pyinstaller -F --icon=my.ico shjys_rjjqk.py  
```

### 三、查看生成文件

1，返回目标文件目录，发现该目录下生成了.spec文件shjys_rjjqk.spec：

![https://images2017.cnblogs.com/blog/1277635/201801/1277635-20180119101341349-1209263534.png](https://images2017.cnblogs.com/blog/1277635/201801/1277635-20180119101341349-1209263534.png)

2，打包好的exe文件，在同目录的dist文件中（一共生成三个文件夹）：

![https://images2017.cnblogs.com/blog/1277635/201801/1277635-20180119101248334-166926178.png](https://images2017.cnblogs.com/blog/1277635/201801/1277635-20180119101248334-166926178.png)

当打包出现错误：

打包好的exe文件，在同目录的 dist 文件中，如果有依赖文件，就可以放到dist文件夹下即可

```python
for real_module_name, six_moduleAttributeError: 'str' object has no attribute 'items'
```

说明 setuptools 版本不行，直接更新就好：

```python
pip3 install -U setuptools
```

### 四、pyinstaller 改变生成exe程序的图标

```python
# my.ico 是一个图标名，和当前的shjys_rjjqk.py文件在同一个目录下
pyinstaller -F --icon=my.ico shjys_rjjqk.py  
```

### 五，生成exe（带参数）

py中获取外界参数：

方法1：args 是运行前输入参数（不能在exe黑框中输入，可以用cmd窗口执行：shrjj.py 20180119）； 　

方法2：input是运行时输入参数（可以在exe黑框中输入）； 　 建议用input获取；  　

补充：方法一中的args参数（运行前输入参数）打包成exe，利用bat批处理来调用，传递参数；  
注意：在有调用到外界配置文件的情况下，需要使用绝对路径；不然打包后，会出现找不到配置文件；

# 遇见错误

### mac提示没有cmake

```python

ModuleNotFoundError: No module named 'cmath'
[74486] Failed to execute script new
logout
Saving session...
...copying shared history...
...saving history...truncating history files...
...completed.
```

cmath是用于复杂算术的Python标准库模块。因此它始终可用。可能是pyinstaller无法弄清是否需要它，因此未将其包含在中.exe。查看pyinstaller文档，以了解如何在.spec文件中提示应包含该文件。

在.spec里-hidden-import添加cmath。然后pyinstaller -F xx.spec

### win的pynput打包失败(#[git issue链接](https://github.com/moses-palmer/pynput/issues/312))

```python
Traceback (most recent call last):
  File "01.py", line 1, in <module>
    from pynput import keyboard
  File "PyInstaller\loader\pyimod03_importers.py", line 531, in exec_module
  File "pynput\__init__.py", line 40, in <module>
  File "PyInstaller\loader\pyimod03_importers.py", line 531, in exec_module
  File "pynput\keyboard\__init__.py", line 31, in <module>
  File "pynput\_util\__init__.py", line 76, in backend
ImportError
[17740] Failed to execute script 01
```

原因：pynput因打包平台不同需要置顶后端_win32，_darwin，_linux（具体见下面命令）

```python
pyinstaller 01.py --hidden-import "pynput.keyboard._win32" --hidden-import "pynput.mouse._win32"
```