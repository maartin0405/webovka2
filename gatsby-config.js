/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteUrl = `https://www.yourdomain.tld`;

module.exports = {
  siteMetadata: {
    title: `webovka lololol`,
    siteUrl,
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages,
        defaultLanguage: `en`,
        siteUrl,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: "always",
        // you can pass any i18next options
        i18nextOptions: {
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
          },
          {
            matchPath: "/preview",
            languages: ["en"],
          },
        ],
      },
    },
  ],
};
