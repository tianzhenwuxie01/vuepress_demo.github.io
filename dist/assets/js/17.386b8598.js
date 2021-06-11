(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{377:function(s,t,a){"use strict";a.r(t);var e=a(44),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"使用-git-客户的生成公私钥-id-rsa、id-rsa-pub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-git-客户的生成公私钥-id-rsa、id-rsa-pub"}},[s._v("#")]),s._v(" 使用 git 客户的生成公私钥：id_rsa、id_rsa.pub")]),s._v(" "),a("h4",{attrs:{id:"设置-git-的-user-name-和-email"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-git-的-user-name-和-email"}},[s._v("#")]),s._v(" 设置 Git 的 user name 和 email：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx.mail@xxx.com"')]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"生成-ssh-密钥过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-ssh-密钥过程"}},[s._v("#")]),s._v(" 生成 SSH 密钥过程：")]),s._v(" "),a("p",[s._v("检查是不是已经存在密钥（能进去说明已经存在，就删掉文件夹，重新创建）："),a("br"),s._v("\ncd ~/.ssh\n生成 SSH 密钥：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-keygen -t rsa -C “xxx.mail@xxx.com”\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("按 3 个回车，密码为空。")]),s._v(" "),a("p",[s._v("文件存放位置 ~/.ssh，如果是 window 的话就在："),a("code",[s._v("C:\\Users\\Administrator.ssh")]),s._v("下面，当然如果你不是 Administrator 用户的话，需要换成对应的用户。")]),s._v(" "),a("h3",{attrs:{id:"设置-sourcetree-的-ssh-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-sourcetree-的-ssh-客户端"}},[s._v("#")]),s._v(" 设置 SourceTree 的 SSH 客户端")]),s._v(" "),a("p",[a("strong",[s._v("配置 SourceTree 的 SSH 客户的为：OpenSSH")]),s._v("\n工具 -> 选项"),a("br"),s._v(" "),a("img",{attrs:{src:"https://img-blog.csdn.net/20170107104616094?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGVuZ2Rhemhhbmc3NzA5NjA0MzY=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("设置 OpenSSH, 这时候，SSH 密钥这一栏自然会去选择当前用户下的 .ssh 目录下的 id_rsa 这个私钥")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdn.net/20170107104654561?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGVuZ2Rhemhhbmc3NzA5NjA0MzY=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("添加 ~/.ssh/id_rsa.pub 文件内容到 git 服务器里面去")])]),s._v(" "),a("p",[s._v("比如你的 git 服务是 github，那么你需要在 "),a("a",{attrs:{href:"https://github.com/settings/keys",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/settings/keys"),a("OutboundLink")],1),s._v(" 里面添加 SSH key")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdn.net/20170107105602777?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGVuZ2Rhemhhbmc3NzA5NjA0MzY=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdn.net/20170107110027846?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGVuZ2Rhemhhbmc3NzA5NjA0MzY=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"sourcetree-来下载-git-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sourcetree-来下载-git-项目"}},[s._v("#")]),s._v(" SourceTree 来下载 git 项目")]),s._v(" "),a("p",[s._v("复制你的 git 地址：git@github.com:ztd770960436/justgame.git\n从 SourceTree 里面新建一个地址，这时候你发现你本地已经可以下载远程的 git 代码了\n"),a("img",{attrs:{src:"https://img-blog.csdn.net/20170107110045393?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdGVuZ2Rhemhhbmc3NzA5NjA0MzY=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解释"}},[s._v("#")]),s._v(" 解释：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("是公钥私钥的非对称加密方式：\n公钥：用于向外发布，任何人都能获取。\n私钥：要自己保存，切勿给别人\n公钥私钥加解密的原理\n客户端把自己的公钥存放到要链接的远程主机上（相当于我们把自己的 id_rsa.pub 存放到 git 服务器上）\n客户端要链接远程主机的时候，远程主机会向客户的发送一条随机的字符串，客户的收到字符串之后使用自己的私钥对字符串加密然后发送到远程主机，远程主机根据自己存放的公钥对这个字符串进行解密，如果解密成功证明客户端是可信的，直接允许登录，不在要求登录。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);