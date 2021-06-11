## chfs-HTTP协议的文件共享服务器

Column: Jan 15, 2021 5:59 PM
分类: 科学发现
时间: Jan 15, 2021
时间中文: 2021-02-15
标签: linux, vps, win, 视频

chfs是一个免费的、HTTP协议的文件共享服务器，使用浏览器可以快速访问

官方下载地址：[http://iscute.cn/chfs](http://iscute.cn/chfs)

### 特点：

- 单个文件，核心功能无需其他文件
- 跨平台运行，支持主流平台：Windows，Linux和Mac
- 界面简洁，简单易用
- 支持扫码下载和手机端访问，手机与电脑之间共享文件非常方便
- 支持账户权限控制和地址过滤
- 支持快速分享文字片段
- 支持webdav协议

## 基本用法

```bash
usage: chfs.exe []

Flags:
  --help              Show context-sensitive help (also try --help-long and
                      --help-man).
  --path=DIRECTORIES  Directories where store shared files, separated by '|'.
  --port=PORT         HTTP listening port(Default is 80).
  --allow=LIST        Allowed IPv4 addresses(Allow any address by default).
                      
                      White list mode: "listitem1[,listitem2,...]" e.g.
                      "192.168.1.2-192.168.1.10,192.169.1.222" allows this 10
                      addresses.
                      
                      Black list mode: "not(listitem1[,listitem2,...])" e.g.
                      "not(192.168.1.2-192.168.1.10,192.169.1.222)" bans this 10
                      addresses!
  --rule=LIST         Access rules(anybody can access any thing by default).
                      
                      List defines like:"USER:PWD:MASK[:DIR:MASK...][|...]":
                      
                        1,USER and PWD is account name and password
                        2,MASK:''=NO present,'r'=read,'w'=write,'d'=delete
                        3,r=view+download,w=r+upload+create+rename,d=w+delete
                        4,DIR is directory name, allows wildcard('*' & '?')
                        5,The 3rd field is access mask of shared root directory
                        6,The optional fields is pairs of sub-directory and mask
                        7,The optional sub-directory's mask overwrite parent's
                        8,You should avoid '|' ':' and white space(exclude DIR)
                      
                      For instance: "::|root:123456:rw" bans guest, and defines
                      a account 'root' can do anything
  --log=DIRECTORY     Log directory. Empty value will disable log.
  --file=FILE         A configuration file which overwrites & enhence the
                      settings.
  --version           Show application version.
```

### 示例

```bash
//都使用默认参数，共享目录为程序运行目录，监听端口号为80
chfs

//共享目录为D盘，监听端口号为8080
chfs --path="d:/" --port=8080

//共享目录为"d:\\projects"和"e:\\nsis"，监听端口号为80
chfs --path="d:\\projects|e:\\nsis"

//白名单模式，允许192.168.1.2-192.168.1.100以及192.168.1.200进行访问
chfs --allow="192.168.1.2-192.168.1.100,192.168.1.200"

//黑名单模式，禁止192.168.1.2-192.168.1.100以及192.168.1.200进行访问
chfs --allow="not(192.168.1.2-192.168.1.100,192.168.1.200)"

//匿名用户具有只读权限（默认情况下匿名用户具有读写权限）
//账户ceshizu，密码为ceshizu123，对根目录的权限为只读，但对test目录具有读写权限
//账户yanfazu，密码为yanfazu123，对根目录的权限为只读，但对yanfa目录具有读写权限
chfs --rule="::r|ceshizu:ceshizu123:r:test:rw|yanfazu:yanfazu123:r:yanfa:rw"

//匿名用户什么权限都没有（默认情况下匿名用户具有读写权限）
//账户admin，密码为admin123，具有读写权限
//账户zhangsan，密码为zhangsan123，对根目录的权限为不可读写，但对zhangsanfiles目录具有读写权限
chfs --rule="::|admin:admin123:rw|zhangsan:zhangsan123::zhangsanfiles:rw"

//通过配置文件进行配置，该文件可以不存在，待以后需要更改配置时使用
chfs --file="d:\chfs\chfs.ini"
```

另外，有几个功能需要通过配置文件中进行配置，其中主要的配置项有：

```
1, html.title： 自定义网页标题
2, html.notice: 自定义网页顶部的公告板。可以是文字，也可以是HTML标签，此时，需要适用一对``(反单引号，通过键盘左上角的ESC键下面的那个键输出)来包住所有HTML标签
3, ssl.cert和ssl.key: 用来配置SSL，启用HTTPS
4, folder.leaf.download: 仅最后一个目录可以打包下载
5, session.timeout: 会话的时长，单位是分钟
```

### 也可以用ini配置文件启动

```
port=989
path=/root/chfs/dav
rule=::|admin:123456:d
log=/root/chfs/logs
html.title=diannaobos
html.notice=diannaobos
image.preview=true
ssl.cert=
ssl.key=
allow=
```

## linux可以用Supervisor管理

```bash
[program:chfs]
command=/www/wwwroot/h5ai.0514.ink/aria2/chfs --port=25501
directory=/www/wwwroot/h5ai.0514.ink/aria2/
autorestart=true
startsecs=3
startretries=3
stdout_logfile=/www/server/panel/plugin/supervisor/log/chfs.out.log
stderr_logfile=/www/server/panel/plugin/supervisor/log/chfs.err.log
stdout_logfile_maxbytes=2MB
stderr_logfile_maxbytes=2MB
user=root
priority=999
numprocs=1
process_name=%(program_name)s_%(process_num)02d
```