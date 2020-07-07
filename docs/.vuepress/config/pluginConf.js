const moment = require('moment');
moment.locale('zh-cn');
const secret = require('./secret');
module.exports = {
    '@vuepress/last-updated': {
        transformer: (timestamp, lang) => {
            return moment().format('LLL');
        }
    },
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            '/': {
                message: "发现新内容可用",
                buttonText: "刷新"
            },
        }
    },
    '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github',
        // 其他的 Vssue 配置
        owner: 'BoryLee',
        repo: 'boryBlog',
        clientId: secret.clientId,
        clientSecret: secret.clientSecret,
    },
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': {
        selector: 'img',
    }
};