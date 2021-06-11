

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
#-----------读取csv,txt-----------------------读取excel-----------------------替换
print(duqu.fillna(0))     #打印 表中的空值填充为0
print(duqu.replace('cd', 'cf'))     #打印 表中的cd替换为cf



```
