const moment = require('moment');
moment.locale('zh-cn')
const nav = require('./config/navbar.js');
module.exports = {
    base: '/boryBlog/',
    title: 'Bory的组件库',
    description: 'bory的组件库',
    head: [
        [
            'link',
            { rel: 'icon', href: '/favicon.ico' }
        ],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }],
        ['meta', {
            name: 'keywords',
            content: 'vuepress,组件'
        }],
        ['meta', {
            name: 'author',
            content: 'borylee'
        }],
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    return moment().format('LLL');
                }
            }
        ]
    ],
    port: 8888,
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        logo: '/bory.jpeg',
        nav,
        sidebar: 'auto',
        lastUpdated: '更新时间'
    }
}