

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
> 解决方法加入：`allow_unicode=True`,例如`yaml.dump(q3,f,Dumper=yaml.RoundTripDumper,allow_unicode=True` > [参考链接](https://www.cnblogs.com/BlueSkyyj/p/12781752.html)

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
