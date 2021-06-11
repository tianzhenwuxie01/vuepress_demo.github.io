

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

# -------查找某个字段在字符串中--------替换--------分割/合并--------添加修建--------删除--------排序--------查找--------添加--------删除------
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
