// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import gruvboxDark from './src/theme/prism-gruvbox-dark.js';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '일자산',
  tagline: '개발 기록',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sangyeobhan.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sangyeobhan', // Usually your GitHub org/user name.
  projectName: 'sangyeobhan.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          id: 'blog',
          routeBasePath: 'blog',
          path: './blog',
          showReadingTime: true,
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          blogSidebarCount: 20,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogTitle: 'Blog',
          blogDescription: '기술 블로그',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'journal',
        routeBasePath: 'journal',
        path: './journal',
        showReadingTime: true,
        showLastUpdateTime: false,
        showLastUpdateAuthor: false,
        blogSidebarCount: 20,
        blogSidebarTitle: '최근 게시물',
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        blogTitle: 'Journal',
        blogDescription: '개발 일지',
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '일자산',
        logo: {
          alt: 'Iljasan Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/journal', label: 'Journal', position: 'left'},
          {
            href: 'https://github.com/sangyeobhan',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: gruvboxDark,
      },
    }),
};

export default config;
