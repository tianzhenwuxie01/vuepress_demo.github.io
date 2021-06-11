---
title: subconverter本地yml参数简介
date: 2020-04-3 17:25:00
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
top: true #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 奈飞客户端--安卓
categories: 科学发现
tags:
  - 科学上网
  - subconverter
  - clash
---

## subconverter 简介

> 在各种订阅格式之间进行转换的实用程序.

### 支持类型

<details>
<summary><b style="color:#B47CFD">点击查看文件内容</b></summary>

| 类型                         | 作为源类型 | 作为目标类型 | 参数                |
| ---------------------------- | :--------: | :----------: | ------------------- |
| Clash                        |     ✓      |      ✓       | clash               |
| ClashR                       |     ✓      |      ✓       | clashr              |
| Quantumult (完整配置)        |     ✓      |      ✓       | quan                |
| Quantumult X (完整配置)      |     ✓      |      ✓       | quanx               |
| Loon                         |     ✓      |      ✓       | loon                |
| Mellow                       |     ✓      |      ✓       | mellow              |
| SS (SIP002)                  |     ✓      |      ✓       | ss                  |
| SS (软件订阅)                |     ✓      |      ✓       | sssub               |
| SSD                          |     ✓      |      ✓       | ssd                 |
| SSR                          |     ✓      |      ✓       | ssr                 |
| Surfboard                    |     ✓      |      ✓       | surfboard           |
| Surge 2                      |     ✓      |      ✓       | surge&ver=2         |
| Surge 3                      |     ✓      |      ✓       | surge&ver=3         |
| Surge 4                      |     ✓      |      ✓       | surge&ver=4         |
| Trojan                       |     ✓      |      ✓       | trojan              |
| V2Ray                        |     ✓      |      ✓       | v2ray               |
| 类 TG 代理的 HTTP/Socks 链接 |     ✓      |      ×       | 仅支持 `&url=` 调用 |

</details>

1. Shadowrocket 用户可以使用 `ss`、`ssr` 以及 `v2ray` 参数

2. 类 TG 代理的 HTTP/Socks 链接由于没有命名设定，所以可以在后方插入`&remarks=`进行命名，同时也可以插入 `&group=` 设置组别名称，以上两个参数需要经过 [URLEncode](https://www.urlencoder.org/) 处理，例如

   - tg://http?server=1.2.3.4&port=233&user=user&pass=pass&remarks=Example&group=xxx

   - https://t.me/http?server=1.2.3.4&port=233&user=user&pass=pass&remarks=Example&group=xxx

## subconverter--url 链接

<details>
<summary><b style="color:#B47CFD">点击查看文件内容</b></summary>

默认生成 url

``` yaml
http://127.0.0.1:25500/sub?target=clash
#target=后面接生成配置类型，具体参考上面
```

上传 gist 并命名

``` yaml
http://127.0.0.1:25500/sub?target=clash&upload=true&upload_path=buding.yml
#upload=true上传gist，upload_path=buding.yml上传名称。多个参数&连接
```

外部引用配置文件

``` yaml
http://127.0.0.1:25500/getprofile?name=profiles/ces.ini&token=password
#name=后面接外部配置文件地址，token=接common:里面参数
```

外部引用短链接`aliases`字段

``` yaml
http://127.0.0.1:25500/bd
#name=后面接外部配置文件地址，token=接common:里面参数
```

自定义配置模板参数

``` yaml
具体见模板文件说明
global: 定义在pref里的参数
local: 定义在外部配置文件里的参数
request: 请求url的参数
#request有指定就是request的值,没有就是全局的值
```

</details>

## subconverter--yml 参数

### common:

> 全局节点排除或保留及基础配置

<details>
<summary><b style="color:#B47CFD">点击查看文件内容</b></summary>

``` yaml
common:
  api_mode: false
  #设置为true时 使用default_url需要在访问时提供api_access_token即在请求地址后添加参数token=password

  api_access_token: password

  default_url: ["https://sub88.xyz", "https://"]
  #支持本地文件 / URL
  #多个订阅yml写法]["http...", "http..."]---ini写法http... | http...
  #;Ⓜ️Ⓜ️Ⓜ️http
  #;https://t.me/https?server=a4.ap.fastqvpn.com&port=29980&user=282607728952606720&pass=01553893-ec29-49fc-8892-0c81c06c3618&remark=Example

  insert_url: []
  #支持本地文件/ URL
  #无论浏览器url链接是否具有 %URL% 参数时，都会在添加订阅前加入的节点， 不需要 URLEncode
  #如果有多个节点，ini仍然需要使用 "|" 分隔
  #insert_url=ss://Y2hhY2hhMjAtaWV0Zi...
  #insert_url=ss://Y2hhY2hhMjAtaWV0Zi...

  prepend_insert_url: true
  #将插入的URL附加到订阅链接。 insert_url中的节点将首先使用非特定于组的匹配模式添加到组中。

  exclude_remarks: ["(到期|剩余流量|时间|官网|回国|产品)"]
  #排除匹配到的节点，支持正则表达式。

  include_remarks: []
  #仅保留匹配到的节点、支持正则

  enable_filter: false
  #启用脚本支持以过滤节点

  filter_script: ""
  #启用脚本支持以过滤节点,我放弃了

  default_external_config: ""
  #如果未指定外部配置文件，则将其设置为默认值。支持 `本地文件` 和 `在线URL`
  #例default_external_config: config/example_external_config.ini

  clash_rule_base: base/all_base.tpl #仅保留匹配到的节点
  surge_rule_base: base/all_base.tpl
  surfboard_rule_base: base/all_base.tpl
  mellow_rule_base: base/all_base.tpl
  quan_rule_base: base/all_base.tpl
  quanx_rule_base: base/all_base.tpl
  loon_rule_base: base/all_base.tpl
  sssub_rule_base: base/all_base.tpl
  #生成的各种配置文件基础模板（0.4.3以前版本）
  #支持本地或者在线url，例如以神机位模板
  #clash_rule_base=https://raw.githubusercontent.com/ConnersHua/Profiles/master/Clash/Pro.yaml

  proxy_config: SYSTEM
  #更新 外部配置文件 时是否使用代理
  #支持http和sock5
  #proxy_ruleset: socks5://127.0.0.1:1080 使用本地的 1080 端口进行 SOCKS5 代理

  proxy_ruleset: SYSTEM
  #更新 RuleSet 时是否使用代理填写 NONE 或者空白禁用，或者填写 SYSTEM 使用系统代理
  #同上

  proxy_subscription: NONE
  #更新 原始订阅 时是否使用代理
  #同上

  append_proxy_type: false
  #设置为 true 时在节点名称前加入 [SS] [SSR] [VMess] 以作区别
```

</details>

### userinfo:

<details>
<summary><b style="color:#B47CFD">点击查看文件内容</b></summary>

``` yaml
userinfo:
  stream_rule:
    - { match: "^剩余流量：(.*?)\\|总流量：(.*)$", replace: "total=$2&left=$1" }
    - { match: "^剩余流量：(.*?) (.*)$", replace: "total=$1&left=$2" }
    - { match: "^Bandwidth: (.*?)/(.*)$", replace: "used=$1&total=$2" }
    - { match: "^.*剩余(.*?)(?:\\s*?)@(?:.*)$", replace: "total=$1" }
    - { match: "^.*?流量:(.*?) 剩:(?:.*)$", replace: "total=$1" }
  #从节点提取流数据的规则
  time_rule:
    - {
        match: "^过期时间：(\\d+)-(\\d+)-(\\d+) (\\d+):(\\d+):(\\d+)$",
        replace: "$1:$2:$3:$4:$5:$6",
      }
    - {
        match: "^到期时间(:|：)(\\d+)-(\\d+)-(\\d+)$",
        replace: "$1:$2:$3:0:0:0",
      }
    - {
        match: "^Smart Access expire: (\\d+)/(\\d+)/(\\d+)$",
        replace: "$1:$2:$3:0:0:0",
      }
    - { match: "^.*?流量:(?:.*?) 剩:(.*?)天$", replace: "left=$1d" }
  #从节点提取过期时间数据的规则
```

</details>

### node_pref:

> 该部分主要涉及到的内容为 **开启节点的 UDP 及 TCP Fast Open** 、**节点的重命名** 、**重命名节点后的排序**

<details>
<summary><b style="color:#B47CFD">点击查看文件内容</b></summary>

``` yaml
node_pref:
  udp_flag: false
  #为节点打开 UDP 模式，设置为 true 时打开，默认为 false
  #当不清楚机场的设置时请勿调整此项。

  tcp_fast_open_flag: false
  #为节点打开 TFO (TCP Fast Open) 模式，设置为 true 时打开，默认为 false
  #当不清楚机场的设置时请勿调整此项。

  sort_flag: true
  #对生成的订阅中的节点进行 A-Z 的排序，设置为 true 时打开，默认为 false

  skip_cert_verify_flag: false
  #关闭 TLS 节点的证书检查，设置为 true 时打开，默认为 false
  #请勿随意将此设置修改为 true

  filter_deprecated_nodes: false
  #排除当前 target= 不支持的节点类型默认false 可以打开

  append_sub_userinfo: true

  clash_use_new_field_name: false
  #clash内核0.19.0新分组参数

  rename_node:
    #  - {match: "\\(?((x|X)?(\\d+)(\\.?\\d+)?)((\\s?倍率?)|(x|X))\\)?", replace: "$1x"}
    #  - {script: "function rename(node){}"}
    #  - {script: "path:/path/to/script.js"}
    - { import: snippets/rename_node.txt }
  #重命名节点，支持正则匹配.使用方式：原始命名@重命名
  #用法如上，支持单条正则或文本载入
  #特殊用法:Ⓜ️Ⓜ️Ⓜ️
  #rename_node=!!GROUPID=0!!中国@中，rename_node: "!!GROUPID=0!!中国@中"
  #指定此重命名仅在第一个订阅的节点中生效
```

</details>

### managed_config:

> 该部分主要涉及到的内容为 **订阅文件的更新地址**
> 多半是 surge，surfboard，quanx

<details>
<summary><b style="color:#B47CFD">点击查看文件内容</b></summary>

``` yaml
managed_config:
  write_managed_config: true
  #是否将 '#!MANAGED-CONFIG' 信息附加到 Surge 或 Surfboard 配置，设置为 true 时打开，默认为 true
  managed_config_prefix:
    "http://127.0.0.1:25500"
    # 具体的 '#!MANAGED-CONFIG' 信息，地址前缀不用添加 "/"。
    # Surge 或 Surfboard 会向此地址发出更新请求，同时本地 ruleset 转 url 会用此生成/getruleset链接。
    # 局域网用户需要将此处改为本程序运行设备的局域网 IP,例如managed_config_prefix = http://192.168.1.5:25500
  config_update_interval: 86400
  #托管配置更新间隔，确定配置将更新多长时间，单位为秒
  config_update_strict: false
  #如果 config_update_struct 为 true，则 Surge 将在上述间隔后要求强制更新。
  quanx_device_id: ""
  #用于重写 Quantumult X 远程 JS 中的设备 ID，该 ID 在 Quantumult X 设置中自行查找
```

</details>

### surge_external_proxy:

> 为 Surge 添加 SSR 的支持路径

<details>
<summary><b style="color:#B47CFD">点击查看文件内容</b></summary>

``` yaml
surge_external_proxy: #为 Surge 添加 SSR 的支持路径
  surge_ssr_path: "" # /usr/bin/ssr-local
```

</details>

### emojis:

> 表情部分

<details>
<summary><b style="color:#B47CFD">点击查看文件内容</b></summary>

``` yaml
emojis:
  add_emoji: true
  #是否在节点名称前加入下面自定义的 Emoji
  remove_old_emoji:
  true
  #是否移除原有订阅中存在的 Emoji，设置为 true 时打开，默认为 true
  rules:
  #在匹配到的节点前添加自定义 emojis，支持正则匹配
  - {match: "(流量|时间|应急)", emoji: "🏳️‍🌈"}
  - {import: snippets/emoji.txt}
  - match: "!!GROUPID=0!!(流量|时间|应急)", emoji: "🏳️‍🌈"
  #特殊用法
  #ini语法rule=!!GROUPID=0!!(流量|时间|应急),⌛time
  #指定此 Emoji 规则仅在第一个订阅的节点中生效

```

</details>

### ruleset:

> 规则部分

<details>
<summary><b style="color:#B47CFD">点击查看文件内容</b></summary>

``` yaml
ruleset:
  enabled: true
  #启用自定义规则集的总开关
  overwrite_original_rules: false
  #覆盖原有规则，即 [common] 中 xxx_rule_base 中的内容
  update_ruleset_on_request: false
  #根据请求执行规则集更新
  rulesets:
    #从本地或url获取规则
    #  - {rule: "GEOIP,CN", group: "DIRECT"}
    #  - {ruleset: "rules/LocalAreaNetwork.list", group: "DIRECT"}
    #  - {ruleset: "surge:rules/LocalAreaNetwork.list", group: "DIRECT"}
    #  - {ruleset: "quanx:https://raw.githubusercontent.com/ConnersHua/Profiles/master/Quantumult/X/Filter/Advertising.list", group: "Advertising"}
    #  - {ruleset: "clash-domain:https://ruleset.dev/clash_domestic_services_domains", group: "Domestic Services"}
    #  - {ruleset: "clash-ipcidr:https://ruleset.dev/clash_domestic_services_ips", group: "Domestic Services"}
    #  - {ruleset: "clash-classic:https://raw.githubusercontent.com/DivineEngine/Profiles/master/Clash/RuleSet/China.yaml", group: "DIRECT"}
    - { import: snippets/rulesets-chaoxi.txt } #潮汐
  #支持在线链接
```

</details>

### proxy_group:

> 为 Clash 、Mellow 、Surge 以及 Surfboard 等程序创建策略组

<details>
<summary><b style="color:#B47CFD">[clash_proxy_group] 部分</b></summary>

``` yaml
proxy_group: #为 Clash 、Mellow 、Surge 以及 Surfboard 等程序创建策略组
  custom_proxy_group:
    #  - {name: UrlTest, type: url-test, rule: [".*"], url: http://www.gstatic.com/generate_204, interval: 300, tolerance: 100, timeout: 5}
    #  - {name: Proxy, type: select, rule: [".*"]}
    #  - {name: group1, type: select, rule: ["!!GROUPID=0"]}
    #  - {name: v2ray, type: select, rule: ["!!GROUP=V2RayProvider"]}
    #  - {import: snippets/groups_forcerule.txt}
    #  - {name: ssid group, type: ssid, rule: ["default_group", "celluar=group0,ssid1=group1,ssid2=group2"]}
    - { import: snippets/groups-chaoxi.txt } #潮汐
```

> 特殊语法

``` ini
custom_proxy_group=g1hk`select`!!GROUPID=0!!(HGC|HKBN|PCCW|HKT|hk|港)
# 订阅链接中的第一条订阅内名字含 HGC、HKBN、PCCW、HKT、hk、港 的节点
```

</details>

### template:

> 配置模块

<details>
<summary><b style="color:#B47CFD">[clash_proxy_group] 部分</b></summary>

``` yaml
template:
  template_path: "template"
  globals:
    - { key: clash.http_port, value: 7890 }
    - { key: clash.socks_port, value: 7891 }
    - { key: clash.allow_lan, value: true }
    - { key: clash.log_level, value: info }
  #global 定义在pref里的参数 local 定义在外部配置文件里的参数 request 请求url的参数
  #request有指定就是request的值没有就是全局的值
```

</details>

### aliases 短链接

具体 url 链接见上面

<details>
<summary><b style="color:#B47CFD">点击查看文件内容</b></summary>

``` yaml
aliases:
  - { uri: /bd, target: "/getprofile?name=profiles/buding.ini&token=password" }
  - {
      uri: /bd2,
      target: "/getprofile?name=profiles/buding.ini&token=password&expand=false&classic=true",
    }
  - {
      uri: /bd3,
      target: "/getprofile?name=profiles/buding.ini&token=password&script=true&expand=false&classic=true",
    }
  - {
      uri: /ssrcloud,
      target: "/getprofile?name=profiles/ssrcloud.ini&token=password",
    }
  - {
      uri: /ssrcloud2,
      target: "/getprofile?name=profiles/ssrcloud.ini&token=password&expand=false&classic=true",
    }
  - {
      uri: /ssrcloud3,
      target: "/getprofile?name=profiles/ssrcloud.ini&token=password&script=true&expand=false&classic=true",
    }
  - {
      uri: /ssrcloud-gta,
      target: "/getprofile?name=profiles/gta5.ini&token=password&expand=false&classic=true",
    }
  - {
      uri: /chaoxi,
      target: "/getprofile?name=profiles/chaoxi.ini&token=password",
    }
  # - {uri: /v2tun, target: "/getprofile?name=profiles/v2tun.ini&token=password"}
  # - {uri: /bdcfw, target: "/getprofile?name=profiles/buding.ini&token=password&clash.dns=cfw"}
  - {
      uri: /chaoxicfw,
      target: "/getprofile?name=profiles/chaoxi.ini&token=password&clash.dns=cfw",
    }
  # - {uri: /v2tuncfw, target: "/getprofile?name=profiles/v2tun.ini&token=password&clash.dns=cfw"}
  # - {uri: /buding-surf, target: "/getprofile?name=profiles/buding-surf.ini&token=password"}
  # - {uri: /v2tun-surf, target: "/getprofile?name=profiles/v2tun-surf.ini&token=password"}
  - {
      uri: /piao1,
      target: "/getprofile?name=profiles/piao1.ini&token=password",
    }
```

</details>

### generate 生成后下载到本地

在程序目录内的 .ini 中设定文件块([xxx])，生成的文件名(path=xxx)以及其所需要包含的参数，例如：

<details>
<summary><b style="color:#B47CFD">点击查看文件内容</b></summary>

``` yaml
[bd]
path=pref/peizhi/bd.yml ;貌似中文路径不支持
profile=profiles/buding.ini

[v2tun]
path=pref/peizhi/v2tun.yml
profile=profiles/v2tun.ini

[chaoxi]
path=pref/peizhi/chaoxi.yml
profile=profiles/chaoxi.ini

[布丁-surf]
path=pref/peizhi/bd-surf.conf
profile=profiles/buding-surf.ini

```

</details>

使用 subconverter -g 启动本程序时，即可在程序根目录内生成名为 output.conf output.yml 的配置文件文本。

使用 subconverter -g --artifact "test" 启动本程序时，即可在程序根目录内仅生成上述示例中 [test] 文件块所指代的 output.conf 的配置文件文本。

win 先到 sub 目录打开命令行,`.\subconverter -g`执行命令

## 规则分组文件

### groups

<details>
<summary><b style="color:#B47CFD">[clash_proxy_group] 部分</b></summary>

``` ini
🚀 节点选择`select`[]✈️ 一组香港`[]💩 辣鸡通用`[]🐳 专线`[]👻 小日本`[]🦅 美国佬`[]🔥 天选之子`[]🎫 全球直连`
🎥 NETFLIX`select`[]📹 奈飞`[]🚀 节点选择`[]🎫 全球直连`
🛑 广告拦截`select`[]⛔ 全球拦截`[]🎫 全球直连`[]🚀 节点选择
🌵 应用广告`select`[]⛔ 全球拦截`[]🎫 全球直连
🌐 国外媒体`select`[]🚀 节点选择`[]✈️ 一组香港`[]👻 小日本`[]🦅 美国佬`[]🎫 全球直连`
🌏 国内媒体`select`[]🎫 全球直连`[]🚀 节点选择`
;Ⓜ️ 微软服务`select`[]🎫 全球直连`[]🚀 节点选择`
📲 电报信息`select`[]🚀 节点选择`[]🎫 全球直连`
🍎 苹果服务`select`[]🚀 节点选择`[]🎫 全球直连`[]✈️ 一组香港`[]👻 小日本`[]🦅 美国佬`
📹 奈飞`select`!!GROUPID=0!!^.*(nf|NetFLix).*$`
🐳 专线`select`!!GROUPID=1!!^.*(IPLC).*$`http://www.gstatic.com/generate_204`300
✈️ 一组香港`url-test`!!GROUPID=0!!^(?!.*通用).*香港.*$`http://www.gstatic.com/generate_204`300
💩 辣鸡通用`url-test`!!GROUPID=0!!^.*通用.*$`http://www.gstatic.com/generate_204`300
👻 小日本`url-test`!!GROUPID=0!!^.*日本.*$`http://www.gstatic.com/generate_204`300
🦅 美国佬`url-test`!!GROUPID=0!!^.*美国.*$`http://www.gstatic.com/generate_204`300
;☢️ 高倍`url-test`^.*(10倍)(?!.*公网).*$`http://www.gstatic.com/generate_204`300
🔥 天选之子`select`.*
🎫 全球直连`select`[]DIRECT
⛔ 全球拦截`select`[]REJECT`[]DIRECT
🐳 漏网鱼儿`select`[]🚀 节点选择`[]🎫 全球直连`
;!!GROUPID=0!!^.*美国.*$：只在第一个订阅中使用正则
```

</details>

## 0.5.0 之后模板文件

<details>
<summary><b style="color:#B47CFD">我的模板base.tpl</b></summary>

``` yaml
{% if request.target == "clash" or request.target == "clashr" %}

port: {{ global.clash.http_port }}
socks-port: {{ global.clash.socks_port }}
allow-lan: {{ global.clash.allow_lan }}
mode: Rule
log-level: {{ global.clash.log_level }}
external-controller: :9090
{% if request.clash.dns == "cfw" %} #如果有clash.dns=cfw时使用如下配置
dns:
  enable: true
  enhanced-mode: fake-ip
  listen: 0.0.0.0:53
  fake-ip-filter: # fake ip 白名单列表，如果你不知道这个参数的作用，请勿修改
     - '*.lan'
     - localhost.ptlogin2.qq.com
     - 'dns.msftncsi.com'
     - 'www.msftncsi.com'
     - 'www.msftconnecttest.com'
  nameserver:
     - 223.5.5.5
     - 114.114.114.114
  fallback:
     - 8.8.8.8
     - 1.1.1.1
     - tls://1.0.0.1:853
{% else %} #如果没有clash.dns=cfw则使用
dns:
  enable: true
  enhanced-mode: fake-ip
  listen: 127.0.0.1:5450 #原clasha的dns接口，配合adg使用
  fake-ip-filter: # fake ip 白名单列表，如果你不知道这个参数的作用，请勿修改
     - '*.lan'
     - localhost.ptlogin2.qq.com
     - 'dns.msftncsi.com'
     - 'www.msftncsi.com'
     - 'www.msftconnecttest.com'
  nameserver:
     - 223.5.5.5
     - 114.114.114.114
  fallback:
     - 8.8.8.8
     - 1.1.1.1
     - tls://1.0.0.1:853
{% endif %}
{% if request.clash.tap == "1" %} #有clash.tap时，启用wlan参数
experimental:
  interface-name: WLAN
{% endif %}
{% if local.clash.new_field_name == "true" %}
proxies: ~
proxy-groups: ~
rules: ~
{% else %}
Proxy: ~
Proxy Group: ~
Rule: ~
{% endif %}

{% endif %}



{% if request.target == "surfboard" %}

[General]
loglevel = notify #日志级别
interface = 127.0.0.1
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local #绕过ip
ipv6 = false
dns-server = system, 223.5.5.5, 8.8.8.8 #dns设置
exclude-simple-hostnames = true
enhanced-mode-by-rule = true
{% endif %}

```

</details>

<details>
<summary><b style="color:#B47CFD">模板参数调用说明</b></summary>
模板内的常用写法有以下几类：

> 各种判断可以嵌套使用，但需要确保逻辑关系没有问题，即有 `if` 就要有 `endif`
>
> 更多的使用方式可以参照 [INJA 语法](https://github.com/pantor/inja)

1. 取值

   ```inja
   {{ global.clash.http_port }}
   # 获取 配置文件 中 clash.http_port 的值
   ```

1. 单判断

   ```inja
   {% if request.clash.dns == "1" %}
   ···
   {% endif %}
   # 如果 URL 中的 clash.dns=1 时，判断成立
   ```

1. 或判断

   ```inja
   {% if request.target == "clash" or request.target == "clashr" %}
   ···
   {% endif %}
   # 如果 URL 中的 target 为 clash 或者 clashr 时，判断成立
   ```

1. 如果...否则...

   ```inja
   {% if local.clash.new_field_name == "true" %}
   proxies: ~
   proxy-groups: ~
   rules: ~
   {% else %}
   Proxy: ~
   Proxy Group: ~
   Rule: ~
   {% endif %}
   # 如果 外部配置中 clash.new_field_name=true 时，启用 新的 Clash 块名称，否则使用旧的名称
   ```

1. 如果存在...则...(可避免请求中无对应参数时发生的报错)

   ```inja
   {% if exists("request.clash.dns") %}
   dns:
     enabled: true
     listen: 1053
   {% endif %}
   # 如果 URL 中存在对 clash.dns 参数的任意指定时，判断成立 (可以和 如果···否则··· 等判断一起使用)
   ```

模板内的引用有以下几类：

1. 从 配置文件 中获取，判断前缀为 `global`

   ```inja
   socks-port: {{ global.clash.socks_port }}
   # 当配置文件中设定了 `clash.socks_port` 值时，将被引用
   ```

1. 从 外部配置 中获取，判断前缀为 `local`

   ```inja
   {% if local.clash.new_field_name =="true" %}
   ···
   {% endif %}
   # 当外部配置中设定了 `clash.new_field_name=true` 时，该判断生效，其包含的···内容被引用
   ```

1. 从 URL 链接中获取，判断前缀为 `request`，例如 `http://127.0.0.1:25500/sub?target=clash&url=www.xxx.com&clash.dns=1`

   - 从 URL 中所获得**包含**在 [进阶链接](#进阶链接) 内的参数进行判断

     ```inja
     {% if request.target == "clash" %}
     ···
     {% endif %}
     # 当 target=clash 时，该判断生效，其包含的··· 内容被引用
     ```

   - 从 URL 中所获得**不包含**在 [进阶链接](#进阶链接) 内的参数进行判断 (从上述链接可以看出 clash.dns 属于额外参数)

     ```inja
     {% if request.clash.dns == "1" %}
     dns:
       enabled: true
       listen: 1053
     {% endif %}
     # 当 clash.dns=1 时，该判断生效，其包含的 dns 内容被引用
     ```

#### 直接渲染

在对模板功能进行调试或需要直接对模板进行渲染时，此时可以使用以下方式进行调用

``` txt
http://127.0.0.1:25500/render?path=xxx&额外的调试或控制参数
```

此处 `path` 需要在 [配置文件](#配置文件) 中 `template_path` 所限定的路径内

</details>

## 在线 api 挂 vps

### 上传并启动 sub 程序

```
./sub(程序名称)
```

### 保持后台运行

```
./sub &
disown
```

> 此时 sub 程序就被移入后台列表了

### 查看进程

```
ps命令查找与进程相关的PID号
ps a 显示现行终端机下的所有程序，包括其他用户的程序。
ps -A 显示所有程序(可以找到sub程序)

杀死程序kill xxx
强制杀死kill -9 xxx
```
