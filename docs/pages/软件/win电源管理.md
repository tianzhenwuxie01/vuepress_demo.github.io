

### 当 win 电源管理里没有高性能等选项怎么办？

#### 1，鼠标右键单机开始按钮选择命令提示符

![](https://i2.kknews.cc/SIG=2hc6p8i/ctp-vzntr/r4q46osn8rpn442q9n29498sn31s25on.jpg)...

#### 2，输入

``` yaml
powercfg -duplicatescheme 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
```

就可以开启高性能

![](https://i1.kknews.cc/SIG=e4vo42/ctp-vzntr/3o582n64o2s649q1o8s8n9son001o880.jpg)...

### 其余指令

``` yaml
powercfg -duplicatescheme a1841308-3541-4fab-bc81-f71556f20b4a #节能
powercfg -duplicatescheme 381b4222-f694-41f0-9685-ff5bb260df2e #平衡
powercfg -duplicatescheme 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c #高性能
powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61 #卓越性能（需要 1803 以上版本）
```
