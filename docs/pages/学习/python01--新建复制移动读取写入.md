---
title: python01--新建复制移动读取写入
date: 2020-08-08 08:25:12
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

> [读取写入参考](https://www.runoob.com/python/file-methods.html)
> [os模块](https://www.runoob.com/python/os-file-methods.html)

### 文件基础操作

``` python
import os
# 判断一个目录是否存在
os.path.exists(path)

# 创建文件夹
os.mkdir('文件夹')
os.makedirs('文件夹/二级文件夹') #创建级别文件夹

#复制文件
shutil.copy('ces.txt', './新文件夹')
shutil.copy('ces.txt', './新文件夹/new.txt') #复制并且改名字

#复制文件夹
shutil.copytree('文件夹','新文件夹位置') #新文件夹不能存在

#移动文件/文件夹
shutil.move('01.txt', '新文件夹/02.txt') #移动重命名
shutil.move('01.txt', '新文件夹/')
shutil.move('文件夹', '新文件夹/')

#重命名
os.rename('文件或文件夹', '新的文件或文件夹名字')

#删除文件
os.remove('文件') #不能写文件夹

#删除文件夹
import shutil
shutil.rmtree('文件夹')
```

### 读取文件

> [读取写入参考](https://www.runoob.com/python/file-methods.html)

``` python
# 一种方法
f = open('ces.txt', 'r', encoding='utf-8')
text = f.readlines() #每行读取
text = f.read() #每行读取
print(text)
f.close()

# 另一种方法
with open('ces.txt', 'r', encoding='utf-8') as f:
    text = f.readlines()    #读取内容是个列表
    print(text)

```

### 写入文件

``` python
with open('ces.txt', 'w', encoding='utf-8') as f:
    text = '第一行\n第二行\n'
    f.write(text)
```

**光标回到开头** `f.seek(0)`

### 如果没有新文件夹则创建一个新文件夹

``` python
if not os.path.exists('新文件夹'):
    os.mkdir('新文件夹') # 文件夹名已存在会报错
    os.makedirs('第一层文件夹/第二层') #当最里面文件夹名已存在会报错
else:
    pass #否则:啥啥啥
```

### 显示当前目录或输出当前文件夹内容

**输出 py 程序当前目录** `print(os.getcwd())`
**切换到某某目录** `os.chdir('地址路径')`

**自动处理路径信息，Linux 和 win 用的斜杠不一样**

`print(os.path.join('我的文件夹', '我的下一级文件夹'))`

**输出当前目录下的所有文件夹及其文件**

`print(os.listdir('E:\\360\\tianzhenwuxie01\\python-bf\\py文件处理\\'))`

### 遍历文件夹

``` python
path = ''
bianli = os.scandir(path1)

for bianli1 in bianli:
    bianli1.name # 文件名称
    bianli1.path # 文件路径
    bianli1.is_dir() # 需要加括号,是不是文件夹，是：true 不是：false
    bianli1.is_file() # 是不是文件，是：true 不是：false
    if bianli1.is_dir() : # 如果是文件夹则打印文件夹名称
        print(bianli1.name)
```

### 查找文件 当前文件夹下以.py 结尾的文件

``` python
import glob
print(glob.glob('*.py'))
print(glob.glob('*.py', recursive=True)) # 当前文件夹下的子文件夹也查找
```

### 一些小命令

#### 删除

``` python
#去掉data中的换行
data.replace('\n', '')

```

#### 提取后缀名

``` python

# 按照=分割取最后一个
data.split('=')[-1]
# 按照换行分割取最后一个
data.split('\n')[-1]

```

#### list 转换为 str 字符串

``` python
# list转换为str 用换行隔开
new_txt = '\n'.join(new_list2)

```
