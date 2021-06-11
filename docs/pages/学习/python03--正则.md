---
title: python03--正则
date: 2020-08-08 10:25:12
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 淘宝导入ps切图图片与图片见出现空隙，白条现象（具体测试见码云gitee）
categories: 学习
tags:
  - python
---

### 正则

**引入：**

``` python
import re
```

<details>
<summary><b style="color:#B47CFD">常见的正则用法</b></summary>

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200809211206.png)

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200809211222.png)

</details>

``` python
name = '正则内容'
match = re.search("(.+?)---(.+)", name, re.MULTILINE)
    if match: # 匹配名称
        re1 = match.group(1)
        re2 = match.group(2)
    else:
      pass
```

### python 中的正则

> [正则参考](https://www.runoob.com/python3/python3-reg-expressions.html)

**五种常见**
![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200809211222.png)

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200809211425.png)

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200809211449.png)

### match 对象的属性方法

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200809211504.png)

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200809211523.png)
