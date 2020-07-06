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
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    return moment().format('LLL');
                }
            }
        ],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                '/': {
                    message: "发现新内容可用",
                    buttonText: "刷新"
                },
            }
        }]
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