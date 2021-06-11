---
title: python04--爬虫and表格
date: 2020-08-10 08:25:12
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

### requests 模块

安装：`pip install requests`

引入：`import requests`

#### 请求类型,属性,异常

``` python
# 请求类型
req = requests.get(url, params=None, **kwarge)
req = requests.head(url, params=None, **kwarge)
req = requests.post(url, params=None, **kwarge)
req = requests.put(url, params=None, **kwarge)
req = requests.patch(url, params=None, **kwarge)
req = requests.delete(url, params=None, **kwarge)
#url:网址链接, params:url中额外参数,字典形式, **kwarge:多个控制参数

# **kwarge参数
data:字典, 文件, 字节序列.作为request的内容
json:json的格式数据,作为内容
headers:字典类型,提供头部信息
cookies:字典类型,提供cookie信息
auth:元组,支持http认证
files:传输文件
timeout:设置超时时间,单位秒
proxies:字典类型,设置代理

# 属性
type(req))# req类型
req.status_code # 状态码 200成功  404失败
req.text # url页面信息
req.encoding # 编码
req.apparent_encoding # 根据url内容猜测的编码
req.content # 返回二进制形式
req.cookies # 返还cooks信息
req.headers # 请求头信息

## url链接错误异常报错
requests.ConnectionError # 网络连接异常，如dns失败，拒绝连接
requests.HTTPError      # http错误异常
requests.URLRequired        # url缺失异常
requests.TooManyRedirects   # 超过最大重定位次数异常 requests库的次数
requests.ConnectTimeout     # 连接远程服务器超时异常
requests.Timeout            # 请求url超时异常
```

#### 通用代码框架

``` python
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36'
}
proxies = {
  "http": "http://127.0.0.1:7890",
  "https": "http://127.0.0.1:7890",
}

def gethttptext(url):
    try:                    # 异常处理
        r = requests.get(url,headers=headers, proxies=proxies, timeout=30)
        r.raise_for_status() #如果状态码不是200，引发HTTPError异常
        r.encoding = r.apparent_encoding
        return r.text
    except:
        return "失败，出现异常"
```

### beautifulsoup4

安装`pip install lxml`, `pip install beautifulsoup4`

引入`from bs4 import BeautifulSoup`

格式

``` python
#soup = BeautifulSoup(html文件, "解析器")
soup = BeautifulSoup(html, "lxml")
soup = BeautifulSoup("<p>...</p>", "lxml")
soup = BeautifulSoup(open(...txt), "html.parser")

# 基本元素属性
soup.prettify # 输出html源代码
soup.title # 输出第一个title标签
soup.a # 输出第一个a标签.    指定p标签同理
soup.a.parend # 输出第一个a标签的上一个父标签,parend可多个叠加

soup.a.attrs # 输出a标签的属性,及其属性的值,字典类型
soup.a.['href'] # 输出a标签的href属性,也就是超链接
soup.a.name # 输出a标签的名字,就是'a'
soup.a.string # 输出a标签中的文本内容
soup.div.text # 输出a标签及其子标签中的所有文本内容
soup.a.comment # 输出a标签中的注释
soup.head.contents # 输出head部分全部的内容

```

#### soup.find()

``` python
# find_all方法。find方法类似，仅用于提取首个匹配元素
find_all( name , attrs , recursive , text , **kwargs )
#name :要查找的标签名（字符串、正则、方法、True）
#  attrs: 标签的属性
#  recursive: 递归
#  text: 查找文本
# **kwargs :其它 键值参数
#因class是关键字，所以要写成class_="value", 等同于attrs={"class":"value"}

soup.find('div')                                     #检索第一个div,等同于soup.div
soup.find('div', class_/id/attr='啥啥啥')             # 多个软件

soup.find_all('p')                                   # 以列表形式返回所有p标签
soup.find_all('p', class_="sister")                  # 以列表形式返回所有class属性==sister的p标签
soup.find_all('p', attrs={"class":"sister", "id":"01"})  # 以列表形式返回所有class属性==sister且id等于01的p标签
soup.find_all(id='link2')                            # 返回所有id属性==link2的标签
soup.find_all(re.compile("^b"))                      # 使用正则查找标签以b开头的元素
soup.find_all(href=re.compile("elsie"))              # 使用正则, 返回所有href属性包含elsie的标签
soup.find_all(id="link1", href=re.compile('elsie'))  # id=link1且href包含elsie的标签


```

#### soup.select()

``` python
select('某个选择器(id,class,啥的)'),返还一个列表

# 返还.tang属性标签下的ul下的li下的a标签

# select方法 - css选择器
# 注意select方法提取的元素均是列表形式，获取文本时注意加index
soup.select('p')                                    # 根据标签名查找所有p元素，等于soup.find_all('p')
soup.select('.sister')                              # 通过css属性查找class=sister的标签
soup.select('#link1')                               # 通过id查找所有id=#link1的元素
soup.select('p #link1')                             # 组合查找id=#link11的p元素
soup.select("head > title")                         # 查找head标签的子元素title
soup.select('div > ul > li > a')                    # 查找div下面的ul下面的li下面的所有a标签
soup.select('div[class="sister"] > ul > li > a')    # 查找class=sister的div下面的ul下面的li下面的所有a标签
soup.select('div > ul > li > a') [0]                # 查找div...li下面第一个a标签
soup.select('div > ul a')                           # 空格表示多个层级,ul下的包括多个子标签下的a标签
soup.select('a[class="sister"]')                    # 查找所有属性为sister的a标签
soup.select('a[href="http://example.com/elsie"]')   # 查找href=xxx的a标签元素
soup.select('p')[0].get_text()                      # 获取第一个p元素的文本
soup.select('p')[0].string()                        # 同上
soup.select('a[href*=".com/el"]')[0].attrs['href']  # 获取xxx.com的href
```

### xpath

安装：

引用：`from lxml import etree`

``` python
def xpath(q1, q2):
    try:
        tree1 = etree.HTML(q1)
        tree2 = tree1.xpath(q2)
        return tree2
    except:
        return "xpath出现异常"

获取文本
a/text()	                 # 获取 a 下的文本
a//text()	                 # 获取 a 下所有元素的文本
//a[text()='下一页']      	# 获取文本为下一页的 a 元素

获取属性
nodename	                 # 选取此节点的所有子节点
/	                         # 从当前节点选取直接子节点
//	                       # 从当前节点选取子孙节点
.	                         # 选取当前节点
..	                       # 选取当前节点的父节点
@	                         # 选取属性
*	                         # 匹配任何元素节点
@*	                       # 匹配任何属性节点
node()	                   # 匹配任何类型的节点

# 选取属于 bookstore 子元素的第一个book元素
/bookstore/book[1] （注意下标从1开始）


# 选取属于 bookstore 子元素的最后一个 book 元素
/bookstore/book[last()]

# 选取属于 bookstore 子元素的倒数第二个 book 元素
/bookstore/book[last()-1]

# 选取属于 bookstore 子元素的 最前面两个 book 元素
/bookstore/book[position()<3]

# 选取所有拥有名为 lang 的属性的title元素
//title[@lang]

# 选取所有 lang 属性为 eng 的 title 元素
//title[@lang='eng']

# 选取 bookstore 元素下所有 book 元素，它们的 price 元素值大于 35.00
/bookstore/book[price>35.00]


# 选取 bookstore 元素中的 book 元素的所有 title 元素，且 price 元素的值大于35.00
/bookstore/book[price>35.00]/title

# 选取 bookstore 的所有子元素
/bookstore/*

#选取文档中的所有元素
//*

# 选取 html 下面任意节点的 meta 节点的所有属性
//node()/meta[]/@*

# 选取所有带有属性的 title 元素
//title[@*]

# 选取 book 元素的所有 title 和 price 元素
//book/title | // book/price

# 选取文档中的所有 title 和 price 元素
//title | //price

# 选取属于 bookstore 元素的 book 元素的所有 title 元素，以及文档中所有的 price 元素
//bookstore/book/title | //price
```

### selenium

安装:`pip install selenium`

引用:`from selenium import webdriver`

**要有浏览器驱动器**

[谷歌驱动器](https://sites.google.com/a/chromium.org/chromedriver/home)
[谷歌驱动器:备用](https://npm.taobao.org/mirrors/chromedriver)

``` python
from selenium import webdriver
from time import sleep


# 实例化一个浏览器对象,此时执行会打开浏览器
bro = webdriver.Chrome()
bro.set_window_size(width=500, height=500, windowHandle="current") # 设置浏览器窗口大小
# 设置浏览器窗口最大化显示
# bro.maximize_window()



#指定发起请求的网址url
url = 'https://suulnnka.github.io/BullshitGenerator/index.html?'
# 发起请求,此时执行会打开浏览器并且进入上面url
bro.get(url)

js = "return action=document.body.scrollHeight"             # 获取当前页面高度
js1 = "window.scrollTo(0,document.body.scrollHeight)"       # 滚到页面底部
height = bro.execute_script(js)                             # 获取当前页面高度
bro.execute_script(js1)                                     # 滚到页面底部

#获取当前页面url
print(bro.current_url)
# 获得当前url源码数据
url_text = bro.page_source

#等待五秒
sleep(5)
#关闭浏览器
bro.close()
bro.quit()
```

#### 连续滚动到底部

``` python
js = "return action=document.body.scrollHeight"          # 获取当前页面高度
js1 = "window.scrollTo(0,document.body.scrollHeight)"       # 滚到页面底部
height = bro.execute_script(js)
print('当前高度'+str(height))

bro.execute_script(js1)
sleep(1)
status = True
while status:
    # 每执行一次滚动条拖到最后，就进行一次参数校验，并且刷新页面高度
    height_01 =bro.execute_script(js)
    print('已更新高度'+str(height_01))
    if height_01 > height:
        bro.execute_script(js1)
        sleep(1)
        height = height_01
    else:
        # 当页面高度不再增加的时候，我们就认为已经是页面最底部，结束条件判断
        print("滚动条已经处于页面最下方!")
        # bro.execute_script('window.scrollTo(0, 0)')  # 把滚动条拖到页面顶部
        sleep(1)
        break
```

#### 定位元素

``` python
dro.find_element_by_id('001')               # 定位id=001的元素标签
dro.find_element_by_name()               # 定位name的元素标签
dro.find_element_by_class_name()               # 定位class的元素标签
dro.find_eelement_by_tag_name()               # 定位tag的元素标签
dro.find_element_by_link_text('百度')               # 定位文本为百度的元素标签
dro.find_element_by_partial_link_text()               # 模糊定位,定位文本为百度的元素标签,包含百度搜索百度贴吧字样
# dro.find_element_by_css_selector()               # 定位css的元素标签
dro.find_element_by_xpath('//...')               # 定位xpath的元素标签

# -------输入,清除,单机,提交
ces = '百度一下'
bro.find_element_by_xpath('//*').send_keys(ces)     # 定位到元素,输入ces
bro.find_element_by_xpath('//*').clear()     # 定位到元素,清楚之前输入内容
bro.find_element_by_xpath('//*').click()     # 定位到元素,鼠标单机
bro.find_element_by_xpath('//*').submit()     # 定位到元素,鼠标单机

# -------前进,后退,刷新-------
bro.back()                                  # 浏览器后退一步
bro.forward()                               # 浏览器前进一步
bro.refresh()                               # 浏览器刷新

# -------鼠标定位操作-------
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains

ActionChains(driver).drag_and_drop(起始元素,终止元素).perform()        # 鼠标拖拽
ActionChains(driver).move_to_element(需要悬停操作的元素).perform()     # 鼠标悬停
ActionChains(driver).double_click(需要做双击操作元素)                  # 鼠标双击
ActionChains(driver).click_and_hold(需要做长按操作的元素)              # 鼠标左键长按

# 例子
# 定位到啥啥啥元素
shezhi = bro.find_element_by_xpath('//*[@id="s-usersetting-top"]')
# 最大化显示(看得清楚)
bro.maximize_window()
# 等两秒
sleep(2)
# 鼠标悬停再shezhi元素
ActionChains(bro).move_to_element(shezhi).perform()


# ---------键盘操作-------
from selenium.webdriver.common.keys import Keys
使用语法:
    元素.send_keys(Keys.键名)  # 键名必须大写----单个键使用
    元素.send_keys(Keys.CONTROL,"c")  #  组合键使用
常用键操作
    元素.send_keys(Keys.BACK_SPACE) 删除键（Backspace）
    元素.send_keys(Keys.SPACE) 空格键（Space）
    元素.send_keys(Keys.TAB) Tab键
    元素.send_keys(Keys.ESCAPE) 回退键（Esc）
    元素.send_keys(Keys.ENTER) 回车键（Enter）(常用)
    元素.send_keys(Keys.CONTROL,'a') 全选（Ctrl+A）
    元素.send_keys(Keys.CONTROL,'c') 复制（Ctrl+C）
    元素.send_keys(Keys.CONTROL,'x') 剪切（Ctrl+X）
    元素.send_keys(Keys.CONTROL,'v') 粘贴（Ctrl+V）
    元素.send_keys(Keys.F1) 键盘F1
    元素.send_keys(Keys.F12) 键盘F12

# 例子
shezhi = bro.find_element_by_xpath('//*[@id="s-usersetting-top"]')
shezhi.send_keys(Keys.TAB)   # 再shezhi的元素位置输入tap

```

#### 打开新标签，显示当前网页标签

``` python
bro.get(url1)
bro.get(url2)
# 这样打开url2时候会覆盖掉url1的标签

# 打开新的标签页 不是窗口
js = " window.open('https://remuxo.gitee.io/webstackpage_0514/cn/index.html')"
js = " window.open('"+url+"')" # url=网页网址
bro.execute_script(js)
# 关闭当前标签
bro.close()

# n=获得所有标签列表
n = bro.window_handles
# 切换到最后一个标签，及最新的窗口
bro.switch_to_window(n[-1])
# 切换到第一个标签
bro.switch_to_window(n[0])
# 打印当前窗口标题
print(bro.title)
```

### 保存cookies

```python
# 获取cookie
def get_cookies(url,browser):
    """
    获取cookies保存至本地
    """
    browser.get(url)
    sleep(15)     # 进行登录
    dictCookies = browser.get_cookies()    # 获取list的cookies
    jsonCookies = json.dumps(dictCookies) #  转换成字符串保存
    
    with open('damai_cookies.txt', 'w') as f:
        f.write(jsonCookies)
    print('cookies保存成功！')
```


### 输出表格

``` python
# pip install prettytable
from prettytable import PrettyTable

# 按行添加数据

table = PrettyTable(['编号','云编号','名称','IP地址'])
table.add_row(['1','server01','服务器01','172.16.0.1'])
table.add_row(['2','server02','服务器02','172.16.0.2'])
table.add_row(['3','server03','服务器03','172.16.0.3'])
table.add_row(['4','server04','服务器04','172.16.0.4'])
table.add_row(['5','server05','服务器05','172.16.0.5'])
table.add_row(['6','server06','服务器06','172.16.0.6'])
table.add_row(['7','server07','服务器07','172.16.0.7'])
table.add_row(['8','server08','服务器08','172.16.0.8'])
table.add_row(['9','server09','服务器09','172.16.0.9'])
print(table)
效果如下：
+------+----------+----------+------------+
| 编号 |  云编号  |   名称   |   IP地址   |
+------+----------+----------+------------+
|  1   | server01 | 服务器01 | 172.16.0.1 |
|  2   | server02 | 服务器02 | 172.16.0.2 |
|  3   | server03 | 服务器03 | 172.16.0.3 |
|  4   | server04 | 服务器04 | 172.16.0.4 |
|  5   | server05 | 服务器05 | 172.16.0.5 |
|  6   | server06 | 服务器06 | 172.16.0.6 |
|  7   | server07 | 服务器07 | 172.16.0.7 |
|  8   | server08 | 服务器08 | 172.16.0.8 |
|  9   | server09 | 服务器09 | 172.16.0.9 |
+------+----------+----------+------------+

# 按列添加数据

table = PrettyTable()
table.add_column('项目', ['编号','云编号','名称','IP地址'])
table.add_column('值', ['1','server01','服务器01','172.16.0.1'])
print(table)

效果如下：
+-------+--------+------------+
| index | 项目 |    值     |
+-------+--------+------------+
|   1   |  编号  |     1      |
|   2   | 云编号 |  server01  |
|   3   |  名称  |  服务器01   |
|   4   | IP地址 | 172.16.0.1 |
+-------+--------+------------+
```

[相关链接](https://cloud.tencent.com/developer/article/1603833)

### 键鼠控制

``` python
import pyautogui
import pyperclip
# 每次操作停顿0.25秒
pyautogui.PAUSE = 0.25
# 鼠标移到左上角取消执行操作
pyautogui.FAILSAFE = True

# 移动到125，29位置单机
pyautogui.click(125, 29, button='left')
# 输入文本（可中文）
pyperclip.copy(txt)  # 先复制
pyperclip.copy('我的手机')  # 先复制
pyautogui.hotkey('ctrl', 'v')
# 输入内容 （仅英文）
pyautogui.typewrite("ceshi")# 直接输入,不支持中文
# 左键 双击 双击间隔0.25秒
pyautogui.click(465, 131, button='left', interval=0.25, clicks=2) #左键 双击 双击间隔0.25秒
pyautogui.hotkey('ctrl', 'v')
# 输入回车
pyautogui.press('enter')


x,y=pyautogui.position()
print x,y                  # 输出的结果是：312,198  （结果是鼠标当前位置，可以想象成以屏幕左上角为原点的第一象限）
pyautogui.size()        # 获取当前屏幕分辨率
pyautogui.moveTo(x,y,s)      #鼠标在s秒移动到（x,y），同理还有拖动方法dragT
pyautogui.scroll(x,y)      #鼠标在（x，y）滚动
pyautogui.mouseDown(x,y,button='left')     #鼠标左边按下，同理mouseUp为鼠标松开

pyautogui.dragTo(x,y[,duration=t)      #将鼠标拖动到指定x,y位置,t=动作需要的秒数
pyautogui.dragRel(x,y[,duration=t]
pyautogui.scroll()                       #正数表示向上滚动，负数表示向下滚动，
```

[参考 1](https://segmentfault.com/a/1190000022663620)
[参考 2](https://www.pythonf.cn/read/122421)
