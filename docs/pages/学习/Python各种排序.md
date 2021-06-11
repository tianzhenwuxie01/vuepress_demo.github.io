## Python各种排序


## 0、基础

> 主要用到list.sort()、sorted()、lambda进行各种排序操作。其中：list.sort()是Python列表的一个内置排序方法，只供list结构使用，list.sort()方法排序时直接修改原列表，返回None。而sorted()函数接受一切迭代器，返回新列表。相比list.sort()，sorted()使用范围更广，但是如果不需要保留原列表的情况下对列表排序，可以选择list.sort()方法，不需要复制原有列表，消耗内存小，效率也较高。

### list.sort()

`list.sort()`  函数用于**对原列表进行排序**，如果指定参数，则使用比较函数指定的比较函数。

### 语法

```python
list.sort(cmp=None, key=None, reverse=False)  

```

|参数

- cmp：可选参数，如果指定了该参数则使用该参数的方法进行排序，**Python3取消了该参数**；
- key：用来进行比较的元素，取自可迭代对象中，指定可迭代对象中的一个元素来进行排序；
- reverse：排序规则，`True`降序，`False`升序（默认）；
- 返回值
    - 该方法直接修改原列表，返回`None`；

### 示例

|

```python
# 列表排序  
test = ['Google', 'Runoob', 'Taobao', 'Facebook']  
test.sort()  
print(test)  
# result:  
# ['Facebook', 'Google', 'Runoob', 'Taobao']  
  
# 列表降序排序  
vowels = ['e', 'a', 'u', 'o', 'i']  
vowels.sort(reverse=True)  
print (vowels)  
# result:  
# ['u', 'o', 'i', 'e', 'a']  

```

### sorted()

`sorted()` 函数对**所有可迭代对象**进行排序操作。

### 语法

```  python
sorted(iterable, key=None, reverse=False)  

```

- 参数
    - iterable：可迭代对象；
    - key：用来进行比较的元素，取自可迭代对象中，指定可迭代对象中的一个元素来进行排序；
    - reverse：排序规则，`True`降序，`False`升序（默认）；
- 返回值
    - 返回排序好的列表；

### 示例

```python
# 排序  
sorted([5, 2, 3, 1, 4])  
# result：  
# [1, 2, 3, 4, 5]  
  
# 降序排序  
example_list = [5, 0, 6, 1, 2, 7, 3, 4]  
sorted(example_list, reverse=True)  
# result：  
# [7, 6, 5, 4, 3, 2, 1, 0]  

```

### lambda

Python使用`lambda`创建匿名函数，即不使用`def`这样的标准语句来定义函数，允许快速定义单行函数，类似于C语言的宏，可以用在任何需要函数的地方。

- `lambda`的主体是一个表达式，而不是一个代码块，仅能在其中封装有限的逻辑；
- `lambda`函数拥有自己的命名空间，不能访问参数列表之外或全局命名空间里的参数；
- `lambda`并不会带来程序效率的提高，只是使代码更简洁？

### 语法

```python
lambda [arg1 [,arg2,.....argn]]:expression  

```

上述用法等价于：

```python
def <lambda>(arg1 [,arg2,......argn]):  
    return expression  

```

### 示例

```python
sum = lambda arg1, arg2: arg1 + arg2  
   
# 调用sum函数  
print ("sum(10,20) = ", sum( 10, 20 ))  
print ("sum(20,30) = ", sum( 20, 30 ))  
  
# result:  
# sum(10,20) = 30  
# sum(20,30) = 50  

```

## 1、各种排序

> 参考链接

### 1.1、list排序

```python
lis = ['a', 'b', 'c']  
  
print(sorted(lis))  
# ['a', 'b', 'c']  
print(sorted(lis, reverse=True))  
# ['c', 'b', 'a']  
  
lis.sort()  
print(lis)  
# ['a', 'b', 'c']  
lis.sort(reverse=True)  
print(lis)  
# ['c', 'b', 'a']  

```

### 1.2、dict按key排序

```python
dic = {'c': 1, 'b': 2, 'a': 3}  
print(sorted(dic))  
# ['a', 'b', 'c']  
print(sorted(dic, reverse=True))  
# ['c', 'b', 'a']  

```

### 1.3、dict按value排序

```python
dic = {'c': 1, 'b': 2, 'a': 3}  
print(sorted(dic, key=lambda k: dic[k]))  
# ['c', 'b', 'a']  
print(sorted(dic, key=lambda k: dic[k], reverse=True))  
# ['a', 'b', 'c']  

```

### 1.4、list内嵌套list排序

```python
lis = [[4, 2, 9], [1, 5, 6], [7, 8, 3]]  
print(sorted(lis, key=lambda k: k[0]))  
# [[1, 5, 6], [4, 2, 9], [7, 8, 3]]  
print(sorted(lis, key=lambda k: k[1]))  
# [[4, 2, 9], [1, 5, 6], [7, 8, 3]]  
print(sorted(lis, key=lambda k: k[2]))  
# [[7, 8, 3], [1, 5, 6], [4, 2, 9]]  
print(sorted(lis, key=lambda k: k[0], reverse=True))  
# [[7, 8, 3], [4, 2, 9], [1, 5, 6]]  

```

### 1.5、dict内嵌套dict排序

```python
dic = {  
    'a': {'x': 3, 'y': 2, 'z': 1},  
    'b': {'x': 2, 'y': 1, 'z': 3},  
    'c': {'x': 1, 'y': 3, 'z': 2},  
}  
print(sorted(dic, key=lambda k: dic[k]['x']))  
# ['c', 'b', 'a']  
print(sorted(dic, key=lambda k: dic[k]['y']))  
# ['b', 'a', 'c']  
print(sorted(dic, key=lambda k: dic[k]['z']))  
# ['a', 'c', 'b']  
print(sorted(dic, key=lambda k: dic[k]['x'], reverse=True))  
# ['a', 'b', 'c']  

```

### 1.6、list内嵌套dict排序

```python
lis = [  
    {'x': 3, 'y': 2, 'z': 1},  
    {'x': 2, 'y': 1, 'z': 3},  
    {'x': 1, 'y': 3, 'z': 2},  
]  
print(sorted(lis, key=lambda k: k['x']))  
# [{'z': 2, 'x': 1, 'y': 3}, {'z': 3, 'x': 2, 'y': 1}, {'z': 1, 'x': 3, 'y': 2}]  
print(sorted(lis, key=lambda k: k['y']))  
# [{'z': 3, 'x': 2, 'y': 1}, {'z': 1, 'x': 3, 'y': 2}, {'z': 2, 'x': 1, 'y': 3}]  
print(sorted(lis, key=lambda k: k['z']))  
# [{'z': 1, 'x': 3, 'y': 2}, {'z': 2, 'x': 1, 'y': 3}, {'z': 3, 'x': 2, 'y': 1}]  
print(sorted(lis, key=lambda k: k['x'], reverse=True))  
# [{'z': 1, 'x': 3, 'y': 2}, {'z': 3, 'x': 2, 'y': 1}, {'z': 2, 'x': 1, 'y': 3}]  

```

### 1.7、dict内嵌套list排序

```python
dic = {  
    'a': [1, 2, 3],  
    'b': [2, 1, 3],  
    'c': [3, 1, 2],  
}  
print(sorted(dic, key=lambda k: dic[k][0]))  
# ['a', 'b', 'c']  
print(sorted(dic, key=lambda k: dic[k][1]))  
# ['b', 'c', 'a']  
print(sorted(dic, key=lambda k: dic[k][2]))  
# ['c', 'b', 'a']  
print(sorted(dic, key=lambda k: dic[k][0], reverse=True))  
# ['c', 'b', 'a']  

```

### 1.8、按照多个参数排序

使用`operator`模块的`itemgetter()`实现。

```python
from operator import itemgetter  
student_tuples = [('john', 'A', 15),('jane', 'B', 12),('dave', 'B', 10)]  
  
print (sorted(student_tuples, key = itemgetter(2)))  # 根据年龄排序  
print (sorted(student_tuples, key = itemgetter(1, 2)))  # 根据成绩和年龄排序  
print (sorted(student_tuples, key = itemgetter(1, 2), reverse=True)) # 反转排序结果  
  
# result:  
# [('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]  
# [('john', 'A', 15), ('dave', 'B', 10), ('jane', 'B', 12)]  
# [('jane', 'B', 12), ('dave', 'B', 10), ('john', 'A', 15)]  

```

## 2、其他

`list`排序可视情况采用`sorted()`或`list.sort()`，其他各种排序主要是`sorted()`和`lambda`的结合操作；

`dict`的排序只取其`key`，所以需要对`value`操作时需要在`lambda`中先转换为对应的`value`才可以；

排序是稳定的，即如果多个元素有相同的key，则排序前后其先后顺序不变；