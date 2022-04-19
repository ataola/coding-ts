// https://vuepress.vuejs.org/config/#overview
// https://vuepress.vuejs.org/theme/default-theme-config.html#homepage
module.exports = {
  base: '/coding-ts/',
  title: '数据结构和算法笔记',
  description: '阿涛啦的数据结构和算法笔记，创建于2022年',
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    selectText: '选择语言',
    label: '简体中文',
    editLinkText: '在 GitHub 上编辑此页',
    serviceWorker: {
      updatePopup: {
        message: '发现新内容可用.',
        buttonText: '刷新',
      },
    },
    algolia: {},
    nav: [
      { text: '笔记', link: '/note/' },
      { text: '知识点', link: '/zhishidian/' },
      {
        text: '题解',
        link: '/tijie/',
        items: [
          // { text: 'tijie1', link: '/tijie1' },
        ],
      },
      { text: '资料', link: '/resource/' },
      { text: 'Github', link: 'https://github.com/ataola/coding-ts' },
      { text: '博客', link: 'https://www.cnblogs.com/cnroadbridge/' },
    ],
    sidebar: {
      '/guide/': ['', 'theme', 'plugin'],
      '/resource/': [''],
      '/note/': [
        '$1-string',
        '$2-array',
        '$3-linkedList',
        '$4-stack',
        '$5-queue',
        '$6-set',
        '$7-dictionary',
        '$8-hash',
        '$9-tree',
        '$10-graph',
      ],
      '/tijie/': ['$1-two-sum'],
    },
  },
};
