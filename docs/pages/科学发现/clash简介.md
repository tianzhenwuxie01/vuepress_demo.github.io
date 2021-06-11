---
title: clash简介
date: 2020-03-22 17:25:00
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
top: true #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 奈飞客户端--安卓
categories: 科学发现
tags:
  - 科学上网
  - clash
---

[clash 相关项目连接](https://remuxo.gitee.io/2020/04/01/ke-xue-fa-xian/clash-xiang-guan-xiang-mu-git-lian-jie/)

### clash 简介

Clash 是一个使用 Go 语言编写，基于规则的跨平台代理软件核心程序。  
拥有众多分支，clash for windows，clash for Android，clashx（macos）擦，clasha（已停止维护）。。。
支持的协议： Vmess, Shadowsocks,Trojan， Snell , SOCKS5，ssr（clashr）

特性

- 可随时切换代理模式及节点
- 支持节点批量延迟测试
- 通过托管链接一键配置
- 规则命中
- 日志输出
- 远程规则调用（RULE-SET）

clash(r)下载地址:  
[https://remuxo.gitee.io](https://remuxo.gitee.io/2020/04/01/ke-xue-fa-xian/clash-xiang-guan-xiang-mu-git-lian-jie/)

### clash 配置文件案例--D 大

<details>
<summary><b style="color:#B47CFD">点击查看文件内容</b></summary>

``` yaml
# Port of HTTP(S) proxy server on the local end
port: 7890

# Port of SOCKS5 proxy server on the local end
socks-port: 7891

# Transparent proxy server port for Linux and macOS
redir-port: 7892

# HTTP(S) and SOCKS5 server on the same port
# mixed-port: 7890

# authentication of local SOCKS5/HTTP(S) server
# authentication:
#  - "user1:pass1"
#  - "user2:pass2"

# Set to true to allow connections to local-end server from
# other LAN IP addresses
allow-lan: false

# This is only applicable when `allow-lan` is `true`
# '*': bind all IP addresses
# 192.168.122.11: bind a single IPv4 address
# "[aaaa::a8aa:ff:fe09:57d8]": bind a single IPv6 address
bind-address: "*"

# Clash router working mode
# rule: rule-based packet routing
# global: all packets will be forwarded to a single endpoint
# direct: directly forward the packets to the Internet
mode: rule

# Clash by default prints logs to STDOUT
# info / warning / error / debug / silent
log-level: info

# When set to false, resolver won't translate hostnames to IPv6 addresses
ipv6: true

# RESTful web API listening address
external-controller: 127.0.0.1:9090

# A relative path to the configuration directory or an absolute path to a
# directory in which you put some static web resource. Clash core will then
# serve it at `http://{{external-controller}}/ui`.
external-ui: folder

# Secret for the RESTful API (optional)
# Authenticate by spedifying HTTP header `Authorization: Bearer ${secret}`
# ALWAYS set a secret if RESTful API is listening on 0.0.0.0
# secret: ""

# Outbound interface name
interface-name: en0

# Static hosts for DNS server and connection establishment, only works
# when `dns.enhanced-mode` is `redir-host`.
#
# Wildcard hostnames are supported (e.g. *.clash.dev, *.foo.*.example.com)
# Non-wildcard domain names has a higher priority than wildcard domain names
# e.g. foo.example.com > *.example.com > .example.com
# P.S. +.foo.com equals to .foo.com and foo.com
hosts:
  # '*.clash.dev': 127.0.0.1
  # '.dev': 127.0.0.1
  # 'alpha.clash.dev': '::1'

# DNS server settings
# This section is optional. When not present, DNS server will be disabled.
dns:
  enable: false
  listen: 0.0.0.0:53
  # ipv6: false # when false, response to AAAA questions will be empty

  # These nameservers are used to resolve the DNS nameserver hostnames below.
  # Specify IP addresses only
  default-nameserver:
    - 114.114.114.114
    - 8.8.8.8
  enhanced-mode: redir-host # or fake-ip
  fake-ip-range: 198.18.0.1/16 # Fake IP addresses pool CIDR

  # Hostnames in this list will not be resolved with fake IPs
  # i.e. questions to these domain names will always be answered with their
  # real IP addresses
  # fake-ip-filter:
  #   - '*.lan'
  #   - localhost.ptlogin2.qq.com

  # Supports UDP, TCP, DoT, DoH. You can specify the port to connect to.
  # All DNS questions are sent directly to the nameserver, without proxies
  # involved. Clash answers the DNS question with the first result gathered.
  nameserver:
    - 114.114.114.114 # default value
    - 8.8.8.8 # default value
    - tls://dns.rubyfish.cn:853 # DNS over TLS
    - https://1.1.1.1/dns-query # DNS over HTTPS

  # When `fallback` is present, the DNS server will send concurrent requests
  # to the servers in this section along with servers in `nameservers`.
  # The answers from fallback servers are used when the GEOIP country
  # is not `CN`.
  # fallback:
  #   - tcp://1.1.1.1

  # If IP addresses resolved with servers in `nameservers` are in the specified
  # subnets below, they are considered invalid and results from `fallback`
  # servers are used instead.
  #
  # IP address resolved with servers in `nameserver` is used when
  # `fallback-filter.geoip` is true and when GEOIP of the IP address is `CN`.
  #
  # If `fallback-filter.geoip` is false, results from `fallback` nameservers
  # are always used, and answers from `nameservers` are discarded.
  #
  # This is a countermeasure against DNS pollution attacks.
  fallback-filter:
    geoip: true
    ipcidr:
      # - 240.0.0.0/4

proxies:
  # Shadowsocks
  # The supported ciphers (encryption methods):
  #   aes-128-gcm aes-192-gcm aes-256-gcm
  #   aes-128-cfb aes-192-cfb aes-256-cfb
  #   aes-128-ctr aes-192-ctr aes-256-ctr
  #   rc4-md5 chacha20-ietf xchacha20
  #   chacha20-ietf-poly1305 xchacha20-ietf-poly1305
  - name: "ss1"
    type: ss
    server: server
    port: 443
    cipher: chacha20-ietf-poly1305
    password: "password"
    # udp: true

  - name: "ss2"
    type: ss
    server: server
    port: 443
    cipher: chacha20-ietf-poly1305
    password: "password"
    plugin: obfs
    plugin-opts:
      mode: tls # or http
      # host: bing.com

  - name: "ss3"
    type: ss
    server: server
    port: 443
    cipher: chacha20-ietf-poly1305
    password: "password"
    plugin: v2ray-plugin
    plugin-opts:
      mode: websocket # no QUIC now
      # tls: true # wss
      # skip-cert-verify: true
      # host: bing.com
      # path: "/"
      # mux: true
      # headers:
      #   custom: value

  # vmess
  # cipher support auto/aes-128-gcm/chacha20-poly1305/none
  - name: "vmess"
    type: vmess
    server: server
    port: 443
    uuid: uuid
    alterId: 32
    cipher: auto
    # udp: true
    # tls: true
    # skip-cert-verify: true
    # servername: example.com # priority over wss host
    # network: ws
    # ws-path: /path
    # ws-headers:
    #   Host: v2ray.com

  - name: "vmess-http"
    type: vmess
    server: server
    port: 443
    uuid: uuid
    alterId: 32
    cipher: auto
    # udp: true
    # network: http
    # http-opts:
    #   # method: "GET"
    #   # path:
    #   #   - '/'
    #   #   - '/video'
    #   # headers:
    #   #   Connection:
    #   #     - keep-alive

  # socks5
  - name: "socks"
    type: socks5
    server: server
    port: 443
    # username: username
    # password: password
    # tls: true
    # skip-cert-verify: true
    # udp: true

  # http
  - name: "http"
    type: http
    server: server
    port: 443
    # username: username
    # password: password
    # tls: true # https
    # skip-cert-verify: true

  # Snell
  # Beware that there's currently no UDP support yet
  - name: "snell"
    type: snell
    server: server
    port: 44046
    psk: yourpsk
    # obfs-opts:
    # mode: http # or tls
    # host: bing.com

  # Trojan
  - name: "trojan"
    type: trojan
    server: server
    port: 443
    password: yourpsk
    # udp: true
    # sni: example.com # aka server name
    # alpn:
    #   - h2
    #   - http/1.1
    # skip-cert-verify: true

proxy-groups:
  # relay chains the proxies. proxies shall not contain a relay. No UDP support.
  # Traffic: clash <-> http <-> vmess <-> ss1 <-> ss2 <-> Internet
  - name: "relay"
    type: relay
    proxies:
      - http
      - vmess
      - ss1
      - ss2

  # url-test select which proxy will be used by benchmarking speed to a URL.
  - name: "auto"
    type: url-test
    proxies:
      - ss1
      - ss2
      - vmess1
    # tolerance: 150
    url: "http://www.gstatic.com/generate_204"
    interval: 300

  # fallback select an available policy by priority. The availability is tested by accessing an URL, just like an auto url-test group.
  - name: "fallback-auto"
    type: fallback
    proxies:
      - ss1
      - ss2
      - vmess1
    url: "http://www.gstatic.com/generate_204"
    interval: 300

  # load-balance: The request of the same eTLD will be dial on the same proxy.
  - name: "load-balance"
    type: load-balance
    proxies:
      - ss1
      - ss2
      - vmess1
    url: "http://www.gstatic.com/generate_204"
    interval: 300

  # select is used for selecting proxy or proxy group
  # you can use RESTful API to switch proxy, is recommended for use in GUI.
  - name: Proxy
    type: select
    proxies:
      - ss1
      - ss2
      - vmess1
      - auto

  - name: UseProvider
    type: select
    use:
      - provider1
    proxies:
      - Proxy
      - DIRECT

proxy-providers:
  provider1:
    type: http
    url: "url"
    interval: 3600
    path: ./provider1.yaml
    health-check:
      enable: true
      interval: 600
      url: http://www.gstatic.com/generate_204
  test:
    type: file
    path: /test.yaml
    health-check:
      enable: true
      interval: 36000
      url: http://www.gstatic.com/generate_204

rules:
  - DOMAIN-SUFFIX,google.com,auto
  - DOMAIN-KEYWORD,google,auto
  - DOMAIN,google.com,auto
  - DOMAIN-SUFFIX,ad.com,REJECT
  - SRC-IP-CIDR,192.168.1.201/32,DIRECT
  # optional param "no-resolve" for IP rules (GEOIP, IP-CIDR, IP-CIDR6)
  - IP-CIDR,127.0.0.0/8,DIRECT
  - GEOIP,CN,DIRECT
  - DST-PORT,80,DIRECT
  - SRC-PORT,7777,DIRECT
  - RULE-SET,apple,REJECT # Premium only
  - MATCH,auto
```

</details>

### clash 规则参数

- DOMAIN：域名匹配
- DOMAIN-SUFFIX：域名后缀匹配
- DOMAIN-KEYWORD：域名关键字匹配
- IP-CIDR：IP 段匹配
- IP-CIDR6：IP6 段匹配
- SRC-IP-CIDR：源 IP 段匹配
- GEOIP：GEOIP 数据库（国家代码）匹配
- DST-PORT：目标端口匹配
- SRC-PORT：源端口匹配
- MATCH：全匹配（一般放在最后）
- RULE-SET: Rule Provider

<details>
<summary><b style="color:#B47CFD">详细参数解释</b></summary>

``` yaml
DOMAIN：DOMAIN,www.google.com,policy仅www.google.com前往的路线policy。
DOMAIN-SUFFIX：将DOMAIN-KEYWORD,youtube.com,policy任何youtube.com以www.youtube.com或结尾的FQDN路由foo.bar.youtube.com到policy。这就像通配符一样工作+。
DOMAIN-KEYWORD：DOMAIN-KEYWORD,google,policy将包含google例如www.google.com或的任何FQDN路由googleapis.com到policy。
GEOIP：将GEOIP,CN,policy任何请求路由到中国IP地址policy。
IP-CIDR：将IP-CIDR,127.0.0.0/8,DIRECT所有数据包路由127.0.0.0/8到该DIRECT策略。
IP-CIDR6：将IP-CIDR6,[2620:0:2d0:200::7/32],policy所有数据包路由2620:0:2d0:200::7/32到policy。
SRC-IP-CIDR：将SRC-IP-CIDR,192.168.1.201/32,DIRECT所有数据包从 路由192.168.1.201/32到该DIRECT策略。
SRC-PORT：将来自端口80的SRC-PORT,80,policy所有数据包路由到。policy
DST-PORT：将DST-PORT,80,policy所有数据包路由到端口80 policy。
MATCH：MATCH,policy将其余数据包路由到policy。此规则是必需的。
还有两个附加的特殊政策：

DIRECT：直接连接到目标，无需任何代理
REJECT：数据包的黑洞。冲突不会处理此策略的任何I / O。
策略可以是DIRECT，REJECT代理组或代理服务器。

DOMAIN-SUFFIX表示增加域名，比如：ceshi.xyz，匹配整个ceshi.xyz网站
KEYWORD表示增加关键字，比如ceshi，则可以匹配网址单词包括有“ceshi”的网址，比如aaceshi.xyz,ceshi.com,aceshib.com/help等。
IP–CIDR表示指定ip： 比如：13.105.218.23/32，表示匹配整个ip
#Rule Provider
  - RULE-SET,🎫 全球直连_6475375759347264633_domain,🎫 全球直连
```

</details>

> [网络和 IP 地址计算器](https://tool.chinaz.com/tools/subnetmask) >[参考博客](<https://hongwan.xyz/2019/11/28/clash%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B(%E6%90%AD%E9%85%8DProxy%20SwitchyOmega)/>) >[D 大 wiki](https://github.com/Dreamacro/clash/wiki/configuration) >[clash 文档-d 大钦定](https://lancellc.gitbook.io/clash/clash-config-file/script)

#### 工作模式

Clash 共有三种工作模式：

- 全局（Global）：所有请求直接发往代理服务器
- 规则（Rule）：所有请求根据配置文件规则进行分流
- 直连（Direct）：所有请求直接发往目的地

### cfw 配置文件

#### config.yaml

- 位置：`Home Directory/config.yaml`

> 这是 Clash 的启动文件，位于 Home Directory 中，如果此文件有错，则 Clash 核心将无法启动

另外，此文件除了支持 Clash 全部字段写法外，还额外支持 4 个 CFW 特定的字段：

- cfw-latency-timeout：延迟测试超时时间（毫秒），默认 3000
- cfw-latency-url：延迟测试 URL，默认[http://www.gstatic.com/generate_204](http://www.gstatic.com/generate_204)
- cfw-bypass：系统代理绕过域名或地址，参考 绕过系统代理
- cfw-conn-break-strategy: 切换节点后或切换配置文件后打断连接，参考 打断连接
- cfw-profiles-path: 自定义 profiles 目录路径 (beta), 参考 自定义配置目录

**我的 config.yaml/cfw-settings**

> (cfw 继 0.11.0 正式版后取消`config.yaml`文件中`cfw-xxx`参数支持,改为`cfw-settings`控制)
> `cfw-settings`位置: `C:\Users\26638\.config\clash`

<details>
<summary><b style="color:#B47CFD">config.yaml(0.11.0以前)</b></summary>

``` yaml
#port: 7890
#socks-port: 7891
mixed-port: 7890
redir-port: 7892
allow-lan: false
mode: rule
log-level: info
external-controller: "127.0.0.1:9090"
# RESTful API 的口令 (可选)
secret: ""

# 您可以将静态网页资源（如 clash-dashboard）放置在一个目录中，clash 将会服务于 `RESTful API/ui`
# 参数应填写配置目录的相对路径或绝对路径。
external-ui: dashboard_Razord

# 自定义图标
cfw-tray-icon:
  default: E:\360\Clash for Windows\logo_64.png # 默认图标
  system-proxy-on: E:\360\Clash for Windows\logo_64.png

# 自定义字体
# 0.9.3版本更新后，支持自定义客户端字体
#cfw-font-family: "DeVinne Txt BT"
cfw-font-family: "Fira Code"

# 自定义节点排序
# 0.9.10版本更新后，支持自定义节点排序
# default：按配置文件定义节点顺序----latency：按节点延迟升序排列----alphabet：按节点名称字母表排列
cfw-proxies-order: default

# 混合配置（mixin）
# 0.9.5版本更新后，支持向所有配置文件中注入公共属性设置
cfw-profile-mixin:
  dns:
    enable: true
    enhanced-mode: fake-ip
    listen: 0.0.0.0:53
    fake-ip-filter:
      - "*.lan"
      - localhost.ptlogin2.qq.com
      - dns.msftncsi.com
      - www.msftncsi.com
      - www.msftconnecttest.com
    nameserver:
      - 223.5.5.5
      - 114.114.114.114
    fallback:
      - 8.8.8.8
      - 1.1.1.1
      - tls://1.0.0.1:853
  experimental:
    interface-name: WLAN

# 延迟测试超时时间（毫秒），默认3000
# 延迟测试URL
cfw-latency-timeout: 3000 # seconds
cfw-latency-url: http://www.gstatic.com/generate_204

# 打断连接
# proxy    none：默认值，不进行打断----chain：打断所有chains中包含此策略组的连接----all：打断所有连接
# profile    true：切换配置前先打断所有连接----false：不打断
# mode    true：切换代理模式（Direct/Rule/Global）时断开所有连接----false：不打断
cfw-conn-break-strategy:
  proxy: all
  profile: true
  mode: true

# 自定义配置目录
# 0.8.5版本后，增加cfw-profiles-path字段用于自定义profiles目录路径（beta）
# cfw-profiles-path: 'C:\Users\Administrator\.config\clash\profiles'
# 绕过系统代理
# System proxy will ignore these domains(or ipnet)
cfw-bypass:
  - localhost
  - 127.*
  - 10.*
  - 172.16.*
  - 172.17.*
  - 172.18.*
  - 172.19.*
  - 172.20.*
  - 172.21.*
  - 172.22.*
  - 172.23.*
  - 172.24.*
  - 172.25.*
  - 172.26.*
  - 172.27.*
  - 172.28.*
  - 172.29.*
  - 172.30.*
  - 172.31.*
  - 192.168.*
  - "*.qq.com"
  - <local>

Proxy:
  - name: Shadowsocks
    type: socks5
    server: 127.0.0.1
    port: 1080
Proxy Group:
  - name: Proxy
    type: select
    proxies:
      - Shadowsocks
Rule:
  - "MATCH,DIRECT"
# 启动其他应用
# 版本0.6.1更新后，加入启动其他第三方应用的能力。可以在CFW启动后自动启动其他软件
# cfw-child-process:
#   - command: bark-helper-go.exe  # 程序名称
#     args:
#       - "-t" # 运行参数1
#       - "abcdefghijk" # 运行参数2
#     options:
#       cwd: C:\bark-helper # 子进程工作目录
```

</details>

<details>
<summary><b style="color:#B47CFD">cfw-settings</b></summary>

``` yaml
mixinText: >-
  mixin:
    dns:
      enable: true
      ipv6: false 
      enhanced-mode: redir-host  # or fake-ip
      listen: 0.0.0.0:53
      #default-nameserver: # 用来解析下面dotdoh的ip地址,仅支持ip类型
        #- 114.114.114.114
        #- 8.8.8.8
      #fake-ip-range: 198.18.0.1/16 # Fake IP 伪IP地址池
      #fake-ip-filter:  #fakeip白名单
        #- '*.lan'
        #- localhost.ptlogin2.qq.com
        #- 'dns.msftncsi.com'
        #- 'www.msftncsi.com'
        #- 'www.msftconnecttest.com'
      nameserver:
        - 223.5.5.5
        - 119.29.29.29
        - 114.114.114.114
      fallback:
        - 8.8.8.8
        - 1.1.1.1
        - tls://1.0.0.1:853
      fallback-filter:
        geoip: true                  # 如果为true，当geoip为cn是发我往nameserver否则fallback
        ipcidr:                      # 这些子网中的P将被视为已污染，当nameserver结果与这些IP相匹配时，冲突将使用fallback
          - 240.0.0.0/4
    hosts:
       '*.clash.dev': 127.0.0.1
       '*.360.cn': 127.0.0.1
mixinType: 0
connProxy: 2
connProfile: true
connMode: true
iconDefault: E:\360\Clash for Windows\logo_64.ico
iconSystemProxy: E:\360\Clash for Windows\logo_64.ico
fontFamily: Fira Code
systemTheme: false
bypassText: |-
  bypass:
    - localhost
    - 127.*
    - 10.*
    - 172.16.*
    - 172.17.*
    - 172.18.*
    - 172.19.*
    - 172.20.*
    - 172.21.*
    - 172.22.*
    - 172.23.*
    - 172.24.*
    - 172.25.*
    - 172.26.*
    - 172.27.*
    - 172.28.*
    - 172.29.*
    - 172.30.*
    - 172.31.*
    - 192.168.*
    - "*.qq.com"
    - <local>
theme: 1
proxyOrder: 0
interfaceName: WLAN
headersText: |
  headers:
showNotifications: true
```

</details>

#### Profiles/xxxx.yaml

- 位置 `Home Directory/profiles/xxxx.yaml`
- `Profiles`文件夹下文件均由用户导入，CFW 统一生成的，一般命名为时间戳
- 用户文件可以不完整，开启过程中用户文件中`Proxy/Proxy Group/Rule/dns`字段会被替换到核心文件中
- cfw0.11.0 正式版后 core 的逻辑似乎变了` log-level: info``mode: rule `会跟随`profile`设置的,不在跟随之前的`config.yaml`

> 步骤 1 完成后，Clash 会按照 config.yaml 设置启动
> 步骤 2 完成后，用户配置文件里的 Proxy/Proxy Group/Rule/dns 这几个字段的内容会被替换到 Clash 里面，除了上面值几个字段，其他的内容均不会替换（这就是 Profiles 里配置文件可以不完整的原因）

#### cfw 配置 tap 网卡配置

0.11.0 以后 tap 参数迁移至`cfw-settings`具体写法参上标题 config.yaml 内

- core-1.0 正式版之后取消`experimental`参数,`interface-name`参数向前缩进一位
- [具体见 D 大 1.0 更新日志](https://github.com/Dreamacro/clash/wiki/Breaking-Changes-in-1.0.0)

<details>
<summary><b style="color:#B47CFD">0.11.0之前tap网卡参数(fake-ip为例)</b></summary>

``` yaml
port: 7890
socks-port: 7891
allow-lan: true
mode: Rule
log-level: info
external-controller: 127.0.0.1:9090
Proxy: ~
Proxy Group: ~
Rule: ~
dns:
  enable: true
  enhanced-mode: fake-ip
  listen: 10.0.0.1:53 #0.9.7之前改为127.0.0.1:53
    fake-ip-filter:
      - "*.lan"
      - localhost.ptlogin2.qq.com
      - dns.msftncsi.com
      - www.msftncsi.com
      - www.msftconnecttest.com
    nameserver:
      - 223.5.5.5
      - 114.114.114.114
    fallback:
      - 8.8.8.8
      - 1.1.1.1
      - tls://1.0.0.1:853
  experimental: #可以不填,支持自带查找网卡
    interface-name: WLAN #自己的网卡名称
```

</details>

> 配置文件里`cfw-xxx`这种设置才是 CFW 的，其他都是 Clash 自己的(cfw0.11.0 后抛弃`cfw-xxx`)具体见`cfw-settings`
> 所以 dns 设置是 Clash 的，`listen`只是一个设置，表示 DNS 服务器要不要对外提供服务
> 即使去掉`listen`，dns 的设置也一样在工作,匹配规则的时候，直连的时候都需要 dns

#### clash 测试网址 204

``` yaml
www.google.com/generate_204

http://cp.cloudflare.com/generate_204

clients1.google.com/generate_204

http://www.gstatic.com/generate_204
```

### clash-core1.0 更新说明

- `Proxy,Proxy Group,Rule`不再使用。现在分别替换为`proxies,proxy-groups,rules`
- `rule-provider`不再是有效的关键字。由`rule-providers`代替。
- 对于 ss 节点（远程服务器），`obfs`并且`obfs-host`不再是有效字段。使用`plugin`和`plugin-opts`代替。
- `FINAL`在规则中不再有效。使用`MATCH`代替。
- `SOURCE-IP-CIDR`在规则中不再有效。使用`SRC-IP-CIDR`代替。
- `experimental`现在已弃用。前者`experimental.interface-name`现在`interface-name`。

### 怎么攒一个最新版 clashr 内核

1. 下载：Dreamacro 的 dev 分支
2. 安装 go 语言环境
3. cmd 到项目路径下，go build 编译一下就可以用了
   by leosam1024

### clash 常见问题

#### tap 和系统代理优先级

- **系统代理大于 tap**

tap 和系统代理同时开的时候,优先走系统代理

#### cfw 开启局域网共享失败

- 打开 Allow LAN 开关
- 鼠标悬停 cfw 会出现 ip 地址，或 cmd 输入`ipconfig`
- 手机 WiFi 设置点击手打选择代理主机填 ip，端口 7890（http）

> 开启失败原因，检查设置--网络与英特尔--状态--更改连接属性--公用专用网络
> 如果切换无用,控制面板--系统安全--防火墙--允许应用通过防火墙,里面勾选 clash 核心

#### clash-wifi 使用正常，宽带拨号连接全部超时

- 网卡接口名称指定 wlan

``` yaml
experimental: #此参数core1.0/cfw0.11.0后抛弃
  interface-name: WLAN
```

> 删除或者指定正在使用的网卡名称接口

#### clash-profiles 界面为空

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200510102453.jpg)

> 用户目录下.config/clash 文件夹内删掉 profiles 文件夹再重启
> clash 首页 Home Directroy 可直接跳转
> 参考 issues#570

#### cfw 报错--多半使用 rule-providers

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200720100445.jpg)

如图，raw 炸了。自行更换其他连接，例如`cdn.jsdelivr`或其他网盘。也可上`dot,doh`试试

#### cfw0.11.0 正式版 bug，0.11.1 版本修复

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200720102011.png)

**手动修复方法两种**

- `parser`错了手动改为 `parsers: []`
- `进home directory`里把`cfw-settings`删掉重启 app

#### cfw 遇见 external-ui..not exist(多半为神机规则)

`external-ui: D: Breakwall\Clash. for Windows\resources\static\files\folder not exist`

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200720102537.jpg)

**解决方法**

- 把配置文件里面`external-ui: folder`删掉
- 或者在`\.config\clash`新建`folder`文件夹
  > `external-ui: dashboard_Razord`是放静态网页文件的,神机默认用了叫`folder`的文件夹.用新建不用则删掉

#### cfa 怎么开启局域网共享

- 配置文件里开启`allow-lan: true`

#### safebrowsing.googleapis.com 偷跑流量（特指 Safari 浏览器

<details>
<summary><b style="color:#B47CFD">cfw-settings</b></summary>

- 进程`com.apple.Safari.SafeBrowsing.Service`
- 访问地址`safebrowsing.googleapis.com`

这是 Safari 和安全流量相关的服务

> Safe browsing 说明
> 大致是介绍 Safe browsing (安全浏览)是谷歌提供的一种服务，利用谷歌持续更新的恶意网址和钓鱼网站的数据集，来检测 url 的安全性，帮助我们有效抵御网上诱骗、社交工程、恶意软件、垃圾软件、恶意广告、侵扰性广告以及侮辱性网站或扩展程序带来的危害。

该服务是针对 Safari 浏览器启用的，在 Safari 要帮你导航到下一级页面的时候，会识别该页面是否是欺诈 🐶 或者不安全 ⚠️ 的网站。
我们在 Safari 的 Security 菜单中可以找到启用关于欺诈网站的检测功能的开关。可以关掉

**导致这个问题的原因是：**如果 iOS / macOS 操作系统的“国家或地区”设置为中国大陆，那么 Safari 会会请求 safebrowsing.urlsec.qq.com 和 safebrowsing.googleapis.com 去下载欺诈网站的数据库，并且可能会发送用户的 IP 地址等浏览信息。如果是非中国大陆，则只向 safebrowsing.googleapis.com 请求下载数据。

这个操作可能会引起两个问题，一个是按照规则来看，这个过程会消耗大量的代理流量。第二个是，腾讯的网站数据库会阻止我们浏览成人网站，而且会发送一些信息到腾讯，我并不相信腾讯。

为了彻底禁止这个功能，可以进入 Safari 设置中安全项目，关闭欺诈性网站警告功能后，将两个域名的策略手动设置为 REJECT。

``` yaml
- DOMAIN-SUFFIX,safebrowsing.googleapis.com,DIRECT
- DOMAIN-SUFFIX,safebrowsing.urlsec.qq.com,DIRECT
# 或者
- DOMAIN-SUFFIX,safebrowsing.googleapis.com,REJECT
- DOMAIN-SUFFIX,safebrowsing.urlsec.qq.com,REJECT
```

> 参考链接:[https://github.com/Hackl0us/SS-Rule-Snippet/issues/92](https://github.com/Hackl0us/SS-Rule-Snippet/issues/92)
> 参考链接:[https://blog.dun.im/dun/macos-ios-traffic.html](https://blog.dun.im/dun/macos-ios-traffic.html)
> 参考链接:[https://www.jishuwen.com/d/2LUm/zh-hk](https://www.jishuwen.com/d/2LUm/zh-hk)

</details>

#### 来自 clashx 的报错

<details>
<summary><b style="color:#B47CFD">cfw-settings</b></summary>

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200524174611.png)

果子的开发者证书掉了(99\$/年),等开发者重新打包.或者在系统偏好设置中开启允许任何来源

> 参考链接:[https://github.com/paradiseduo/ClashXR/issues/5](https://github.com/paradiseduo/ClashXR/issues/5)

</details>

#### 奇葩 bug

不知名野生 bug，机场节点延迟全红（个别机场可以用），不管更新重装还是咋样都是一如既往的红
web 端面板打不开，或打开节点列表界面卡死

> 解决方法：系统还原到上个还原点（应该是某个更新或驱动造成的）
> 我的电脑右键属性或控制面板--系统安全--系统。系统保护--还原点还原(前提已开启系统还原保护)
> 此操作可能影响到部分应用或驱动

<!-- [锚点](#anchor)
[锚点](#anchor1)
 <span id = "anchor">锚点</span>
 <h1 id = "anchor1">锚点</h1> -->
