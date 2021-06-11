module.exports = {
    title: 'remuxo首页', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'remuxo记录', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/egg.png' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {    
        logo: '/egg.png',  //网页顶端导航栏左上角的图标
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/pages/设计/APP从设计到切图标注适配.md' },
            {
                text: '分类',        //默认显示        
                ariaLabel: '分类',  //用于识别的label
                items: [
                    { text: '科学发现', link: '/pages/科学发现/clash相关项目git链接.md' },
                    { text: '设计', link: '/pages/设计/APP从设计到切图标注适配.md' },
                    { text: '软件', link: '/pages/软件/psd文件过大(图片原始数据冗余).md' },
                    { text: '学习', link: '/pages/学习/python01.md' },
                    { text: '娱乐', link: '/pages/娱乐/gta5-nat介绍.md' },
                    { text: 'github', link: '/pages/github/git简介.md' },
                    //点击标签会跳转至link的markdown文件生成的页面
                    { text: 'hexo', link: '/pages/hexo/hexo安装.md' },
                    { text: 'linux', link: '/pages/linux/linux系统文件夹.md' },
                ]
            },
            //{ text: '功能演示', link: '/pages/folder1/test3.md' },
            { text: 'Github', link: 'https://github.com/tianzhenwuxie01/vuepress_demo.github.io' },
        ],
        sidebar: [
                    {
                        title: 'github',   // 必要的
                        collapsable: true, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [
                            ['/pages/github/gitbook.md', 'gitbook'],
                            ['/pages/github/gitee导航网页的坑.md', 'gitee导航网页的坑'],
                            ['/pages/github/GitHub+jsDelivr打造高效免费图床.md', 'GitHub+jsDelivr打造高效免费图床'],
                            ['/pages/github/git密码凭证.md', 'git密码凭证'],
                            ['/pages/github/git简介.md', 'git简介'],
                            ['/pages/github/git设置及常用命令.md', 'git设置及常用命令'],
                            ['/pages/github/git项目nativefier本地人使用方法.md', 'git项目nativefier本地人使用方法'],
                            ['/pages/github/sourceTree添加sshkey方法.md', 'sourceTree添加sshkey方法'],
                            ['/pages/github/收藏的git项目.md', '收藏的git项目']
                        ]
                    },
                    {
                        title: 'hexo',   // 必要的
                        collapsable: true, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [
                            ['/pages/hexo/hexo-next主题设置.md', 'hexo-next主题设置'],
                            ['/pages/hexo/hexo创建页面.md', 'hexo创建页面'],
                            ['/pages/hexo/hexo安装.md', 'hexo安装'],
                            ['/pages/hexo/hexo安装走过的坑.md', 'hexo安装走过的坑'],
                            ['/pages/hexo/hexo常用指令.md', 'hexo常用指令']
                        ]
                    },
                    {
                        title: 'linux',   // 必要的
                        collapsable: true, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [
                            ['/pages/linux/linux系统文件夹.md', 'linux系统文件夹'],
                            ['/pages/linux/olaindex的部署.md', 'olaindex的部署'],
                            ['/pages/linux/oneindex安装+aria2.md', 'oneindex安装+aria2'],
                            ['/pages/linux/vm虚拟机--macos安装.md', 'vm虚拟机--macos安装'],
                            ['/pages/linux/vm虚拟机--macos破解.md', 'vm虚拟机--macos破解'],
                            ['/pages/linux/一个好用的OneDrive网盘上传工具.md', '一个好用的OneDrive网盘上传工具'],
                            ['/pages/linux/使用宝塔安装配置h5ai列目录程序.md', '使用宝塔安装配置h5ai列目录程序'],
                            ['/pages/linux/安装人人影视客户端.md', '安装人人影视客户端'],
                            ['/pages/linux/常用shell指令.md', '常用shell指令'],
                            ['/pages/linux/阿里icon，html使用方式.md', '阿里icon，html使用方式']
                        ]
                    },
                    {
                        title: '娱乐',   // 必要的
                        collapsable: true, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [
                            ['/pages/娱乐/gta5-nat介绍.md', 'gta5-nat介绍'],
                            ['/pages/娱乐/动漫记录.md', '动漫记录'],
                            ['/pages/娱乐/影视奈飞纪录.md', '影视奈飞纪录'],
                            ['/pages/娱乐/拼多多零时工.md', '拼多多零时工'],
                            ['/pages/娱乐/方舟存档备份还原.md', '方舟存档备份还原'],
                            ['/pages/娱乐/方舟服务器指令及其饲料表.md', '方舟服务器指令及其饲料表'],
                            ['/pages/娱乐/方舟服务器搭建.md', '方舟服务器搭建'],
                            ['/pages/娱乐/正当防卫4-epic版怎么设置中文.md', '正当防卫4-epic版怎么设置中文']
                        ]
                    },
                    {
                        title: '学习',   // 必要的
                        collapsable: true, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [
                            ['/pages/学习/Excel函数之王，Vlookup到底怎么用？.md', 'Excel函数之王，Vlookup到底怎么用？'],
                            ['/pages/学习/excel随笔.md', 'excel随笔'],
                            ['/pages/学习/html标签.md', 'html标签'],
                            ['/pages/学习/markdown语法.md', 'markdown语法'],
                            ['/pages/学习/python format 用法详解.md', 'python format 用法详解'],
                            ['/pages/学习/Python 多进程运行-Multiprocessing 基础教程 1.md', 'Python 多进程运行-Multiprocessing 基础教程 1'],
                            ['/pages/学习/Python 多进程运行-Multiprocessing 基础教程 2.md', 'Python 多进程运行-Multiprocessing 基础教程 2'],
                            ['/pages/学习/Python 多进程运行-Multiprocessing 基础教程 3.md', 'Python 多进程运行-Multiprocessing 基础教程 3'],
                            ['/pages/学习/python01--新建复制移动读取写入.md', 'python01--新建复制移动读取写入'],
                            ['/pages/学习/python02--基础.md', 'python02--基础'],
                            ['/pages/学习/python03--正则.md', 'python03--正则'],
                            ['/pages/学习/python04--爬虫and表格.md', 'python04--爬虫and表格'],
                            ['/pages/学习/python05--自定义函数.md', 'python05--自定义函数'],
                            ['/pages/学习/python06--office.md', 'python06--office'],
                            ['/pages/学习/Python各种排序.md', 'Python各种排序'],
                            ['/pages/学习/Python打包为exe执行文件.md', 'Python打包为exe执行文件'],
                            ['/pages/学习/you-get的使用.md', 'you-get的使用'],
                            ['/pages/学习/使用Searx搭建一个私人的元搜索平台.md', '使用Searx搭建一个私人的元搜索平台'],
                            ['/pages/学习/正则表达式.md', '正则表达式'],
                            ['/pages/学习/网页转word.md', '网页转word'],
                            ['/pages/学习/计算机二级--excel常见函数整理.md', '计算机二级--excel常见函数整理'],
                            ['/pages/学习/计算机二级--office01.md', '计算机二级--office01'],
                            ['/pages/学习/谷歌高级搜索指令.md', '谷歌高级搜索指令']
                        ]
                    },
                    {
                        title: '科学发现',   // 必要的
                        collapsable: true, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [
                            ['/pages/科学发现/cfw汉化方法.md', 'cfw汉化方法'],
                            ['/pages/科学发现/chfs-HTTP协议的文件共享服务器.md', 'chfs-HTTP协议的文件共享服务器'],
                            ['/pages/科学发现/Chrome强制播放Netflix1080p高画质方法.md', 'Chrome强制播放Netflix1080p高画质方法'],
                            ['/pages/科学发现/clashx.md', 'clashx'],
                            ['/pages/科学发现/clash相关项目git链接.md', 'clash相关项目git链接'],
                            ['/pages/科学发现/clash简介.md', 'clash简介'],
                            ['/pages/科学发现/clash规则去广告和插件对比.md', 'clash规则去广告和插件对比'],
                            ['/pages/科学发现/clash解锁网易云.md', 'clash解锁网易云'],
                            ['/pages/科学发现/clash配合Adguard.md', 'clash配合Adguard'],
                            ['/pages/科学发现/linux端使用clash.md', 'linux端使用clash'],
                            ['/pages/科学发现/MSDN–消费者版和商业版.md', 'MSDN–消费者版和商业版'],
                            ['/pages/科学发现/OneDrive的分类简介.md', 'OneDrive的分类简介'],
                            ['/pages/科学发现/Rundll32 commands win常用命令.md', 'Rundll32 commands win常用命令'],
                            ['/pages/科学发现/ShadowSocks端口已被占用.md', 'ShadowSocks端口已被占用'],
                            ['/pages/科学发现/ssr-ss等pac文件的语法.md', 'ssr-ss等pac文件的语法'],
                            ['/pages/科学发现/subconverter本地api.md', 'subconverter本地api'],
                            ['/pages/科学发现/Surge 配置详解.md', 'Surge 配置详解'],
                            ['/pages/科学发现/V2rayU.md', 'V2rayU'],
                            ['/pages/科学发现/一些科学上网知识.md', '一些科学上网知识'],
                            ['/pages/科学发现/乌班图U盘rufus写入.md', '乌班图U盘rufus写入'],
                            ['/pages/科学发现/云盘价格.md', '云盘价格'],
                            ['/pages/科学发现/关于Geoip库及更新.md', '关于Geoip库及更新'],
                            ['/pages/科学发现/在Win10上使用客户端观看Netflix.md', '在Win10上使用客户端观看Netflix'],
                            ['/pages/科学发现/奈飞客户端--安卓.md', '奈飞客户端--安卓'],
                            ['/pages/科学发现/如何测试自己的科学上网速度？.md', '如何测试自己的科学上网速度？'],
                            ['/pages/科学发现/影视视频下载.md', '影视视频下载'],
                            ['/pages/科学发现/用于Clashcmd固定到任务栏.md', '用于Clashcmd固定到任务栏']
                        ]
                    },
                    {
                        title: '设计',   // 必要的
                        collapsable: true, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [
                            ['/pages/设计/APP从设计到切图标注适配.md', 'APP从设计到切图标注适配'],
                            ['/pages/设计/PS-AI-ID变量简介（1）.md', 'PS-AI-ID变量简介（1）'],
                            ['/pages/设计/喷绘与写真简介及尺寸分辨率设置.md', '喷绘与写真简介及尺寸分辨率设置'],
                            ['/pages/设计/淘宝切图空隙问题.md', '淘宝切图空隙问题'],
                            ['/pages/设计/色彩配置文件icc.md', '色彩配置文件icc']
                        ]
                    },
                    {
                        title: '软件',   // 必要的
                        collapsable: true, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [
                            ['/pages/软件/ai的常见问题.md', 'ai的常见问题'],
                            ['/pages/软件/cad的安装-2012.md', 'cad的安装-2012'],
                            ['/pages/软件/PotPlayer的设置备份.md', 'PotPlayer的设置备份'],
                            ['/pages/软件/psd文件过大-图片原始数据冗余.md', 'psd文件过大-图片原始数据冗余'],
                            ['/pages/软件/ps之动作切片.md', 'ps之动作切片'],
                            ['/pages/软件/ps没有压感解决办法.md', 'ps没有压感解决办法'],
                            ['/pages/软件/scoop的安装.md', 'scoop的安装'],
                            ['/pages/软件/sublime插件的安装.md', 'sublime插件的安装'],
                            ['/pages/软件/tasker-手机自动化软件.md', 'tasker-手机自动化软件'],
                            ['/pages/软件/tg电报的数据中心.md', 'tg电报的数据中心'],
                            ['/pages/软件/vscode的安装.md', 'vscode的安装'],
                            ['/pages/软件/win宽带连不上720报错.md', 'win宽带连不上720报错'],
                            ['/pages/软件/win电源管理.md', 'win电源管理'],
                            ['/pages/软件/华为p7刷机.md', '华为p7刷机'],
                            ['/pages/软件/小新黑苹果----------锐7000.md', '小新黑苹果----------锐7000'],
                            ['/pages/软件/正则测试工具RegexBuddy界面.md', '正则测试工具RegexBuddy界面']
                        ]
                    }        ]
    }
}