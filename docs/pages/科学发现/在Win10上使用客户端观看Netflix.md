

### 1.如何下载客户端

首先，打开 windows 应用商店，搜索 Netflix。

> 此时多半是搜索不到的。因为你的 win10 系统所在区域是中国。微软很爽的一点是，无痛换区。xbox 也一样，只需要修改系统区域即可。打开电脑设置，选择“时间和语言”。

打开设置，更改系统区间

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213181138.png)

选择时间和语言，在“区域和语言”TAB 页面中，将区域改成美国

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213181347.png)

再次打开 win 商店就可以搜到 Netflix 了

### 2.我挂上代理了，为什么还是不能用？

首先你得有一个能看 Netflix 的梯子，一般的 vpn 软件当然是不行的。
Netflix 对于代理的检测是非常厉害的，建议在购买梯子服务的时候，先询问商家是否支持各种流媒体。只有商家的梯子是原生 ip 的才可以解锁 Netflix

有了一个支持 Netflix 的梯子后，还是不行，因为在 win 商店里的应用也就是 uwp 应用默认是不走代理的。至于为什么这些应用无法走系统代理？答案是这些应用无法访问 localhost，流量不走本地自然无法走本地代理。为什么无法访问 localhost 呢？是因为这些应用其实是在一个虚拟环境中运行的。

这时候，就该祭出神器 Fiddler 了 ，设置 Netflix 应用的网络走代理。

### 3.Fiddler 设置应用走代理

Fiddler 这个网络工具，功能非常强大，有兴趣的同学可以研究一下。
（可略过）首先可以看一下你的系统代理，点击“设置” →“网络和 internet” →“代理”。

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213181940.png)

这个地方的代理，只对于传统 windows 软件有用，通通关掉，应用是无法使用这个代理的。

谷歌一下，下载 Fiddler4 后，打开。看到左上角有一个“WinConfig”按钮，点击该按钮

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213182046.png)

点击后，会弹出一个“AppContainer Loopback…” 的窗口。
这个窗口列出了所有你已经安装了的 win10 应用，默认这些应用前面都是没有打勾的，意思就是这些应用都不能访问 localhost。然后，只要将你想要走代理的应用前面勾选上，然后点击“Save changes”就可以了。

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213182138.png)

到这里，你的 Netflix 客户端就是走代理的了，可以进行观看了</p>

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213174008.png)

### 4.关于 fidder 中 AppContainer Loopback 工具 clash 中也有

使用方法相同

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213183330.png)
