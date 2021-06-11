

## html 常用代码标签

### html 的初始代码

``` html
<!DOCTYPE html>
<!--文档声明：告诉浏览器这是个html文件-->
<html lang="en">
  <!--文档开始，这是个英文文档，zh-CN-->
  <head>
    <meta charset="UTF-8" />
    <!--文档编码-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <!--文档表头-->
  </head>
  <body></body>
</html>
```

<!--more-->

### 标题与段落

html 标题：双标签

``` html
<h1></h1>
...
<h6></h6>
```

h1 标签特别一个文档中只出现一次
h5h6 标签一般不常用
段落：双标签 <p></p>

### 修饰标签

强调 ->双标签: `<strong></stromg>加粗 <em></em>斜体`  
上标 `<sub></sub>`  
下标 `<sup></sup>`  
删除文本 `<del></del>`  
插入文本 `<ins></ins>`

### 图片标签

单标签

``` html
<img src="" alt="" />
```

src:图片地址  
alt:当图片出问题时显示的文字  
title:提示信息，鼠标悬停时显示  
width heigh:长宽

### 引入路径

相对路径  
`.`在路径中表示当前路径  
`..`在路径中表示上一级路径

绝对路径  
E:/ke/qf dl201901/20190108/img/animal/dog.jpg  
http://cms-bucketws.126.net/2019/04/16/7a5b31e0ce5474a7515.jpeg

### 链接标签

双标签:

``` html
<a href=""></a>
```

href 属性：链接的地址  
target 属性：可以改变链接打开的方式，默认情况下：在当前页面打开\_self 新窗口打开\_blank  
base->单标签：作用就是改变链接的默认行为的。|
