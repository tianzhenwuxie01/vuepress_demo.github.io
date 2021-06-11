---
title: Chrome 强制播放Netflix 1080p高画质方法
date: 2019-08-16 08:25:02
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 奈飞客户端--安卓
categories: 科学发现
tags:
  - 科学上网
  - 奈飞
---

虽然 [Netflix](https://www.0514.ink/?page_id=12?url=https://www.netflix.com)   在台推出已经有一段时间，可以同时支援 Windows、Mac、Linux 平台，相信不少电影和影剧迷到目前碰到最大问题莫非就是 Netflix 想观看高解析度 1080p，是无法在 Chrome、Firefox 、Opera 浏览器上观看，最高也只能有 720p，不过这有什么办法可以解决呢？除了换浏览器外，如果是坚持想使用 Chrome 来看 Netflix 1080p 解析度电影该怎么版？这篇教学就要来教大家如何突破这限制。

<!--more-->

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213174008.png)

Netflix 是没办法让我们手动去调整要观看的画质，这种后果就会导致预设画质跟盗版画面没什么两样，画质根本就是惨不忍睹来形容，虽然官方内有教可以透过「播放设定」内调整数据使用量，Netflix 就会依照我们的网路速度来自动切换画质，但是经过疯先生测试，采用的是中华光世代 10M?，预设播放还是整个糊到不行，这种画质真的看不下去，但又不想因为 Netflix 换浏览器来看观赏影片，那就找了些强制替 Netflix 打开 1080p 方法。

## 为什么 Chrome、Firefox 无法支援？

---

国外有传言主因是 Netflix 采用 1080p DRM 认证，是需要各家浏览器开发者另外透过电影协会认证，然而 Chrome、Firefox 没有申请此认证，导致无法支援 1080p 解析度。

## Netflix 支援解析度

---

- Google Chrome
  - Windows、Mac 与 Linux 可达 720p
  - Chrome OS 可达 1080p
- Internet Explorer 可达 1080p
- Microsoft Edge 可达 4K\*
- Mozilla Firefox 可达 720p
- Opera 可达 720p
- Mac OS X 10.10.3 或更新版本上的 Safari 可达 1080p

## 解决 Chrome 无法看 Netflix 1080p 高画质方法

从官方支援列表来看似乎能够发现 Netflix 在 Chrome 上最高就是 1080，那其实还有方法可以突破，在这就需要依赖两套「Super Netflix」和「Netflix 1080p」扩充插件互相搭配才有办法，就可以解开被 Netflix 锁住的调整画质功能，让我们可以自订想要的播放画质。

## 扩充功能

---

适用浏览器：Google Chrome

Chrome 线上商店下载：[Super Netflix](https://www.0514.ink/?page_id=12?url=https://chrome.google.com/webstore/detail/super-netflix/iakpdiefpdniabbekcbofaanjcpjkloe)｜   [Netflix 1080p](https://www.0514.ink/?page_id=12?url=https://chrome.google.com/webstore/detail/netflix-1080p/cankofcoohmbhfpcemhmaaeennfbnmgp)

相信很多人好奇，为什么装 Super Netflix 就可以控制解析度选单，但为什么还要另外装 Netflix 1080p 这个扩充？最主要是因为 Super Netflix 开发发者被 Netflix 警告，告诉他：「请不要做出这种功能，而且这功能是不合法行为。」导致 Super Netflix 开发发者不得不将这项调整功能隐藏起来，改由透过 Netflix 1080p 才能够解开此功能选项，并且可以透过快捷键 Ctrl + Shift + Alt + S 来叫出。

## 操作教学

---

### 步骤 1

开启 Google Chrome 浏览器点击 Super Netflix 应用程式商店页面，点选右上角「**加到 Chrome**」将他下载至 Chrome。

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213174009.png)

点选「新增扩充功能」将这个扩充安装起来。另外，连同 Netflix 1080 扩充插件也是相同操作方法，两款要一起安装才会有效。

### 步骤 2

到 Chrome 浏览器设定内，找到「更多工具…」>「清除浏览资料」，将目前浏览纪录及快取图片和档案都清除。这是为了防止后续设定画质时会无法切换，因此建议要先将浏览纪录先清除。

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213174007.png)

### 步骤 3

开启想要看的影片播放，就会看见播放画面中央上方出现 Super Netflix 选单

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213174005.png)

而这些选单功能按钮，从左到右分别：上传外挂字幕、调整影片速度、观看影片串流数据资料、调整画质（音效）和串流伺服器、调整影片风格。

### 步骤 4

如果要自订影片画质，就点击右上角像是开关控制钮，中央「Video Bitrate」影片比特率预设会都是全选状态，这是 Netflix 依照网路连线速度来选择要播放画质，可以自己手动调整为最高影片比特率数值，像是范例最高就是 3160，代表就是影像为 3160Kbps(AVC H.264 编码)，这就一定会强制播放 HD 1080p 画质。要特别注意这与选择的会员方案也有关系，如果选择的是基本方案，通常是没办法看见 HD 1080p 画质，需要标准方案才有办法。

ㄉ右侧「CDN」是代表影片串流伺服器，目前来看有四个串流伺服器可用，每支影片伺服器都会没有固定，就随便选一个试试，假如发现很卡，就直接换另一个 CDN 伺服器吧！最后要点击「Override」才会套用。

### 步骤五

当修改自订影片画质后，可以点击「i」来看串流状态，只需要看「Playing bitrate (a/v)」这句最后方括号内就表示串流的解析度，不过在 bitrate 值也要符合刚所选择的「Video Bitrate」Kbps 才算是 1080p，其余有兴趣可以自行研究。

在疯先生观察下来，选择高画质影片 Video Bitrate 后，需要再等个几秒让影片跑到一定流量才会自动切换成 HD 1080p 高解析度来播放，不是马上改就马上变 HD 1080p，且有些影片像是雷神索尔、奇异博士等，最高画质就只有 960×540（很瞎），这连 720p 都不到，不确定是否因浏览器有差异。

至于外挂字幕和调整影片速度就不多介绍，字幕档只能够吃. DFXP 格式，可以透过「[线上转字幕](https://www.0514.ink/?page_id=12?url=http://subflicks.com/)」来转换，但通常 Netflix 字幕来说都算是不错，毕竟要外挂字幕这些大多都是来自中国的字幕组团队，所以字幕也都是比较偏向中国简体语言，就算转成繁体中文还是要有人愿意去修改调整语句，因此就没又必要再去外挂字幕，还可能会碰见时间轴对不上，毕竟影片来源太多，不同团队压制的字幕时间是都会有秒差。

目前 Chrome 透过 Super Netflix 和 Netflix 1080p 的补助下，可以说是让原本 Netflix 不太人性化的地方给补足，大致上可以看得出来 Netflix 为什么不加入这功能，主因就是有不少影片最高解析度（像是变形金刚）只有 480p 或 540p，所以要将这功能模糊化。

但不知怎么感觉 Netflix 目前做法有点像是过去 iOS ？Super Netflix 和 Netflix 1080p 就像是越狱后的插件功能，需要有开发者写出插件来突破限制，这现象的确是很有趣。
