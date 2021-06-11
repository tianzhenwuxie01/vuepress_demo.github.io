import os
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
                text_list = f.read()    #读取内容是个列表
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

def mulus(q1,q2):
    mulu = '''                    {{
                        title: '{0}',   // 必要的
                        collapsable: true, // 可选的, 默认值是 true,
                        sidebarDepth: 2,    // 可选的, 默认值是 1
                        children: [
{1}
                        ]
                    }},
    '''.format(q1,q2)
    return(mulu)


path = r'E:\360\tianzhenwuxie01\vuepress\docs\pages'
bianli = os.scandir(path)

ziwfjm = {} # 分类子文件字典
for bianli1 in bianli:
    bianli1.name # 文件名称
    bianli1.path # 文件路径
    # bianli1.is_dir() # 需要加括号,是不是文件夹，是：true 不是：false
    # bianli1.is_file() # 是不是文件，是：true 不是：false
    if bianli1.is_dir() : # 如果是文件夹则打印文件夹名称
        ziwfjm[bianli1.name] = bianli1.path


luj = list(ziwfjm.values())  # 取出文件夹路径列表
name_new = list(ziwfjm)  # 取出文件夹名称列表
luj_new = []  # 取出所有md文件路径列表
for luj1 in luj:
    bianli = os.scandir(luj1)
    linui = [] # 临时列表
    for bianli1 in bianli:
        if bianli1.is_file() : # 如果是文件夹则打印文件夹名称
            linui.append(bianli1.path)
    luj_new.append(linui)

ziwfjm_new = dict(zip(name_new,luj_new))  # 分类文件夹和其中的md文件路径字典


linui4 = []
for key,value in ziwfjm_new.items():
    linui2 = []
    for value1 in value:
        md_name = '/'+value1.split('\\')[-3]+'/'+value1.split('\\')[-2]+'/'+value1.split('\\')[-1]  # 带路径md文件名
        md_name2 = md_name.split('/')[-1]  # md文件名不含后缀
        md_name2 = md_name2.split('.')[0]  # md文件名不含后缀
        linui2.append("                            ['"+md_name+"'"+", '"+md_name2+"'],")
    # list转换为str 用换行隔开
    linui3 = '\n'.join(linui2)[:-1]
    linui4.append(mulus(key,linui3))
txt = '\n'.join(linui4)[:-1]
# print(txt)

a = wfjm(r'E:\360\tianzhenwuxie01\vuepress\docs\py\config1.txt')
a2 = wfjm(r'E:\360\tianzhenwuxie01\vuepress\docs\py\config2.txt')
a3 = wfjm(r'E:\360\tianzhenwuxie01\vuepress\docs\py\config3.txt')
a3.q2 = 'w+'
a3.q3 = a.duqu()+txt+a2.duqu()
a3.xieru()




