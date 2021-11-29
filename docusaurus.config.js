// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Punto de venta',
  tagline: 'Punto de venta de Farmacias Biogenica',
  url: 'https://SolgeekDev.github.io',
  baseUrl: '/biogenica-pdv-dev-help/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SolgeekDev', // Usually your GitHub org/user name.
  projectName: 'biogenica-pdv-dev-help', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
        title: 'Punto de venta',
        logo: {
          alt: 'Punto de venta Logo',
          src: 'img/pdv.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Ver más',
          },
          {
            href: 'https://github.com/SolgeekDev/BiogenicaPDV',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Biogenica - Punto de venta, Solgeek S.A. de C.V.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;