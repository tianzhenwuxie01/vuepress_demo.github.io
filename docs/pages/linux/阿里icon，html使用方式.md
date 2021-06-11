---
title: 个人导航，html使用方式
date: 2019-08-17 08:25:23
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
summary: 在我的个人导航添加使用阿里icon图标/添加后缀小标志/添加网页搜索
categories: linux
tags:
  - 阿里icon
  - 导航网页
---

### icon 图标添加

#### 头部引用代码`head`内部(官网现用)

``` html
<!--以下是阿里icon应用-->
<script src="//at.alicdn.com/t/font_1339557_10bkchx3xqw9.js"></script>
<style type="text/css">
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
<!--阿里icon结束-->
```

#### 添加标志`#图标名称`

``` html
<!--添加阿里图标-->
<span style="font-size: 2em;">
  <!--调整图标大小-->
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#iconshoucang4"></use>
  </svg>
</span>
```

### 造作家标签后小图标

#### css 代码添加

``` css
p.overflowKeyword{
            border-radius: 20px;
            text-align: center;
            background: #c4c4c49e;
            float:right;
            font-family: "Andale Mono";
            color:#000000;
            width:40px;
            height:20px;
            margin-top: 6px;
            margin-left:5px;
```

#### html 代码添加

``` html
<p class="overflowKeyword">wk</p>
```

### 添加搜索框（造作家）

#### 原先百度搜索框

body 内代码

``` html
<div id="search" class="s-search">
  <form
    action="http://www.baidu.com/baidu"
    target="_blank"
    id="super-search-fm"
  >
    <input
      type="text"
      name="wd"
      id="search-text"
      placeholder="Say Something..."
      style="outline:0; margin-bottom:1em"
      autocomplete="off"
    />
    <button type="submit" style="background-color:#2c2e2f;">
      <i class="fa fa-search"></i>
    </button>
  </form>
</div>
<!--Say Something...为搜索框默认显示文字。。
    background-color:#2c2e2f搜索框右侧按钮背景颜色。。
    <i class="fa fa-search">右侧图标</i>-->
```

css 代码

``` css
#search {
  max-width: 717px;
  margin: 56px auto 14px;
}

#search form {
  position: relative;
}

#search-text {
  padding: 9pt;
  width: 100%;
  height: 50px;
  font-size: 1pc;
  border: 0;
  border-radius: 3px;
  background-color: #fff;
}

#search button {
  position: absolute;
  top: 0;
  right: 0;
  background: #313437;
  border: 0;
  width: 60px;
  height: 36px;
  margin: 7px 9pt 0;
  line-height: 36px;
  border-radius: 3px;
}

#search button:hover {
  background: #000;
  cursor: pointer;
}

#search button i {
  color: #fff;
  font-size: 18px;
}

.search-group {
  display: none;
  padding-left: 75px;
}
```

#### 谷歌搜索（现用）

body 内代码

``` html
<div id="search" class="s-search">
  <form
    action="https://www.google.com/search"
    target="_blank"
    id="super-search-fm"
  >
    <input
      type="text"
      name="q"
      class="sipt"
      id="search-text"
      placeholder="谷歌一下..."
      style="outline:0; margin-bottom:1em"
      autocomplete="off"
    />
    <button type="submit" style="background-color:aliceblue;">
      <!--添加阿里图标-->
      <span style="font-size: 2em;">
        <!--调整图标大小-->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconsousuo3"></use>
        </svg>
      </span>
    </button>
  </form>
</div>
```

css 同上

### 之前 icon 添加

#### 一下为之前的代码（网上翻得）

第一段为头部引用代码，第二段为设置添加代码#icon\*\*\*为标志名称
使用时把第一段所有//at.alicdn.com/t/font_1339557_299qf2nhr1i 换成自己链接

---

``` html
<link
  rel="stylesheet"
  type="text/css"
  href="http://at.alicdn.com/t/font_1339557_299qf2nhr1i.css"
/><!-- fontclass -->
<style type="text/css">
  @font-face {
    font-family: "iconfont"; /* project id 824663 */
    src: url("//at.alicdn.com/t/font_1339557_299qf2nhr1i.eot");
    src: url("//at.alicdn.com/t/font_1339557_299qf2nhr1i.eot?#iefix") format("embedded-opentype"),
      url("//at.alicdn.com/t/font_1339557_299qf2nhr1i.woff") format("woff"),
      url("//at.alicdn.com/t/font_1339557_299qf2nhr1i.ttf") format("truetype"), url("//at.alicdn.com/t/font_1339557_299qf2nhr1i.svg#iconfont")
        format("svg");
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  p {
    color: #fff;
  }
</style>
<script
  type="text/javascript"
  src="http://at.alicdn.com/t/font_1339557_299qf2nhr1i.js"
></script>
<!-- Symbol -->
```

``` html
<div style="font-size: 2em;">
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#iconfankui"></use>
  </svg>
  Symbol<!--这个是文字可以不填-->
</div>
<!--以上div可换span，图标不会独占一行-->
```
