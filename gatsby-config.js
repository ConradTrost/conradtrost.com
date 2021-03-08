module.exports = {
  siteMetadata: {
    title: "Freelance Web Development by Conrad Trost",
    image: "/src/images/meta-headshot.jpg",
  },
  plugins: [
    `gatsby-plugin-nodejs`,
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: 'src/images/programming.png',
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-layout",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /images/
      }
    }
  },
  ],
};
