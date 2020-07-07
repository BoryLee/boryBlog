---
home: true
heroImage: /bory.jpeg
heroText: Bory的组件库
tagline: 宝剑锋从磨砺出，梅花香自苦寒来
actionText: 马上进入 →
actionLink: /pages/folder1/test1.md
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: hello world!
---

***像数 1, 2, 3 一样容易***


[![Twitter](https://img.shields.io/twitter/url?style=plastic)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fborylee.github.io%2FboryBlog)


<img :src="$withBase('/favicon.ico')" alt="foo">

![favicon](/favicon.ico)

```sh
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```
::: tip
添加了pwa
:::

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: details 点击查看代码
```js
console.log('test')
```
:::



