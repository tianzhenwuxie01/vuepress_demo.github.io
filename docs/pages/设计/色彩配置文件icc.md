---
title: 色彩配置文件 icc-0514
date: 2019-08-16 08:25:09
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: vscode，编辑器中的大佬，高端大气上档次还免费！
categories: 设计
tags:
  - 设计
  - 印刷
  - cmyk
---

>不用管这些，因为没人在意...

#### 区别

各种 CMYK 的 ICC 之间的区别，应是取决于纸张、印刷方式、加网方式等印刷工艺的不同。像国际上常用的标准 ICC 来源于欧洲、北美和日本的各大印刷标准机构，如 FORGA(德国印艺技术研究协会）、CGATS（美国图像技术及标准委员会）、ECI（欧洲色彩委员会）、BVDM（德国印刷媒体工业联盟）等等。

<!--more-->

#### 标准

他们制定了各种常见的印刷工艺标准（不同数据组），然后由 ISO（应该是）根据这些工艺标准来制作标准 ICC，当然因为印刷工艺的多样性，这些 ICC 一般都是胶印的标准，然后因为对承印物定义和不同工艺侧重点的问题，对于四色胶印来说也分为多个流派，其中欧洲和北美就是因为这一点而自己都做了 ICC 出来并作为各自的标准 ICC，所以我们今天常用的 PS/AI/ID/PDF 等软件中都会有这些 ICC 给用户选择使用。

- 题主贴的图片中 Coated FORGA27（ISO 12647-2:2004) 和 Coated FORGA39（ISO 12647-2:2004) 是 FORG 的不同数据组生成的 ICC，其中 FORGA27 是根据 12647-2:2004 中的 1or2 类纸（115 g/m2 的商业单张纸, 网线 60 的菲林晒制的阳图版印刷）而 FORGA39 这是同样标准下的 CTP（计算机直接制版技术）印刷而成，并且规定了需要符合 ISO 的阶调曲线 A（CMY）和 B（K），这其实与 ISO 定义的 ISO_coated_v2.icc 是一样的标准；

- Japan color 2001 coated  和 Japan color 2001 uncoated 还有 Japan color 2001 newspaper 则是对应的涂布纸、非涂布纸还有新闻纸的四色印刷工艺，具体参照 ISO12647-2 定义的五类纸张定义，由于其中油墨定义更接近中国使用的油墨性质（好吧其实就是 ISO 的标准油墨贵或者是其他工艺）所以很多设计师喜欢采用 Japan color 2001 coated  作为转换颜色的标准 ICC；

- U.S.Sheetfed coated 和 U.S.Sheetfed uncoated  对应的是美国的单张涂布纸和非涂布纸，U.S.web coated（SWOP) 则是卷筒涂布纸的标准
