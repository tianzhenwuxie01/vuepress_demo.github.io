

### clash 下载

GitHub 项目地址:[https://github.com/Dreamacro/clash/releases](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2FDreamacro%2Fclash%2Freleases)

> 下载适合的 Clash 二进制文件, 一般个人的 64 位电脑下载 >clash-linux-amd64.tar.gz 即可。

### 安装

下载解压`clash-linux-amd64`二进制文件,放哪无所谓

clash 配置文件目录在`root/.config/calsh`,具体文件如图

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200801214144.png)

- `config.yaml` 启动默认配置文件(必要)
- `01.yml` 自定义配置文件
- `country.mmdb` geoip 文件(必要)
- `dashboard_Razord` web 模板本地文件夹
- `providers` proxies/rules-providers 文件夹

启动`./calsh`出现类似下面则启动成功

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200801215405.png)

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200801215455.png)

### 设置系统代理

没啥好多的,设置吧 😂

### 常见问题

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200801215245.png)

- 没有`config.yaml`文件和没有`dashboard_Razord`
