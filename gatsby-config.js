module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gowid Blog",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};
