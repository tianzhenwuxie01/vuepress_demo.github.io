

[1. 快捷键](#快捷键)

|   功能   | 快捷键   |
| :------: | -------- |
|   加粗   | Ctrl + B |
|   斜体   | Ctrl + I |
|   引用   | Ctrl + Q |
| 插入链接 | Ctrl + L |
| 插入代码 | Ctrl + K |
| 插入图片 | Ctrl + G |
| 提升标题 | Ctrl + H |
| 有序列表 | Ctrl + O |
| 无序列表 | Ctrl + U |
|   横线   | Ctrl + R |
|   撤销   | Ctrl + Z |
|   重做   | Ctrl + Y |

 ___
<!--都可以-->
```

### 2.5 代码块

[跳转到目录](#00)

````html
|``` html(代码类型) 代码内容 |```
<!--使用时不含 | .防止显示问题才加的|-->
|`代码内容`
<!--使用时不含 | .防止显示问题才加的|-->
或者直接使用html语法
<!--使用时不含 | .防止显示问题才加的|-->
````

**注意：简书代码块里不支持 html。**

### 2.6 引用

[跳转到目录](#00)

``` html
> 内容
```

### 2.7 列表

[跳转到目录](#00)  
（1）无序列表  
使用 \*，+，- 表示无序列表。

``` html
* 内容 * 内容 * 内容 + 内容 + 内容 + 内容 - 内容 - 内容 - 内容
```

（2）有序列表  
使用数字和一个英文句点表示有序列表。

``` html
1. 内容 2. 内容 3. 内容 注意1.后面又空格
```

（5）注意事项  
在使用列表时，只要是数字后面加上英文的点，就会无意间产生列表，比如 2020.04.23 这时候想表达的是日期，有些软件把它被误认为是列表。解决方式：在每个点前面加上 \ 转义就可以了。如下图所示：

``` html
2020\.04\.23
```

### 2.8 表格

[跳转到目录](#00)  
表格的基本写法很简单，就跟表格的形状很相似：

``` html
姓名|性别|学号 :-|:-:|-: 小猫|男|01 小狗|男|02
```

> 冒号在左边表示左对齐，右边表示有对齐，两边都有表示居中。可以不加

1. 常用技巧

---

### 3.1 换行

方法 1: 连续两个以上空格 + 回车

### 3.2 缩进字符

``` html
&#160;你好你好 -或- &nbsp;你好
<!--缩进1/4个中文-->
&#8194;你好你好 -或- &ensp;你好
<!--缩进1/2个中文-->
&#8195;你好你好 -或- &emsp;你好
<!--缩进一个中文-->
```

### 3.3 特殊符号

（1）对于 Markdown 中的语法符号，前面加反斜线转义 \ 即可显示符号本身。

``` html
需要转义的有 \ * _ ()[]{} # + - . !
```

（2）其他特殊字符，示例如下：  
支持特殊字符对应的 Unicode 码  
可以看这个网站：[https://unicode-table.com/cn/](https://unicode-table.com/cn/)

**附上几个工具对特殊字符的支持的对比图:**  
![](https://img-blog.csdn.net/20180802162726962?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQwNjE2MzA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 3.4 字体、字号与颜色

Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过类似 HTML 的标记语法，它可以使普通文本内容具有一定的格式。但是它本身是不支持修改字体、字号与颜色等功能的！

CSDN-markdown 编辑器是其衍生版本，扩展了 Markdown 的功能（如表格、脚注、内嵌 HTML 等等）！对，就是内嵌 HTML，接下来要讲的功能就需要使用内嵌 HTML 的方法来实现。

字体，字号和颜色编辑如下代码  
![](https://img-blog.csdn.net/20180802162832307?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQwNjE2MzA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 3.5 锚点

锚点其实就是页内超链接。比如我这里写下一个锚点，点击回到目录，就能跳转到目录。 在目录中点击这一节，就能跳过来。

使用如下图所示：  
![](https://img-blog.csdn.net/20180802163343495?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQwNjE2MzA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 3.6 注脚

**语法说明：**  
在需要添加注脚的文字后加上脚注名字 [^ 注脚名字], 称为加注。 然后在文本的任意位置(一般在最后) 添加脚注，脚注前必须有对应的脚注名字。

示例如下：  
![](https://img-blog.csdn.net/20180802163447739?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQwNjE2MzA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)  
注：

> 1.  脚注自动被搬运到最后面，请到文章末尾查看，并且脚注后方的链接可以直接跳转回到加注的地方。
> 2.  由于简书不支持锚点，所以可以用注脚实现页面内部的跳转。

### 3.7 背景色

Markdown 本身不支持背景色设置，需要采用内置 html 的方式实现：借助 table, tr, td 等表格标签的 bgcolor 属性来实现背景色的功能。举例如下：

<table><tr><td bgcolor=orange > 背景色是：orange</td></tr></table>

![](https://img-blog.csdn.net/20180802164159599?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQwNjE2MzA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 3.8 emoji 表情符号

emoji 表情使用: EMOJICODE: 的格式，详细列表可见

当然现在很多 markdown 工具或者网站都不支持。

### 4.1 制作一份待办事宜—-Todo 列表

![](https://img-blog.csdn.net/20180802165859799?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQwNjE2MzA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 4.2 绘制 序列图

![](https://img-blog.csdn.net/2018080216592352?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQwNjE2MzA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 4.3 绘制 甘特图

![](https://img-blog.csdn.net/20180802165941601?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQwNjE2MzA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
