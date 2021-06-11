## python format 用法详解



前序：format是python2.6新增的一个格式化字符串的方法，相对于老版的%格式方法，它有很多优点。

1. 不需要理会数据类型的问题，在%方法中%s只能替代字符串类型
2. 单个参数可以多次输出，参数顺序可以不相同
3. 填充方式十分灵活，对齐方式十分强大
4. 官方推荐用的方式，%方式将会在后面的版本被淘汰

---

## format填充字符串

一 填充

### 1.通过位置来填充字符串

```python
print('hello {0} i am {1}'.format('world','python'))    # 输入结果：hello world i am python
print('hello {} i am {}'.format('world','python') ) #输入结果：hello world i am python
print('hello {0} i am {1} . a now language-- {1}'.format('world','python')
# 输出结果：hello world i am python . a now language-- python`
```

foramt会把参数按位置顺序来填充到字符串中，第一个参数是0，然后1 ……
也可以不输入数字，这样也会按顺序来填充

**同一个参数可以填充多次，这个是format比%先进的地方**

### 2.通过key来填充

```python
obj = 'world'
name = 'python'
print('hello, {obj} ,i am {name}'.format(obj = obj,name = name))
# 输入结果：hello, world ,i am python`

```

### 3.通过列表填充

```python
list=['world','python']
print('hello {names[0]}  i am {names[1]}'.format(names=list))# 输出结果：hello world  i am python
print('hello {0[0]}  i am {0[1]}'.format(list)) #输出结果：hello world  i am python`
```

### 4.通过字典填充

```python
dict={‘obj’:’world’,’name’:’python’}
print(‘hello {names[obj]} i am {names[name]}’.format(names=dict)) # hello world i am python

**注意访问字典的key，不用引号的**
```

### 5.通过类的属性填充

```python

class Names():
    obj='world'
    name='python'

print('hello {names.obj} i am {names.name}'.format(names=Names))#输入结果hello world i am python`

```

### 6.使用魔法参数

```python
args = [‘,’,’inx’]
kwargs = {‘obj’: ‘world’, ‘name’: ‘python’}
print(‘hello {obj} {} i am {name}’.format(*args, **kwargs))#输入结果：hello world , i am python

注意：魔法参数跟你函数中使用的性质是一样的：这里format(*args,*** **kwargs)) 等价于：format(‘,’,’inx’,obj = ‘world’,name = ‘python’)**
```

---

## format 格式转换

[Untitled](python%20format%20%E7%94%A8%E6%B3%95%E8%AF%A6%E8%A7%A3%20e52589649f554e29a92dfade59e1b248/Untitled%20Database%20b9357ec9603344459c8ae69158f9e550.csv)

**b、d、o、x分别是二进制、十进制、八进制、十六进制。**

## 其它用法

### 1.转义“{}”

```python

print('{{hello}} {{{0}}}'.format('world')) #输出结果：{hello} {world}`
```

**跟%中%%转义%一样，format中用 { 来转义{ ，用 } 来转义 }**

### 2.format作为函数变量

```python
name = 'InX'
hello = 'hello,{} welcome to python world!!!'.format #定义一个问候函数
hello(name) #输入结果：hello,inx welcome to python world!!!`
```

### 3.格式化datetime

```python
from datetime import datetime
now=datetime.now()
print '{:%Y-%m-%d %X}'.format(now) # 输出结果：2017-07-24 16:51:42`
```

### 4.{}内嵌

```python
print('hello {0:>{1}} '.format('world',10)) ##输出结果：hello      world` 

```

从最内层的{}开始格式化

### 5.叹号的用法

``` python
print(‘{!s}国’.format(‘中’)) #输出结果：中国

print(‘{!a}国’.format(‘中’)) #输出结果：’\u4e2d’国

print(‘{!s}国’.format(‘中’)) #输出结果:’中’国

！后面可以加s r a 分别对应str() repr() ascii() 作用是在填充前先用对应的函数来处理参数

差别就是repr带有引号，str()是面向用户的，目的是可读性，repr()是面向Python解析器的，返回值表示在python内部的含义,ascii (),返回ascii编码
```