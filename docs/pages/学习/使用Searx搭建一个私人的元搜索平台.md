## 使用Searx搭建一个私人的元搜索平台


**说明：**现在百毒各种犀利操作导致很多人都转向了谷歌，不过由于谷歌在国内被墙，对一些人来说访问起来是有点困难的，除了挂梯子以外，反代谷歌也可以，很久前就发过这种教程→[传送门](https://www.moerats.com/archives/445/)，不过最近找到了个好项目`Searx`，一个基于`Python`的完全开源免费搜索引擎平台，为你提供来自`Google`、`Bing`、`Yahoo`等`70`多种各大视频、图片、搜索、磁力等网站结果展示，并对搜索结果进行优化，同时不会存储你的任何搜索信息，搭建也很方便，有兴趣的可以搭建给需要谷歌的同事或朋友用下。

## 截图

![https://www.moerats.com/usr/picture/Searx(1).png](https://www.moerats.com/usr/picture/Searx(1).png)

![https://www.moerats.com/usr/picture/Searx(2).png](https://www.moerats.com/usr/picture/Searx(2).png)

## 手动安装

**项目地址：**[https://github.com/asciimoo/searx](https://github.com/asciimoo/searx)

**1、安装pip**

```
#CentOS 6.x 32位
rpm -ivh http://dl.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
yum install -y python-pip

#CentOS 6.x 64位
rpm -ivh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
yum install -y python-pip

#CentOS 7.x
yum install -y epel-release
yum install -y python-pip
#如果CentOS 7安装出现No package python-pip available，可以用以下命令进行安装
wget https://bootstrap.pypa.io/get-pip.py
python get-pip.py

#Debian/Ubuntu系统
apt-get -y update
apt-get -y install python-pip 
```

**2、安装git**

```
#Debian/Ubuntu系统
apt-get -y install git

#CentOS系统
yum -y install git 
```

**3、编辑Searx**

```
#拉取源码
git clone https://github.com/asciimoo/searx.git
#安装依赖
cd searx
pip install -r requirements.txt
#编辑配置文件
nano searx/settings.yml
```

修改名称什么参数，应该都看的懂，自行设置，这里只说下`4`种参数：

```python
language：为搜索语言，默认en-US，如果你的搜索以中文为主，那就改成zh-CN，当然这个语言在搜索界面也可以设置
port：为监听端口，默认8888，可自行修改。
bind_address：为监控地址，默认为127.0.0.1，如果需要让ip地址能被外网访问，就修改为0.0.0.0，这里建议默认，然后再用域名反代即可。
secret_key：该参数为加密密匙，可自行设置，数值可以在ssh客户端使用openssl rand -hex
```

这里你也可以不用`nano`编辑器，直接使用命令修改：

```python
#修改language，默认为中文搜索结果
sed -i 's/language : "en-US"/language : "zh-CN"/g' searx/settings.yml
#修改secret_key （很关键不改用不了）
sed -i "s/ultrasecretkey/`openssl rand -hex 16`/g" searx/settings.yml
#修改bind_address，改了后就可以使用ip访问了，如果你使用域名的话，可以不修改
sed -i 's/bind_address : "127.0.0.1"/bind_address : "0.0.0.0"/g' searx/settings.yml
#修改port，比如修改成8000
sed -i "s/port : 8888/port : 8000/g" searx/settings.yml 
```

更多参数设置可以参考→[传送门](https://github.com/asciimoo/searx/wiki/settings.yml)。

### 4.也可以不用下面的screen，用宝塔的python项目管理器运行

![https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20210209194133.png](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20210209194133.png)

- 4.`screen`

    **4、运行Searx**
    安装`screen`：

    ```
    #CentOS系统
    yum install screen -y

    #Debian/Ubuntu系统
    apt-get install screen -y
    ```

    后台运行：

    ```
    screen -dmS searx python searx/webapp.py
    ```

    然后使用`ip:port`访问，如果你的`bind_address`地址没修改，可能浏览器会访问不了，就需要反代了，方法后面会说。

    如果你修改了`bind_address`地址为`0.0.0.0`，还打不开媒体界面的话，还需要开启防火墙端口，使用命令：

    ```
    #CentOS 6
    iptables -I INPUT -p tcp --dport 8888 -j ACCEPT
    service iptables save
    service iptables restart

    #CentOS 7
    firewall-cmd --zone=public --add-port=8888/tcp --permanent
    firewall-cmd --reload 
    ```

    如果你开了端口还不能打开，可能还需要去服务商后台开启对应的端口。

- Docker安装

    这里貌似用官方的`Dockerfile`文件构建镜像的时候会报错，所以博主自己写了个`Dockerfile`文件，安装也很快。

    **Github地址：**[https://github.com/iiiiiii1/Docker-Searx](https://github.com/iiiiiii1/Docker-Searx)

    **1、安装Docker**

    ```
    #CentOS 6
    rpm -iUvh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
    yum update -y
    yum -y install docker-io
    service docker start
    chkconfig docker on

    #CentOS 7、Debian、Ubuntu
    curl -sSL https://get.docker.com/ | sh
    systemctl start docker
    systemctl enable docker 
    ```

    **2、安装git**

    ```
    #Debian/Ubuntu系统
    apt-get -y install git

    #CentOS系统
    yum -y install git 
    ```

    **3、构建镜像**

    ```
    #拉取源码
    git clone https://github.com/iiiiiii1/Docker-Searx
    #构建镜像，搜索语言默认已改成中文
    cd Docker-Searx
    docker build -t searx . 
    ```

    **4、启动镜像**

    ```
    docker run -d --name searx -p 8888:8888 searx 
    ```

    启动命令被我简化了，详细可参考→[传送门](https://github.com/asciimoo/searx/wiki/Installation#with-docker)，然后使用`ip:8888`，访问即可，映射端口可自行修改，比如`-p 8000:8888`。

## 域名反代（任选其一）

这里是建议使用域名反代的，反代可以用`Nginx`、`Apache`、`Caddy`，这里只说宝塔和`Caddy`。如果你网站有宝塔，就可以使用宝塔进行反代，如果没有，建议使用第`2`种的`Caddy`反代，配置很快。

**1、宝塔反代**
先进入宝塔面板，然后点击左侧网站，添加站点，然后再点击添加好了的域名名称，这时候就进入了站点配置，点击反向代理，目标`URL`填入`http://127.0.0.1:8888`，再启用反向代理即可。至于启用`SSL`就不说了，直接在站点配置就可以启用。

- **其他反代**
    - **2、Caddy反代**
    安装`Caddy`：

        ```
        wget -N --no-check-certificate https://raw.githubusercontent.com/iiiiiii1/doubi/master/caddy_install.sh && chmod +x caddy_install.sh && bash caddy_install.sh
        #备用地址
        wget -N --no-check-certificate https://www.moerats.com/usr/shell/Caddy/caddy_install.sh && chmod +x caddy_install.sh && bash caddy_install.sh 
        ```

        配置`Caddy`：

        ```
        #以下全部内容是一个整体，请修改域名后一起复制到SSH运行！

        #http访问，该配置不会自动签发SSL
        echo "www.moerats.com {
         gzip
         proxy / 127.0.0.1:8888 {
            header_upstream Host {host}
            header_upstream X-Real-IP {remote}
            header_upstream X-Forwarded-For {remote}
            header_upstream X-Forwarded-Port {server_port}
            header_upstream X-Forwarded-Proto {scheme}
          }
        }" > /usr/local/caddy/Caddyfile

        #https访问，该配置会自动签发SSL，请提前解析域名到VPS服务器
        echo "www.moerats.com {
         gzip
         tls admin@moerats.com
         proxy / 127.0.0.1:8888 {
            header_upstream Host {host}
            header_upstream X-Real-IP {remote}
            header_upstream X-Forwarded-For {remote}
            header_upstream X-Forwarded-Port {server_port}
            header_upstream X-Forwarded-Proto {scheme}
          }
        }" > /usr/local/caddy/Caddyfile 
        ```

        `tls`参数会自动帮你签发`ssl`证书，如果你要使用自己的`ssl`，改为`tls /root/xx.crt /root/xx.key`即可。后面为`ssl`证书路径。

        启动`Caddy`：

        ```
        /etc/init.d/caddy start
        ```

        就可以打开域名进行访问了。

    - **3、Nginx配置**
    如果你使用其它的，这里就大概发个`Nginx`反代配置，直接添加到配置文件即可。

        ```
        #在配置文件里添加
          location / {
              proxy_pass http://127.0.0.1:8888;
              proxy_set_header        Host                 $host;
              proxy_set_header        X-Real-IP            $remote_addr;
              proxy_set_header        X-Forwarded-For      $proxy_add_x_forwarded_for;
              proxy_set_header        X-Remote-Port        $remote_port;
              proxy_set_header        X-Forwarded-Proto    $scheme;
              proxy_redirect          off;
          } 
        ```

        最后使用的时候，记得在高级设置那里将搜索语言设置成你需要的就行了，不然搜出来的结果可能不会让你满意。

        如果想设置匿名访问，可以查看该教程→[传送门](https://www.moerats.com/archives/922/)，参考配置匿名访问即可。

- **设置备份**

    ```yaml
    general:
        debug : False # Debug mode, only for development
        instance_name : "searx" # displayed name
        contact_url: False # mailto:contact@example.com

    brand:
        git_url: https://github.com/searx/searx
        git_branch: master
        issue_url: https://github.com/searx/searx/issues
        docs_url: https://searx.github.io/searx
        public_instances: https://searx.space
        wiki_url: https://github.com/searx/searx/wiki
        twitter_url: https://twitter.com/Searx_engine

    search:
        safe_search : 0 # Filter results. 0: None, 1: Moderate, 2: Strict
        autocomplete : "google" # Existing autocomplete backends: "dbpedia", "duckduckgo", "google", "startpage", "swisscows", "qwant", "wikipedia" - leave blank to turn it off by default
        default_lang : "zh-CN" # Default search language - leave blank to detect from browser information or use codes from 'languages.py'
        ban_time_on_fail : 5 # ban time in seconds after engine errors
        max_ban_time_on_fail : 120 # max ban time in seconds after engine errors

    server:
        port : 8008
        bind_address : "127.0.0.1" # address to listen on
        secret_key : "1c8c99221e6c7012ec3fd8c59a3ac074" # change this!
        base_url : False # Set custom base_url. Possible values: False or "https://your.custom.host/location/"
        image_proxy : False # Proxying image results through searx
        http_protocol_version : "1.0"  # 1.0 and 1.1 are supported
        method: "POST" # POST queries are more secure as they don't show up in history but may cause problems when using Firefox containers
        default_http_headers:
            X-Content-Type-Options : nosniff
            X-XSS-Protection : 1; mode=block
            X-Download-Options : noopen
            X-Robots-Tag : noindex, nofollow
            Referrer-Policy : no-referrer

    ui:
        static_path : "" # Custom static path - leave it blank if you didn't change
        templates_path : "" # Custom templates path - leave it blank if you didn't change
        default_theme : oscar # ui theme
        default_locale : "" # Default interface locale - leave blank to detect from browser information or use codes from the 'locales' config section
        theme_args :
            oscar_style : logicodev # default style of oscar
    #   results_on_new_tab: False  # Open result links in a new tab by default
    #   categories_order :
    #     - general
    #     - files
    #     - map
    #     - it
    #     - science

    # Lock arbitrary settings on the preferences page.
    # To find the ID of the user setting you want to lock, check
    # the ID of the form on the page "preferences".
    #preferences:
    #    lock:
    #      - language
    #      - autocomplete
    #      - method

    # searx supports result proxification using an external service: https://github.com/asciimoo/morty
    # uncomment below section if you have running morty proxy
    # the key is base64 encoded (keep the !!binary notation)
    # Note: since commit af77ec3, morty accepts a base64 encoded key.
    #result_proxy:
    #    url : http://127.0.0.1:3000/
    #    key : !!binary "your_morty_proxy_key"

    outgoing: # communication with search engines
        request_timeout : 2.0 # default timeout in seconds, can be override by engine
        # max_request_timeout: 10.0 # the maximum timeout in seconds
        useragent_suffix : "" # suffix of searx_useragent, could contain informations like an email address to the administrator
        pool_connections : 100 # Number of different hosts
        pool_maxsize : 10 # Number of simultaneous requests by host
    # uncomment below section if you want to use a proxy
    # see https://2.python-requests.org/en/latest/user/advanced/#proxies
    # SOCKS proxies are also supported: see https://2.python-requests.org/en/latest/user/advanced/#socks
    #    proxies:
    #        http:
    #            - http://proxy1:8080
    #            - http://proxy2:8080
    #        https:
    #            - http://proxy1:8080
    #            - http://proxy2:8080
    # uncomment below section only if you have more than one network interface
    # which can be the source of outgoing search requests
    #    source_ips:
    #        - 1.1.1.1
    #        - 1.1.1.2

    # External plugin configuration
    # See http://searx.github.io/searx/dev/plugins.html for more details
    #
    # plugins:
    #   - plugin1
    #   - plugin2
    #   - ...

    # uncomment below section if you want to configure which plugin is enabled by default
    #
    # enabled_plugins:
    #   - "HTTPS rewrite"
    #   - ...

    checker:
        # disable checker when in debug mode
        off_when_debug: True

        # scheduling: interval or int
        # use "scheduling: False" to disable scheduling
        # to activate the scheduler:
        # * uncomment "scheduling" section
        # * add "cache2 = name=searxcache,items=2000,blocks=2000,blocksize=4096,bitmap=1" to your uwsgi.ini

        # scheduling:
        #    start_after: [300, 1800]  # delay to start the first run of the checker
        #    every: [86400, 90000]  # how often the checker runs

        # additional tests: only for the YAML anchors (see the engines section)

        additional_tests:
          rosebud: &test_rosebud
            matrix:
              query: rosebud
              lang: en
            result_container:
              - not_empty
              - ['one_title_contains', 'citizen kane']
            test:
              - unique_results

          android: &test_android
            matrix:
              query: ['android']
              lang: ['en', 'de', 'fr', 'zh-CN']
            result_container:
              - not_empty
              - ['one_title_contains', 'google']
            test:
              - unique_results

        # tests: only for the YAML anchors (see the engines section)
        tests:
          infobox: &tests_infobox
            infobox:
              matrix:
                query: ["linux", "new york", "bbc"]
              result_container:
                - has_infobox

    engines:
      - name: apk mirror
        engine: apkmirror
        timeout: 4.0
        shortcut: apkm
        disabled: True

    # Requires Tor
      - name : ahmia
        engine : ahmia
        categories : onions
        shortcut : ah

      - name : arch linux wiki
        engine : archlinux
        shortcut : al

      - name : archive is
        engine : xpath
        search_url : https://archive.is/{query}
        url_xpath : (//div[@class="TEXT-BLOCK"]/a)/@href
        title_xpath : (//div[@class="TEXT-BLOCK"]/a)
        content_xpath : //div[@class="TEXT-BLOCK"]/ul/li
        categories : general
        timeout : 7.0
        disabled : True
        shortcut : ai
        about:
          website: https://archive.is/
          wikidata_id: Q13515725
          official_api_documentation: http://mementoweb.org/depot/native/archiveis/
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : arxiv
        engine : arxiv
        shortcut : arx
        categories : science
        timeout : 4.0

    #  tmp suspended:  dh key too small
    #  - name : base
    #    engine : base
    #    shortcut : bs

      - name : wikipedia
        engine : wikipedia
        shortcut : wp
        base_url : 'https://{language}.wikipedia.org/'

      - name : bing
        engine : bing
        shortcut : bi

      - name : bing images
        engine : bing_images
        shortcut : bii

      - name : bing news
        engine : bing_news
        shortcut : bin

      - name : bing videos
        engine : bing_videos
        shortcut : biv

      - name : bitbucket
        engine : xpath
        paging : True
        search_url : https://bitbucket.org/repo/all/{pageno}?name={query}
        url_xpath : //article[@class="repo-summary"]//a[@class="repo-link"]/@href
        title_xpath : //article[@class="repo-summary"]//a[@class="repo-link"]
        content_xpath : //article[@class="repo-summary"]/p
        categories : it
        timeout : 4.0
        disabled : True
        shortcut : bb
        about:
          website: https://bitbucket.org/
          wikidata_id: Q2493781
          official_api_documentation: https://developer.atlassian.com/bitbucket
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : btdigg
        engine : btdigg
        shortcut : bt

      - name : ccc-tv
        engine : xpath
        paging : False
        search_url : https://media.ccc.de/search/?q={query}
        url_xpath : //div[@class="caption"]/h3/a/@href
        title_xpath : //div[@class="caption"]/h3/a/text()
        content_xpath : //div[@class="caption"]/h4/@title
        categories : videos
        disabled : True
        shortcut : c3tv
        about:
          website: https://media.ccc.de/
          wikidata_id: Q80729951
          official_api_documentation: https://github.com/voc/voctoweb
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : ccengine
        engine : ccengine
        categories : images
        shortcut : cce

      - name : crossref
        engine : json_engine
        paging : True
        search_url : https://search.crossref.org/dois?q={query}&page={pageno}
        url_query : doi
        title_query : title
        content_query : fullCitation
        categories : science
        shortcut : cr
        about:
          website: https://www.crossref.org/
          wikidata_id: Q5188229
          official_api_documentation: https://github.com/CrossRef/rest-api-doc
          use_official_api: false
          require_api_key: false
          results: JSON

      - name : currency
        engine : currency_convert
        categories : general
        shortcut : cc
        disabled : True

      - name : deezer
        engine : deezer
        shortcut : dz

      - name : deviantart
        engine : deviantart
        shortcut : da
        timeout : 3.0

      - name : ddg definitions
        engine : duckduckgo_definitions
        shortcut : ddd
        weight : 2
        disabled : True
        tests: *tests_infobox

    # cloudflare protected
    #  - name : digbt
    #    engine : digbt
    #    shortcut : dbt
    #    timeout : 6.0
    #    disabled : True

      - name : digg
        engine : digg
        shortcut : dg

      - name : erowid
        engine : xpath
        paging : True
        first_page_num : 0
        page_size : 30
        search_url : https://www.erowid.org/search.php?q={query}&s={pageno}
        url_xpath : //dl[@class="results-list"]/dt[@class="result-title"]/a/@href
        title_xpath : //dl[@class="results-list"]/dt[@class="result-title"]/a/text()
        content_xpath : //dl[@class="results-list"]/dd[@class="result-details"]
        categories : general
        shortcut : ew
        disabled : True
        about:
          website: https://www.erowid.org/
          wikidata_id: Q1430691
          official_api_documentation:
          use_official_api: false
          require_api_key: false
          results: HTML

    #  - name : elasticsearch
    #    shortcut : es
    #    engine : elasticsearch
    #    base_url : http://localhost:9200
    #    username : elastic
    #    password : changeme
    #    index : my-index
    #    # available options: match, simple_query_string, term, terms, custom
    #    query_type : match
    #    # if query_type is set to custom, provide your query here
    #    #custom_query_json: {"query":{"match_all": {}}}
    #    #show_metadata: False
    #    disabled : True

      - name : wikidata
        engine : wikidata
        shortcut : wd
        timeout : 3.0
        weight : 2
        tests: *tests_infobox

      - name : duckduckgo
        engine : duckduckgo
        shortcut : ddg
        disabled : True

      - name : duckduckgo images
        engine : duckduckgo_images
        shortcut : ddi
        timeout: 3.0
        disabled : True

      - name : etools
        engine : etools
        shortcut : eto
        disabled : True
        additional_tests:
          rosebud: *test_rosebud

      - name : etymonline
        engine : xpath
        paging : True
        search_url : https://etymonline.com/search?page={pageno}&q={query}
        url_xpath : //a[contains(@class, "word__name--")]/@href
        title_xpath : //a[contains(@class, "word__name--")]
        content_xpath : //section[contains(@class, "word__defination")]
        first_page_num : 1
        shortcut : et
        disabled : True
        about:
          website: https://www.etymonline.com/
          wikidata_id: Q1188617
          official_api_documentation:
          use_official_api: false
          require_api_key: false
          results: HTML

    #  - name : ebay
    #    engine : ebay
    #    shortcut : eb
    #    disabled : True
    #    timeout: 5

      - name : 1x
        engine : www1x
        shortcut : 1x
        timeout : 3.0
        disabled : True

      - name : fdroid
        engine : fdroid
        shortcut : fd
        disabled : True

      - name : flickr
        categories : images
        shortcut : fl
    # You can use the engine using the official stable API, but you need an API key
    # See : https://www.flickr.com/services/apps/create/
    #    engine : flickr
    #    api_key: 'apikey' # required!
    # Or you can use the html non-stable engine, activated by default
        engine : flickr_noapi

      - name : free software directory
        engine : mediawiki
        shortcut : fsd
        categories : it
        base_url : https://directory.fsf.org/
        number_of_results : 5
    # what part of a page matches the query string: title, text, nearmatch
    # title - query matches title, text - query matches the text of page, nearmatch - nearmatch in title
        search_type : title
        timeout : 5.0
        disabled : True
        about:
          website: https://directory.fsf.org/
          wikidata_id: Q2470288

      - name : frinkiac
        engine : frinkiac
        shortcut : frk
        disabled : True

      - name : genius
        engine : genius
        shortcut : gen

      - name : gigablast
        engine : gigablast
        shortcut : gb
        timeout : 3.0
        disabled: True
        additional_tests:
          rosebud: *test_rosebud

      - name : gentoo
        engine : gentoo
        shortcut : ge

      - name : gitlab
        engine : json_engine
        paging : True
        search_url : https://gitlab.com/api/v4/projects?search={query}&page={pageno}
        url_query : web_url
        title_query : name_with_namespace
        content_query : description
        page_size : 20
        categories : it
        shortcut : gl
        timeout : 10.0
        disabled : True
        about:
          website: https://about.gitlab.com/
          wikidata_id: Q16639197
          official_api_documentation: https://docs.gitlab.com/ee/api/
          use_official_api: false
          require_api_key: false
          results: JSON

      - name : github
        engine : github
        shortcut : gh

        # This a Gitea service. If you would like to use a different instance,
        # change codeberg.org to URL of the desired Gitea host. Or you can create
        # a new engine by copying this and changing the name, shortcut and search_url.
      - name : codeberg
        engine : json_engine
        search_url : https://codeberg.org/api/v1/repos/search?q={query}&limit=10
        url_query : html_url
        title_query : name
        content_query : description
        categories : it
        shortcut : cb
        disabled : True
        about:
          website: https://codeberg.org/
          wikidata_id:
          official_api_documentation: https://try.gitea.io/api/swagger
          use_official_api: false
          require_api_key: false
          results: JSON

      - name : google
        engine : google
        shortcut : go
        # additional_tests:
        #   android: *test_android

      - name : google images
        engine : google_images
        shortcut : goi
        # additional_tests:
        #   android: *test_android
        #   dali:
        #     matrix:
        #       query: ['Dali Christ']
        #       lang: ['en', 'de', 'fr', 'zh-CN']
        #     result_container:
        #       - ['one_title_contains', 'Salvador']

      - name : google news
        engine : google_news
        shortcut : gon
        # additional_tests:
        #   android: *test_android

      - name : google videos
        engine : google_videos
        shortcut : gov
        # additional_tests:
        #   android: *test_android

      - name : google scholar
        engine : xpath
        paging : True
        search_url : https://scholar.google.com/scholar?start={pageno}&q={query}&hl=en&as_sdt=0,5&as_vis=1
        results_xpath : //div[contains(@class, "gs_r")]/div[@class="gs_ri"]
        url_xpath : .//h3/a/@href
        title_xpath : .//h3/a
        content_xpath : .//div[@class="gs_rs"]
        suggestion_xpath : //div[@id="gs_res_ccl_top"]//a/b
        page_size : 10
        first_page_num : 0
        categories : science
        shortcut : gos
        about:
          website: https://scholar.google.com/
          wikidata_id: Q494817
          official_api_documentation:
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : google play apps
        engine : xpath
        search_url : https://play.google.com/store/search?q={query}&c=apps
        results_xpath : '//div[@class="WHE7ib mpg5gc"]'
        title_xpath : './/div[@class="RZEgze"]//div[@title and not(@title="")]/a'
        url_xpath : './/div[@class="RZEgze"]//div[@title and not(@title="")]/a/@href'
        content_xpath : './/div[@class="RZEgze"]//a[@class="mnKHRc"]'
        thumbnail_xpath : './/div[@class="uzcko"]/div/span[1]//img/@data-src'
        categories : files
        shortcut : gpa
        disabled : True
        about:
          website: https://play.google.com/
          wikidata_id: Q79576
          official_api_documentation:
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : google play movies
        engine : xpath
        search_url : https://play.google.com/store/search?q={query}&c=movies
        results_xpath : '//div[@class="WHE7ib mpg5gc"]'
        title_xpath : './/div[@class="RZEgze"]//div[@title and not(@title="")]/a'
        url_xpath : './/div[@class="RZEgze"]//div[@title and not(@title="")]/a/@href'
        content_xpath : './/div[@class="RZEgze"]//a[@class="mnKHRc"]'
        thumbnail_xpath : './/div[@class="uzcko"]/div/span[1]//img/@data-src'
        categories : videos
        shortcut : gpm
        disabled : True
        about:
          website: https://play.google.com/
          wikidata_id: Q79576
          official_api_documentation:
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : google play music
        engine : xpath
        search_url : https://play.google.com/store/search?q={query}&c=music
        results_xpath : '//div[@class="WHE7ib mpg5gc"]'
        title_xpath : './/div[@class="RZEgze"]//div[@title and not(@title="")]/a'
        url_xpath : './/div[@class="RZEgze"]//div[@title and not(@title="")]/a/@href'
        content_xpath : './/div[@class="RZEgze"]//a[@class="mnKHRc"]'
        thumbnail_xpath : './/div[@class="uzcko"]/div/span[1]//img/@data-src'
        categories : music
        shortcut : gps
        disabled : True
        about:
          website: https://play.google.com/
          wikidata_id: Q79576
          official_api_documentation:
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : geektimes
        engine : xpath
        paging : True
        search_url : https://geektimes.ru/search/page{pageno}/?q={query}
        url_xpath : //article[contains(@class, "post")]//a[@class="post__title_link"]/@href
        title_xpath : //article[contains(@class, "post")]//a[@class="post__title_link"]
        content_xpath : //article[contains(@class, "post")]//div[contains(@class, "post__text")]
        categories : it
        timeout : 4.0
        disabled : True
        shortcut : gt
        about:
          website: https://geektimes.ru/
          wikidata_id: Q50572423
          official_api_documentation:
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : habrahabr
        engine : xpath
        paging : True
        search_url : https://habrahabr.ru/search/page{pageno}/?q={query}
        url_xpath : //article[contains(@class, "post")]//a[@class="post__title_link"]/@href
        title_xpath : //article[contains(@class, "post")]//a[@class="post__title_link"]
        content_xpath : //article[contains(@class, "post")]//div[contains(@class, "post__text")]
        categories : it
        timeout : 4.0
        disabled : True
        shortcut : habr
        about:
          website: https://habr.com/
          wikidata_id: Q4494434
          official_api_documentation: https://habr.com/en/docs/help/api/
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : hoogle
        engine : json_engine
        paging : True
        search_url : https://www.haskell.org/hoogle/?mode=json&hoogle={query}&start={pageno}
        results_query : results
        url_query : location
        title_query : self
        content_query : docs
        page_size : 20
        categories : it
        shortcut : ho
        about:
          website: https://www.haskell.org/
          wikidata_id: Q34010
          official_api_documentation: https://hackage.haskell.org/api
          use_official_api: false
          require_api_key: false
          results: JSON

      - name : ina
        engine : ina
        shortcut : in
        timeout : 6.0
        disabled : True

      - name : invidious
        engine : invidious
        base_url :
          - https://invidious.tube/
          - https://invidious.snopyta.org/
        shortcut: iv
        timeout : 5.0
        disabled : True

      - name: kickass
        engine : kickass
        shortcut : kc
        timeout : 4.0
        disabled : True

      - name : library genesis
        engine : xpath
        search_url : http://libgen.rs/search.php?req={query}
        url_xpath : //a[contains(@href,"bookfi.net/md5")]/@href
        title_xpath : //a[contains(@href,"book/")]/text()[1]
        content_xpath : //td/a[1][contains(@href,"=author")]/text()
        categories : general
        timeout : 7.0
        disabled : True
        shortcut : lg
        about:
          website: http://libgen.rs/
          wikidata_id: Q22017206
          official_api_documentation:
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : lobste.rs
        engine : xpath
        search_url : https://lobste.rs/search?utf8=%E2%9C%93&q={query}&what=stories&order=relevance
        results_xpath : //li[contains(@class, "story")]
        url_xpath : .//a[@class="u-url"]/@href
        title_xpath : .//a[@class="u-url"]
        content_xpath : .//a[@class="domain"]
        categories : it
        shortcut : lo
        timeout : 3.0
        disabled: True
        about:
          website: https://lobste.rs/
          wikidata_id: Q60762874
          official_api_documentation:
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : microsoft academic
        engine : microsoft_academic
        categories : science
        shortcut : ma

      - name : mixcloud
        engine : mixcloud
        shortcut : mc

      - name : npm
        engine : json_engine
        paging : True
        search_url : https://api.npms.io/v2/search?q={query}&size=25&from={pageno}
        results_query : results
        url_query : package/links/npm
        title_query : package/name
        content_query : package/description
        page_size : 25
        categories : it
        disabled: True
        timeout: 5.0
        shortcut : npm
        about:
          website: https://npms.io/
          wikidata_id: Q7067518
          official_api_documentation: https://api-docs.npms.io/
          use_official_api: false
          require_api_key: false
          results: JSON

    # Requires Tor
      - name : not evil
        engine : not_evil
        shortcut : ne

      - name : nyaa
        engine : nyaa
        shortcut : nt
        disabled : True

      - name : acgsou
        engine : acgsou
        shortcut : acg
        disabled : True
        timeout: 5.0

      - name : openairedatasets
        engine : json_engine
        paging : True
        search_url : https://api.openaire.eu/search/datasets?format=json&page={pageno}&size=10&title={query}
        results_query : response/results/result
        url_query : metadata/oaf:entity/oaf:result/children/instance/webresource/url/$
        title_query : metadata/oaf:entity/oaf:result/title/$
        content_query : metadata/oaf:entity/oaf:result/description/$
        categories : science
        shortcut : oad
        timeout: 5.0
        about:
          website: https://www.openaire.eu/
          wikidata_id: Q25106053
          official_api_documentation: https://api.openaire.eu/
          use_official_api: false
          require_api_key: false
          results: JSON

      - name : openairepublications
        engine : json_engine
        paging : True
        search_url : https://api.openaire.eu/search/publications?format=json&page={pageno}&size=10&title={query}
        results_query : response/results/result
        url_query : metadata/oaf:entity/oaf:result/children/instance/webresource/url/$
        title_query : metadata/oaf:entity/oaf:result/title/$
        content_query : metadata/oaf:entity/oaf:result/description/$
        categories : science
        shortcut : oap
        timeout: 5.0
        about:
          website: https://www.openaire.eu/
          wikidata_id: Q25106053
          official_api_documentation: https://api.openaire.eu/
          use_official_api: false
          require_api_key: false
          results: JSON

    #  - name : opensemanticsearch
    #    engine : opensemantic
    #    shortcut : oss
    #    base_url : 'http://localhost:8983/solr/opensemanticsearch/'

      - name : openstreetmap
        engine : openstreetmap
        shortcut : osm

      - name : openrepos
        engine : xpath
        paging : True
        search_url : https://openrepos.net/search/node/{query}?page={pageno}
        url_xpath : //li[@class="search-result"]//h3[@class="title"]/a/@href
        title_xpath : //li[@class="search-result"]//h3[@class="title"]/a
        content_xpath : //li[@class="search-result"]//div[@class="search-snippet-info"]//p[@class="search-snippet"]
        categories : files
        timeout : 4.0
        disabled : True
        shortcut : or
        about:
          website: https://openrepos.net/
          wikidata_id:
          official_api_documentation:
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : pdbe
        engine : pdbe
        shortcut : pdb
    # Hide obsolete PDB entries.
    # Default is not to hide obsolete structures
    #    hide_obsolete : False

      - name : photon
        engine : photon
        shortcut : ph

      - name : piratebay
        engine : piratebay
        shortcut : tpb
        # You may need to change this URL to a proxy if piratebay is blocked in your country
        url: https://thepiratebay.org/
        timeout : 3.0

      - name : pubmed
        engine : pubmed
        shortcut : pub
        categories: science
        timeout : 3.0

      - name : qwant
        engine : qwant
        shortcut : qw
        categories : general
        disabled : True
        additional_tests:
          rosebud: *test_rosebud

      - name : qwant images
        engine : qwant
        shortcut : qwi
        categories : images

      - name : qwant news
        engine : qwant
        shortcut : qwn
        categories : news

    #  - name: library
    #    engine: recoll
    #    shortcut: lib
    #    base_url: 'https://recoll.example.org/'
    #    search_dir: ''
    #    mount_prefix: /export
    #    dl_prefix: 'https://download.example.org'
    #    timeout: 30.0
    #    categories: files
    #    disabled: True

    #  - name: recoll library reference
    #    engine: recoll
    #    base_url: 'https://recoll.example.org/'
    #    search_dir: reference
    #    mount_prefix: /export
    #    dl_prefix: 'https://download.example.org'
    #    shortcut: libr
    #    timeout: 30.0
    #    categories: files
    #    disabled: True

      - name : reddit
        engine : reddit
        shortcut : re
        page_size : 25
        timeout : 10.0
        disabled : True

    # tmp suspended: bad certificate
    #  - name : scanr structures
    #    shortcut: scs
    #    engine : scanr_structures
    #    disabled : True

      - name: sepiasearch
        engine: sepiasearch
        shortcut: sep

      - name : soundcloud
        engine : soundcloud
        shortcut : sc

      - name : stackoverflow
        engine : stackoverflow
        shortcut : st

      - name : searchcode code
        engine : searchcode_code
        shortcut : scc
        disabled : True

      - name : framalibre
        engine : framalibre
        shortcut : frl
        disabled : True

    #  - name : searx
    #    engine : searx_engine
    #    shortcut : se
    #    instance_urls :
    #        - http://127.0.0.1:8888/
    #        - ...
    #    disabled : True

      - name : semantic scholar
        engine : xpath
        paging : True
        search_url : https://www.semanticscholar.org/search?q={query}&sort=relevance&page={pageno}&ae=false
        results_xpath : //article
        url_xpath : .//div[@class="search-result-title"]/a/@href
        title_xpath : .//div[@class="search-result-title"]/a
        content_xpath : .//div[@class="search-result-abstract"]
        shortcut : se
        categories : science
        about:
          website: https://www.semanticscholar.org/
          wikidata_id: Q22908627
          official_api_documentation: https://api.semanticscholar.org/
          use_official_api: false
          require_api_key: false
          results: HTML

    # Spotify needs API credentials
    #  - name : spotify
    #    engine : spotify
    #    shortcut : stf
    #    api_client_id : *******
    #    api_client_secret : *******

      - name : startpage
        engine : startpage
        shortcut : sp
        timeout : 6.0
        disabled : True
        additional_tests:
          rosebud: *test_rosebud

      - name : tokyotoshokan
        engine : tokyotoshokan
        shortcut : tt
        timeout : 6.0
        disabled : True

      - name : torrentz
        engine : torrentz
        shortcut : tor
        url: https://torrentz2.eu/
        timeout : 3.0

    # Requires Tor
      - name : torch
        engine : xpath
        paging : True
        search_url : http://xmh57jrknzkhv6y3ls3ubitzfqnkrwxhopf5aygthi7d6rplyvk3noyd.onion/cgi-bin/omega/omega?P={query}&DEFAULTOP=and
        results_xpath : //table//tr
        url_xpath : ./td[2]/a
        title_xpath : ./td[2]/b
        content_xpath : ./td[2]/small
        categories : onions
        shortcut : tch

    # maybe in a fun category
    #  - name : uncyclopedia
    #    engine : mediawiki
    #    shortcut : unc
    #    base_url : https://uncyclopedia.wikia.com/
    #    number_of_results : 5

    # tmp suspended - too slow, too many errors
    #  - name : urbandictionary
    #    engine        : xpath
    #    search_url    : http://www.urbandictionary.com/define.php?term={query}
    #    url_xpath     : //*[@class="word"]/@href
    #    title_xpath   : //*[@class="def-header"]
    #    content_xpath : //*[@class="meaning"]
    #    shortcut : ud

      - name : unsplash
        engine : unsplash
        disabled: True
        shortcut : us

      - name : yahoo
        engine : yahoo
        shortcut : yh
        disabled : True

      - name : yandex
        engine : yandex
        shortcut : yn

      - name : yahoo news
        engine : yahoo_news
        shortcut : yhn

      - name : youtube
        shortcut : yt
        # You can use the engine using the official stable API, but you need an API key
        # See : https://console.developers.google.com/project
        #    engine : youtube_api
        #    api_key: 'apikey' # required!
        # Or you can use the html non-stable engine, activated by default
        engine : youtube_noapi

      # tmp suspended: Cloudflare CAPTCHA
      #- name : yggtorrent
      #  engine : yggtorrent
      #  shortcut : ygg
      #  url: https://www2.yggtorrent.si/
      #  disabled : True
      #  timeout : 4.0

      - name : dailymotion
        engine : dailymotion
        shortcut : dm

      - name : vimeo
        engine : vimeo
        shortcut : vm

      - name : wiby
        engine : json_engine
        search_url : https://wiby.me/json/?q={query}
        url_query : URL
        title_query : Title
        content_query : Snippet
        categories : general
        shortcut : wib
        disabled : True

      - name : wikibooks
        engine : mediawiki
        shortcut : wb
        categories : general
        base_url : "https://{language}.wikibooks.org/"
        number_of_results : 5
        search_type : text
        disabled : True
        about:
          website: https://www.wikibooks.org/
          wikidata_id: Q367

      - name : wikinews
        engine : mediawiki
        shortcut : wn
        categories : news
        base_url : "https://{language}.wikinews.org/"
        number_of_results : 5
        search_type : text
        disabled : True
        about:
          website: https://www.wikinews.org/
          wikidata_id: Q964

      - name : wikiquote
        engine : mediawiki
        shortcut : wq
        categories : general
        base_url : "https://{language}.wikiquote.org/"
        number_of_results : 5
        search_type : text
        disabled : True
        additional_tests:
          rosebud: *test_rosebud
        about:
          website: https://www.wikiquote.org/
          wikidata_id: Q369

      - name : wikisource
        engine : mediawiki
        shortcut : ws
        categories : general
        base_url : "https://{language}.wikisource.org/"
        number_of_results : 5
        search_type : text
        disabled : True
        about:
          website: https://www.wikisource.org/
          wikidata_id: Q263

      - name : wiktionary
        engine : mediawiki
        shortcut : wt
        categories : general
        base_url : "https://{language}.wiktionary.org/"
        number_of_results : 5
        search_type : text
        disabled : True
        about:
          website: https://www.wiktionary.org/
          wikidata_id: Q151

      - name : wikiversity
        engine : mediawiki
        shortcut : wv
        categories : general
        base_url : "https://{language}.wikiversity.org/"
        number_of_results : 5
        search_type : text
        disabled : True
        about:
          website: https://www.wikiversity.org/
          wikidata_id: Q370

      - name : wikivoyage
        engine : mediawiki
        shortcut : wy
        categories : general
        base_url : "https://{language}.wikivoyage.org/"
        number_of_results : 5
        search_type : text
        disabled : True
        about:
          website: https://www.wikivoyage.org/
          wikidata_id: Q373

      - name : wolframalpha
        shortcut : wa
        # You can use the engine using the official stable API, but you need an API key
        # See : http://products.wolframalpha.com/api/
        # engine : wolframalpha_api
        # api_key: '' # required!
        engine : wolframalpha_noapi
        timeout: 6.0
        categories : science

      - name : dictzone
        engine : dictzone
        shortcut : dc
        disabled : True
        
      - name : mymemory translated
        engine : translated
        shortcut : tl
        timeout : 5.0
        disabled : True
        # You can use without an API key, but you are limited to 1000 words/day
        # See : http://mymemory.translated.net/doc/usagelimits.php
        # api_key : ''

      - name : 1337x
        engine : 1337x
        shortcut : 1337x
        disabled : True

      - name : duden
        engine : duden
        shortcut : du
        disabled : True

      - name : seznam
        shortcut: szn
        engine: xpath
        paging : True
        search_url : https://search.seznam.cz/?q={query}&count=10&from={pageno}
        results_xpath: //div[@class="Page-content"]//div[contains(@class, "Result ")]
        url_xpath : ./h3/a/@href
        title_xpath : ./h3
        content_xpath : .//p[@class="Result-description"]
        suggestion_xpath: //div[@class="Related-container"]//div[@class="RelatedItem"]/div/span/a
        first_page_num : 0
        page_size : 10
        disabled : True
        about:
          website: https://www.seznam.cz/
          wikidata_id: Q3490485
          official_api_documentation: https://api.sklik.cz/
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : mojeek
        shortcut: mjk
        engine: xpath
        paging : True
        search_url : https://www.mojeek.com/search?q={query}&s={pageno}
        results_xpath: /html/body//div[@class="results"]/ul[@class="results-standard"]/li
        url_xpath : ./h2/a/@href
        title_xpath : ./h2
        content_xpath : ./p[@class="s"]
        suggestion_xpath : /html/body//div[@class="top-info"]/p[@class="top-info spell"]/a
        first_page_num : 0
        page_size : 10
        disabled : True
        about:
          website: https://www.mojeek.com/
          wikidata_id: Q60747299
          official_api_documentation: https://www.mojeek.com/services/api.html/
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : naver
        shortcut: nvr
        engine: xpath
        paging : True
        search_url : https://search.naver.com/search.naver?where=webkr&sm=osp_hty&ie=UTF-8&query={query}&start={pageno}
        results_xpath: /html/body//ul[@id="elThumbnailResultArea"]/li
        url_xpath : ./dl/dt/a[@class="title_link"]/@href
        title_xpath : ./dl/dt/a[@class="title_link"]
        content_xpath : ./dl/dd[@class="sh_web_passage"]
        suggestion_xpath : /html/body//div[@class="sp_keyword section"]//a
        first_page_num : 1
        page_size : 10
        disabled : True
        about:
          website: https://www.naver.com/
          wikidata_id: Q485639
          official_api_documentation: https://developers.naver.com/docs/nmt/examples/
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : rubygems
        shortcut: rbg
        engine: xpath
        paging : True
        search_url : https://rubygems.org/search?page={pageno}&query={query}
        results_xpath: /html/body/main/div/a[@class="gems__gem"]
        url_xpath : ./@href
        title_xpath : ./span/h2
        content_xpath : ./span/p
        suggestion_xpath : /html/body/main/div/div[@class="search__suggestions"]/p/a
        first_page_num : 1
        categories: it
        disabled : True
        about:
          website: https://rubygems.org/
          wikidata_id: Q1853420
          official_api_documentation: https://guides.rubygems.org/rubygems-org-api/
          use_official_api: false
          require_api_key: false
          results: HTML

      - name : peertube
        engine: peertube
        shortcut: ptb
        paging : True
        base_url : https://peer.tube/
        categories: videos
        disabled : True

    #  - name : yacy
    #    engine : yacy
    #    shortcut : ya
    #    base_url : 'http://localhost:8090'
    #    number_of_results : 5
    #    timeout : 3.0

    # Doku engine lets you access to any Doku wiki instance:
    # A public one or a privete/corporate one.
    #  - name : ubuntuwiki
    #    engine : doku
    #    shortcut : uw
    #    base_url : 'http://doc.ubuntu-fr.org'

    # Be careful when enabling this engine if you are
    # running a public instance. Do not expose any sensitive
    # information. You can restrict access by configuring a list
    # of access tokens under tokens.
    #  - name: git grep
    #    engine: command
    #    command: ['git', 'grep', '{{QUERY}}']
    #    shortcut: gg
    #    tokens: []
    #    disabled: True
    #    delimiter:
    #        chars: ':'
    #        keys: ['filepath', 'code']

    # Be careful when enabling this engine if you are
    # running a public instance. Do not expose any sensitive
    # information. You can restrict access by configuring a list
    # of access tokens under tokens.
    #  - name: locate
    #    engine: command
    #    command: ['locate', '{{QUERY}}']
    #    shortcut: loc
    #    tokens: []
    #    disabled: True
    #    delimiter:
    #        chars: ' '
    #        keys: ['line']

    # Be careful when enabling this engine if you are
    # running a public instance. Do not expose any sensitive
    # information. You can restrict access by configuring a list
    # of access tokens under tokens.
    #  - name: find
    #    engine: command
    #    command: ['find', '.', '-name', '{{QUERY}}']
    #    query_type: path
    #    shortcut: fnd
    #    tokens: []
    #    disabled: True
    #    delimiter:
    #        chars: ' '
    #        keys: ['line']

    # Be careful when enabling this engine if you are
    # running a public instance. Do not expose any sensitive
    # information. You can restrict access by configuring a list
    # of access tokens under tokens.
    #  - name: pattern search in files
    #    engine: command
    #    command: ['fgrep', '{{QUERY}}']
    #    shortcut: fgr
    #    tokens: []
    #    disabled: True
    #    delimiter:
    #        chars: ' '
    #        keys: ['line']

    # Be careful when enabling this engine if you are
    # running a public instance. Do not expose any sensitive
    # information. You can restrict access by configuring a list
    # of access tokens under tokens.
    #  - name: regex search in files
    #    engine: command
    #    command: ['grep', '{{QUERY}}']
    #    shortcut: gr
    #    tokens: []
    #    disabled: True
    #    delimiter:
    #        chars: ' '
    #        keys: ['line']

    locales:
        en : English
        ar : العَرَبِيَّة (Arabic)
        bg : Български (Bulgarian)
        bo : བོད་སྐད་ (Tibetian)
        ca : Català (Catalan)
        cs : Čeština (Czech)
        cy : Cymraeg (Welsh)
        da : Dansk (Danish)
        de : Deutsch (German)
        el_GR : Ελληνικά (Greek_Greece)
        eo : Esperanto (Esperanto)
        es : Español (Spanish)
        et : Eesti (Estonian)
        eu : Euskara (Basque)
        fa_IR : (fārsī) فارسى (Persian)
        fi : Suomi (Finnish)
        fil : Wikang Filipino (Filipino)
        fr : Français (French)
        gl : Galego (Galician)
        he : עברית (Hebrew)
        hr : Hrvatski (Croatian)
        hu : Magyar (Hungarian)
        ia : Interlingua (Interlingua)
        it : Italiano (Italian)
        ja : 日本語 (Japanese)
        lt : Lietuvių (Lithuanian)
        nl : Nederlands (Dutch)
        nl_BE : Vlaams (Dutch_Belgium)
        oc : Lenga D'òc (Occitan)
        pl : Polski (Polish)
        pt : Português (Portuguese)
        pt_BR : Português (Portuguese_Brazil)
        ro : Română (Romanian)
        ru : Русский (Russian)
        sk : Slovenčina (Slovak)
        sl : Slovenski (Slovene)
        sr : српски (Serbian)
        sv : Svenska (Swedish)
        te : తెలుగు (telugu)
        ta : தமிழ் (Tamil)
        tr : Türkçe (Turkish)
        uk : українська мова (Ukrainian)
        vi : tiếng việt (Vietnamese)
        zh : 中文 (Chinese)
        zh_TW : 國語 (Taiwanese Mandarin)

    doi_resolvers :
      oadoi.org : 'https://oadoi.org/'
      doi.org : 'https://doi.org/'
      doai.io  : 'https://dissem.in/'
      sci-hub.tw : 'https://sci-hub.tw/'

    default_doi_resolver : 'sci-hub.tw'
    ```