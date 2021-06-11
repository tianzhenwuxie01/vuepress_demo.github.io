

## 将 ClashWeb，Clashbat，Clashcmd 的启动图标固定到任务栏中

1. 随便找个 exe 快捷方式移动到任务栏

2.打开：`C:\Users\用户名\AppData\Roaming\Microsoft\Internet Explorer\Quick Launch\User Pinned\TaskBar`

3.找到刚刚的快捷方式:右键-属性-目标

4.修改成 bat 文件,还可以改成 Clash 的图标

## 网页 dashboard 下方的节点不是全绿？

1. 手动修改阈值【Clash 下方的延迟显示不是很准确】

2. 只需要替换 js 文件：ClashWeb\Profile\dashboard_Razord\js

3. 或者手动修改，记事本打开此文件，ctrl+F 搜索：`#909399` 将后面的 150 和 500 数值调大

> PS: 方法来自群友，替换后需要清空浏览器缓存

``` json
v={"#909399":0,"#00c520":150,"#ff9a28":500,"#ff3e5e"
```

## clashcmd 可以使用 rule-providers-proxy-providers-script 吗

- **可以**
  下载的目录地址：`clashcmd\Profile\providers`
