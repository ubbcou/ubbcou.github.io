module.exports = {
  title: 'Repost',
  description: '',
  lang: 'cn',
  themeConfig: {
    repo: 'ubbcou/ubbcou.github.io',
    docsDir: 'docs',
    sidebar: {
      '/': getRootSidebar()
    }
  }
}

function getRootSidebar() {
  return [
    {
      text: '介绍',
      children: [
        { text: '这是什么？', link: '/' },
      ]
    },
    {
      text: '关于编译',
      children: [
        { text: '基于babel的编译基础', link: '/compile/abort-babel-compile' },
      ]
    },
  ]
}
