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
    "gatsby-plugin-emotion",   {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        useLangKeyLayout: false
      }
    }
  ],
};
