

#### 为导航添加彩带背景，蜘蛛线条，鼠标点击动画

github 可以正常加载，而 gitee 却嗝屁了，根本不理添加的 js。。。。难受 😒

经过多次尝试发现只有新添加的 js 文件夹和 index.html 同级是 gitee 才会加载（如下）

``` html
<script type="text/javascript" src="dist/aixin.js"></script>
```

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200215200525.png)

不知道是我操作问题，还是 gitee 的奇妙之处 🤣

咱也不会呀，咱也不知道该咋问
