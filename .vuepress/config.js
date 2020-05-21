module.exports = {
  title: 'YunLoad 文档库',
  description: 'YunLoad 的官方文档库',
  base: "/",
  themeConfig: {
    repo: 'YunLoad/Docs',
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: '发现这个页面上有错误？来参与修改吧~',
    lastUpdated: '此页面最后更新于',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文档',
        items: [
          { text: '教师端', link: '/teacher/' },
          { text: '学生端', link: '/student/' }
        ]
      },
      { text: 'YunLoad', link: 'https://yunload.org' },
      { text: 'YunLoad 博客', link: 'https://blog.yunload.org' },
    ],
    sidebar: {
      '/teacher/': [
        '',
        'class',
        'task',
        'course'
      ],

      '/student/': [
        '',
        'ticket',
      ],

      '/': [
        '',
      ]
    }
  }
}
