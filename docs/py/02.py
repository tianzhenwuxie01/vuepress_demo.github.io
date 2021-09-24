
#!/usr/bin/env python
# -*- coding: UTF-8 -*-
'''
生成html
同步腾讯云
'''
import os
import sys
import yaml
import subprocess
import sys
from time import sleep
import re
import shlex

# 静态更新
def run_shell(shell):
    print(shell)
    cmd = subprocess.Popen(shell, stdin=subprocess.PIPE, stderr=sys.stderr, close_fds=True,
                           stdout=sys.stdout, universal_newlines=True, shell=True, bufsize=1)
    
    a=cmd.stdin.write('YES')
    cmd.communicate()
    return cmd.returncode

pd = input('是否同步腾讯静态：\n1同步：\n')
#tcb login --apiKeyId AKIDFJ7fwwf8KErEKAj01lEQM0NTJs99sLXS --apiKey f3A0Zrsb3E9n9E3bsseAPM2ScV7SWJo8
if pd == '1':
    ## 删除
    daohang_envId = 'hello-cloudbase-0g9atdj20fc4e1e8'
    command = 'tcb hosting delete -e '+daohang_envId
    args=shlex.split(command)
    # a=p.stdin.write('YES')
    print(run_shell(args))

    ##上传
    wj_list = []
    wjj_list = []
    def bianli(q):
        bianli = os.scandir(q)
        for bianli1 in bianli:
            if bianli1.is_file(): # 是文件则写入列表
                wj_list.append(bianli1.path)
            else:
                wjj_list.append(bianli1.path)
    bianli(r'E:\360\tianzhenwuxie01\vuepress\docs\.vuepress\dist')

    #同步文件夹
    print('\n开始同步文件夹.......\n')
    for index,wjj01 in enumerate(wjj_list):
        match = re.search(r"(E:\\360\\tianzhenwuxie01\\vuepress\\docs\\.vuepress\\dist\\)(.+)", wjj01)
        if match:
            if ('.vscode' in wjj01 )or ('.git' in wjj01) :
                print(wjj01 + '不用同步')
            else:
                command = ' tcb hosting deploy '+wjj01+' '+match.group(2).replace('\\', '/')+' -e '+daohang_envId
                # print(command)
                # args2=shlex.split(command)
                print('共{}个，现在进行{}个，剩余{}'.format(str(len(wjj_list)),str(index),str(len(wjj_list)-index)))
                print(run_shell(command))
                # print(command)
        else:
            print(wjj01 + '匹配失败')

    print('\n开始同步文件.......\n')
    for index,wj01 in enumerate(wj_list):
        match = re.search(r"(E:\\360\\tianzhenwuxie01\\vuepress\\docs\\.vuepress\\dist\\)(.+)", wj01)
        if match:
            if ('CNAME' in wj01 )or ('LICENSE' in wj01)or ('README.md' in wj01) :
                print(wj01 + '不用同步')
            else:
                command = ' tcb hosting deploy '+wj01+' '+match.group(2).replace('\\', '/')+' -e '+daohang_envId
                # print(command)
                # args2=shlex.split(command)
                print('共{}个，现在进行{}个，剩余{}'.format(str(len(wj_list)),str(index),str(len(wj_list)-index)))
                print(run_shell(command))
                # print(command)
        else:
            print(wj01 + '匹配失败')
