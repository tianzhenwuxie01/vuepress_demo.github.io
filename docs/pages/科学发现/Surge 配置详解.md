## Surge 配置详解

Column: Jan 15, 2021 5:59 PM
分类: 科学发现
时间: Jan 15, 2021
时间中文: 2021-01-15
标签: 科学上网

> 本文由 简悦 SimpRead 转码

[配置示例](https://zhuangzhuang.cf/zhuangzhuang.conf)，**仅供参考，不建议使用**

保护配置, 在 Surge 中不可修改（**慎用：会导致配置无法编辑、分享**）

托管配置，24h 更新一次（**托管配置不可编辑**）

```
#!MANAGED-CONFIG https://raw.githubusercontent.com/ydzydzydz/Rules/master/conf/zhuangzhuang/zhuangzhuang.conf interval=86400 strict=true

```

- [[General]](about:blank#general)
- [[Replica]](about:blank#replica)
- [[Proxy]](about:blank#proxy)
- [[Proxy Group]](about:blank#proxy-group)
- [[Rule]](about:blank#rule)
- [[Host]](about:blank#host)
- [[URL Rewrite]](about:blank#url-rewrite)
- [[Header Rewrite]](about:blank#header-rewrite)
- [[Map Local]](about:blank#map-local)
- [[SSID Setting]](about:blank#ssid-setting)
- [[MITM]](about:blank#mitm)
- [[Snell Server]](about:blank#snell-server)
- [[Script]](about:blank#script)
- [模块](about:blank#%E6%A8%A1%E5%9D%97)
- [大佬们的规则：](about:blank#%E5%A4%A7%E4%BD%AC%E4%BB%AC%E7%9A%84%E8%A7%84%E5%88%99)
- [如何自己写配置](about:blank#%E5%A6%82%E4%BD%95%E8%87%AA%E5%B7%B1%E5%86%99%E9%85%8D%E7%BD%AE)
- [参考：](about:blank#%E5%8F%82%E8%80%83)
- [反馈：](about:blank#%E5%8F%8D%E9%A6%88)

日志等级: warning, notify, info, verbose (默认值: notify)

跳过某个域名或者 IP 段, 这些目标主机将不会由 Surge Proxy 处理

(macOS 版本中, 如果启用了 Set as System Proxy, 这些值会被写入到系统网络代理设置)

```
skip-proxy = 127.0.0.1, 192.168.0.0/16, 193.168.0.0/24, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local

```

强制使用特定的 DNS 服务器

```
dns-server = 223.5.5.5, 119.29.29.29, 114.114.114.114, 8.8.8.8, system, https://9.9.9.9/dns-query, https://cloudflare-dns.com/dns-query

```

使用 DNS over HTTPS （dns-server 仅会用作进行网络状态检查和解析 doh 域名）

```
doh-server = https://doh.zhuangzhuang.ga/dns-query

```

设置 DOH 请求可以使用规则系统走代理策略，但该策略必须是一个直接使用 IP 的代理策略

```
doh-follow-outbound-mode = true

```

设置 DOH 默认格式请求 (json、wireformat)

允许外部控制器访问 Surge, Surge Dashboard 或 Surge CLI 进行管理控制

```
external-controller-access = passw@127.0.0.1:6170

```

是否启动完整的 IPv6 支持 (默认值: false)

TUN 规则匹配模式 (默认值: false)

```
enhanced-mode-by-rule = 1

```

拒绝页面显示错误

```
show-error-page-for-reject = true

```

不包括简单主机名

```
exclude-simple-hostnames = true

```

Surge 作为 HTTP/SOCKS5 代理服务器向 Wi-Fi 网络下的其他设备提供服务器

- Surge Mac 供外网访问的服务端口
HTTP 代理服务端口 (默认值: 6152)

    ```
    http-listen = 0.0.0.0:8888

    ```

    SOCKS5 代理服务端口 (默认值: 6153)

    ```
    socks5-listen = 0.0.0.0:8889

    ```

- Surge iOS 供外网访问的服务端口
HTTP 代理服务端口 (默认值: 6152)

    ```
    wifi-access-http-port = 8888

    ```

    SOCKS5 代理服务端口 (默认值: 6153)

    ```
    wifi-access-socks5-port = 8889

    ```

兼容模式（默认禁用）

- 禁用
- Proxy with Loopback Address
- Proxy Only
- TUN Only

启用 Network.framework (默认值: false)

INTERNET 测试 URL (使用网络诊断功能时访问的 URL)

```
internet-test-url = http://wwww.gstatick.com/generate_204

```

代理测速 URL (测试代理策略时的 URL)

```
proxy-test-url = http://wwww.gstatick.com/generate_204

```

测速超时 (秒)

强制 TCP 连接为 HTTP 连接

```
force-http-engine-hosts = api.joybj.com

```

返回真实 IP

```
always-real-ip = *.apple.com

```

劫持其它 DNS 服务器

绕过特定 IP 范围

```
tun-excluded-routes = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12

```

包含特定 IP 范围

```
tun-included-routes = 192.168.1.12/32

```

TLS 引擎 (default、secure-transport、openssl、network-framework)

OpenSSL 或者 Network.Framework，可开启 TLS 1.3 支持

OpenSSL 更稳定，Network.Framework 可提供更多功能

如果 Wi-Fi 信号弱或网络异常，会在 2 秒后尝试使用数据网络建立连接

在 [Host] 段有为某主机名指定 IP，在使用代理访问该主机名时，将使用该 IP 地址进行代理请求，不再依赖远端解析。

```
use-local-host-item-for-proxy = true

```

`该段定义抓取流量的过滤`

隐藏所有发往 *.Apple.com 和* .icloud.com 的请求（该选项只是在抓取结果中隐藏了请求）

```
hide-apple-request = true

```

隐藏 Crashlytics 请求

```
hide-crashlytics-request = true

```

隐藏 UDP 会话（默认值: false）

使用关键词过滤器（默认值: false）

```
use-keyword-filter = false

```

- 仅记录不包含关键字的请求

    ```
    keyword-filter-type = blacklist

    ```

- 仅记录包含关键字的请求

    ```
    keyword-filter-type = whitelist

    ```

关键字 (例：abc def)

`该段定义可用的代理策略`

写法是：策略名 = 代理类型, 代理地址, 端口号, 用户名, 密码

不同的类型填写的具体项目会有差异, 建议在 UI 界面中填写

策略名不可重复, 策略名须先定义才能在其它部分引用

```
ProxyHTTP = http, [SERVER ADDRESS], [GENERATED PORT], username = 用户名, password = 密码
ProxyHTTPS = https, [SERVER ADDRESS], [GENERATED PORT], username = 用户名, password = 密码
ProxySOCKS5 = socks5, [SERVER ADDRESS], [GENERATED PORT], username = 用户名, password = 密码
ProxySOCKS5TLS = socks5-tls, [SERVER ADDRESS], [GENERATED PORT], username = 用户名, password = 密码, skip-common-name-verify=true
ProxySnell = snell, [SERVER ADDRESS], [GENERATED PORT], psk=[GENERATED PSK], obfs=http
ProxyShadowsocks01 = custom, [SERVER ADDRESS], [GENERATED PORT], chacha20-ietf-poly1305, password, https://raw.githubusercontent.com/ydzydzydz/Rules/master/SSEncrypt/SSEncrypt.module
ProxyShadowsocks02 = ss, [SERVER ADDRESS], [GENERATED PORT], encrypt-method = rc4-md5, password = 密码
ProxyVmess= vmess, [SERVER ADDRESS], [GENERATED PORT], username = [UUID], ws=true, tls=true, ws-path=/v2, ws-headers=X-Header-1:value|X-Header-2:value
ProxyTrojan = trojan, [SERVER ADDRESS], [GENERATED PORT], password = [PASSWORD]

```

可选参数：

- 开启 TCP Fast Open
- 开启 UDP
- 开启 MPTCP

利用服务器定义的方式实现的广告通过选择

Ad-Pass 不拦截广告, Ad-Block 直接拒绝, Ad-GIF 返回一个透明像素图

```
Ad-Pass = direct
Ad-Block = reject
Ad-GIF = reject-tinygif

```

`该段定义可用的策略组`

**有 5 种策略组类型: select、url-test、fallback、ssid 和 load-balance**

select: 具体哪个子策略将被使用, 由用户界面上进行选择

ssid: 具体哪个子策略将被使用, 根据 Wi-FI 的 SSID 决定

url-test: 具体哪个子策略将被使用, 通过测试到具体 URL 的访问速度选择

fallback: 具体哪个子策略将被使用, 通过测试到具体 URL 的可用性决定

load-balance: 随机选用一个可用的子策略

- 手动选择：Auto, Proxy01, Proxy02, Proxy03

    ```
    Proxy = select, Auto, Proxy01 , Proxy02, Proxy03

    ```

- 根据 Wi-FI 的 SSID 决定：默认策略 Auto, 数据网络策略 ProxyA, 连接到 123 的 Wi-FI 网络策略 ProxyB, 连接到 456 的 Wi-FI 网络策略 ProxyC

    ```
    Scene = ssid, default = Auto, cellular = ProxyA, “123” = ProxyB, “456” = ProxyC

    ```

- 可用性自动测试：包含策略 Proxy01, Proxy02, Proxy03, 测试 url 为 http://www.bing.com, **选出可用的第一个策略**, 测试完成前使用第一个策略

    ```
    Video = fallback, Proxy01, Proxy02, Proxy03, url = http://www.bing.com/, evaluate-before-use = true

    ```

- 延迟自动测试：包含策略 Proxy01, Proxy02, Proxy03, 测试 url 为 http://www.bing.com, 600s 后上次的测试结果将被抛弃, 比原优选线路的响应时间, 大于 100ms 的时候, 触发线路变更, 如果某策略在 5s 后依然没有完成, 放弃该策略。 **选出延迟最低的策略**，测试完成前使用第一个策略

    ```
    Auto = url-test, Proxy01, Proxy02, Proxy03, url = http://www.bing.com/, interval = 600s, tolerance = 100ms, timeout = 5s, evaluate-before-use = true

    ```

- 均衡策略：包含策略 Proxy01, Proxy02, Proxy03, 每个连接随机使用一个子策略，当维持策略打开时，同一个主机名一定会使用同一个子策略

```
Balance = load-balance, Proxy01, Proxy02, Proxy03, persistent=1

```

以代理服务器的选择模式实现广告的通过选择

```
AdBlock = select, Ad-GIF, Ad-Block, Ad-Pass

```

策略组的另一种写法：引用远程或者本地 list 文件, **本地须将 list 文件放置在 iCloud 云盘 Surge 文件夹中**, [list 文件示例](https://raw.githubusercontent.com/ydzydzydz/Rules/master/proxy/all.list)

- 远程 list

    ```
    AdBlock = select, policy-path = https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/policy/ad.list

    ```

- 本地 list

    ```
    AdBlock = select, policy-path = ad.list

    ```

外部策略组默认更新间隔时间为 24h，可自定义

```
🚦 Ad-Block = select, policy-path = https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/policy/ad.list, update-interval=300

```

[关于策略组的理解](https://github.com/Fndroid/jsbox_script/wiki/%E5%85%B3%E4%BA%8E%E7%AD%96%E7%95%A5%E7%BB%84%E7%9A%84%E7%90%86%E8%A7%A3)

`规则定义部分`

一条规则有三个基础部分:

[Untitled](Surge%20%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3%20abd392e620f0484bbf599c3246563040/Untitled%20Database%2093d208b41a71424b8b8e6baa08b29c20.csv)

**有三种基于域名的规则: “DOMAIN”, “DOMAIN-SUFFIX” 和 “DOMAIN-KEYWORD”**

- 如果请求域完全匹配, 则匹配规则。

    ```
    DOMAIN, www.apple.com, DIRECT

    ```

- 如果请求的域与后缀匹配, 则匹配规则。例如: google.com 匹配 www.google.com, mail.google.com 和 google.com, 但不匹配 content-google.com。

    ```
    DOMAIN-SUFFIX, google.com, DIRECT

    ```

- 如果请求的域包含关键字, 则匹配规则。

    ```
    DOMAIN-KEYWORD, apple, DIRECT

    ```

- 参数: force-remote-dns (默认值: false) 如果某请求被该规则匹配, 且策略不是 DIRECT. 那么 DNS 查询将永远在远端代理服务器执行, 即使该请求由 Surge TUN 处理

```
DOMAIN-KEYWORD, google, ProxyHTTP, force-remote-dns

```

**有两种基于 IP 的规则: “IP-CIDR” , “GEOIP”**

- 如果是一个使用域名进行访问的请求, 那么 Surge 将进行 DNS 查询以确认是否应该被该规则匹配. 若 DNS 查询失败, 将放弃规则匹配过程并直接给出错误。

    ```
    IP-CIDR, 10.0.0.0/8, DIRECT

    ```

- OPTIONS: no-resolve:(默认值: false) 如果是一个使用域名进行访问的请求, 跳过该条规则, 不触发 DNS 查询。

    ```
    IP-CIDR, 192.168.0.0/16, DIRECT, no-resolve

    ```

- GeoIP CN, 基于 GeoIP 数据库判断域名和 IP 的归属地

**有两种 HTTP 规则: “USER-AGENT”, “URL-REGEX”**

HTTP 规则用于 HTTP 请求或 HTTPS 请求。它不会影响 TCP 连接。

- USER-AGENT, 如果请求的用户代理匹配, 则匹配规则。通配符 * 和? 都受支持。

    ```
    USER-AGENT, Instagram*, DIRECT

    ```

- URL-REGEX, 如果 URL 与正则表达式匹配, 则匹配规则。**最新版 Surge 的 URL-REGEX 规则支持 Mitm**

    ```
    URL-REGEX, ^http://google\.com, DIRECT

    ```

- PROCESS-NAME, 可以为指定的进程分配策略, 规则仅适用于 Surge Mac, Surge iOS 会忽略了这些规则。

    ```
    PROCESS-NAME, Telegram, Proxy

    ```

**RULESET 规则集**

规则集包含多条子规则, 可以是另一个本地 list 文件, 或者是一个 URL（当前版本中固定为每 24 小时进行一次自动更新）

- 内置了两个规则集：[SYSTEM](https://raw.githubusercontent.com/ydzydzydz/Rules/master/special/system.list) 和 [LAN](https://raw.githubusercontent.com/ydzydzydz/Rules/master/special/lan.list)

    ```
    RULE-SET, SYSTEM, DIRECT
    RULE-SET, LAN, DIRECT

    ```

- list 文件是一个纯文本文件, 每一行为一个规则, **最后不可写上策略名,** [list 文件示例](https://raw.githubusercontent.com/ydzydzydz/Rules/master/special/apple.list)

    ```
    RULE-SET, https://raw.githubusercontent.com/ydzydzydz/Rules/master/special/apple.list, Proxy

    ```

外部规则集默认更新间隔时间为 24h，可自定义

```
RULE-SET,https://raw.githubusercontent.com/ydzydzydz/Rules/master/special/telegram.list,🛩 Telegram,update-interval=300

```

**DOMAINSET 规则**

支持百万级别的规则集，在 hostname.txt 文件中，每一行表示一个主机名（域名或 IP），以 . 开头表示匹配所有子域名

```
DOMAIN-SET, hostname.txt, DIRECT

```

**逻辑规则三种：“AND”, “OR” 和 “NOT”**

可以组合多个子规则, 且可进行多层嵌套, 用于某些复杂场景的判断

- AND 运算符表示所有子规则都匹配时, 使用该策略。

    ```
    AND, ((#Rule1), (#Rule2), (#Rule3)...), Policy

    ```

- OR 运算符表示任何子规则匹配时, 使用该策略。

    ```
    OR, ((#Rule1), (#Rule2), (#Rule3)...), Policy

    ```

- NOT 运算符表示子规则未匹配时, 使用该策略。

**Miscellaneous 规则三种:“DEST-PORT”, “SRC-IP” 和 “IN-PORT”**

- DEST-PORT 如果请求的目标端口匹配, 则规则匹配。
- SRC-IP 如果请求的客户端 IP 地址匹配, 则规则匹配。仅适用于远程机器。

    ```
    SRC-IP, 192.168.20.100, DIRECT

    ```

- IN-PORT 如果请求的传入端口匹配, 则规则匹配。Surge 在多个端口上监听时很有用。

**Final 规则**
FINAL 规则必须在所有其他规则之后编写。它定义了与任何其他规则不匹配的请求的默认策略。

- DNS 查询失败走 Final 规则

**触发通知**

- 匹配规则时弹出 notification-text 定义的字符串

    ```
    AND, ((DOMAIN, raw.githubusercontent.com), (USER-AGENT, Surge*)), DIRECT, notification-text=“规则集更新”, notification-interval=3 //更新提醒

    ```

`该段定义本地 DNS 记录`

该功能等同于 /etc/hosts, 加上了泛解析和别名支持。

```
*.taobao.com = server:223.5.5.5
*.jd.com = server:223.5.5.5
*.tmall.com = server:223.5.5.5
*.example.com = server:https://cloudflare-dns.com/dns-query
cloudflare-dns.com = server:1.1.1.1

```

`该段定义针对 HTTP 请求的 URL 重定向规则`

**Header 模式**

- Surge 将修改 Header, 并在必要时将请求重定向到另一台主机。客户端不会注意到这个重定向操作。

    ```
    ^http://www\.google\.cn http://www.google.com header

    ```

**302 模式**

- Surge 只会返回 302 重定向响应。如果启用了主机名的 MitM, 则可以重定向 HTTPS 请求。

    ```
    ^http://yachen\.com https://yach.me 302

    ```

**Reject 模式**

- 如果模式匹配, 则拒绝请求。替换参数将被忽略。如果启用了主机名的 MitM, 将拒绝 HTTPS 请求。

    ```
    ^http://ad\.com/ad\.png _ reject

    ```

    ---

`重定向HTTP请求或者篡改请求Header`

**header-add**

- 为请求头添加一个新的 header line，即使 header line 已存在

    ```
    ^http://example.com header-add DNT 1

    ```

    ```
     # 修改前
     GET /index.html HTTP/1.1
     Host: example.com
     Connection: keep-alive
     User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.1 Safari/603.1.30
     Accept-Language: en-us
     Accept-Encoding: gzip, deflate

     # 修改后:
     GET /index.html HTTP/1.1
     Host: example.com
     Connection: keep-alive
     User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.1 Safari/603.1.30
     Accept-Language: en-us
     Accept-Encoding: gzip, deflate
     DNT: 1     # 请求某个网页应用程序停止跟踪某个用户

    ```

**header-del**

- 从请求头中删除 header line

    ```
    ^http://example.com header-del DNT

    ```

    ```
     # 修改前:
     GET /index.html HTTP/1.1
     Host: example.com
     Connection: keep-alive
     User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.1 Safari/603.1.30
     Accept-Language: en-us
     Accept-Encoding: gzip, deflate
     DNT: 1

     # 修改后:
     GET /index.html HTTP/1.1
     Host: example.com
     Connection: keep-alive
     User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.1 Safari/603.1.30
     Accept-Language: en-us
     Accept-Encoding: gzip, deflate

    ```

**header-replace**

- 替换请求头，如果请求头字段不存在，则不做任何修改

    ```
    ^http://example.com header-replace DNT 1

    ```

    ```
     # 修改前:
     GET /index.html HTTP/1.1
     Host: example.com
     Connection: keep-alive
     User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.1 Safari/603.1.30
     Accept-Language: en-us
     Accept-Encoding: gzip, deflate
     DNT: 0

     # 修改后:
     GET /index.html HTTP/1.1
     Host: example.com
     Connection: keep-alive
     User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/603.1.30 (KHTML,  like Gecko) Version/10.1 Safari/603.1.30
     Accept-Language: en-us
     Accept-Encoding: gzip, deflate
     DNT: 1

    ```

如果要在请求头字段存在时添加或替换 header line，可以一起使用 header-add 和 header-del。

```
^http://example.com header-del DNT
^http://example.com header-add DNT 1

```

`Mock 可返回任意二进制的静态内容，empty.json 内容为 {}`

```
^http://example\.com/json data=empty.json

```

- 连接到 Apple Store 的 Wi-Fi 网络时 Surge 暂停工作
需要 Web 验证登录的 Wi-Fi 网络以及路由器已经科学上网的 Surge 挂起

    ```
    “Apple Store” suspend=true

    ```

- 计费网络模式, 当连接到热点名为 iPhone X 的网络时自动切换为计费模式

    ```
    “iPhone X” cellular-mode=true

    ```

`Surge可以通过MitM解密HTTPS通信`

跳过服务端证书验证

```
skip-server-cert-verify = true

```

用于 TCP 连接

自动旁路（最新版已经删掉了）

主机名（默认只解密`443端口`，使用`suffix:0`为主机名上的所有端口启用 Mitm，使用`suffix:port`为主机名上的特定端口启用 Mitm）

```
hostname = api.chelaile.net.cnn.cn

```

最新版 Surge 的 URL-REGEX 规则支持 Mitm，可以通过添加前缀`-`排除域名

```
hostname = -*.apple.com,-*.icloud.com,*

```

证书生成器将帮助您生成用于调试的新 CA 证书, 并使证书受到系统的信任。

它可以在 Surge Dashboard (Mac 版) 和 Surge iOS 配置编辑器中使用。

这个证书是本地生成的, 只会保存在配置文件和系统密钥链中。

证书密钥是使用 OpenSSL 随机生成的。

还可以使用[现有的 CA 证书](https://zhuangzhuang.cf/2019-05-12/ca/)。将证书导出到 PKCS#12 格式 (.p12)。

请注意, 由于系统限制, 密码不能为空。使用`base64命令`对 p12 进行编码, 并将这些设置附加到配置文件中。

```
# P12密码
ca-passphrase = zhuangzhuang

# base64编码过的P12文件
ca-p12 = MIIKUQIBAzCCChcGCSqGSIb3DQEHAaCCCggEggoEMIIKADCCBLcGCSqGSIb3DQEHBqCCBKgwggSkAgEAMIIEnQYJKoZIhvcNAQcBMBwGCiqGSIb3DQEMAQYwDgQI0Y6QJciuLX4CAggAgIIEcAfVdD1KATKlN5IfO9m99Li205wAYWOmF9szqKRrSwY5sY/PhafpGA4ZoEotDp7I5SZlaoVgXwYAORaZYq+iwOI7a+XzbNbbttZgVhS5YkJmcasHhSJeQWW1bYlGrgxRDjcJL2Vmeu1nW5+neBHEtwSIwrExhYXjMPp9nG+Wr20XBoZO774KBQzNfOvboUeUy+k7//d0uyZOGYIVQHhYvdXE5RGd5JGU1UktlIz5eVOKE497af+e1/Dn2bBrJgAJ29azhoUCjeaMOjZNxie2jdCsdtyo47t+rGY4mrBVeUHZcSEQhVoWdsKk5kgZvDe7ILaxewAfrQCmBwcaH90cBotyU53bgQjpYoHEFVZmVlXPeorMSUx/VQhsVp1atPTDlnmzHnYh0/Bd2kxEeIXWlEFDeMymuJhx87cXkc/3Gw/DgpuWbtPNBrEaXKRrTwKFUidRtezfM9MsiRicLrx+EMReYwjzn4Az9uN13AClTS0klNSWJkfWodDnK7PdWywZ5RFXW6v08lKd/5qimB7b/0Fp8v5sli8U6kXz3QWUYJ7nqLQqT6eWhljy2R9GkH9dI9NzS/hgbx4I0gaxPslWZVFTTs/Waumn5WFUcXlMMnM9x45P0YnXct0XUjFPBGQxcKkkm0kGDuJt3LCL3qjIzfuU0rb/MIh1cDwtDUcmshJ49z2Oi+M+9zEhW9gDCFCC8mvf8F227Hm+Ybd5u6qsj/MGvEzh85PrHvXs9JAceesJuaYHVio7iHvy/PYKj7YQx51M5RIg641adgJT/lvggzjcnd7YRYU+BYols/ohyKd5gk+NwFNJCSTlvFQmH+MCfWM10CazJWnLzfAUUxk7qBZUWa1ltLzOLuEN/YvClWBtvhw4VwOQu8bp88bBy2RbNqVGNR2pKnNamP9k9ViOJTlVG+3Yn0r1VLsmZj61tJHa7SrTKE9NFfPT76FnJ+pxm7Gx75edWAcctFtXqk4nnohpATZ+oCzjeCR692R3E/qDyWEiLRllWjh+ByhOJg4H2yWJMvZeLmHdmUqU9ZRcWCPciMFM7VDQ5QNFCKS3Es1jaN18F5WDJtC/4FaOI3DsbHp7KZ2St6yWXNQfgR7rXaBDjkRDYS5aE4GEO8NMilwXk8CBr4KYKU5z6slEVl/R7I7BlTVPizWbM3YxMqZpeg7u2SI/qLvlNInMOAb1hfTtwMrV57iu1kBlRv/xv9XLIsoOj7VlbEPM6WC2n5qm3K4e0i+XaSci+izCJ9/ED/H7VHqsYlrSc9kC2/NftOxtlTPIEBc/LHHLzlmHjuwkwR0xU01QDxe0iEBR4//qEXJJdzrzTNXE0UUFlra21RmpBMhR9Q/ErfZRs/vYXMwcWLyZrEqH4EqIzJ/d2kDnJhVlXGCfH3s8Zzxs4xlUcERJP1ISsx/gZ/NKPh1S4+wf/gm/R0WIci5BwHEgctfbVyhyPYyLYVpBn7Awh/V4XxyDiYAqKiwMLOSSvRYIigylsQ5f5H8gBBeCSm71EIa0YxH/MIIFQQYJKoZIhvcNAQcBoIIFMgSCBS4wggUqMIIFJgYLKoZIhvcNAQwKAQKgggTuMIIE6jAcBgoqhkiG9w0BDAEDMA4ECJKvYTgWF1x1AgIIAASCBMjzYUBK0uhHbTn/W+EjJ8J9NuHNL84puW1XNQPA5hX9TLbrM63DeNLpdaX6mDH3+DhlUeNhBI8cB29hIm/SKm/Fqb/9bMKG5Sy4IgyWO5ShZPRdWiSWN3dSk6LQVHvs5CAgOZVZSq7uoaVXyHVH2UzYT17vZ7CTTDfvrK66W7yahPXNaJzEOFdRPAqs/b7amthG8SdwVCl4EsDKq2Rwwy7LkAWk3PIozXLbWojHUXtowaHeiWyufyxHldjfYlEA296W5u5nUJHXhvq4wIvWHMIetAKk1MEL97hEM0OIB9FYbFopnxm4VjjNJ+v23sTKEzxVGmHNlohCNf6aUNPRzRoGuUZRjhvaVxWFsR8eQrwOCgVq10BqsCUOTvacaWezfvlTccd+09z8DQ/I8Gz82zP2reqzP11825G+W5GcQIN0fK37IWZchoK5M0oGGUXONojzSm0TcwcwIIFAIbel9GIFsas9ZL86h3rAedg5STkTEW7fgavj+JRqeGjmHEVH3w+x2M59g8o+BSVIXhbR57q5kPxfJjZp4TrTwl0AVrJT18YW8FQa9ILRXMkka0bqW1+Lnc7gVytG6QN5XlBEaEHTFrmyYW+B5O/l4qiAcOuOEGGIc8ZMjU9t+LW93juVLGOGXZdikrpizZuSDyQjPYCuNH1hJuNm8uPYvtbj8FkXDtRa/9CFzT3L5seKVVL0CaQCrtImuhfpoYTF2TxQmbLbUk6WPvbPPllDDx6YdKYMTJHFAdBvtwbB5bCoGbM3MXlEjjsyKS8pUwoR8Fm2a7kuCx/KiXIBQH+mhEF6jD27/D6yhtmSd2MeINd6EQVC4zA+ceq29O7cu9qPhtxM3LKtCQc3g8twfGYY3G7h0pOsdsFGpgBqWQ65J4LaojZPrLEPuUYrBSw0OSe/W4/xDuSWEgRwcDFY+eK9QhPXnEjK/5u7rCNXXoNt9l+b8aWnQ+N620XyuKbcEyI3oq5W/LvOcE8HRZU++InY0J/ueE8H9D1fp1lLPSkP5pPt1xSUBUXA3PQWHqNIKa8lXWHS1htrG+x88xZkZ2dPnEmIySAEvo+ypnSICtYryMqi2yfvb/3dbOgpwv8yR28YzdVdgxBfIm743w+Mtkx1UHyjzY7ZzoiZNokkbQOHo7WFrOAhExWXjPKxh7DMGIfkkpVG95Rer8h5V+wL9IKwMERrkaDRGII/LAtYW20bWrmoqP0D4aVxROlD4zc53Ss2jNMtoqUpPQAWPQYwTIW5cRkCWMfkzwYBwovZ9P5/YQJO/Oq9I2iOSj/jhrzpS9g5ogfZ97sDqdtIg+Th8HAD0eepDJPGSemMKH3gLcHhBsHoDWGHqGoeBvHIXJcSdCooeAD/T+kdB3SOWHuduELcuMaSBs9TPGm70DtWMrWCVMlB1lHPdgUlbP6nT81Nld5827uPIIAirLdZk/RQGVBJunrH+NZamMocxGWtmdR3yOQ6kL5aifyE5gtQMiioDJaf9QysR83OYEj4bCUqZWN2IrvRlqkxO4HGnnGkJ6Fs44HTN3Y8pDaLF6vhnM4sySSu+ymhK8WWJX92rU87iz299ruQ54GLtOexnf0tSmICj0OcNH0dqCdKBK5fQnJ2MOXx63SseDq4IdXQnSti38AxJTAjBgkqhkiG9w0BCRUxFgQUIyL/lUz8uIf6H3/9ZudEbx/2AYEwMTAhMAkGBSsOAwIaBQAEFHC3yYATPX7hyNH5Pf5ttL+/5uQmBAj1fyXP2yy6uwICCAA=

```

**安装证书**

- 配置根证书 - 安装证书 - 设置 - 通用描述文件与设备管理 - 安装
- **设置 - 通用 - 关于本机 - 证书信任设置 - 信任**

**强迫症患者[解决 Surge 证书未验证](http://zhuangzhuang.cf/2018-11-26/qianming/)**

`使用Surge Mac作为Snell代理服务器（从3.1.0版本开始）。`

```
interface = 0.0.0.0
port = 6160
psk = RANDOM_KEY_HERE
obfs = off

```

`使用 Surge 执行 JavaScript 脚本`

**http-request**

用于修改 HTTP 请求体，该类型下第二参数为匹配 URL 的正则表达式，被匹配到的请求会被执行脚本。

```
script1 = type=http-request,pattern=^http://httpbin.org script-path=http-request.js,max-size=16384,debug=true,requires-body=true

```

**http-response**

用于修改 HTTP 返回体，该类型下第二参数为匹配 URL 的正则表达式，被匹配到的请求会被执行脚本。

```
script2 = type=http-response,pattern=^http://www.example.com/test script-path=test.js,max-size=16384,debug=true

```

**cron**

可配置 Surge 在特定的时间执行脚本，触发时间配置使用 crontab 的样式。该类型下第二参数为 crontab 表达式，常见的 crontab 为五位表示，即 * * * * * 表示每分钟执行一次，Surge 兼容五位表示和六位表示，可用 * * * * * * 表示每秒钟执行一次。但不支持 @daily 这样的别名。

```
script3 = type=cron,cronexp="* * * * *",script-path=fired.js

```

**event**

在发生特定事件时执行脚本，该类型下第二参数为事件名称，目前只有 network-changed 一个事件。

```
script4 = type=event,event-name=network-changed,script-path=network-changed.js

```

**rule**

使用脚本进行规则判定，该类型下第二参数为规则名

```
script5 = type=rule,script-path=rule.js

```

**policy-group**

使用脚本去决定 policy-group，该类型下第二参数为脚本名。

```
# 换了写法，我也不知道怎么写了，也可能是删了，有大佬知道可以联系 zhuangzhuang

```

**dns**

使用脚本去执行 DNS 解析操作，该类型下第二参数为脚本名。

```
script7 = type=dns,script-path=dns.js,debug=true

```

壮壮只做了简单介绍，具体内容请参考[官方论坛](https://community.nssurge.com/d/33-scripting)

`模块是一系列设置的集合，可以覆盖追加当前配置的部分设定`

**内置模块**

Surge 会预置一些模块，随着 Surge 更新而更新

**本地模块**

放置配置文件目录（iCloud Drive/Surge/）的 `*.sgmodule` 文件，本地模块搜索路径包含子目录

**远程模块**

从某个 URL 安装模块，远程模块不会自动更新，可以手动更新

模块开启状态仅保存于当前配置，不会进行同步，切换配置也不影响模块的开启状态

模块的内容和标准配置基本一致，目前支持调整字段的有：

[[General]](about:blank#general)、[[Replica]](about:blank#replica)

- key = value：直接覆盖原始值
- key = %APPEND% value：在原始值的末尾进行追加（仅适用于适用逗号分隔的字段）
- key = %INSERT% value：在原始值的开始进行插入（仅适用于适用逗号分隔的字段）

```
# 模块名
#!name=Game Console SNAT
# 模块简介
#!desc=Let Surge handle SNAT conversation properly for PlayStation, Xbox, and Nintendo Switch. Only useful if Surge Mac acts the router for these devices.
# 限制模块的使用范围 (ios、mac)
#!system=mac

[General]
always-real-ip = %APPEND% *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com

```

[[MITM]](about:blank#mitm)

```
#!name=MitM All Hostnames
#!desc=Perform MitM on all hostnames with port 443, except those to Apple and other common sites which can't be inspected. You still need configure CA certificate and enable the main switch of MitM.

[MITM]
# 模块内容，与标准配置基本一致，仅支持操作 hostname 字段
# 跳过 Apple 相关
hostname = %APPEND% -*.apple.com, -*.icloud.com, -*.mzstatic.com, -*.crashlytics.com, -*.facebook.com, -*.instagram.com

```

[[Script]](about:blank#script)、[[URL Rewrite]](about:blank#url-rewrite)、[[Header Rewrite]](about:blank#header-rewrite)、[[Host]](about:blank#host)

```
#!name=URL Rewrite
#!desc=After enabling the module, you may access the router configure webpage by accessing http://router.com in your bowser. The URL will always rediect to the gateway address in the current network.
#!system=ios

[URL Rewrite]
# 模块内容，与标准配置基本一致，新加入的定义将会插入在原始内容的最顶部。
# 网关重定向
^http://router.com {{{GATEWAY_ADDRESS}}} 302
^http://www.router.com {{{GATEWAY_ADDRESS}}} 302

```

[[Rule]](about:blank#rule)

```
#!name=Rule Module
#!desc=Rule Module 

[Rule]
# 新配置的规则将被插入在最顶部
# 规则只适用于 DIRECT、REJECT、REJECT-TINYGIF 三种策略
DOMAIN-SUFFIX, zhuangzhuang.cf, DIRECT

```

具体内容请参考[官方论坛](https://community.nssurge.com/d/225-module)

```
</tr>
<tr>
  <td><a href=" https:="" github.com="" scomper="" surge-list"="">scomper/surge-list</a></td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><a href="https://github.com/tudi1909/Surge_iOS_Rules">tudi1909/Surge_iOS_Rules</a></td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><a href="https://github.com/tudi1909/Surge_macOS_Rules">tudi1909/Surge_macOS_Rules</a></td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>Neurogram</td><td>&nbsp;</td><td><a href="https://xteko.com/redir?>Surge³</a></td>
</tr>
<tr>
  <td><a href=" https:="" github.com="" huanz="" surge-hosts"="">huanz/surge-hosts</a></td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><a href="https://github.com/XinSSS/Conf-for-Surge-Shadowrocket">XinSSS/Conf-for-Surge-Shadowrocket</a></td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><a href="https://github.com/h2y/Shadowrocket-ADBlock-Rules">h2y/Shadowrocket-ADBlock-Rules</a></td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table>
```

推荐神机大佬的：[Surge 使用手册](https://chua.pro/more/subject-index/surge-manual/)

[scomper/Surge](https://github.com/scomper/Surge/blob/master/surge3.conf.ini)[Surge 用户手册](https://manual.nssurge.com/)

[ZHUANGZHUANG](https://t.me/YDZ123456)

[Untitled](Surge%20%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3%20abd392e620f0484bbf599c3246563040/Untitled%20Database%2095522725ba1d4416b8f1545322227654.csv)