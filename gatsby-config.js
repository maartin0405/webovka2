/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteUrl = `https://martin-learns-code.firebaseapp.com/`;

module.exports = {
  siteMetadata: {
    title: `webovka lololol`,
    siteUrl,
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCYHpjbdAYgZW3aEQZYH_pRy2_coE88PCY",
          authDomain: "martin-learns-code.firebaseapp.com",
          databaseURL: "https://martin-learns-code-default-rtdb.firebaseio.com",
          projectId: "martin-learns-code",
          storageBucket: "martin-learns-code.appspot.com",
          messagingSenderId: "402808068831",
          appId: "1:402808068831:web:2b928584e5a6364c51676a",
          measurementId: "G-BVCM441TLR",
        },
      },
    },
  ],
};
