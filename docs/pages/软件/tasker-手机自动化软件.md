## tasker-手机自动化软件

Column: Jan 25, 2021 11:21 AM
分类: 科学发现
时间: Jan 22, 2021
时间中文: 2021-01-22
标签: 手机

## 王者自动化换装

Tasker+AutoInput来实现，为什么不用input tap xx xx呢，因为adb的延时着实感人啊。。。

AutoInput需要无障碍权限，如果要让tasker开启无障碍权限还需要adb授权—[文档链接](https://tasker.joaoapps.com/userguide/en/help/ah_secure_setting_grant.html)

```bash
win用户
adb shell pm grant net.dinglisch.android.taskerm android.permission.WRITE_SECURE_SETTINGS
mac用户
./adb shell pm grant net.dinglisch.android.taskerm android.permission.WRITE_SECURE_SETTINGS
```

## 常见问题

tasker测试没问题，进入后台后不正常工作

详细描述：tasker编辑页面测试一切正常，如可以唤醒其他应用。切到后台触发就无法唤醒其他应用

权限问题，给tasker【锁屏显示】、【后台弹出界面】、【显示悬浮窗】、【常驻通知】等权限，并加【后台运行锁】(多任务界面，给应用加锁)即可。

- 权限截图

    ![https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20210122181839.png](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20210122181839.png)