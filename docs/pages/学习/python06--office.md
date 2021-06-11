---
title: python06--office
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

### pandas

#### 新建一个文件（excel。。。）

``` python
import pandas as pd

def pd_new_excel(path, neirong):
    path = path
    shuju = pd.DataFrame(ces)
    # shuju = pd.Series(ces)            # 建立一维数据
    # shuju = shuju.set_index('序号')    # 去除索引列
    shuju.to_excel(path, sheet_name='ces1')
    # shuju.to_csv(path)
    # shuju.to_sql(path)
    print('新建成功')

path = 'E:\\360\\tianzhenwuxie01\\python-bf\\office\\excel\\02.xlsx'
ces = {'序号': [1, 2, 3], '测试':['2', 'asd', 'asds']}

pd_new_excel(path, ces)

```

#### 读取 csv,txt

``` python
#-----------读取csv,txt------------------
path = '01.txt'

# duqu = pd.read_csv(path)
duqu = pd.read_table(path, sep=',',header=None)  # read_table需要指定分隔符.sep='支持正则'
# sep=''                        指定分隔符
# header=None                   指定表头默认0:第一行..None:没有表头
# names=None                    列名:和表头同理.可以指定自定义表头 name=['cds', 'cds']
# index_col                       索引的列号或者列名  index_col='一个列表头'作为索引.多个索引用列表=['', '']
# skiprows=3                    从文件开始处,需要跳过的（3）行数或行号列表.不显示跳过显示某行
# encoding                           文件编码
# nrows                          从文件开始处读入的行数

print(duqu)
# print(duqu.head(2))                 #只读取前两行
# print(duqu.tail(2))                 #只读取后两行
# print(duqu.shape)                 #显示 共有几行几列
```

#### 读取 excel

``` python
#-----------读取excel------------------
path = '01.xlsx'
duqu = pd.read_excel(path, header=None, sheet_name=0)
# header=None              指定列索引的行及设定自定义表头，可为列表
# names=None                    列名:和表头同理.可以指定自定义表头 name=['cds', 'cds']
# index_col=None              指定行索引的列
# sheet_name='ces'         打开名字为ces的表。默认0，数字表示第几个（从0开始），可传列表 None返还全部表字典
# usecols'                只使用那些列 None默认全部，可列表，列表内可用数字索引或str表头
# skiprows=3                    跳过的前3行或行号列表 ，具体见上
# useclos='c,d,f'或者'c:f'      只显示cdf列
# dtype                    表格的文本类型，可用字典传入修改
print('读取成功')
# 指定筛选列行  --都下面三个支持列表
print(duqu['姓名'[0]])     #打印 姓名列，索引0行的数据
print(duqu.loc[0]['姓名'])     #打印 索引0行,姓名列的数据
print(duqu.iloc[0][0])     #打印 索引第0行，第0列数据
#-----------替换
print(duqu.fillna(0))     #打印 表中的空值填充为0
print(duqu.replace('cd', 'cf'))     #打印 表中的cd替换为cf



```
