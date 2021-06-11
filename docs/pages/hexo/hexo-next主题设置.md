---
title: hexo-next主题设置
date: 2019-08-17 08:25:22
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
summary: hexo主题开启乱七八糟的玩意
categories: hexo
tags:
  - 博客搭建
---

### 前言

hexo 主题很多 可以在下面选择自己的喜欢的一款：

- [知乎：有哪些好看的 Hexo 主题？](https://www.zhihu.com/question/24422335)
- [hexo 官网主题](https://hexo.io/themes/)

### 主题设置

#### 修改文章底部带 #号的标签

把#换成标签小图标

修改模板 /themes/next/layout/\_macro/post.swig，搜索`rel="tag">#`，将 # 换成`<i class="fa fa-tag"></i>`

#### 添加顶部加载条

1.  切换到站点根目录下的 themes/next :
2.  执行：

``` yaml
$ git clone https://github.com/theme-next/theme-next-pace source/lib/pace
```

3.  配置主题文件

```
pace: true
```

4.  加载条更新

``` yaml
$ cd themes/next/source/lib/pace
$ git pull
```

#### 文章加密访问

1.  打开 themes->next->layout->\_partials->head->head.swig 文件, 在以下位置插入这样一段代码：

``` html
<script>
  (function () {
    if ("{{ page.password }}") {
      if (prompt("请输入文章密码") !== "{{ page.password }}") {
        alert("密码错误！");
        if (history.length === 1) {
          location.replace("http://xxxxxxx.xxx"); // 这里替换成你的首页地址
        } else {
          history.back();
        }
      }
    }
  })();
</script>
```

2.  在文章中设置密码  
    ![hexo主题设置](https://i.loli.net/2019/08/17/3ABj4gUiauw9HKt.png)

#### 实现文章的字数和阅读时长的统计功能

实现效果图  
![hexo主题设置01](https://i.loli.net/2019/08/17/UKP8RD4QjvLChnN.png)

##### [](#具体实现步骤-1 "具体实现步骤")具体实现步骤

1.  切换到根目录下，然后运行如下代码

``` yaml
npm install hexo-symbols-count-time --save
```

2.  在`站点配置文件`中添加如下配置

``` yaml
symbols_count_time:
symbols: true
time: true
total_symbols: true
total_time: true
```

3.  在`主题配置文件`中修改成如下配置

``` yaml
# Post wordcount display settings
# Dependencies: https://github.com/theme-next/hexo-symbols-count-time
symbols_count_time:
  separated_meta: true
  item_text_post: true
  item_text_total: true
  awl: 4
  wpm: 275
```

#### 开启版权声明

`主题配置文件`下, 搜索关键字 post_copyright , enable 改为 true：

``` yaml
# Declare license on posts
post_copyright:
  enable: true
  license: CC BY-NC-SA 4.0
  license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/
```

#### 文章置顶

打开文章添加 top 字段, 设置数值，数值越大文章越靠前：

``` yaml
title\: { { title } }
date: { { date } }
tags:
categories:
copyright: true
comments: true
password: password
top: 100 //设置数值，数值越大文章越靠前
```

#### 修改文章内文本链接样式

打开 themes/next/source/css/\_custom/custom.styl, 添加代码：

``` yaml
// 文章内链接文本样式
.post-body p a{
  color: #0593d3;
  border-bottom: none;
  border-bottom: 1px solid #0593d3;
  &:hover {
    color: #fc6423;
    border-bottom: none;
    border-bottom: 1px solid #fc6423;
  }
}
```

#### [](#手动更改文章更新时间 "手动更改文章更新时间")手动更改文章更新时间

``` yaml
title: 测试
date: 2018-05-18 15:41:18
updated: 2018-05-18 20:18:54 #手动添加更新时间
```

#### 为代码块添加复制功能

> next 主题已经集成了 clipboard.js 插件，在`主题配置文件`中打开就行

``` yaml
codeblock:
  # Manual define the border radius in codeblock
  # Leave it empty for the default 1
  border_radius:
  # Add copy button on codeblock
  copy_button:
    enable: true
    # Show text copy result
    show_result: true
```

#### 添加分享功能

1.  切换到 themes/next 目录下，然后运行如下代码

``` yaml
$ git clone https://github.com/theme-next/theme-next-needmoreshare2 source/lib/needsharebutton
```

2.  在`主题配置文件中`修改成如下配置

``` yaml
needmoreshare2:
  enable: true
  postbottom:
    enable: true
  float:
    enable: true
```

3.  更新

``` yaml
$ cd themes/next/source/lib/needsharebutton
$ git pull
```

#### 增加打赏功能

> 越来越多的平台（微信公众平台，新浪微博，简书，百度打赏等）支持打赏功能，付费阅读时代越来越近，特此增加了打赏功能，支持微信打赏和支付宝打赏。 配置`主题配置文件`微信 和 支付宝 收款二维码图片地址 即可开启该功能。

1.  `wechatpay.png`、`aipay.png`图片放入`themes/next/source/images`中
2.  配置`主题配置文件`如下：

``` yaml
# Reward
reward_comment: 你的支持是我创作的最大的动力
wechatpay: /images/wechatpay.png
alipay: /images/alipay.png
```

#### 增加侧边阅读百分比进度条

打开`主题配置文件`, 搜索关键字 scrollpercent , 把 false 改为 true

``` yaml
# Scroll percent label in b2t button.
scrollpercent: true
```

#### 将 Top 按钮放置侧边栏 (针对 Pisces 和 Gemini 子主题)

打开`主题配置文件`, 搜索关键字 b2t , 把 false 改为 true

``` yaml
# Back to top in sidebar (only for Pisces | Gemini).
b2t: false
```

#### 使 markdown 插入图片时具有放大功能

1.  切换到 themes/next 目录下，然后运行如下代码

``` yaml
$ git clone https://github.com/theme-next/theme-next-fancybox3 source/lib/fancybox
```

2.  在`主题配置文件中`修改成如下配置

``` yaml
fancybox: true
```

3.  更新

``` yaml
$ cd themes/next/source/lib/fancybox
$ git pull
```

> 参考链接[CHENTGING](CHENTGING).
