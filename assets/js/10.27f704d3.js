(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{370:function(t,e,v){"use strict";v.r(e);var a=v(44),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("blockquote",[v("p",[t._v("为什么要使用图床呢？")])]),t._v(" "),v("p",[t._v("因为在不同平台发布同一篇文章的时候，最一个痛苦的点就是，图片存储问题，各个平台的文件存储方式各不相同，无法直接 "),v("code",[t._v("Ctrl + C")]),t._v(" 的方式一键搞定，为了解决这个问题，使用 "),v("code",[t._v("MarkDown + 图床")]),t._v(" 的方式进行文章的写作，将图片放到一个统一的地方，在文章中引入图片外链。"),v("br"),t._v("\n所谓图床，就是将图片储存到第三方静态资源库中，其返回给你一个 URL 进行获取图片。"),v("code",[t._v("MarkDown")]),t._v(" 支持使用 URL 的方式显示图片，我想这也是程序员为什么对其偏爱的原因之一。"),v("br"),t._v("\n作为程序员，你会发现，现在很多论坛和社区都开始支持使用 "),v("code",[t._v("MarkDown")]),t._v("，如果你没使用图床的情况下，你分享同一篇文章，你要在不同的平台，各自重新编辑排版一遍和上传图片一次。"),v("br"),t._v("\n有了图床，情况就不一样了，"),v("code",[t._v("Ctrl+C")]),t._v(" 的方式就搞定了，根本不用再 Check 文章内容一遍。")]),t._v(" "),v("blockquote",[v("p",[t._v("图床的选择？")])]),t._v(" "),v("ol",[v("li",[v("code",[t._v("微博图床")]),t._v("：以前用的人比较多，从 2019 年 4 月开始开启了防盗链，凉凉")]),t._v(" "),v("li",[v("code",[t._v("SM.MS")]),t._v("：运营四年多了，也变得越来越慢了，到了晚上直接打不开图片，速度堪忧")]),t._v(" "),v("li",[v("code",[t._v("其他小众图床")]),t._v("：随时有挂掉的风险")]),t._v(" "),v("li",[v("code",[t._v("Imgur 等国外图床")]),t._v("：国内访问速度太慢，随时有被墙的风险")]),t._v(" "),v("li",[v("code",[t._v("大厂储存服务")]),t._v("：例如七牛云、又拍云、腾讯云 COS、阿里云 OSS 等，操作繁琐，又是实名认证又是域名备案的，麻烦，而且还要花钱（有钱又不怕麻烦的当我没说）")]),t._v(" "),v("li",[v("code",[t._v("GitHub 图床")]),t._v("：免费，但是国内访问速度慢（不过没关系，利用 "),v("code",[t._v("jsDelivr")]),t._v(" 提供的免费的 CDN 加速 速度足够了）")])]),t._v(" "),v("h3",{attrs:{id:"使用流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用流程"}},[t._v("#")]),t._v(" 使用流程")]),t._v(" "),v("ol",[v("li",[t._v("新建 GitHub 仓库")]),t._v(" "),v("li",[t._v("生成一个 Token")]),t._v(" "),v("li",[t._v("配置 PicGo 并使用 jsdelivr 作为 CDN 加速")]),t._v(" "),v("li",[t._v("使用 Imagine 进行图片压缩")]),t._v(" "),v("li",[t._v("上传图片到 PicGo 并使用图床")])]),t._v(" "),v("h3",{attrs:{id:"新建-github-仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#新建-github-仓库"}},[t._v("#")]),t._v(" 新建 GitHub 仓库")]),t._v(" "),v("ul",[v("li",[t._v("登录 / 注册 GitHub")]),t._v(" "),v("li",[t._v("新建一个仓库，填写好仓库名")]),t._v(" "),v("li",[t._v("仓库描述")]),t._v(" "),v("li",[t._v("将权限设置成 "),v("code",[t._v("public")])]),t._v(" "),v("li",[t._v("根据需求选择是否为仓库初始化一个 "),v("code",[t._v("README.md")]),t._v(" 描述文件")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213194849.png",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"生成一个-token"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生成一个-token"}},[t._v("#")]),t._v(" 生成一个 Token")]),t._v(" "),v("h4",{attrs:{id:"settings"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),v("ol",[v("li",[t._v("点击用户头像 -> 选择 "),v("code",[t._v("Settings")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213195440.png",alt:""}})]),t._v(" "),v("h4",{attrs:{id:"developer-settings"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#developer-settings"}},[t._v("#")]),t._v(" Developer settings")]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("点击 "),v("code",[t._v("Developer settings")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213195553.png",alt:""}})]),t._v(" "),v("h4",{attrs:{id:"personal-access-tokens"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#personal-access-tokens"}},[t._v("#")]),t._v(" Personal access tokens")]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("点击 "),v("code",[t._v("Personal access tokens")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213195618.png",alt:""}})]),t._v(" "),v("h4",{attrs:{id:"generate-new-token"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#generate-new-token"}},[t._v("#")]),t._v(" Generate new token")]),t._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[t._v("点击 "),v("code",[t._v("Generate new token")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213195653.png",alt:""}})]),t._v(" "),v("h4",{attrs:{id:"填写-token-描述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#填写-token-描述"}},[t._v("#")]),t._v(" 填写 Token 描述")]),t._v(" "),v("ol",{attrs:{start:"5"}},[v("li",[t._v("填写 "),v("code",[t._v("Token")]),t._v(" 描述，勾选 "),v("code",[t._v("repo")]),t._v("，然后点击 "),v("code",[t._v("Generate token")]),t._v(" 生成一个 "),v("code",[t._v("Token")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213195715.png",alt:""}})]),t._v(" "),v("h4",{attrs:{id:"获取-token-密钥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#获取-token-密钥"}},[t._v("#")]),t._v(" 获取 Token 密钥")]),t._v(" "),v("ol",[v("li",[t._v("获取 "),v("code",[t._v("Token")]),t._v(" 密钥")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213195733.png",alt:""}})]),t._v(" "),v("blockquote",[v("p",[t._v("注意这个 Token 只会显示一次，自己先保存下来，或者等后面配置好 PicGo 后再关闭此网页")])]),t._v(" "),v("h3",{attrs:{id:"配置-picgo-并使用-jsdelivr-作为-cdn-加速"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置-picgo-并使用-jsdelivr-作为-cdn-加速"}},[t._v("#")]),t._v(" 配置 PicGo 并使用 jsdelivr 作为 CDN 加速")]),t._v(" "),v("p",[t._v("前往下载 "),v("a",{attrs:{href:"https://sitoi.cn/go.html?u=aHR0cHM6Ly9naXRodWIuY29tL01vbHVuZXJmaW5uL3BpY2dvL3JlbGVhc2Vz",target:"_blank",rel:"noopener noreferrer"}},[t._v("PicGo"),v("OutboundLink")],1),t._v("（"),v("a",{attrs:{href:"https://sitoi.cn/go.html?u=aHR0cHM6Ly9naXRodWIuY29tL01vbHVuZXJmaW5uL3BpY2dvL3JlbGVhc2Vz",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击下载"),v("OutboundLink")],1),t._v("），安装好后开始配置图床")]),t._v(" "),v("ul",[v("li",[t._v("设定仓库名：按照 "),v("code",[t._v("用户名/图床仓库名")]),t._v(" 的格式填写")]),t._v(" "),v("li",[t._v("设定分支名："),v("code",[t._v("master")])]),t._v(" "),v("li",[t._v("设定 Token：粘贴之前生成的 "),v("code",[t._v("Token")])]),t._v(" "),v("li",[t._v("指定存储路径：填写想要储存的路径，如 "),v("code",[t._v("img/")]),t._v("，这样就会在仓库下创建一个名为 "),v("code",[t._v("img")]),t._v(" 的文件夹，图片将会储存在此文件夹中")]),t._v(" "),v("li",[t._v("设定自定义域名：它的的作用是，在图片上传后，PicGo 会按照"),v("code",[t._v("自定义域名+上传的图片名")]),t._v("的方式生成访问链接，放到粘贴板上，因为我们要使用 "),v("code",[t._v("jsDelivr")]),t._v(" 加速访问，所以可以设置为"),v("code",[t._v("https://cdn.jsdelivr.net/gh/用户名/图床仓库名")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213200018.png",alt:""}})]),t._v(" "),v("h4",{attrs:{id:"配置-picgo"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置-picgo"}},[t._v("#")]),t._v(" 配置 PicGo")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Q：什么是 jsdelivr ?\n\nA：jsDelivr 为开发者提供免费公共 CDN 加速服务\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br")])]),v("h2",{attrs:{id:"使用-imagine-进行图片压缩"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用-imagine-进行图片压缩"}},[t._v("#")]),t._v(" "),v("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8-Imagine-%E8%BF%9B%E8%A1%8C%E5%9B%BE%E7%89%87%E5%8E%8B%E7%BC%A9",title:"使用 Imagine 进行图片压缩"}}),t._v("使用 Imagine 进行图片压缩")]),t._v(" "),v("p",[t._v("通常情况下，图片大小都是超过 200KB 的，所以网页加载的时候会特别慢，一般我们会对图片进行压缩，这里我推荐 "),v("a",{attrs:{href:"https://sitoi.cn/go.html?u=aHR0cHM6Ly9naXRodWIuY29tL21lb3d0ZWMvSW1hZ2luZS9yZWxlYXNlcw==",target:"_blank",rel:"noopener noreferrer"}},[t._v("Imagine"),v("OutboundLink")],1),t._v("（"),v("a",{attrs:{href:"https://sitoi.cn/go.html?u=aHR0cHM6Ly9naXRodWIuY29tL21lb3d0ZWMvSW1hZ2luZS9yZWxlYXNlcw==",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击下载"),v("OutboundLink")],1),t._v("） 支持全平台。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213200146.png",alt:""}})]),t._v(" "),v("h4",{attrs:{id:"使用-imagine-进行图片压缩-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用-imagine-进行图片压缩-2"}},[t._v("#")]),t._v(" 使用 Imagine 进行图片压缩")]),t._v(" "),v("blockquote",[v("p",[t._v("Imagine 采用的是有损压缩，介意的可以忽略这一步")])]),t._v(" "),v("p",[t._v("顺便推荐一个无损压缩的网站："),v("a",{attrs:{href:"https://sitoi.cn/go.html?u=aHR0cHM6Ly90aW55cG5nLmNvbS8=",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tinypng.com/"),v("OutboundLink")],1)]),t._v(" "),v("h4",{attrs:{id:"上传图片到-picgo-并使用图床"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#上传图片到-picgo-并使用图床"}},[t._v("#")]),t._v(" 上传图片到-PicGo-并使用图床")]),t._v(" "),v("p",[t._v("配置好 "),v("code",[t._v("PicGo")]),t._v(" 后，我们就可以进行高效创作了，将"),v("code",[t._v("压缩后的图片")]),t._v("拖拽到"),v("code",[t._v("上传区")]),t._v("，将会自动上传并复制"),v("code",[t._v("访问链接")]),t._v("，将链接粘贴到博文中就行了，访问速度杠杠的")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/tianzhenwuxie01/gitpicgo/img/20200213200222.png",alt:""}})]),t._v(" "),v("p",[t._v("此外 "),v("code",[t._v("PicGo")]),t._v(" 还有相册功能，可以对已上传的图片进行删除，修改链接等快捷操作，"),v("code",[t._v("PicGo")]),t._v(" 还可以生成不同格式的链接、支持批量上传、快捷键上传、自定义链接格式、上传前重命名等，更多功能自己去探索吧！")])])}),[],!1,null,null,null);e.default=i.exports}}]);