module.exports = {
  title: 'YunLoad 文档库',
  description: 'YunLoad 的官方文档库',
  base: "/",
  themeConfig: {
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
