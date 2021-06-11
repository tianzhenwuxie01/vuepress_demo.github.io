

### git 设置

[全部命令](https://github.com/xjh22222228/git-manual)

#### [git 下载地址](https://git-scm.com/downloads "git下载地址")

#### Debian/Ubuntu

``` bash
$ apt-get install libcurl4-gnutls-dev libexpat1-dev gettext \
  libz-dev libssl-dev

$ apt-get install git

$ git --version
git version xxxx(上面git --v是查看版本)
```

<!--more-->

#### Centos/RedHat

``` bash
$ yum install curl-devel expat-devel gettext-devel \
  openssl-devel zlib-devel

$ yum -y install git-core

$ git --version
git version xxx(上面git --v是查看版本)
```

#### 配置 git

配置个人的用户名称和电子邮件地址

``` bash
# 查看全局配置列表
git config --global -l
# 查看局部配置列表
git config --local -l

# 查看已设置的全局用户名/邮箱
git config --global --get user.name
git config --global --get user.email

# 设置全局用户名/邮箱
git config --global user.name "xiejiahe"
git config --global user.email "example@example.com"

# 设置本地当前工作区仓库用户名/邮箱
git config --local user.name "xiejiahe"
git config --local user.email "example@example.com"

# 删除配置
git config --unset --global user.name
git config --unset --global user.email

# 将默认文本编辑器设置为 emacs
git config --global core.editor emacs

# 将默认差异化分析工具设置为 vimdiff
git config --global merge.tool vimdiff

# 编辑当前仓库配置文件
git config -e  # 等价 vi .git/config

# 文件权限的变动也会视为改动, 可通过以下配置忽略文件权限变动
git config core.fileMode false
```

**命令别名配置**

``` bash
# git st 等价于 git status
git config --global alias.st status

# 如果之前添加过，需要添加 --replace-all 进行覆盖
git config --global alias.st status --replace-all

# 执行外部命令, 只要在前面加 ! 即可
git config --global alias.st '!echo hello';
# 可以利用外部命令执行一段复杂的合并代码过程，例如：
git config --global alias.mg '!git checkout develop && git pull && git merge master && git checkout -';

# 删除 st 别名
git config --global --unset alias.st
```

**配置代理**

``` bash
# 设置
git config --global https.proxy  http://127.0.0.1:1087
git config --global http.proxy  http://127.0.0.1:1087

# 查看
git config --global --get http.proxy
git config --global --get https.proxy

# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

#### 添加远程密钥

``` bash
$ ssh-keygen -t rsa -C "你的邮箱"
```

> 三个回车即可生成密钥，存在于.ssh 文件夹里

复制公钥到 github 即可

**github/gitee 里检测是否成功**
**码云**

``` bash
ssh -T git@gitee.com
```

> Hi 你的名字 You've successfully authenticated, but GITEE.COM does not provide shell access.表示连接成功

``` bash
ssh -T git@github.com
```

> Hi menglinjie! You've successfully authenticated, but GitHub does not provide shell access.表示连接成功。

#### 创建 git 项目

创建项目
`git init`  
对文件追踪
`git add`
`git add --all`
提交版本(m 提交说明)
`$ git commit -m'`
克隆

``` bash
#https 协议
git clone https://github.com/xjh22222228/git-manual.git

#SSH协议
git clone git@github.com:xjh22222228/git-manual.git

# 克隆某个分支， -b 指定分支名字
git clone -b master https://github.com/xjh22222228/git-manual.git
```

查看状态

``` bash
git status
git status -s # 以短格式给出输出
```

推送分支，就是把该分支上的所有本地提交推送到远程库
`git push origin master`
拉取远程库
`git pull`

### 常用命令

#### 新建

查看当前目录文件

``` bash
ls  #
ls -la  #显示隐藏目录
```

查看当前所在目录

``` bash
pwd
```

清除消息

``` bash
clear
```

当前目录初始化代码库（运行命令会多一个.git 的隐藏文件夹）

``` bash
git init
```

克隆仓库到本地

``` bash
git clone url
```

创建一个 01 文件

``` bash
mkdir 01
```

#### 配置

`git config --global user.name “你的昵称”` 添加昵称（全局）
`git config --global user.email "你的邮箱"` 添加邮箱（全局）
`git config --list` 查看当前配置

> 这里的昵称和邮箱无所谓，和你的 github 账号没半毛钱关系

#### 增加/删除文件

将 README 添加到暂存区

``` bash
git add README  #暂存readme文件
git add --all   #暂存全部文件
```

删除 README 文件，并将这次删除添加到暂存区

``` bash
git rm README
```

#### 提交

提交到仓库区并添加说明

``` bash
git commit -m "提交说明"
git commit [file1] [file2] ... -m [提交说明]
#提交暂存区的指定文件到仓库区
git commit --amend -m [message]
#使用一次新的commit，替代上一次提交
#如果代码没有任何新变化，则用来改写上一次commit的提交信息
```

#### 查看版本信息

查看当前仓库状态

``` bash
git status
```

显示当前分支历史

``` bash
git log

git log --stat
#显示commit历史，以及每次commit发生变更的文件（更详细）
git log -p
#贼详细
git log --oneline
#简略显示（只显示当前版本之前的版本）
git reflog
#简略显示带版本次数（显示全部版本）
```

暂存区和工作区的差异

``` bash
git diff
```

版本返回

``` bash
git reset --hard 49f1bd3(版本哈希值)
#指定哈希返回
git reset --hard HEAD^
#一个^符号往上返回一个版本，多个^返回多个版本
git reset --hard HEAD~2
#~后面跟几，就往前返回几个版本
```

#### 远程同步

添加应该远程仓库（名为 origin）

``` bash
git remote add origin git@github.c...
```

显示所有远程仓库

``` bash
git remote -v
```

显示某个远程仓库信息

``` bash
git remote show [remote]
```

取回远程仓库的变化，并与本地分支合并

``` bash
git pull [remote] [branch]
例如：git pull tda(远程分支名称) master（要合并到的本地名称）
```

上传本地指定分支到远程仓库

``` bash
git push [remote] [branch]
```

强行推送当前分支到远程仓库，即使有冲突

``` bash
git push [remote] --force
```

送所有分支到远程仓库

``` bash
git push [remote] --all
```

推送分支，就是把该分支上的所有本地提交推送到远程库

``` bash
git push origin master
```

强制推送

``` bash
git push -u origin master
```

#### 分支管理

创建 dev 分支

``` bash
git branch dev
```

切换到 dev

``` bash
git checkout dev
```

列出所有本地分支

``` bash
git branch
```

列出所有远程分支

``` bash
git branch -a
```

切换到指定分支，并更新工作区

``` bash
git checkout [branch-name]
```

合并指定分支到当前分支

``` bash
git merge [branch]
```

删除分支

``` bash
git branch -d [branch-name]
```

友情提醒，dev 分支还没有被合并，如果删除，将丢失掉修改，如果要强行删除，需要使用 git branch -D dev 命令

``` bash
git branch -D devGit
```

### 常见问题

#### vscode 无法保存需要以管理员权限保存，或者已管理员运行。

且保存的文件 git 暂存后无法取消暂存报错

> 原因权限丢失或不全
> 找到对呀文件或文件夹，右键--安全--找到对呀管理员勾选完全控制

| remuxo@simplebox.email |    remuxo     | 994453998he.. |
| :--------------------: | :-----------: | :-----------: |
|          邮箱          |    用户名     |     密码      |
| remuxo@simplebox.email | 994453998he.. |
