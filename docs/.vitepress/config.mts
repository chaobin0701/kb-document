import { defineConfig } from 'vitepress'

const repository = process.env.DOCS_REPO || process.env.GITHUB_REPOSITORY || 'your-org/kb-document'
const repoName = repository.split('/')[1] || 'kb-document'
const base = process.env.DOCS_BASE || `/${repoName}/`

export default defineConfig({
  lang: 'zh-CN',
  title: 'KScript & Kooboo Docs',
  description: '面向团队协作的 KScript / Kooboo 远程开发知识库。',
  base,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'KScript & Kooboo Docs',
    nav: [
      { text: '首页', link: '/' },
      { text: 'KScript', link: '/kscript/' },
      { text: '内容系统', link: '/content-system/' },
      { text: 'AI Kooboo 开发', link: '/ai-kooboo-dev/' },
      { text: '模块案例库', link: '/module-library/' },
      { text: 'Kooboo 远程开发', link: '/kooboo-remote/' }
    ],
    sidebar: {
      '/kscript/': [
        {
          text: 'KScript',
          items: [
            { text: 'Concept', link: '/kscript/' },
            { text: 'TypeScript & ES Module', link: '/kscript/typescript-es-module' },
            { text: 'Request Response', link: '/kscript/request-response' },
            { text: 'Database', link: '/kscript/database' },
            { text: 'Account', link: '/kscript/account' },
            { text: 'Web API', link: '/kscript/web-api' },
            { text: 'Cache Cookie Session', link: '/kscript/cache-cookie-session' },
            { text: 'Commerce', link: '/kscript/commerce' },
            { text: 'Content', link: '/kscript/content' },
            { text: 'File', link: '/kscript/file' },
            { text: 'Mail', link: '/kscript/mail' },
            { text: 'Market', link: '/kscript/market' },
            { text: 'Module', link: '/kscript/module' },
            { text: 'NET', link: '/kscript/net' },
            { text: 'OpenApi', link: '/kscript/openapi' },
            { text: 'Payment', link: '/kscript/payment' },
            { text: 'Security', link: '/kscript/security' },
            { text: 'Site', link: '/kscript/site' },
            { text: 'State', link: '/kscript/state' },
            { text: 'Utils', link: '/kscript/utils' }
          ]
        }
      ],
      '/kooboo-remote/': [
        {
          text: 'Kooboo 远程开发',
          items: [
            { text: '项目说明', link: '/kooboo-remote/' },
            { text: '目录与文件作用总览', link: '/kooboo-remote/file-structure-overview' },
            { text: 'Api', link: '/kooboo-remote/api' },
            { text: 'CodeBlock', link: '/kooboo-remote/codeblock' },
            { text: 'Layout', link: '/kooboo-remote/layout' },
            { text: 'Page', link: '/kooboo-remote/page' },
            { text: 'View', link: '/kooboo-remote/view' },
            { text: 'Script', link: '/kooboo-remote/script' },
            { text: 'Style', link: '/kooboo-remote/style' },
            { text: 'Module', link: '/kooboo-remote/module' },
            { text: 'UnoCSS', link: '/kooboo-remote/unocss' },
            { text: 'AI 远程开发补充说明', link: '/kooboo-remote/ai-remote-dev-notes' }
          ]
        }
      ],
      '/content-system/': [
        {
          text: '内容系统',
          items: [
            { text: '导览', link: '/content-system/' },
            { text: '内容类型与数据类型', link: '/content-system/content-types-and-data-types' },
            { text: '标签与 HTML Block', link: '/content-system/labels-and-html-blocks' },
            { text: '电商配置与内容关联', link: '/content-system/commerce-and-settings' }
          ]
        }
      ],
      '/ai-kooboo-dev/': [
        {
          text: 'AI Kooboo 开发',
          items: [
            { text: '导览', link: '/ai-kooboo-dev/' },
            { text: '开箱提示词', link: '/ai-kooboo-dev/prompts' },
            { text: '推荐 Skills', link: '/ai-kooboo-dev/skills' }
          ]
        }
      ],
      '/module-library/': [
        {
          text: '模块案例库',
          items: [
            { text: '导览', link: '/module-library/' },
            { text: '优秀代码', link: '/module-library/code/' },
            { text: 'API 与表单', link: '/module-library/code/api' },
            { text: '邮件发送', link: '/module-library/code/mail' },
            { text: 'View 动态渲染', link: '/module-library/code/view-render' },
            { text: '优秀模块', link: '/module-library/modules/' },
            { text: 'sqlite_orm', link: '/module-library/modules/sqlite-orm' }
          ]
        }
      ],
      '/ai-navigation/': [
        {
          text: 'AI 导航索引',
          items: [
            { text: '导览', link: '/ai-navigation/' },
            { text: '对象与能力索引', link: '/ai-navigation/object-capability-index' },
            { text: '问题到页面映射', link: '/ai-navigation/question-to-page-map' },
            { text: 'AI 工作顺序', link: '/ai-navigation/ai-workflow' },
            { text: '术语别名映射', link: '/ai-navigation/term-aliases' }
          ]
        }
      ],
      '/runtime-semantics/': [
        {
          text: '运行时语义',
          items: [
            { text: '目录规范与运行时总览', link: '/runtime-semantics/' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: `https://github.com/${repository}` }],
    editLink: {
      pattern: `https://github.com/${repository}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页'
    },
    footer: {
      message: '由团队共同维护，内容以 Markdown 与 Pull Request 为核心。',
      copyright: 'Copyright © 2026 KScript & Kooboo Docs Contributors'
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新于'
    }
  }
})
