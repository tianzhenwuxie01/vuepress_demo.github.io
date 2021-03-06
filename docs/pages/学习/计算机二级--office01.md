---
title: 计算机二级--office
date: 2020-08-28 09:25:12
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 淘宝导入ps切图图片与图片见出现空隙，白条现象（具体测试见码云gitee）
categories: 学习
tags:
  - office
---

## 数据结构和算法

### 算法

#### 1\_算法的概念

什么是算法：
对特定问题求解步骤的一种描述，是一组指令的有限序列，每个指令包含一个或多个操作。
对于一个问题，如果可以通过一个计算机程序，在有限的存储空间内运行有限长的时间而得到正确的结果，则称这个问题是算法可解的

**算法不等于程序，也不等于计算方法。**

**特征**：可行性，确定性，有穷性，拥有足够的情报

**算法的基本要素**：

1. 对数据的运算操作【算术(加减乘除)、逻辑(与或非)、关系运算(大于小于)、数据传输(输入输出赋值)】
2. 算法的控制结构（执行顺序）
   用顺序(例如 python 正常的执行)、选择(if..else..)、循环(for,while)三种基本控制结构组合而成

   描述算法的工具：

   - 传统流程图
   - N-S 结构化流程图
   - 算法描述语言

#### 2\_算法的设计方法

- **列举法**:列举所有可能
  - 多用于解決“是否存在”、“有多少种可能”此类问题
- **归纳法**：从特殊到一般
- **递推**：从条件到结论
- **递归**：函数的自调用
- **减半递推**：分治
- **回溯**：反证

#### 3\_算法复杂度/特性

**复杂度**:

- 空间复杂度--执行算法需要的内存空间
- 时间复杂度--执行算法需要的计算工作量(非执行时间)

**特性**:

- **正确性**:算法应满足具体问题的需求
- **可读性**:算法应容易供人阅读和交流。便于对算法理解修改
- **健壮性**:算法具有一定的容错性
- **通用性**:算法对一般数据都成立
- **效率和存储量需求**:

### 数据结构简介

#### 数据元素

春、夏、秋、冬，可以作为季节的数据元素
东、西、南、北，可以作为方向的数据元素

> 数据元素一般具有某种共同特征，并非杂乱无章的堆砌在一起元素之间存在着某种关系称之为“前后件关系

#### 数据结构

**这里所说的结构实际上就是指数据元素之间的前后件关系**
一个数据结构应包含如下两种信息:

1. 表示数据元素的信息
2. 表示各数据元素之间的前后件关系。

**逻辑关系**
数据的逻辑结构是指反映数据元素之间逻辑关系的数据结构。

逻辑结构的数学形式定义：B=(D,R)
D--数据元素的集合
R--D 上关系的集合
B--数据结构

例如:D={春,夏,秋,冬} B={D,R},则 R={(春,夏),(夏.秋),(秋.冬)}

**数据的存储结构**（物理结构）
逻辑结构在计算机存储空间中的存放形式

- **在数据的存储结构中，不仅要存放各数据元素的信息，还需要存放各数据元素之间的前后件关系的信息**。
- **一种数据的逻辑结构可以表示成多种存储结构。**
- 常用的存储结构有**顺序、链接、索引**等存储结构
- 对于一种数据的逻辑结构，如果采用**不同的存储结构，则数据处理的效率是不同的**。因此，在进行数据处理时，选择合适的存储结构是非常重要的

**数据结果中节点**

- **根结点：**无前件结点的结点
- **叶子结点：**无后件结点的结点
- **内部结点：**其他节点

### 线性数据结构

**线性结构**--线性结构

- **包括线性表，线性链表，栈，队列，**

如果一个非空的数据结构满足下列条件

1. 有且只有一个根结点
2. 每个结点最多有一个前件，最多有一个后件结点
3. 插入或删除一个结点后仍是线性机构则称该数据结构为线性结构。

例如:D={1,3,5,7,9} 数据结构 B=(D,R)

- R={(5,1),(7,9),(1,7),(9,3)},可以写成 5⇢1⇢7⇢9⇢3----是线性
- R={(1,3),(3,5),(5,9),(7,3)},----'3'有两个前件,不是线性
- 春 ⇢ 夏 ⇢ 秋 ⇢ 冬----是线性

#### 数据结构--线性表

**线性表的储存结构**--顺序 and 链式

**顺序储存结构**
特点：

1. 线性表中所有元素所占的存储空间是连续的
2. 线性表中各数据元素在存储空间中是按逻辑顺序依次存放的。

顺序结构图释--**存放满了再次存放会发生上溢错误**

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200828170335.png)

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200828170350.png)

**插入与删除图释**--图为插入-删除同理

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200828170751.png)

#### 数据结构--线性链表

线性表缺点:

- 插入和删除运算效率很低
- 储存空间不利于扩充
- 不利于存储空间的动态分配

**结论**:元素变动频繁或大线性表不适用用顺序存储

**线性链表的基本概念**
线性表的链式存储结称为线性链表。线性链表中的每一个元素由以下两部分组成。

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200828181110.png)

> 只有后件指针,查找前一个数据只能从头开始

**插入**

- 线性链表插入一个元素，不需要移动表的数据元素只需要改变相关结点的指针域即可
- 删除一个元素的操作，不需要移动表的数据元素只需要改变被删除元素所在结点的前一个结点的指针域即可

**双向链表**

在一些应用中，对线性链表中的每个结点设置两个指针域，一个指向其**前件结点**，称为前件指针或左指针；另指向其**后件结点**，称为后件指针或右指针。这样的线性链表称为**双向链表**

> 有前后件指针,查找前一个数据不需要从头开始

**循环链表**

循环链表的结构具有下面两个特点

1. 在循环链表中增加了ー个表头结点。表头结点的数据域为任意或者根据需要来设置，指针域指向线性表的第一个元素的结点循环链表的头指针指向表头结点。
2. 循环链表中最后一个结点的指针域不是空的，而是指向表头结点。即在循环链表中，所有结点的指针构成了一个环状链，如下图所示

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200828182810.png)

> 循环链表即使是一个单项的指针,不需要从头开始也能找到指定数据

#### 数据结构--栈

**栈的基本概念**
限定仅在一端进行插入和删除运算的线性表。
在桟中，允许插入与删除的一端称为栈顶，而不允许插入与删除的另一端称为栈底。

**栈的出口入口都是同一个**--类似于子弹弹夹，后进先出，先进后出

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200828172240.png)

**常见考点**

1. 栈是按照“先进后出”或“后进先出”的原则组织数据的线性表
2. 在栈的入機和退栈的运算当中，栈底指针 bottom 维持不变。
3. 因为栈能保存数据，因此機具有记忆作用。
4. 栈内的元素个数计算：个数=top-tottom+1,其中 BOTTON>=1 如果栈当中 TOP= BOTTOM=0 说明栈是空的。

> 输入序列是 abcd，不代表必须是全部进去。可以 a 进栈出栈后 b 再进栈出栈--选 D
> ![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200828173855.png)

#### 数据结构--队列

**队列的基本概念**
队列（ queue）是限定仅在表的一端进行插入，而在表的另一端进行删除的线性表。
在队列中，允许插入的一端称为队尾，允许删除的一端称为队头。
队列又称为“**先进先出**"或“**后进后出**”的线性表。

在队列中，通常用指针 `front`指向队头元素的**前个位置**，用`rear`指向队尾**最后一个元素**,如图:

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200828175315.png)

队列的插入与删除

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200828175315.png)

循环队列的插入与删除

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200828175452.png)

**队列个数计算**
循环队列中元素的个数=rear（尾）- front（头）。

1. rear- front 为正数时，便是循环队列的元素个数
2. rear- front 为负数时，需要再加上循环队列的容量。
3. rear- front 为零时，可以取以上两种情况。

**常见考点**

1. 队列是“先进先出”或“后进后出”的线性表，入口和出口不是同一个口。
2. 循环队列是队列的一种顺序存储结构因为其存储空间是按顺序连续定义的。

### 非线性数据结构

#### 树

树（tree）是一种非线性结构。在树这种数据结构中，所有数据元素之间的关系具有明显的层次特点。

- **父结点**：在树结构中，每一个结点只有一个前件，没有前件的结点只有一个称为根结点（简称根）

- **子结点**：每一个结点可以有多个后件结点，称为该结点的子结点， 例如下图 B 的字节的有 E,F,G

- **叶子结点**：没有后件结点的结点

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200828191914.png)

树中某个结点的后件的个数称为该**节点的度**----叶子节点度为 0
树中所有结点的最大的度为**树的度**
以某结点的一个子结点为根构成的树称为该**结点的一棵子树**
树中的每个结点都处在一定的层次上，树中结点的最大层次称为**树的深度**----上图中树的深度为 3

#### 二叉树

**基本概念**：
是一个有限的结点集合，该集合或者为空，或者由一个根结点及其两棵互不相交的左、右二叉子树所组成

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200828195957.png)

**五种状态**

1. 什么也没有，为空
2. 只有一个根
3. 只有一个左子树
4. 只有一个右子树
5. 有左右子树

**特点**

1. 非空二叉树只有一个根结点
2. 每一个结点最多有两棵子树，且分别称为**该结点**的左子树与右子树

**基本性质**

1. 在二叉树中，**第层的结点数**最多为$2^{i-1}$个（i≧1)。----最多指定就是满二叉树
2. 在深度为 m 的二叉树中，**结点总数**最多为$2^m-1$个（k≥1). ----最多指定就是满二叉树
3. 在任意一个二叉树中，度为 0 的结点（**叶子结点**）总是比**度为 2 的结点多ー个**
4. 具有 n 个节点的二叉树，其深度至少为[log$_a$n]+1,其中[log$_2$n]表示取[log$_2$n]的整数部分

上面基本性质第三条推导
![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200828200014.png)

**满二叉树**

除最后一层外，每层上的所有结点都有两个子结点，这种叫满二叉树

- 满二叉树在其第 i 层上有$2^{i-1}$个结点，即每一层上的节点数都是最大结点数
- 一棵深度为 K 的满二叉树，整棵二叉树共有$2^k$-1 个结点

**完全二叉树**

除**最后一层外**，每一层上的结点数均达到最大值，在最后一层上**只缺少右边**的若干结点，这种叫完全二叉树---(左子树不能缺少)

- 叶子节点只可能在最后两层出现
- 对于任一节点，若其右子树的深度 m，则该节点左子树的深度为 m 或为 m

**二叉树的遍历**（必考点）
指不重复的访回、一叉树中的所有结点

遍历原则:先访问左子树再访问右子树,分为:前序遍历,中序遍历,后续遍历(前中后指得是根，每个子树都遵循)

- 前序遍历:跟 ⇢ 左 ⇢ 右
- 中序遍历:左 ⇢ 根 ⇢ 右
- 后序遍历:左 ⇢ 右 ⇢ 根

## 程序设计基础

**程序**：
是将计算机语言代码依据一定的语法规则，描述为完成特定任务的算法的指令序列。

个具有良好编码风格的程序主要表现为**可读性好**，**易测试**，**易维护**
程序设计的风格主要强调：“**清晰第一**，**效率第二**"

### 结构化程序设计方法的主要原则

自顶向下，逐步求精，模块化，限制使用 goto 语句（高频考点）。

**结构化程序的基本结构分为**：

- 顺序结构（正常向下执行）
- 选择结构（if。。else。。）
- 重复结构（white。。）

## 程序设计基础

**软件的定义、组成**

- 计算机系统中与硬件相互依存的另一部分，是包括程序、数据及其相关文档的集合。
- 软件由两部分组成：**机器可执行的程序**、**数据**和**有关文档**

**计算机硬件划分**：

1. 运算器
2. 控制器
3. 储存器
4. 输入设备
5. 输出设备

**软件分类**：

- 系统软件
- 应用软件

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200829115933.png)

### 软件工程

**软件危机**：

- 软件需求的增长得不到满足
- 软件开发的成本和进度无法控制
- 软件质量难以保证
- 软件不可维护或维护成度非常低软件
- 成本不断提高
- 软件开发生产率的提高赶不上硬件的发展和应用需求的增长。

> **将软件危机可以归结为成本、质量、生产率等问题。**

为了消除软件危机，形成了软件工程的概念，开辟了工程学的新兴领域软件工程学。软件工程就是试图用工程、科学和数学的原理与方法研制、维护计算机软件的有关技术及管理方法。
关于软件工程的定义，国标（GB）中指出，软件工程是
**应用计算机科学理论和技术、工程管理的原则和方法，按预算和进度，实现满足用户要求的软件产品的定义、开发、发布和维护的工程或进行研究的学科**

软件开发技术
主要有软件开发方法学、软件工具、软件工程环境。

**软件工程管理**
软件工程的主要思想是将工程化原则运用到软件开发过程，它包括 3 要素:**方法**、**工具**和**过程**。

**软件生命周期**:

**周期**:定义 ⇢ 开发 ⇢ 维护

软件生命周期中所花费最多的阶段是软件运行**维护阶段**，也是生命周期中时间最长的阶段

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200829121109.png)

**软件工程的目标**:
在给定成本、进度的前提下，开发出具有有效性、可靠性、可理解性、可维护性、可重用性、可适应性、可移植性、可追踪性和可互操作性且满足用户需求的产品。

#### 结构化分析方法

需求分析方法：

- SA 面向数据流的结构化分析方法
- JACKSON 面向数据结构的结构化分析方法
- DSSD 面向数据结构的结构化数据系统开发方法

SA 面向数据流的结构化分析方法
定义
使用**数据流图 DFD**、**数据字典 DD**、结构化英语、判定表和判定树等工具，来建立一种新的、称之为结构化规格说明的目标文档

**常用工具**

- **数据流程图 DFD**

以图形的方式描绘数据在系统中流动和处理的过程，它反映了系统必须完成的逻辑功能，是结构化分析方法中用于表示系统逻辑模型的一种工具。

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200829123451.png)

- **数据字典 DD**

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200829123826.png)

- **判定表**

若 DFD 中的加工需要依赖于多个逻辑条件的取值，则使用判定表来表示更为合适。

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200829124107.png)

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200829124302.png)

- **判定树**

也是用来表示加工逻辑的一种工具，有时候比判定表更直观。

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200829124314.png)

**软件需求规格说明书**

需求分析阶段的最后成果，是软件开发中的重要文档之
软件需求规格说明书的作用

1. 便于用户、开发人员进行理解和交流
2. 反映出用户问题的结构，可以作为软件开发工作的基础和依据。
3. 作为确认测试和验收的依据。
4. 为成本估算和编制计划进度提供基础
5. 软件不断改进的基础

#### 结构化设计方法

一个设计良好的软件系统应具有**高内聚**、**低耦合**的特征

**详细设计-常用工设计具**
图形工具：**程序流程图**，**N-S**,**PAD**,**HIPO**。
表格工具：**判定表**。
语言工具：**PDL（伪码）**。

- 程序流程图

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200829125306.png)

- N-S 流程图

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200829125517.png)

- PAD 流程图

![](https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200829125553.png)

#### 软件测试

**测试目的**

- 测试是程序的执行过程，目的在于发现错误
- 一个好的测试用例在于能发现至今未发现的错误
- 一个成功的测试是发现了至今未发现的错误的测试。
  尽可能地多发现程序中的错误，不能也不可能证明程序没有错误

**软件测试方法**

- 是否需执行被测软件
  - 静态测试（代码人工检查--不需要运行软件）
  - 动态测试（上机测试，为了发现错误而执行程序的错误）
- 根据功能
  - 白盒测试--白盒方法：逻辑覆盖，基础路径测试（测试内部结构和流程）
  - 黑盒测试--黑盒方法：等价类划分法，边界值分析法，错误推测法（测试外部功能和特性）

**软件调试方法**

1. 强行排错法
2. 回溯法
3. 原因排除法
