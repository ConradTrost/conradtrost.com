module.exports = {
  siteMetadata: {
    siteUrl: "https://conradtrost.com",
    title: "Freelance Web Development",
    titleTemplate: "%s · Conrad Trost",
    description:
      "Fast & secure website development by Conrad Trost",
    url: "https://conradtrost.com.com", // No trailing slash allowed!
    image: "/images/meta-headshot.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  plugins: [
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
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",        
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-190109426-1", 
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-remark",
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
