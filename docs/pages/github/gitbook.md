

### gitbook 删除

> 找到 C:\Users\{User}\.gitbook 找到并删除此文件夹
> 删除后执行命令

``` bash
# npm uninstall -g gitbook
# npm uninstall -g gitbook-cli
--- 清除npm缓存
# npm cache clean --force
```

### gitbook 安装

#### node.js 安装

win：[node.js](https://nodejs.org/zh-cn/download/ "node.js")

linux：

``` bash
yum install epel-release -y
yum install nodejs -y

```

#### git 安装

``` bash
yum -y install git
yum remove git

```

#### gitbook 安装

``` bash
# npm install gitbook -g
# npm install gitbook-cli -g
--- 如果没有安装gitbook,此命令会默认同时安装 GitBook
# gitbook -V
--- 列出本地所有的gitbook版本
# gitbook ls

```

### 常用命令

- `gitbook -V` 查看版本号
- `gitbook ls` 列出本地所有的 gitbook 版本
- `gitbook init` 初始化
- `gitbook install` 安装插件
- `gitbook serve` 预览
- `gitbook build` 生成
- `gitbook build --gitbook=2.6.7` 生成时指定 gitbook 的版本, 本地没有会先下载
- `gitbook uninstall 2.6.7` 卸载指定版本号的 gitbook
- `gitbook fetch [version]` 获取[版本]下载并安装<版本>
- `gitbook --help` 显示 gitbook-cli 帮助文档
- `gitbook help` 列出 gitbook 所有的命令
- `gitbook ls-remote` 列出 NPM 上的可用版本：

### 版本

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200802142402.png)

不同用太新的 nodejs 会报错安装了。例如 12.18 的就不行

### 错误记录

`C:\Users\Administrator\.gitbook\versions\3.2.3\lib\output\website\copyPluginAssets.js`

原来是一个 Bug（Vesion：3.2.3）,版本特有 bug。issues 中曾有人提说过

解决方法

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200421104941.png)

`<user>\.gitbook\versions\3.2.3\lib\output\website\copyPluginAssets.js`

此目录下找打`copyPluginAssets.js`文件，打开 112 行

``` yaml
confirm: true
#上面参数改为false
```
