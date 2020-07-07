const headConf = require('./config/headConf');
const navConf = require('./config/navConf');
const sidebarConf = require('./config/sidebarConf');
const pluginConf = require('./config/pluginConf');
module.exports = {
    // base: '/boryBlog/',
    title: 'Bory的组件库',
    description: 'bory的组件库',
    head: headConf,
    plugins: pluginConf,
    host: 'localhost',
    port: 8888,
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        logo: '/bory.jpeg',
        nav: navConf,
        sidebar: [],
        lastUpdated: '更新时间'
    }
}