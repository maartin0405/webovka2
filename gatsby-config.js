/**
 * @type {import('gatsby').GatsbyConfig}
 */

const { languages, defaultLanguage } = require("./languages");

const siteUrl = `https://www.yourdomain.tld`;

module.exports = {
  siteMetadata: {
    title: `webovka lololol`,
    siteUrl,
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages,
        defaultLanguage,
        siteUrl,
        i18nextOptions: {
          // debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: "common",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          react: {
            bindI18n: "languageChanged editorSaved",
          },
        },
        pages: [
          {
            matchPath: "/ignored-page",
            languages: ["en"],
          },
        ],
      },
    },
  ],
};
