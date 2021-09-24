---
title: pm2守护程序安装
date: 2021-06-26 08:25:24
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 在我的个人导航添加使用阿里icon图标/添加后缀小标志/添加网页搜索
categories: linux
tags:
---


``` shell
npm install -g pm2
```

```
日志目录|C:\Users\26638\.pm2\logs
启动|pm2 start 01.py
启动并重命名|pm2 start 01.py --name="api"
pm列表|pm2 list
重启|pm2 restart app_name/app_id
重启所有进程|pm2 restart all
停止|pm2 stop app_name/app_id
停止所有|pm2 stop all
从列表中删除|pm2 delete app_name/app_id
删除全部进程|pm2 delete all
查看日志|pm2 logs
显示指定日志|pm2 logs [app-name]
查看进程详情|pm2 show app_name/app_id
显示每个应用程序的CPU和内存占用情况/pm2 monit
显示应用程序的所有信息|pm2 show [app-name]
文件夹变化重启|--watch
更新|pm2 update
```

json格式启动  pm2 start 01.json
> app为多个可以启动多个应用，数组格式

``` json
{
    "apps": {
        "name": "wuwu",                             // 项目名          
        "script": "./bin/www",                      // 执行文件
        "cwd": "./",                                // 根目录
        "args": "",                                 // 传递给脚本的参数
        "interpreter": "",                          // 指定的脚本解释器
        "interpreter_args": "",                     // 传递给解释器的参数
        "watch": true,                              // 是否监听文件变动然后重启
        "ignore_watch": [                           // 不用监听的文件
            "node_modules",
            "logs"
        ],
        "exec_mode": "cluster_mode",                // 应用启动模式，支持fork和cluster模式
        "instances": 4,                             // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
        "max_memory_restart": 8,                    // 最大内存限制数，超出自动重启
        "error_file": "./logs/app-err.log",         // 错误日志文件
        "out_file": "./logs/app-out.log",           // 正常日志文件
        "merge_logs": true,                         // 设置追加日志而不是新建日志
        "log_date_format": "YYYY-MM-DD HH:mm:ss",   // 指定日志文件的时间格式
        "min_uptime": "60s",                        // 应用运行少于时间被认为是异常启动
        "max_restarts": 30,                         // 最大异常重启次数，即小于min_uptime运行时间重启次数；
        "autorestart": true,                        // 默认为true, 发生异常的情况下自动重启
        "cron_restart": "",                         // crontab时间格式重启应用，目前只支持cluster模式;
        "restart_delay": "60s"                      // 异常重启情况下，延时重启时间
        "env": {
           "NODE_ENV": "production",                // 环境参数，当前指定为生产环境 process.env.NODE_ENV
           "REMOTE_ADDR": "爱上大声地"               // process.env.REMOTE_ADDR
        },
        "env_dev": {
            "NODE_ENV": "development",              // 环境参数，当前指定为开发环境 pm2 start app.js --env_dev
            "REMOTE_ADDR": ""
        },
        "env_test": {                               // 环境参数，当前指定为测试环境 pm2 start app.js --env_test
            "NODE_ENV": "test",
            "REMOTE_ADDR": ""
        }
    }
}
// apps:json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用
// name:应用程序名称
// cwd:应用程序所在的目录
// script:应用程序的脚本路径
// log_date_format:
// error_file:自定义应用程序的错误日志文件
// out_file:自定义应用程序日志文件
// pid_file:自定义应用程序的pid文件
// instances:
// min_uptime:最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量
// max_restarts:设置应用程序异常退出重启的次数，默认15次（从0开始计数）
// cron_restart:定时启动，解决重启能解决的问题
// watch:是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。
// merge_logs:
// exec_interpreter:应用程序的脚本类型，这里使用的shell，默认是nodejs
// exec_mode:应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork
// autorestart:启用/禁用应用程序崩溃或退出时自动重启
// vizion:启用/禁用vizion特性(版本控制)
```


### fork与cluster启动模式

* fork模式，单实例多进程，常用于多语言混编，比如php、python等，不支持端口复用，需要自己做应用的端口分配和负载均衡的子进程业务代码。
* 缺点就是单服务器实例容易由于异常会导致服务器实例崩溃。

* cluster模式，多实例多进程，但是只支持node，端口可以复用，不需要额外的端口配置，0代码实现负载均衡。
* 优点就是由于多实例机制，可以保证服务器的容错性，就算出现异常也不会使多个服务器实例同时崩溃。
* 共同点，由于都是多进程，都需要消息机制或数据持久化来实现数据共享。

> [参考链接](https://libin1991.github.io/2019/01/03/Pm2-%E5%B8%B8%E7%94%A8%E9%85%8D%E7%BD%AE%E5%8F%8A%E5%91%BD%E4%BB%A4/)

> [参考链接](https://juejin.cn/post/6844903617019772936)