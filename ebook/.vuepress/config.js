module.exports = {
  base: '/coding-ts',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Data Structure and Algorithm Note',
      description: "ataola's Data Structure and Algorithm Note created in 2022",
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '数据结构和算法笔记',
      description: '阿涛啦的数据结构和算法笔记，创建于2022年',
    },
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      'qrcode',
      {
        labelText: {
          '/': 'QRCode',
          '/zh/': '二维码',
        },
        size: 'small',
        channel: true,
      },
    ],
  ],
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        algolia: {},
        nav: [{ text: 'Github', link: 'https://github.com/ataola/coding-ts' }],
        sidebar: {
          '/guide/': ['', 'theme', 'plugin'],
          '/resource/': [],
        },
      },
      '/zh/': {
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
        nav: [{ text: 'Github', link: 'https://github.com/ataola/coding-ts' }],
        sidebar: {
          '/zh/guide/': ['', 'theme', 'plugin'],
          '/zh/resource/': [],
        },
      },
    },
  },
};
