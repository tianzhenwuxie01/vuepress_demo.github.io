---
title: Python 多进程运行——Multiprocessing 基础教程 3
date: 2020-08-08 09:25:13
author: 0514
#img: https://one.0514.ink/view/2019/12/21/NMr02MyX/57d172326e39dfbf60fcdb795a08e758.jpg
#top: true   #(置顶)
#cover: true    #（轮播）
#coverImg: https://one.0514.ink/view/2019/12/21/WEQNERiF/IMG_20180705_173106.jpg
#summary: 淘宝导入ps切图图片与图片见出现空隙，白条现象（具体测试见码云gitee）
categories: 学习
tags:
  - python
---

## Python 多进程运行——Multiprocessing 基础教程 3


之前两篇文章讨论了 Multiprocessing 模块的基本概念以及进程间的数据交换。本文将要介绍 Multiprocessing 模块进程间的同步以及池化。

### 进程间同步

进程同步是一种确保两个或多个并发进程不同时执行某些特定的程序段 (关键段) 的一种机制。所谓关键段，是指程序中访问共享数据的部分。

如果不同的进程同时访问共享数据的话，可能会引起资源竞争的问题。所谓资源竞争，就是多个进程同时访问共享数据，并且当它们试图同时更改该数据时，就会出现竞争。这种情况下，变量的修改结果就是不可预测的了。

我们用一个程序来展示资源竞争问题：

```python
# Python program to illustrate  
# the concept of race condition 
# in multiprocessing 
import multiprocessing 

# function to withdraw from account 
def withdraw(balance):     
    for _ in range(10000): 
        balance.value = balance.value - 1

# function to deposit to account 
def deposit(balance):     
    for _ in range(10000): 
        balance.value = balance.value + 1

def perform_transactions(): 
    # initial balance (in shared memory) 
    balance = multiprocessing.Value('i', 100) 

    # creating new processes 
    p1 = multiprocessing.Process(target=withdraw, args=(balance,)) 
    p2 = multiprocessing.Process(target=deposit, args=(balance,)) 

    # starting processes 
    p1.start() 
    p2.start() 

    # wait until processes are finished 
    p1.join() 
    p2.join() 

    # print final balance 
    print("Final balance = {}".format(balance.value)) 

if __name__ == "__main__": 
    for _ in range(10): 

        # perform same transaction process 10 times 
        perform_transactions()

```

如果你运行上面的程序，就会得到一些意想不到的值：

```python
Final balance = 1311
Final balance = 199
Final balance = 558
Final balance = -2265
Final balance = 1371
Final balance = 1158
Final balance = -577
Final balance = -1300
Final balance = -341
Final balance = 157

```

在上面的程序中，初始值为 100。存 10000，取 10000，理论最终值也是 100，但是在 10 次不同的运行后，我们得到了 10 个不同的值。

这就是多进程并发访问共享数据造成的资源竞争所带来的结果。我们用一个表格，来帮助理解为什么会产生这样的错误：

![https://pic3.zhimg.com/v2-21c1b426c8a4bbbf1f54fd47b8f229a2_r.jpg](https://pic3.zhimg.com/v2-21c1b426c8a4bbbf1f54fd47b8f229a2_r.jpg)

为了防止多进程并行出现这样的错误，Multiprocessing 模块提供了 Lock 类来处理资源竞争。Lock 类是使用一种操作系统提供的叫 Semaphore 的计数信号量来实现的。

Semaphore 控制并行编程环境中多个进程对公共资源的访问。Semaphore 只是操作系统存储中指定位置的一个值，每个进程都可以检查并更改它。根据 Semaphore 的值，进程会选择使用资源，或者发现资源已经在使用，则必须等待一段时间后再尝试。Semaphore 可以是二进制（0 或 1），也可以有其他值。一般当进程检查 Semaphore 并确认可以使用了之后，进程就会修改这个值，这样，后续进程就会知道，需要等待一段时间了。

既然如此，我们就给上面的程序加上一个锁，看看是否能够如愿运行：

```python
r_none
edit
play_arrow

brightness_4
# Python program to illustrate  
# the concept of locks 
# in multiprocessing 
import multiprocessing 

# function to withdraw from account 
def withdraw(balance, lock):     
    for _ in range(10000): 
        lock.acquire() 
        balance.value = balance.value - 1
        lock.release() 

# function to deposit to account 
def deposit(balance, lock):     
    for _ in range(10000): 
        lock.acquire() 
        balance.value = balance.value + 1
        lock.release() 

def perform_transactions(): 
    # initial balance (in shared memory) 
    balance = multiprocessing.Value('i', 100) 

    # creating a lock object 
    lock = multiprocessing.Lock() 

    # creating new processes 
    p1 = multiprocessing.Process(target=withdraw, args=(balance,lock)) 
    p2 = multiprocessing.Process(target=deposit, args=(balance,lock)) 

    # starting processes 
    p1.start() 
    p2.start() 

    # wait until processes are finished 
    p1.join() 
    p2.join() 

    # print final balance 
    print("Final balance = {}".format(balance.value)) 

if __name__ == "__main__": 
    for _ in range(10): 

        # perform same transaction process 10 times 
        perform_transactions()

```

输出结果如下：

```python
Final balance = 100
Final balance = 100
Final balance = 100
Final balance = 100
Final balance = 100
Final balance = 100
Final balance = 100
Final balance = 100
Final balance = 100
Final balance = 100

```

最终，输出结果与预期的一致。我们在程序中的改动，只有创建了一个 Lock 类：

```python
lock = multiprocessing.Lock()

```

并且将这个锁，作为参数传递给了函数。在关键区，我们使用`lock.acquire()`方法检查并使用了锁。一旦确认使用，那么其他进程就不能再使用了，直到该进程用`lock.release()`方法释放了该锁。

### 进程池化

首先我们来看一个例子：

```python
def square(n): 
    return (n*n) 

if __name__ == "__main__": 

    # input list 
    mylist = [1,2,3,4,5] 

    # empty list to store result 
    result = [] 

    for num in mylist: 
        result.append(square(num)) 

    print(result)

```

这是一个计算给定列表元素的平方的非常简单程序。在多核 / 多处理器系统中，我们来看一张图来理解上述程序将如何工作:

![https://pic3.zhimg.com/v2-1fa331c38635a42a7b303d3aa1e1bcb2_r.jpg](https://pic3.zhimg.com/v2-1fa331c38635a42a7b303d3aa1e1bcb2_r.jpg)

虽然这是一个很简单的程序，但是这里只使用了一个核心用于程序执行，其他的核心可能保持空闲状态。

为了能够充分发挥多核处理器的威力，Multiprocessing 模块提供了一个 Pool 类。所谓 Pool 类是指一个工作进程池，它能够将任务分配给不同的工作进程，我们来看一个图：

![https://pic3.zhimg.com/v2-6ef427aee48171537c930ec5fab51792_r.jpg](https://pic3.zhimg.com/v2-6ef427aee48171537c930ec5fab51792_r.jpg)

Pool 类能够自动地将计算任务分配到了不同的核心，这样我们就不需要手动显式地创建进程了。Pool 类调用起来也非常简单：

```python
import multiprocessing 
import os 

def square(n): 
    print("Worker process id for {0}: {1}".format(n, os.getpid())) 
    return (n*n) 

if __name__ == "__main__": 
    mylist = [1,2,3,4,5] 

    # creating a pool object 
    p = multiprocessing.Pool() 

    # map list to target function 
    result = p.map(square, mylist) 

    print(result)

```

这样就可以了，首先我们创建了一个 Pool 对象：

```python
p = multiprocessing.Pool()

```

我们还可以向 Pool 传递其他参数，比如：

- processes：用于指定分配的进程数量
- maxtasksperchild：用于指定每个子进程所分配到的最大任务数

我们还可以用这些参数对池中的进程进行一些初始化：

- initializer：为进程指定初始化函数
- initargs：向初始化函数传递的参数值

在创建了 Pool 对象之后，我们只需要使用`map()`方法，使其执行具体的任务即可。

```python
result = p.map(square, mylist)

```

这里我们使用`map()`方法向 square 函数输入了 mylist。这样计算任务就会自动分配给各个核心了。当所有的进程都完成了任务后，就会返回最终的结果。