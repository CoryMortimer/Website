module.exports = {
  siteMetadata: {
    title: `Cory Mortimer Martin`,
    description: `Personal site for Cory.`,
    author: `Cory`,
    siteUrl: 'https://www.corymortimer.com',
  },
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-material-ui',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `profileData`,
        path: `${__dirname}/src/profile-data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPosts`,
        path: `${__dirname}/src/blog-posts`,
        ignore: [`**/\*\.js`],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          blogPosts: require.resolve("./src/markdown-layout/MarkdownBlogLayout.jsx"),
          default: require.resolve("./src/markdown-layout/MarkdownLayout.jsx"),
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1280,
              },
            },
          ],
        },
      },
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/face-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
