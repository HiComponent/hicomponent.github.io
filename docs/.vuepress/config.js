
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/',   // 设置站点根路径
    dest: './gh-pages',
    markdown: {
        lineNumbers: true
    },
    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        // ['vuepress-plugin-autobar'],
        // ['permalink-pinyin']//pinyin
    ],
    themeConfig: {
        // 添加导航栏
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/linux/' },
            { text: '生活', link: '/myday/' },
            { text: '英语', link: '/life/' },
            { text: '学习', link: '/study/' },
        ],
        // 为以下路由添加左侧边栏
        sidebar: 'auto',
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: 'Last Updated',
    }
}