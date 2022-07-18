module.exports = {
  siteMetadata: {
    title: `Brunel Tech Society`,
    //siteUrl: `https://pyxl.blog/`
    siteUrl: `https://bruneltech.net/`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    {
    resolve: 'gatsby-source-wordpress',
    options: {
      //"url": "https://pyxl.blog/graphql"
      "url": "https://bruneltech.net/graphql",
      html: {
        useGatsbyImage: true
      }
    }
  }, "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};