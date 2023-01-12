// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Connector Documentation',
  tagline: 'A Modern Approach to Docs',
  url: 'https://hms-networks.github.io',
  baseUrl: 'sc-connector-docs-example/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon_HMS.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hms-networks', // Usually your GitHub org/user name.
  projectName: 'sc-connector-docs-example', // Usually your repo name.
  deploymentBranch: "gh-pages",

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hms-networks/sc-connector-docs-example',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Connector Documentation',
        logo: {
          alt: 'My Site Logo',
          src: 'img/HMS_logo_rgb.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/hms-networks/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Flexy',
            items: [
              {
                label: 'Product Page',
                href: 'https://www.ewon.biz/products/ewon-flexy'
              },
              {
                label: 'Support',
                href: 'https://www.ewon.biz/technical-support/support-home/select-your-ewon-devices',
              },
            ],
          },
          {
            title: 'Talk2M',
            items: [
              {
                label: 'Login',
                href: 'https://m2web.talk2m.com/',
              },
            ],
          },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HMS Network Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
