## Rundll32 commands win常用命令


[https://www.tenforums.com/tutorials/77458-rundll32-commands-list-windows-10-a.html](https://www.tenforums.com/tutorials/77458-rundll32-commands-list-windows-10-a.html)[https://winaero.com/blog/windows-10-rundll32-command-list/](https://winaero.com/blog/windows-10-rundll32-command-list/)[https://winaero.com/blog/classic-window-color-windows-10-creators-update/](https://winaero.com/blog/classic-window-color-windows-10-creators-update/)[https://msfn.org/board/topic/176890-restoring-display-settings-in-control-panel/](https://msfn.org/board/topic/176890-restoring-display-settings-in-control-panel/)

比如System.Diagnostics.Process.Start(“RunDLL32.exe”,”shell32.dll,Control_RunDLL timedate.cpl”); 打开对应的“日期和时间 属性”窗口。

其他的窗口对应如下：
辅助选项
模块： access.cpl
命令： rundll32.exe shell32.dll,Control_RunDLL access.cpl,,5
结果： 显示辅助选项/常规。

命令： rundll32.exe shell32.dll,Control_RunDLL access.cpl,,1
结果： 显示辅助选项/键盘。

命令： rundll32.exe shell32.dll,Control_RunDLL access.cpl,,2
结果： 显示辅助选项/声音。

命令： rundll32.exe shell32.dll,Control_RunDLL access.cpl,,3
结果： 显示辅助选项/显示。

命令： rundll32.exe shell32.dll,Control_RunDLL access.cpl,,4
结果： 显示辅助选项/鼠标。

添加新硬件
模块： sysdm.cpl
命令：rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl @1

增加新的打印机
模块：shell32.dll
命令：rundll32.exe shell32.dll,SHHelpShortcuts_RunDLL AddPrinter

添加/删除程序
模块：appwiz.cpl
命令：rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,1
结果：显示安装/卸载。

命令：rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,1
结果：显示安装/卸载。

命令：rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,2
结果：显示Windows 安装。

命令：rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,3
结果：显示启动盘。

复制磁盘
模块：diskcopy.dll
命令：rundll32.exe diskcopy.dll,DiskCopyRunDll

时间/日期
模块： timedate.cpl
命令： rundll32.exe shell32.dll,Control_RunDLL timedate.cpl,,0
结果： 显示设置日期/时间。

命令： rundll32.exe shell32.dll,Control_RunDLL timedate.cpl,,1
结果： 显示设置时间区域。

拨号连接(DUN)
模块： rnaui.dll
命令： rundll32.exe rnaui.dll,RnaDial 连接_名称
结果： 打开指定的拨号连接。
例子：
x= Shell(“rundll32.exe rnaui.dll,RnaDial”  &  “连接_名称”, 1)

显示器
模块： desk.cpl
命令： rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,0
结果： 背景设置。

命令： rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,1
结果： 屏幕保护设置。

命令： rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,2
结果： 外观设置。

命令： rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,3
结果： 设置窗口。

操纵杆
模块： joy.cpl
命令： rundll32.exe shell32.dll,Control_RunDLL joy.cpl

邮件/传真
模块： mlcfg32.cpl
命令： rundll32.exe shell32.dll,Control_RunDLL mlcfg32.cpl
结果： 出现 MS Exchange 属性设置。

邮局设置
模块： wgpocpl.cpl
命令： rundll32.exe shell32.dll,Control_RunDLL wgpocpl.cpl
结果： 显示 MS Postoffice Workgroup Admin 设置。

主设置
模块： main.cpl
命令： rundll32.exe shell32.dll,Control_RunDLL main.cpl @0
结果： 显示鼠标属性。

命令： rundll32.exe shell32.dll,Control_RunDLL main.cpl @1
结果： 显示键盘/速度属性。

命令： rundll32.exe shell32.dll,Control_RunDLL main.cpl @1,,1
结果： 显示键盘/语言属性。

命令： rundll32.exe shell32.dll,Control_RunDLL main.cpl @1,,2
结果： 显示键盘/常规属性。

命令： rundll32.exe shell32.dll,Control_RunDLL main.cpl @2
结果： 显示打印机属性。

命令： rundll32.exe shell32.dll,Control_RunDLL main.cpl @3
结果： 显示字体属性。

命令： rundll32.exe shell32.dll,Control_RunDLL main.cpl @4
结果： 显示电源管理属性。

增加 Modem
模块：modem.cpl
命令：rundll32.exe shell32.dll,Control_RunDLL modem.cpl,,add

多媒体
模块： mmsys.cpl
命令： rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,0
结果：声音。

命令： rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,1
结果：视频。

命令： rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,2
结果：声音 MIDI。

命令： rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,3
结果：CD/音乐。

命令： rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,4
结果：高级。

命令： rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl @1
结果：声音。

网络
模块：netcpl.cpl
命令：rundll32.exe shell32.dll,Control_RunDLL netcpl.cpl

打开方式窗口(Open With)
模块： shell32.dll
命令：rundll32.exe shell32.dll,OpenAs_RunDLL path/filename

口令
模块： password.cpl
命令： rundll32.exe shell32.dll,Control_RunDLL password.cpl

区域设置
模块： intl.cpl
命令： rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,0
结果： 区域设置。

命令： rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,1
结果： 数字格式设置。

命令： rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,2
结果： 金额格式设置。

命令： rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,3
结果：时间格式设置。

命令： rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,4
结果： 日期格式设置。

屏幕保护
模块： appwiz.cpl
命令： rundll32.exe desk.cpl,InstallScreenSaver c:/win/system/Flying Windows.scr
结果： 安装屏幕保护并显示预览属性页。

系统设置
模块： sysdm.cpl
命令： rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,0
结果： 显示常规设置。

命令： rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,1
结果： 显示设备管理设置。

命令： rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,2
结果： 显示硬件设置。

命令： rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,3
结果： 显示性能设置。

IE4 设置
模块： inetcpl.cpl
命令： rundll32.exe shell32.dll,Control_RunDLL inetcpl.cpl

Add/Remove Programs

RunDll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,0

Content Advisor

RunDll32.exe msrating.dll,RatingSetupUI

Control Panel

RunDll32.exe shell32.dll,Control_RunDLL

Delete Temporary Internet Files

RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 8

Delete Cookies

RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 2

Delete History

RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 1

Delete Form Data

RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 16

Delete Passwords

RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 32

Delete All

RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 255

Delete All + files and settings stored by Add-ons:

RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 4351

Date and Time Properties

RunDll32.exe shell32.dll,Control_RunDLL timedate.cpl

Display Settings

RunDll32.exe shell32.dll,Control_RunDLL access.cpl,,3

Device Manager

RunDll32.exe devmgr.dll DeviceManager_Execute

Folder Options – General

RunDll32.exe shell32.dll,Options_RunDLL 0

Folder Options – File Types

RunDll32.exe shell32.dll,Control_Options 2

Folder Options – Search

RunDll32.exe shell32.dll,Options_RunDLL 2

Folder Options – View

RunDll32.exe shell32.dll,Options_RunDLL 7

Forgotten Password Wizard

RunDll32.exe keymgr.dll,PRShowSaveWizardExW

Hibernate

RunDll32.exe powrprof.dll,SetSuspendState

Internet Explorer’s Internet Properties dialog box.

Rundll32 Shell32.dll,ConBring up trol_RunDLL Inetcpl.cpl,,6

Keyboard Properties

RunDll32.exe shell32.dll,Control_RunDLL main.cpl @1

Lock Screen

RunDll32.exe user32.dll,LockWorkStation

Mouse Button – Swap left button to function as right

Rundll32 User32.dll,SwapMouseButton

Mouse Properties Dialog Box

Rundll32 Shell32.dll,Control_RunDLL main.cpl @0,0

Map Network Drive Wizard

Rundll32 Shell32.dll,SHHelpShortcuts_RunDLL Connect

Network Connections

RunDll32.exe shell32.dll,Control_RunDLL ncpa.cpl

Organize IE Favourites

Rundll32.exe shdocvw.dll,DoOrganizeFavDlg

Open With Dialog Box

Rundll32 Shell32.dll,OpenAs_RunDLL Any_File-name.ext

Printer User Interface

Rundll32 Printui.dll,PrintUIEntry /?

Printer Management Folder.

Rundll32 Shell32.dll,SHHelpShortcuts_RunDLL PrintersFolder

Power Options

RunDll32.exe Shell32.dll,Control_RunDLL powercfg.cpl

Process Idle Tasks

rundll32.exe advapi32.dll,ProcessIdleTasks

Regional and Language Options

Rundll32 Shell32.dll,Control_RunDLL Intl.cpl,,0

Stored Usernames and Passwords

RunDll32.exe keymgr.dll,KRShowKeyMgr

Safely Remove Hardware Dialog Box

Rundll32 Shell32.dll,Control_RunDLL HotPlug.dll

Sound Properties Dialog Box

Rundll32 Shell32.dll,Control_RunDLL Mmsys.cpl,,0

System Properties Box

Rundll32 Shell32.dll,Control_RunDLL Sysdm.cpl,,3

System Properties – Advanced

RunDll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,4

System Properties: Automatic Updates

RunDll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,5

Taskbar Properties

RunDll32.exe shell32.dll,Options_RunDLL 1

User Accounts

RunDll32.exe shell32.dll,Control_RunDLL nusrmgr.cpl

Unplug/Eject Hardware

RunDll32.exe shell32.dll,Control_RunDLL hotplug.dll

Windows Security Center

RunDll32.exe shell32.dll,Control_RunDLL wscui.cpl

Windows – About

RunDll32.exe SHELL32.DLL,ShellAboutW

Windows Fonts Installation Folder

Rundll32 Shell32.dll,SHHelpShortcuts_RunDLL FontsFolder

Windows Firewall

RunDll32.exe shell32.dll,Control_RunDLL firewall.cpl

Wireless Network Setup

RunDll32.exe shell32.dll,Control_RunDLL NetSetup.cpl,@0,WNSW

=================================================

“rundll32 shell32,Control_RunDLL” – 运行控制面板
“rundll32 shell32,OpenAs_RunDLL” – 打开”打开方式”窗口
“rundll32 shell32,ShellAboutA Info-Box” – 打开”关于”窗口
“rundll32 shell32,Control_RunDLL desk.cpl” – 打开”显示属性”窗口
“rundll32 user,cascadechildwindows” – 层叠全部窗口
“rundll32 user,tilechildwindows” – 最小化所有的子窗口
“rundll32 user,repaintscreen” – 刷新桌面
“rundll32 shell,shellexecute Explorer” – 重新运行Windows Explorer
“rundll32 keyboard,disable” – 锁写键盘
“rundll32 mouse,disable” – 让鼠标失效
“rundll32 user,swapmousebutton” – 交换鼠标按钮
“rundll32 user,setcursorpos” – 设置鼠标位置为(0,0)
“rundll32 user,wnetconnectdialog” – 打开”映射网络驱动器”窗口
“rundll32 user,wnetdisconnectdialog” – 打开”断开网络驱动器”窗口
“rundll32 user,disableoemlayer” – 显示BSOD窗口, (BSOD) = Blue Screen Of Death, 即蓝屏
“rundll32 diskcopy,DiskCopyRunDll” – 打开磁盘复制窗口
“rundll32 rnaui.dll,RnaWizard” – 运行”Internet连接向导”, 如果加上参数”/1″则为silent模式
“rundll32 shell32,SHFormatDrive” – 打开”格式化磁盘(A)”窗口
“rundll32 shell32,SHExitWindowsEx -1” – 冷启动Windows Explorer
“rundll32 shell32,SHExitWindowsEx 1” – 关机
“rundll32 shell32,SHExitWindowsEx 0” – 退当前用户
“rundll32 shell32,SHExitWindowsEx 2” Windows9x 快速重启
“rundll32 krnl386.exe,exitkernel” – 强行退出Windows 9x(无确认)
“rundll rnaui.dll,RnaDial “MyConnect” – 运行”网络连接”对话框
“rundll32 msprint2.dll,RUNDLL_PrintTestPage” – 选择打印机和打印测试页
“rundll32 user,setcaretblinktime” – 设置光标闪烁速度
“rundll32 user, setdoubleclicktime” – 测试鼠标双击速度
“rundll32 sysdm.cpl,InstallDevice_Rundll” – 搜索非PnP设备
控制面板中的各项功能
winexec(‘rundll32.exe shell32.dll, Control_RunDLL’, 9);
{辅助选项 属性-键盘}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL access.cpl, 1’, 9);
{辅助选项 属性-声音}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL access.cpl, 2’, 9);
{辅助选项 属性-显示}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL access.cpl, 3’, 9);
{辅助选项 属性-鼠标}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL access.cpl, 4’, 9);
{辅助选项 属性-常规}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL access.cpl, 5’, 9);
{添加/删除程序 属性-安装/卸载}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Appwiz.cpl, 1’, 9);
{添加/删除程序 属性-Windows安装程序}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Appwiz.cpl, 2’, 9);
{添加/删除程序 属性-启动盘}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Appwiz.cpl, 3’, 9);
{显示 属性-背景}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL desk.cpl, 0’, 9);
{显示 属性-屏幕保护程序}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL desk.cpl, 1’, 9);
{显示 属性-外观}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL desk.cpl, 2’, 9);
{显示 属性-设置}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL desk.cpl, 3’, 9);
{Internet 属性-常规}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Inetcpl.cpl, 0’, 9);
{Internet 属性-安全}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Inetcpl.cpl, 1’, 9);
{Internet 属性-内容}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Inetcpl.cpl, 2’, 9);
{Internet 属性-连接}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Inetcpl.cpl, 3’, 9);
{Internet 属性-程序}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Inetcpl.cpl, 4’, 9);
{Internet 属性-高级}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Inetcpl.cpl, 5’, 9);
{区域设置 属性-区域设置}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Intl.cpl, 0’, 9);
{区域设置 属性-数字}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Intl.cpl, 1’, 9);
{区域设置 属性-货币}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Intl.cpl, 2’, 9);
{区域设置 属性-时间}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Intl.cpl, 3’, 9);
{区域设置 属性-日期}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Intl.cpl, 4’, 9);
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Joy.cpl, 0’, 9);
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Joy.cpl, 1’, 9);
{鼠标 属性}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Main.cpl’, 9);
{多媒体 属性-音频}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Mmsys.cpl, 0’, 9);
{多媒体 属性-视频}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Mmsys.cpl, 1’, 9);
{多媒体 属性-MIDI}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Mmsys.cpl, 2’, 9);
{多媒体 属性-CD音乐}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Mmsys.cpl, 3’, 9);
{多媒体 属性-设备}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Mmsys.cpl, 4’, 9);
{调制解调器 属性}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Modem.cpl’, 9);
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Netcpl.cpl’, 9);
{密码 属性}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Password.cpl’, 9);
{扫描仪与数字相机 属性}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Sticpl.cpl’, 9);
{系统 属性-常规}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Sysdm.cpl, 0’, 9);
{系统 属性-设备管理器}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Sysdm.cpl, 1’, 9);
{系统 属性-硬件配置文件}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Sysdm.cpl, 2’, 9);
{系统 属性-性能}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Sysdm.cpl, 3’, 9);
{日期/时间 属性}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL timedate.cpl’, 9);
{电源管理 属性}
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Powercfg.cpl’, 9);
winexec(‘rundll32.exe shell32.dll, Control_RunDLL Telephon.cpl’, 9);
关于调用后的判断处理建议：
先声明一个cardinal类型的变量RtnCardinal获取返回值进行判断如：
RtnCardinal := winexec(‘rundll32.exe shell32.dll, Control_RunDLL Telephon.cpl’, 9);
返回值     可能原因
0     程序超出内存
ERROR_BAD_FORMAT   程序为一个非法的Win32.EXE程序
ERROR_FILE_NOT_FOUND   指定文件没找到
ERROR_PATH_NOT_FOUND   指定路径没找到
使用方法：
点击“开始－程式－Ms－Dos方式”，进入Dos视窗，然後键入”rundll32.exe user.exe,restartwindows”
，再按下回车键，这时你将看到，机器被重启了！怎么样，是不是很有趣？
当然，Rundll的功能绝不仅仅是重启你的机器。其实，Rundll者，顾名思义，执行Dll也，它的功能
就是以命令列的方式呼叫Windows的动态链结库，Rundll32.exe与Rundll.exe的区别就在於前者是呼叫32
位的链结库，而後者是运用於16位的链结库，它们的命令格式是：
RUNDLL.EXE ，，
这里要注意三点：1.Dll档案名中不能含有空格，比如该档案位於c:Program Files目录，你要把这
个路径改成c:Progra～1；2.Dll档案名与Dll入口点间的逗号不能少，否则程式将出错并且不会给出任
何资讯！3.这是最重要的一点：Rundll不能用来呼叫含返回值参数的Dll，例如Win32API中的
GetUserName(),GetTextFace()等。在Visual Basic中，提供了一条执行外部程式的指令Shell,格式为：
Shell “命令列”
如果能配合Rundll32.exe用好Shell指令，会使您的VB程式拥有用其他方法难以甚至无法实现的效果
：仍以重启为例，传统的方法需要你在VB工程中先建立一个模组，然後写入WinAPI的声明，最後才能在程
式中呼叫。而现在只需一句:
Shell “rundll32.exe user.exe,restartwindows”就搞定了！是不是方便多了？
实际上，Rundll32.exe在呼叫各种Windows控制面板和系统选项方面有著独特的优势。下面，我就将
本人在因特网上收集的有关Rundll的指令列举如下（很有用的，能省去你很多呼叫Windows API的时间！
！），供大家在程式设计中引用：
命令列: rundll32.exe shell32.dll,Control_RunDLL
功能: 显示控制面板
命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,1
功能: 显示“控制面板－辅助选项－键盘”选项视窗
命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,2
功能: 显示“控制面板－辅助选项－声音”选项视窗
命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,3
功能: 显示“控制面板－辅助选项－显示”选项视窗
命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,4
功能: 显示“控制面板－辅助选项－滑鼠”选项视窗
命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,5
功能: 显示“控制面板－辅助选项－传统”选项视窗
命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl @1
功能: 执行“控制面板－添加新硬体”向导。
命令列: rundll32.exe shell32.dll,SHHelpShortcuts_RunDLL AddPrinter
功能: 执行“控制面板－添加新印表机”向导。
命令列: rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,1
功能: 显示 “控制面板－添加/删除程式－安装/卸载” 面板。
命令列: rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,2
功能: 显示 “控制面板－添加/删除程式－安装Windows” 面板。
命令列: rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,3
功能: 显示 “控制面板－添加/删除程式－启动盘” 面板。
命令列: rundll32.exe syncui.dll,Briefcase_Create
功能: 在桌面上建立一个新的“我的公文包”。
命令列: rundll32.exe diskcopy.dll,DiskCopyRunDll
功能: 显示复制软碟视窗
命令列: rundll32.exe apwiz.cpl,NewLinkHere ％1
功能: 显示“建立快捷方式”的对话框，所建立的快捷方式的位置由％1参数决定。
命令列: rundll32.exe shell32.dll,Control_RunDLL timedate.cpl,,0
功能: 显示“日期与时间”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL timedate.cpl,,1
功能: 显示“时区”选项视窗。
命令列: rundll32.exe rnaui.dll,RnaDial [某个拨号连接的名称]
功能: 显示某个拨号连接的拨号视窗。如果已经拨号连接，则显示目前的连接状态的视窗。
命令列: rundll32.exe rnaui.dll,RnaWizard
功能: 显示“新建拨号连接”向导的视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,0
功能: 显示“显示属性－背景”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,1
功能: 显示“显示属性－萤屏保护”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,2
功能: 显示“显示属性－外观”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,3
功能: 显示显示“显示属性－属性”选项视窗。
命令列: rundll32.exe shell32.dll,SHHelpShortcuts_RunDLL FontsFolder
功能: 显示Windows的“字体”档案夹。
命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @3
功能: 同样是显示Windows的“字体”档案夹。
命令列: rundll32.exe shell32.dll,SHformatDrive
功能: 显示格式化软碟对话框。
命令列: rundll32.exe shell32.dll,Control_RunDLL joy.cpl,,0
功能: 显示“控制面板－游戏控制器－一般”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL joy.cpl,,1
功能: 显示“控制面板－游戏控制器－进阶”选项视窗。
命令列: rundll32.exe mshtml.dll,PrintHTML (HTML文档)
功能: 列印HTML文档。
命令列: rundll32.exe shell32.dll,Control_RunDLL mlcfg32.cpl
功能: 显示Microsoft Exchange一般选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @0
功能: 显示“控制面板－滑鼠” 选项 。
命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @1
功能: 显示 “控制面板－键盘属性－速度”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @1,,1
功能: 显示 “控制面板－键盘属性－语言”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @2
功能: 显示Windows“印表机”档案夹。
命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @3
功能: 显示Windows“字体”档案夹。
命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @4
功能: 显示“控制面板－输入法属性－输入法”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL modem.cpl,,add
功能: 执行“添加新调制解调器”向导。
命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,0
功能: 显示“控制面板－多媒体属性－音频”属性页。
命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,1
功能: 显示“控制面板－多媒体属性－视频”属性页。
命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,2
功能: 显示“控制面板－多媒体属性－MIDI”属性页。
命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,3
功能: 显示“控制面板－多媒体属性－CD音乐”属性页。
命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,4
功能: 显示“控制面板－多媒体属性－设备”属性页。
命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl @1
功能: 显示“控制面板－声音”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL netcpl.cpl
功能: 显示“控制面板－网路”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL odbccp32.cpl
功能: 显示ODBC32资料管理选项视窗。
命令列: rundll32.exe shell32.dll,OpenAs_RunDLL
功能: 显示指定档案(drive:pathfilename)的“打开方式”对话框。
命令列: rundll32.exe shell32.dll,Control_RunDLL password.cpl
功能: 显示“控制面板－密码”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL powercfg.cpl
功能: 显示“控制面板－电源管理属性”选项视窗。
命令列: rundll32.exe shell32.dll,SHHelpShortcuts_RunDLL PrintersFolder
功能: 显示Windows“印表机”档案夹。(同rundll32.exe shell32.dll,Control_RunDLL main.cpl@2)
命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,0
功能: 显示“控制面板－区域设置属性－区域设置”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,1
功能: 显示“控制面板－区域设置属性－数字”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,2
功能: 显示“控制面板－区域设置属性－货币”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,3
功能: 显示“控制面板－区域设置属性－时间”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,4
功能: 显示“控制面板－区域设置属性－日期”选项视窗。
命令列: rundll32.exe desk.cpl,InstallScreenSaver [萤屏保护档案名]
功能: 将指定的萤屏保护档案设置为Windows的屏保，并显示萤屏保护属性视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,0
功能: 显示“控制面板－系统属性－传统”属性视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,1
功能: 显示“控制面板－系统属性－设备管理器”属性视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,2
功能: 显示“控制面板－系统属性－硬体配置档案”属性视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,3
功能: 显示“控制面板－系统属性－性能”属性视窗。
命令列: rundll32.exe user.exe,restartwindows
功能: 强行关闭所有程式并重启机器。
命令列: rundll32.exe user.exe,exitwindows
功能: 强行关闭所有程式并关机。
命令列: rundll32.exe shell32.dll,Control_RunDLL telephon.cpl
功能: 显示“拨号属性”选项视窗
命令列: rundll32.exe shell32.dll,Control_RunDLL themes.cpl
功能: 显示“桌面主旨”选项面板

======================================================

命令列:rundll32.exe user.exe,restartwindows
功能: 系统重启

命令列:rundll32.exe user.exe,exitwindows
功能: 关闭系统

命令列: rundll32.exe shell32.dll,Control_RunDLL
功能: 显示控制面板

命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,1
功能: 显示“控制面板－辅助选项－键盘”选项视窗

命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,2
功能: 显示“控制面板－辅助选项－声音”选项视窗

命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,3
功能: 显示“控制面板－辅助选项－显示”选项视窗

命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,4
功能: 显示“控制面板－辅助选项－滑鼠”选项视窗

命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,5
功能: 显示“控制面板－辅助选项－传统”选项视窗

命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl @1
功能: 执行“控制面板－添加新硬体”向导。

命令列: rundll32.exe shell32.dll,SHHelpShortcuts_RunDLL AddPrinter
功能: 执行“控制面板－添加新印表机”向导。

命令列: rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,1
功能: 显示 “控制面板－添加/删除程式” 面板。

命令列: rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,1

功能: 显示 “控制面板－添加/删除程式－安装/卸载” 面板。

命令列: rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,2
功能: 显示 “控制面板－添加/删除程式－安装Windows” 面板。

命令列: rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,3
功能: 显示 “控制面板－添加/删除程式－启动盘” 面板。

命令列: rundll32.exe syncui.dll,Briefcase_Create
功能: 在桌面上建立一个新的“我的公文包”。

命令列: rundll32.exe diskcopy.dll,DiskCopyRunDll
功能: 显示复制软碟视窗

命令列: rundll32.exe apwiz.cpl,NewLinkHere ％1
功能: 显示“建立快捷方式”的对话框，所建立的快捷方式的位置由％1参数决定。

命令列: rundll32.exe shell32.dll,Control_RunDLL timedate.cpl,,0
功能: 显示“日期与时间”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL timedate.cpl,,1
功能: 显示“时区”选项视窗。

命令列: rundll32.exe rnaui.dll,RnaDial [某个拨号连接的名称]
功能: 显示某个拨号连接的拨号视窗。如果已经拨号连接，则显示目前的连接状态的视窗。

命令列: rundll32.exe rnaui.dll,RnaWizard
功能: 显示“新建拨号连接”向导的视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,0
功能: 显示“显示属性－背景”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,1
功能: 显示“显示属性－萤屏保护”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,2
功能: 显示“显示属性－外观”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,3
功能: 显示显示“显示属性－属性”选项视窗。

命令列: rundll32.exe shell32.dll,SHHelpShortcuts_RunDLL FontsFolder
功能: 显示Windows的“字体”档案夹。

命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @3
功能: 同样是显示Windows的“字体”档案夹。

命令列: rundll32.exe shell32.dll,SHFormatDrive
功能: 显示格式化软碟对话框。

命令列: rundll32.exe shell32.dll,Control_RunDLL joy.cpl,,0
功能: 显示“控制面板－游戏控制器－一般”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL joy.cpl,,1
功能: 显示“控制面板－游戏控制器－进阶”选项视窗。

命令列: rundll32.exe mshtml.dll,PrintHTML (HTML文档)
功能: 列印HTML文档。

命令列: rundll32.exe shell32.dll,Control_RunDLL mlcfg32.cpl
功能: 显示Microsoft Exchange一般选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @0
功能: 显示“控制面板－滑鼠” 选项 。

命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @1
功能: 显示 “控制面板－键盘属性－速度”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @1,,1
功能: 显示 “控制面板－键盘属性－语言”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @2
功能: 显示Windows“印表机”档案夹。

命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @4
功能: 显示“控制面板－输入法属性－输入法”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL modem.cpl,,add
功能: 执行“添加新调制解调器”向导。

命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,0
功能: 显示“控制面板－多媒体属性－音频”属性页。

命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,1
功能: 显示“控制面板－多媒体属性－视频”属性页。

命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,2
功能: 显示“控制面板－多媒体属性－MIDI”属性页。

命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,3
功能: 显示“控制面板－多媒体属性－CD音乐”属性页。

命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,4
功能: 显示“控制面板－多媒体属性－设备”属性页。

命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl @1
功能: 显示“控制面板－声音”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL netcpl.cpl
功能: 显示“控制面板－网路”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL odbccp32.cpl
功能: 显示ODBC32资料管理选项视窗。

命令列: rundll32.exe shell32.dll,OpenAs_RunDLL {drive:/path/filename}
功能: 显示指定档案(drive:/path/filename)的“打开方式”对话框。

命令列: rundll32.exe shell32.dll,Control_RunDLL password.cpl
功能: 显示“控制面板－密码”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL powercfg.cpl
功能: 显示“控制面板－电源管理属性”选项视窗。

命令列: rundll32.exe shell32.dll,SHHelpShortcuts_RunDLL PrintersFolder
功能: 显示Windows“印表机”档案夹。(同rundll32.exe shell32.dll,Control_RunDLL main.cpl @2)

命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,0
功能: 显示“控制面板－区域设置属性－区域设置”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,1
功能: 显示“控制面板－区域设置属性－数字”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,2
功能: 显示“控制面板－区域设置属性－货币”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,3
功能: 显示“控制面板－区域设置属性－时间”选项视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,4
功能: 显示“控制面板－区域设置属性－日期”选项视窗。

命令列: rundll32.exe desk.cpl,InstallScreenSaver [萤屏保护档案名]
功能: 将指定的萤屏保护档案设置为Windows的屏保，并显示萤屏保护属性视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,0
功能: 显示“控制面板－系统属性－传统”属性视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,1
功能: 显示“控制面板－系统属性－设备管理器”属性视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,2
功能: 显示“控制面板－系统属性－硬体配置档案”属性视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,3
功能: 显示“控制面板－系统属性－性能”属性视窗。

命令列: rundll32.exe shell32.dll,Control_RunDLL telephon.cpl
功能: 显示“拨号属性”选项视窗

命令列: rundll32.exe shell32.dll,Control_RunDLL themes.cpl
功能: 显示“桌面主题”选项面板

命令列: rundll32.exe shell32.dll,Control_RunDLL firewall.cpl
功能: 显示“Windows防火墙”面板

命令列: rundll32.exe shell32.dll,Control_RunDLL NetSetup.cpl,@0,WNSW
功能: 显示“无线网络设置”面板

======================================================

System.Diagnostics.Process.Start(“notepad.exe”);        — 打开记事本

System.Diagnostics.Process.Start(“calc.exe “);                — 打开计算器

System.Diagnostics.Process.Start(“regedit.exe “);           — 打开注册表

System.Diagnostics.Process.Start(“mspaint.exe “);        — 打开画图板

System.Diagnostics.Process.Start(“write.exe “);              — 打开写字板

System.Diagnostics.Process.Start(“mplayer2.exe “);        –打开播放器

System.Diagnostics.Process.Start(“taskmgr.exe “);          –打开任务管理器

System.Diagnostics.Process.Start(“eventvwr.exe “);          –打开事件查看器

System.Diagnostics.Process.Start(“winmsd.exe “);           –打开系统信息

System.Diagnostics.Process.Start(“winver.exe “);              –打开Windows版本信息

System.Diagnostics.Process.Start(“mailto: “+ address);    — 发邮件

=============================================================================

rundll32命令大全
命令列:rundll32.exe user.exe,restartwindows
功能: 系统重启

命令列:rundll32.exe user.exe,exitwindows
功能: 关闭系统

命令列: rundll32.exe shell32.dll,Control_RunDLL
功能: 显示控制面板

命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,1
功能: 显示“控制面板－辅助选项－键盘”选项视窗

命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,2
功能: 显示“控制面板－辅助选项－声音”选项视窗

命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,3
功能: 显示“控制面板－辅助选项－显示”选项视窗

命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,4
功能: 显示“控制面板－辅助选项－滑鼠”选项视窗

命令列: rundll32.exe shell32.dll,Control_RunDLL access.cpl,,5
功能: 显示“控制面板－辅助选项－传统”选项视窗

命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl @1
功能: 执行“控制面板－添加新硬体”向导。
命令列: rundll32.exe shell32.dll,SHHelpShortcuts_RunDLL AddPrinter
功能: 执行“控制面板－添加新印表机”向导。
命令列: rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,1
功能: 显示 “控制面板－添加/删除程式” 面板。
命令列: rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,1
功能: 显示 “控制面板－添加/删除程式－安装/卸载” 面板。
命令列: rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,2
功能: 显示 “控制面板－添加/删除程式－安装Windows” 面板。
命令列: rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,3
功能: 显示 “控制面板－添加/删除程式－启动盘” 面板。
命令列: rundll32.exe syncui.dll,Briefcase_Create
功能: 在桌面上建立一个新的“我的公文包”。
命令列: rundll32.exe diskcopy.dll,DiskCopyRunDll
功能: 显示复制软碟视窗
命令列: rundll32.exe apwiz.cpl,NewLinkHere ％1
功能: 显示“建立快捷方式”的对话框，所建立的快捷方式的位置由％1参数决定。
命令列: rundll32.exe shell32.dll,Control_RunDLL timedate.cpl,,0
功能: 显示“日期与时间”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL timedate.cpl,,1
功能: 显示“时区”选项视窗。
命令列: rundll32.exe rnaui.dll,RnaDial [某个拨号连接的名称]
功能: 显示某个拨号连接的拨号视窗。如果已经拨号连接，则显示目前的连接状态的视窗。
命令列: rundll32.exe rnaui.dll,RnaWizard
功能: 显示“新建拨号连接”向导的视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,0
功能: 显示“显示属性－背景”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,1
功能: 显示“显示属性－萤屏保护”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,2
功能: 显示“显示属性－外观”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,3
功能: 显示显示“显示属性－属性”选项视窗。
命令列: rundll32.exe shell32.dll,SHHelpShortcuts_RunDLL FontsFolder
功能: 显示Windows的“字体”档案夹。
命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @3
功能: 同样是显示Windows的“字体”档案夹。
命令列: rundll32.exe shell32.dll,SHFormatDrive
功能: 显示格式化软碟对话框。
命令列: rundll32.exe shell32.dll,Control_RunDLL joy.cpl,,0
功能: 显示“控制面板－游戏控制器－一般”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL joy.cpl,,1
功能: 显示“控制面板－游戏控制器－进阶”选项视窗。
命令列: rundll32.exe mshtml.dll,PrintHTML (HTML文档)
功能: 列印HTML文档。
命令列: rundll32.exe shell32.dll,Control_RunDLL mlcfg32.cpl
功能: 显示Microsoft Exchange一般选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @0
功能: 显示“控制面板－滑鼠” 选项 。
命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @1
功能: 显示 “控制面板－键盘属性－速度”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @1,,1
功能: 显示 “控制面板－键盘属性－语言”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @2
功能: 显示Windows“印表机”档案夹。
命令列: rundll32.exe shell32.dll,Control_RunDLL main.cpl @4
功能: 显示“控制面板－输入法属性－输入法”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL modem.cpl,,add
功能: 执行“添加新调制解调器”向导。
命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,0
功能: 显示“控制面板－多媒体属性－音频”属性页。
命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,1
功能: 显示“控制面板－多媒体属性－视频”属性页。
命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,2
功能: 显示“控制面板－多媒体属性－MIDI”属性页。
命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,3
功能: 显示“控制面板－多媒体属性－CD音乐”属性页。
命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl,,4
功能: 显示“控制面板－多媒体属性－设备”属性页。
命令列: rundll32.exe shell32.dll,Control_RunDLL mmsys.cpl @1
功能: 显示“控制面板－声音”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL netcpl.cpl
功能: 显示“控制面板－网路”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL odbccp32.cpl
功能: 显示ODBC32资料管理选项视窗。
命令列: rundll32.exe shell32.dll,OpenAs_RunDLL {drive:/path/filename}
功能: 显示指定档案(drive:/path/filename)的“打开方式”对话框。
命令列: rundll32.exe shell32.dll,Control_RunDLL password.cpl
功能: 显示“控制面板－密码”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL powercfg.cpl
功能: 显示“控制面板－电源管理属性”选项视窗。
命令列: rundll32.exe shell32.dll,SHHelpShortcuts_RunDLL PrintersFolder
功能: 显示Windows“印表机”档案夹。(同rundll32.exe shell32.dll,Control_RunDLL main.cpl @2)
命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,0
功能: 显示“控制面板－区域设置属性－区域设置”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,1
功能: 显示“控制面板－区域设置属性－数字”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,2
功能: 显示“控制面板－区域设置属性－货币”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,3
功能: 显示“控制面板－区域设置属性－时间”选项视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL intl.cpl,,4
功能: 显示“控制面板－区域设置属性－日期”选项视窗。
命令列: rundll32.exe desk.cpl,InstallScreenSaver [萤屏保护档案名]
功能: 将指定的萤屏保护档案设置为Windows的屏保，并显示萤屏保护属性视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,0
功能: 显示“控制面板－系统属性－传统”属性视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,1
功能: 显示“控制面板－系统属性－设备管理器”属性视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,2
功能: 显示“控制面板－系统属性－硬体配置档案”属性视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,3
功能: 显示“控制面板－系统属性－性能”属性视窗。
命令列: rundll32.exe shell32.dll,Control_RunDLL telephon.cpl
功能: 显示“拨号属性”选项视窗
命令列: rundll32.exe shell32.dll,Control_RunDLL themes.cpl
功能: 显示“桌面主题”选项面板

命令列: rundll32.exe shell32.dll,Control_RunDLL firewall.cpl
功能: 显示“Windows防火墙”面板
命令列: rundll32.exe shell32.dll,Control_RunDLL NetSetup.cpl,@0,WNSW
功能: 显示“无线网络设置”面板

System.Diagnostics.Process.Start(“notepad.exe”);        — 打开记事本
System.Diagnostics.Process.Start(“calc.exe “);                — 打开计算器

System.Diagnostics.Process.Start(“regedit.exe “);           — 打开注册表

System.Diagnostics.Process.Start(“mspaint.exe “);        — 打开画图板

System.Diagnostics.Process.Start(“write.exe “);              — 打开写字板

System.Diagnostics.Process.Start(“mplayer2.exe “);        –打开播放器

System.Diagnostics.Process.Start(“taskmgr.exe “);          –打开任务管理器

System.Diagnostics.Process.Start(“eventvwr.exe “);          –打开事件查看器

System.Diagnostics.Process.Start(“winmsd.exe “);           –打开系统信息

System.Diagnostics.Process.Start(“winver.exe “);              –打开Windows版本信息

System.Diagnostics.Process.Start(“mailto: “+ address);    — 发邮件

shutdown.exe：

参数：-s 关机   -r重启   -f强行   -t 时间    -a 取消关机   -l 注销    -i 显示用户界面

System.Diagnostics.Process.Start(“shutdown.exe”,”-r”);              — 关闭并重启计算机

System.Diagnostics.Process.Start(“shutdown.exe”,”-s -f”);          — 关闭计算机

System.Diagnostics.Process.Start(“shutdown.exe”,”-s -f 30″);     — 30s后关闭计算机

System.Diagnostics.Process.Start(“shutdown.exe”,”-l”);              –注销计算机

System.Diagnostics.Process.Start(“shutdown.exe”,”-a”);              –撤销关闭计算机

SpecialFolder枚举成员：

成员名称 说明
ApplicationData 目录，它用作当前漫游用户的应用程序特定数据的公共储存库。
漫游用户在网络上的多台计算机上工作。漫游用户的配置文件保存在网络服务器上，当用户登录到某个系统上时，它会加载到该系统。

CommonApplicationData 目录，它用作所有用户使用的应用程序特定数据的公共储存库。
CommonProgramFiles 用于应用程序间共享的组件的目录。
Cookies 用作 Internet Cookie 的公共储存库的目录。
Desktop 逻辑桌面，而不是物理文件系统位置。
DesktopDirectory 用于物理上存储桌面上的文件对象的目录。
不应将此目录与桌面文件夹本身混淆，后者是虚拟文件夹。

Favorites 用作用户收藏夹项的公共储存库的目录。
History 用作 Internet 历史记录项的公共储存库的目录。
InternetCache 用作 Internet 临时文件的公共储存库的目录。
LocalApplicationData 目录，它用作当前非漫游用户使用的应用程序特定数据的公共储存库。
MyComputer “我的电脑”文件夹。
注意
由于没有为“我的电脑”文件夹定义路径，因此 MyComputer 常数将始终生成空字符串 (“”)。

MyDocuments “我的电脑”文件夹。
MyMusic “My Music”文件夹。
MyPictures “My Pictures”文件夹。
Personal 用作文档的公共储存库的目录。
ProgramFiles “Program files”目录。
Programs 包含用户程序组的目录。
Recent 包含用户最近使用过的文档的目录。
SendTo 包含“发送”菜单项的目录。
StartMenu 包含“开始”菜单项的目录。
Startup 对应于用户的“启动”程序组的目录。
每当用户登录、启动 Windows NT 或更高版本或启动 Windows 98 时，系统均会启动这些程序。

System “System”目录。
Templates 用作文档模板的公共储存库的目录。
通过Environment.GetFolderPath(Environment.SpecialFolder.XXXXX);我们可以轻松地获得系统特殊文件夹的具体路径，然后用Process.Start()方法打开该文件夹。

例如：

System.Diagnostics.Process.Start(Environment.GetFolderPath(Environment.SpecialFolder.System));   //打开系统文件夹(System32文件夹)

[System.Runtime.InteropServices.DllImportAttribute(“user32.dll”)]
private static extern int FindWindow(string ClassName, string WindowName);

[System.Runtime.InteropServices.DllImport(“user32.dll”)]
private static extern int ShowWindow(int handle, int cmdShow);

[System.Runtime.InteropServices.DllImport(“winmm.dll”, EntryPoint = “mciSendString”, CharSet = System.Runtime.InteropServices.CharSet.Auto)]
private static extern int mciSendString(string lpstrCommand, string lpstrReturnstring, int uReturnLength, int hwndCallback);

private const int SW_HIDE = 0;//API参数表示隐藏窗口
private const int SW_SHOW = 5;//API参数表示用当前的大小和位置显示窗口

ShowWindow(FindWindow(“Shell_TrayWnd”, null), SW_HIDE);         — 隐藏隐藏任务栏

ShowWindow(FindWindow(“Shell_TrayWnd”, null), SW_SHOW);      —  显示任务栏

mciSendString(“set CDAudio door open”, null, 127, 0);       — 弹出光驱

mciSendString(“set CDAudio door closed”, null, 127, 0);     –关闭光驱

同步问题

调用执行档后需要等待调用结束再往下执行 , 就像 ShellExecute 和ShellExecuteEx() .

解决的办法是process.start()之后 判断Process.HasExited的状态 .

================================================================

控制面板的每个工具都是以.cpl文件（实际上就是些DLL文件）的形式提供给系统运行的，这些.cpl文件位于：WindowsSystem32 文件夹。
如果我们要以命令行的方式运行这些控制面板程序，可使用命令行工具“control.exe”：
Control.exe 目标文件.cpl
下面列出Windows系统中可能含有的控制面板文件（并不完全，某些系统可能没有安装部分控制面板工具）：
Access.cpl 辅助功能选项
Appwiz.cpl 添加/删除程序
Desk.cpl 显示属性
Firewall.cpl Windows防火墙
Hdwwiz.cpl 添加硬件向导
Inetcpl.cpl Internet 属性
Intl.cpl 区域和语言选项
Irprops.cpl 红外线端口属性（未安装红外线设备则无效）
Joy.cpl 游戏控制器
Main.cpl 鼠标属性
Mmsys.cpl 声音和音频设备属性
Ncpa.cpl 网络连接属性
Netsetup.cpl 网络安装向导
Nusrmgr.cpl 用户账户属性
Nwc.cpl NetWare的网关服务属性
Odbccp32.cpl ODBC数据源管理器
Powercfg.cpl 电源选项属性
Sapi.cpl 语音属性（位于C:Program filesCommon filesMicrosoft SharedSpeech）
Sticpl.cpl 扫描仪和照相机
Sysdm.cpl 系统属性
Telephon.cpl 电话和调制解调器选项
Timedate.cpl 日期和时间属性
Wscui.cpl Windows安全中心
Wuaucpl.cpl 自动更新属性
Control 命令用法：
1.在命令行中执行“control 控制面板文件.cpl”后即可打开相应属性/选项窗口。也可使用此命令运行：   “rundll32.exe shell32.dll,Control_RunDLL控制面板文件.cpl”
比如：
(1)control.exe appwiz.cpl       //打开“添加或删除程序”
(2)rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl       //效果同上
2.这两种方式都将运行相应控制面板工具的第一个项目/小程序，如果该控制面板工具含有多个项目，则可   以此形式运行：“Control.exe 控制面板文件.cpl,@项目编号”。项目编号从0开始，表示第一个项目，不指定项目编号时默认为@0。
比如：
(1)control main.cpl,@0      //打开“鼠标属性”
(2)control main.cpl,@1      //打开“键盘属性”
3.有些属性窗口含有多个页面，我们可以指定具体要打开哪一个页面，格式：“Control.exe 控制面板文件.cpl,@项目编号,页面号”，其中@项目编号可留空，表示使用默认数值0。要提醒一下的是，这里的“页面号”定义比较混乱，并非严格从0开始，请自行试验。
比如：
(1)control main.cpl,@1,2 //打开“鼠标属性”的第三个标签页“指针选项”
(2)Control.exe appwiz.cpl,@0,2//打开“添加或删除程序”的第二个页面“添加/删除Windows组件”
4.Windows 还特别定义了某些常用的控制面板项目名，使用这些名称可以更加简便地访问它们。
比如：
(1)control netconnections    //打开“网络连接”
(2)control color                  //显示属性的外观选项卡
下面列出可用的项目名：
desktop 打开 显示属性 窗口
color 打开 显示属性 的 外观 选项卡
date/time 打开 日期和时间 属性窗口
international 打开 区域和语言选项 窗口
mouse 打开 鼠标属性 窗口
keyboard 打开 键盘属性 窗口
printers 打开 打印机和传真 文件夹
fonts 打开 字体 文件夹
Windows 2000 及后续操作系统：
folders 打开 文件夹选项 窗口
netware 打开 Novell NetWare 窗口（如果有安装的话）
telephony 打开 电话和调制解调器选项 窗口
admintools 打开 管理工具 文件夹
schedtasks 打开 任务计划 文件夹
netconnections 打开 网络连接 文件夹
infrared 打开 红外线监视 窗口（如果有安装的话）
userpasswords 打开 用户账户 窗口