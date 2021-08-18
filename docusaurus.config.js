const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'go-flexible',
  tagline: 'A collection of packages for building Go services',
  url: 'https://goflexible.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'go-flexible', // Usually your GitHub org/user name.
  projectName: 'go-flexible.github.io', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'go-flexible',
      logo: {
        alt: 'flex logo',
        src: 'img/iana.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Quick Start',
        },
        {
          href: 'https://github.com/go-flexible/flex',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/go-flexible',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} go-flexible. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/go-flexible/go-flexible.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
