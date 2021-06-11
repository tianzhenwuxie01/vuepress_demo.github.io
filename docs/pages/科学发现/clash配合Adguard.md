

### 安卓 clash for Android 与 Adguard 配合去广告

#### clash for Android 的设置

- 自动路由系统流量关掉（只开启内核）
- 设置 dns（配置文件中设置）
- 打开 clash 开关

> clash for Android 的 dns 在配置文件中如下图。安卓 dns 端口设置一般要大于 1024，1024 以下的需要 root
> 这里用原 clasha 的 5450

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200506213605.png)

#### clash for Android 的设置

- 设置 - 网络 - 过滤方式 - 本地 VPN
- 设置 - 网络 - 代理 - 添加代理
  - 代理名称：自定义
  - 代理类型：Socks 5/HTTP
  - 代理主机：127.0.0.1
  - 代理端口：7891/7890
  - sock5 和 http 都可以，选任意一个端口要对应
- 设置 - DNS - 选择 DNS 服务器 - 自定义服务器
  - dns 地址填：127.0.0.1:5450（对应配置文件里端口）
- 应用管理 - Clash for Android - 把常规下的 “已开启” 关闭
- 打开首页开关即可

> 如果出现 youtube 等应用打不开，检查 Adguard 的 dns 设置

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200506214137.jpg)

### 安卓老板 ClashA 与 Adguard 共存

#### ClashA 端设置

- server mode 更改为 proxy olny
- SOCKS 5 porxy port 为 Socks5 端口
- Local DNS port 为 DNS 端口
- DNS mode 更改为 fake-ip
- 连接代理

#### Adguard 端设置

- 设置 - 网络 - 过滤方式 - 本地 VPN
- 设置 - 网络 - 代理 - 添加代理
  - 代理名称：自定义
  - 代理类型：Socks 5
  - 代理主机：127.0.0.1
  - 代理端口：ClashA 端设置的端口
  - 打开代理开关选择刚添加的代理
- 设置 - DNS - 选择 DNS 服务器 - 拉到最底下 “添加自定义 DNS 服务器”
  - 服务器名称：自定义
  - 输入 DNS 地址： 127.0.0.1:5450 （ 5450 为刚才 ClashA 端设置的 DNS 端口 ）
  - 保存并选择
- 应用管理 - ClashA - 把常规下的 “已开启” 关闭

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200506215204.jpg)

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200506215053.jpg)

### 常见问题

#### 配合 Cfa/ClashA 时打开 Instagram 等其他和 IPV6 有玄学冲突的问题

- 可以尝试打开 Adguard 设置 - 高级设置 - 低级设置的 "pref.vpn.ipv6.disable" 选项

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200720095702.jpg)
