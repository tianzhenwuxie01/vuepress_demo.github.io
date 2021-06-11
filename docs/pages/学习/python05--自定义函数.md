---
title: python05--自定义函数
date: 2020-08-11 08:25:12
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

### 通用爬虫框架

``` python
import requests
# 通用爬虫

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36'
}
proxies = {
  "http": "http://127.0.0.1:7890",
  "https": "http://127.0.0.1:7890",
}

def url_text(url):
    try:
        r = requests.get(url, headers=headers, proxies=proxies, timeout=30)
        r.raise_for_status() #如果状态码不是200，引发HTTPError异常
        r.encoding = 'utf-8'
        html = r.text
        return html
    except:
        return "url_text---错误"
```

### 读取文件

### 读取文件—类读取写入

```python
import yaml
from ruamel import yaml

class  wfjm:
    def  __init__(self,q1):
        self.q1 = q1  # 读取写入文件位置
        self.q2 = 'r+'  # 读取写入方式a+w+
        self.q3 = ''  # 写入内容
# t	文本模式 (默认)。
# x	写模式，新建一个文件，如果该文件已存在则会报错。
# b	二进制模式。
# +	打开一个文件进行更新(可读可写)。
# U	通用换行模式（不推荐）。
# r	以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。
# rb	以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式。一般用于非文本文件如图片等。
# r+	打开一个文件用于读写。文件指针将会放在文件的开头。
# rb+	以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头。一般用于非文本文件如图片等。
# w	打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。
# wb	以二进制格式打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。
# w+	打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。
# wb+	以二进制格式打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。
# a	打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。
# ab	以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。
# a+	打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。
# ab+	以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写。
    def duqu(self):
        try:
            with open(self.q1, 'r', encoding='utf-8') as f:
                text_list = f.readlines()    #读取内容是个列表
                return text_list
        except:
            print('duqu---错误')
        # q1:打开文件位置
    
    # 读取yml文件
    def duqu_yaml(self):
        try:
            f = open(self.q1, 'r',  encoding='utf-8')
            y = yaml.safe_load(f)
            return y
        except:
            print('duqu_yaml---错误')
        # q1:打开文件位置
    # 生成写入文件
    def xieru(self):
        try:
            with open(self.q1, self.q2, encoding='utf-8') as f:
                f.write(self.q3)
        except:
            return "xieru---错误"
        # q1：写入文件位置。q2：写入内容
    # 生成写入yml文件
    def xieru_yaml(self):
        try:
            with open(self.q1,self.q2,encoding="utf-8") as f:
                yaml.dump(self.q3,f,Dumper=yaml.RoundTripDumper)
        except:
            print('xieru_yaml---错误')
        # q1:文件名，q2：写入方式a+w+。q3：写入对象

a = wfjm('01.txt')
a.q2 ='w+'
a.q3 ='woui '
a.xieru()
```

``` python
def duqu(q1):
    try:
        with open(q1, 'r', encoding='utf-8') as f:
            text_list = f.readlines()    #读取内容是个列表
            return text_list
    except:
        print('duqu---错误')
    # q1:打开文件位置
```

``` python
import yaml
# 读取yml文件
def duqu_yaml(q1):
    try:
        f = open(q1, 'r',  encoding='utf-8')
        y = yaml.safe_load(f)
        return y
    except:
        print('duqu_yaml---错误')
    # q1:打开文件位置
```

### 写入文件

``` python
# 生成写入文件
def xieru(q1, q2):
    try:
        with open(q1, 'a+', encoding='utf-8') as f:
            f.write(q2)
    except:
        return "xieru---错误"
    # q1：写入文件位置。q2：写入内容

```

``` python
from ruamel import yaml
# 生成写入yml文件
def xieru_yaml(q1, q2, q3):
    try:
        with open(q1,q2,encoding="utf-8") as f:
            yaml.dump(q3,f,Dumper=yaml.RoundTripDumper)
    except:
        print('xieru_yaml---错误')
    # q1:文件名，q2：写入方式a+w+。q3：写入对象
```

> 写入 yml 时候中文出现问题
> 解决方法加入：`allow_unicode=True`,例如`yaml.dump(q3,f,Dumper=yaml.RoundTripDumper,allow_unicode=True` 
> [参考链接](https://www.cnblogs.com/BlueSkyyj/p/12781752.html)

[写入 yml](https://cloud.tencent.com/developer/article/1516551)

### bs4-BeautifulSoup

``` python
from bs4 import BeautifulSoup
# bs4

def soup1(q1, q2, q3):
    try:
        soup1 = BeautifulSoup(q1, "lxml")
        ceshi = soup1.find_all(q2, q3)
        return ceshi
    except:
        return "soup1---错误"
    # html文件路径 ，q2标签筛选例如'p' q3：属性筛选attrs={"class":"sister", "id":"01"}
# bs4
def soup2(q1, q2):
    try:
        soup1 = BeautifulSoup(q1, "lxml")
        ceshi = soup1.select(q2)
        return ceshi
    except:
        return "soup2--错误"
    # html文件路径 ，q2标签筛选例如'p'
```

# xpath 筛选

``` python
from lxml import etree
# xpath

def xpath(q1, q2):
    try:
        tree1 = etree.HTML(q1)
        tree2 = tree1.xpath(q2)
        return tree2
    except:
        return "xpath出现异常"
    #q1：html文件路径，q2：xpath表达式
    #当用xpath进行二次筛选时候直接写 xxx。xpath()即可
```

### 哈希值

``` python
import hashlib
# md5
def CalcMD5(q1):
    try:
        with open(q1,'rb') as f:
            md5obj = hashlib.md5()
            md5obj.update(f.read())
            hash = md5obj.hexdigest()
            # print(hash)
            return hash
    except:
        print('CalcMD5---错误')
    # q1：文件路径

# 哈希
def CalcSha1(filepath):
    with open(filepath,'rb') as f:
        sha1obj = hashlib.sha1()
        sha1obj.update(f.read())
        hash = sha1obj.hexdigest()
        # print(hash)
        return hash

```

### 去列表重复

``` python
from time import time

print('开始去重...')
start = time()
new_list = []
for line in open(r'01.txt', 'r+', encoding='UTF-8'):
	new_list.append(line)

new_list2 = list(set(new_list))					#去重
new_list2.sort(key=new_list.index)				#以原list的索引为关键词进行排序
new_txt = ''.join(new_list2)					#将新list连接成一个字符串
with open(r'test_new.txt', 'w', encoding='UTF-8') as f:
	f.write(new_txt)
end = time()
shi = end - start
print('去重完毕！')
print('总耗时%s秒！' % shi)

```

### 并发多进程任务

``` python
import multiprocessing

# 例如
def download(i):
    try:
        print(i)
        os.chdir(path)
        os.system("you-get " + i)
    except:
        print('error ' + i)

url1_list = ['', '', '']


if __name__ == '__main__':
    pool = multiprocessing.Pool(processes = 4)  # 最多同时四个进程,多余cpu核心数反而浪费资源
    pool.map(download, url1_list)               #dowmload--需要执行的函数,url_list前个函数的参数列表---注意是列表---
    pool.close()  # 关闭进程池，不在接受新进程
    pool.join()   # 等待子进程结束

```
### 输出log

```python
# 输出log
import logging
logger = logging.getLogger(__name__)
logger.setLevel(level = logging.INFO)
handler = logging.FileHandler("log.txt")
handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
logger.addHandler(handler)

logger.info("Start print log")
logger.debug("Do something")
logger.warning("Something maybe fail.")
logger.info("Finish")
```
