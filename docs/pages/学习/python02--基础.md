---
title: python02--基础
date: 2020-08-08 09:25:12
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

### 基础数据类型

**可以 type 判断** `type()`

``` python
Number（数字）:  int(整数)、float(浮点数)、bool、complex（复数）。
# 数字支持 + - * / //(除法，得到一个整数) %(取余) **(乘方)
String（字符串）: 正着从0开始,倒着从-1开始
List（列表） : 列表的 [2:5] str用法相同,可连接
Tuple（元组）: 元组与列表类似，不同之处在于元组的元素不能修改 元组写在小括号 () 里，元素之间用逗号隔开。
Set（集合） : 多个,无序,不重复
Dictionary（字典）: 字典用 { } 标识，它是一个无序的 键(key) : 值(value) 的集合。
```

### 常用函数

#### str 字符串

``` python
srt1 = '测试啊001测试啊002'

# -------查找某个字段在字符串中-------
str1.find('测试') # 查找测试,返回匹配到的第一个测试的索引值.从左往右
str1.find('测试',3,10) # 查找第三到十直接的测试.从左往右
str1.find('china') # 没有返还 -1
#从右往左: rfind

# -------替换-------
str1.replace('测试','中国') #替换,全部替换
str1.replace('测试','中国',2) #替换两个?没试过
# -------分割/合并-------
str1.split(',')    # 以,分割
str1.split(',')[1]    # 以,分割.取第一个
str2 = '\n'join(list1)   # 合并列表list以换行隔开
```

#### list 列表

``` python
list1 = ['Google', 'Runoob', 1997, 2000]

#包含函数
len(list) # 列表元素个数
max(list) # 返回列表元素最大值
min(list) # 返回列表元素最小值
list(seq) # 将元组转换为列表

# -------添加修建-------
list.index(obj) # 从列表中找出某个值第一个匹配项的索引位置
list.count(obj) # 统计obj元素在列表中出现的次数
list.append(obj) # 在列表末尾添加新的对象obj
list.extend(seq) # 在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表）
list.insert(0, seq) # 索引0及第一个位置添加seq
# -------删除-------
del list[2]    # 删除第二个索引值.及列表第三个数值
list.pop(0)     #删除第一个值,并且打印删除的值.不知道索引默认删除最后一个
list.remove('ces')      # 删除第一个ces
list.clear() # 清空列表
# -------排序-------
list.reverse() # 反向列表中元素
ist.sort( key=None, reverse=False) #对原列表进行排序,key:排序关键词,reverse是否倒序
```

#### 字典

``` python
dict1 = {'Name': 'Runoob', 'Age': 7, 'Class': 'First'}

print(dict1['Name']) # 输出name对应的值\
dict1['Age'] = 8     # 更新值
dict1['abcd'] = dfe  # 添加值（同上更新，如果没有则新建）
del dict1['Name']    # 删除键 'Name'
dict1.clear()        # 清空字典

# -------查找-------
dict1.get('Name', '随便')   #返还Name的值Runoob
dict1.get('Name000', '随便')   # 不存在返还,后一个值随便
dict1.get('Name000')   # 不存且啥都不写,返还none
#
print (dict[2])           # 输出键为 2 的值
print (tinydict)          # 输出完整的字典
print (tinydict.keys())   # 输出所有键
print (tinydict.values()) # 输出全部的值

len(dict1)          # 计算字典长度
str(dict1)          # 输出字典，以可打印的字符串表示。
key in dict1        # 如果键:key在字典dict里返回true，否则返回false
```

**集合**--无序无索引不重复

``` python
s = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
set()               # 新建空集合

# -------添加-------
s.add( x )          # 添加x,x 可以有多个，用逗号分开
s.update( x )          # 添加列表,元组,字符串
# -------删除------
s.remove( x )       # 移除x
s.discard( x )      # 移除x ,且如果元素不存在，不会发生错误
s.pop()      # 随机删除一个数据,并且打印删除的数据

x in s              # 判断元素 x 是否在集合 s 中，存在返回 True，不存在返回 False。
x not in s              # 判断元素 x 是否在集合 s 中，存在返回 True，不存在返回 False。

difference()	        # 返回多个集合的差集
intersection()      	# 返回集合的交集
isdisjoint()        	# 判断两个集合是否包含相同的元素，如果没有返回 True，否则返回 False。
union()             	# 返回两个集合的并集
symmetric_difference()	# 返回两个集合中不重复的元素集合。
```

### Python 数据类型转换

将列表转换为字符串,用`\n`隔开: `urls2 = "\n".join(urls1_list)`
将 x 转换为字符串: `str(x)`
将字符串转换完列表,用.隔开 `list3 = str3.split(".")`
将 x 转换为一个整数: `int(x [,base])`
将序列 s 转换为一个列表 : `list(s)`

### 常用比较运算符

``` yaml
等于: ==
不等于: !=
大于: >
小于: <
大于等于: >=
小于等于: <=

x and y

```

**输入**

`url1 = input("请输入88影视下载网页：")`

**if 函数**

``` python
if a==1:
    pass
elif a==2:
    pass
else:
    pass
```

**自定义函数**

``` python
def 函数名称(函数参数):
    函数内容
    return r.text #返还r.txt
```

**后加参数**

``` python
url1 = 'https://ip.tool.chinaz.com/{}'.format(url_zidy)
```

**计算时间**

``` python
from time import time
start1 = time()
end1 = time()
shi1 = end1 - start1
print('全部完成完成,总耗时%s秒！' % shi1)

```
