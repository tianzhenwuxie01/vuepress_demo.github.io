(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{383:function(t,s,e){"use strict";e.r(s);var a=e(44),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"hexo-github-page-搭建博客方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hexo-github-page-搭建博客方法"}},[t._v("#")]),t._v(" HEXO+GitHub Page 搭建博客方法")]),t._v(" "),e("p",[t._v("Github Page + Hexo 搭建个人博客的方式。Github Page 是 Github 提供的一种免费的静态网页托管服务（所以想想免费的空间不用也挺浪费的哈哈哈），可以用来托管博客、项目官网等静态网页。支持 Jekyll、Hugo、Hexo 编译静态资源，这次我们的主角就是 Hexo 了，具体的内容下面在文章内介绍。")]),t._v(" "),e("h3",{attrs:{id:"hexo-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hexo-安装"}},[t._v("#")]),t._v(" hexo 安装")]),t._v(" "),e("p",[t._v("下面就开始吧~")]),t._v(" "),e("h4",{attrs:{id:"准备环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备环境"}},[t._v("#")]),t._v(" 准备环境")]),t._v(" "),e("p",[t._v("准备 node 和 git 环境，\n首先，安装 NodeJS，因为 Hexo 是基于 Node.js 驱动的一款博客框架\n然后，安装 git，一个分布式版本控制系统，用于项目的版本控制管理，作者是 Linux 之父。")]),t._v(" "),e("p",[t._v("官网地址："),e("a",{attrs:{href:"https://nodejs.org/en/",title:"node.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("node.js"),e("OutboundLink")],1),t._v("\n一直下一步就可以")]),t._v(" "),e("h4",{attrs:{id:"在命令行中输入相应命令验证是否成功-如果成功会有相应的版本号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在命令行中输入相应命令验证是否成功-如果成功会有相应的版本号"}},[t._v("#")]),t._v(" 在命令行中输入相应命令验证是否成功，如果成功会有相应的版本号")]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("git version\nnode "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("v\nnpm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("v\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/08/15/Drb6gle827oBHtA.png",alt:"Snipaste_2019-08-15_16-01-48"}})]),t._v(" "),e("h4",{attrs:{id:"安装-hexo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-hexo"}},[t._v("#")]),t._v(" 安装 Hexo")]),t._v(" "),e("p",[t._v("如果以上环境准备好了就可以使用 npm 开始安装 Hexo 了。也可查看 Hexo 的详细文档。\n在命令行输入执行以下命令：")]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("npm install "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("g hexo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cli\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("等待安装完成")]),t._v(" "),e("h4",{attrs:{id:"安装-hexo-完成后-再执行下列命令-hexo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-hexo-完成后-再执行下列命令-hexo"}},[t._v("#")]),t._v(" 安装 Hexo 完成后，再执行下列命令，Hexo")]),t._v(" "),e("p",[t._v("将会在指定文件夹中新建所需要的文件。")]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("hexo init myBlog\ncd myBlog\nnpm install\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("blockquote",[e("p",[t._v("注意如果 hexo init 指令报错请更新 node，npm 版本")])]),t._v(" "),e("ul",[e("li",[t._v("hexo init：初始化并建立一个叫 myBlog 的文件夹，并下载相关文件")]),t._v(" "),e("li",[t._v("cd：进入 myBlog 文件夹")]),t._v(" "),e("li",[t._v("npm install:安装依赖\n新建文件夹目录如下")])]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("── _config.yml "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 网站的配置信息，您可以在此配置大部分的参数。")]),t._v("\n\t├── package.json\n\t├── scaffolds "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模版文件夹")]),t._v("\n\t├── source  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 资源文件夹，除 _posts 文件，其他以下划线_开头的文件或者文件夹不会被编译打包到public文件夹")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("   ├── _drafts "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 草稿文件")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("   └── _posts "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文章Markdowm文件")]),t._v("\n\t└── themes  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主题文件夹")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("好了，如果上面的命令都没报错的话，就恭喜了，运行 hexo s 命令，其中 s 是 server 的缩写，在浏览器中输入 http://localhost:4000 回车就可以预览效果了。以默认主题显示")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("hexo s\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"git-的部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-的部署"}},[t._v("#")]),t._v(" git 的部署")]),t._v(" "),e("h4",{attrs:{id:"检验-git-密钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检验-git-密钥"}},[t._v("#")]),t._v(" 检验 git 密钥")]),t._v(" "),e("p",[t._v("ssh -T git@github.com\n首次使用还需要确认并添加主机到本机 SSH 可信列表。若返回 Hi xxx! You've successfully authenticated, but GitHub does not provide shell access. 内容，则证明添加成功。")]),t._v(" "),e("hr"),t._v(" "),e("h4",{attrs:{id:"部署到-github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署到-github"}},[t._v("#")]),t._v(" 部署到 Github")]),t._v(" "),e("p",[t._v("此时，本地和 Github 的工作做得差不了，是时候把它们两个连接起来了。你也可以查看官网的部署教程。\n先不着急，部署之前还需要修改配置和安装部署插件。\n第一：打开项目根目录下的 _config.yml 配置文件配置参数。拉到文件末尾，填上如下配置（gitee 同理更换 url）\n"),e("img",{attrs:{src:"https://i.loli.net/2019/08/15/ljGwBKScnt2gPiD.png",alt:"Snipaste_2019-08-15_16-28-03"}}),t._v("\n第二：要安装一个部署插件"),e("a",{attrs:{href:"https://github.com/hexojs/hexo-deployer-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo-deployer-git"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("npm install hexo-deployer-git --save")])]),t._v(" "),e("p",[t._v("最后执行以下命令就可以部署上传啦，以下 g 是 generate 缩写，d 是 deploy 缩写：")]),t._v(" "),e("p",[e("code",[t._v("hexo g -d")])]),t._v(" "),e("p",[t._v("稍等一会，在浏览器访问网址： https://你的用户名.github.io 就会看到你的博客啦！！")]),t._v(" "),e("blockquote",[e("p",[t._v("若部署 gitee 主题样式没有记载\n更改一下_config.yml 文件，其中的 url 和 root 属性。\nurl: https://remuxo.gitee.io/blog/\nroot: /blog\nroot 下面应该设置成 /你的项目名 而不是/\n然后重新部署一下就成功了。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);