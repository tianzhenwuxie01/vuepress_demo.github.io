

### 安装

```
cd
del .\scoop -Force
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
iwr -useb get.scoop.sh | iex
```

[以上来源 issue85](https://github.com/neolee/pilot/issues/89)

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200802142536.png)

### Scoop 把软件安装在哪儿？

`C:\Users\26638\scoop\apps\`

- scoop 需要借助 git,先安装个 git 吧`scoop install git`

### 基础使用方法

- `scoop search <app>` - 搜索软件
- `scoop install <app>` - 安装软件
- `scoop info <app>` - 查看软件详细信息
- `scoop list` - 查看已安装软件
- `scoop uninstall <app>` -卸载软软件`-p`删除配置文件。
- `scoop update` - 更新 scoop 本体和软件列表
- `scoop update <app>` - 更新指定软件
- `scoop help` - 查看命令列表
- `scoop list` - 查看已安装软件列表
  **清理安装包缓存**
- `scoop cache show` - 显示安装包缓存
- `scoop cache rm <app>` - 删除指定应用的安装包缓存
- `scoop cache rm *` - 删除所有的安装包缓存
  **删除旧版本软件**
- `scoop cleanup <app>` - 删除指定软件的旧版本
- `scoop cleanup *` - 删除所有软件的旧版本
  **全局安装**
- `sudo scoop install -g <app>` -全局安装软件
- `sudo scoop update -g *` -更新所有软件（且包含全局软件）
- `sudo scoop uninstall -g <app>` -卸载全局软件
- `sudo scoop uninstall -gp <app>` -卸载全局软件（并删除配置文件）
- `sudo scoop cleanup -g *` -删除所有全局软件的旧版本
- `sudo scoop cleanup -gk *` -删除所有全局软件的旧版本（并清除安装包包缓存）

### 添加 bucket(水桶)

所有的包管理器都会有相应的软件仓库 ，而 bucket 就是 Scoop 中的软件仓库。细心的你可能会发现 scoop 翻译为中文是 “舀”，而 bucket 是 “水桶”，所以安装软件可以理解为从水桶里舀水，似乎很形象的说。

Scoop 默认软件仓库（main bucket）软件数量是有限的，但是可以进行额外的添加。通过 `scoop bucket known` 命令可以查看官方认可的 `bucket`：

```
main
extras
versions
nightlies
nirsoft
php
nerd-fonts
nonportable
java
games
jetbrains
```

**安装 extras 库**

`scoop bucket add extras`

extras 涵盖了大部分因为种种原因不能被收录进主仓库的常用软件，这个是强推荐添加的。

**添加第三方 bucket**

`scoop bucket add <bucketname> https://github.com/xxx/xxx`

### 参数

``` yaml
alias       Manage scoop aliases # 管理指令的替身
bucket      Manage Scoop buckets # 管理软件仓库
cache       Show or clear the download cache # 查看与管理缓存
checkup     Check for potential problems # 做个体检
cleanup     Cleanup apps by removing old versions # 清理缓存与旧版本软件包
config      Get or set configuration values # 配置Scoop
create      Create a custom app manifest # 创建自定义软件包
depends     List dependencies for an app # 查看依赖
export      Exports (an importable) list of installed apps # 导出软件包列表
help        Show help for a command # 显示帮助指令
hold        Hold an app to disable updates # 禁止软件包更新
home        Opens the app homepage # 打开软件包主页
info        Display information about an app # 显示软件包信息
install     Install apps # 安装软件包的指令
list        List installed apps # 列出所有已安装软件包
prefix      Returns the path to the specified app # 查看软件包路径
reset       Reset an app to resolve conflicts # 恢复软件包版本
search      Search available apps # 搜索软件包
status      Show status and check for new app versions # 查看软件包更新状态
unhold      Unhold an app to enable updates # 启动软件包更新
uninstall   Uninstall an app # 卸载软件包的指令
update      Update apps, or Scoop itself # 更新软件包
virustotal  Look for app hash on virustotal.com # 查看哈希值
which       Locate a shim/executable (similar to 'which' on Linux) # 查看可执行程序路径
```

### 常见问题

见上面 87 issue 吧

[参考链接](https://zhuanlan.zhihu.com/p/100714842)
[参考链接](https://p3terx.com/archives/scoop-the-best-windows-package-manager.html)
[参考链接](https://github.com/neolee/pilot/issues/89)
