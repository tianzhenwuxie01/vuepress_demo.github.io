## 快速上手

>VuePress 需要 Node.js (opens new window)>= 8.6

本文会帮助你从头搭建一个简单的 VuePress 文档。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。

创建并进入一个新目录

``` sh
mkdir vuepress-starter && cd vuepress-starter
```

使用你喜欢的包管理器进行初始化

```sh
yarn init # npm init
```

将 VuePress 安装为本地依赖
我们已经不再推荐全局安装 VuePress

``` sh
yarn add -D vuepress # npm install -D vuepress
```

>如果你的现有项目依赖了 webpack 3.x，我们推荐使用 Yarn (opens new window)而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。

创建你的第一篇文档

```sh
mkdir docs && echo '# Hello VuePress' > docs/README.md

```

在 `package.json` 中添加一些 `scripts`(opens new window)
这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

在本地启动服务器

``` sh
yarn docs:dev # npm run docs:dev
```

生成静态

``` sh
yarn docs:build # 或者：npm run docs:build
```

VuePress 会在 http://localhost:8080 (opens new window)启动一个热重载的开发服务器。

### 搜索插件(vuepress-plugin-fulltext-search全文搜索插件实现文字高亮的方法)

1.安装全文搜索插件

[vuepress-plugin-fulltext-search](https://link.zhihu.com/?target=https%3A//github.com/leo-buneev/vuepress-plugin-fulltext-search)

进入 vuepress 项目文件夹

``` sh
npm i vuepress-plugin-fulltext-search -D
# or
yarn add -D vuepress-plugin-fulltext-search -D
```

然后修改配置文件引入插件，（voding主题把 plugins 单独出来了，要修改`\docs.vuepress\config\plugins.js`）

```sh
 // docs/.vuepress/config.js
 module.exports = {
   // ...
   plugins: ['fulltext-search'],
 }
```

yarn docs:dev（根据你的 package.json 文件也可能会是dev）进入开发环境，打开本地网页（localhost:8080），能够全文搜索，但没有高亮，很不醒目。

2.通过自定义样式实现全文搜索高亮

找到 `\docs.vuepress\styles\index.styl`
打开文件 `index.styl` 加入如下内容

``` css
 #命中文字高亮红色
 .search-box .suggestion a .suggestion-row .suggestion-content .highlight
   color: red;
 #或者
 #命中文字高亮蓝色，背景色纳瓦白
 .search-box .suggestion a .suggestion-row .suggestion-content .highlight
   color: blue;
   background-color: NavajoWhite;
```