module.exports = {
  siteMetadata: {
    title: `Brunel Tech Society`,
    //siteUrl: `http://techsoc-test.local/`
    siteUrl: `https://bruneltech.net/`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-next-seo',
    {
    resolve: 'gatsby-source-wordpress',
    options: {
      //"url": "http://techsoc-test.local/graphql",
      "url": "https://wp.bruneltech.net/graphql",
      html: {
        useGatsbyImage: true // This was causing a load of problems with the way wordpress did their CSS. 
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
  },{
    resolve: 'gatsby-plugin-typesense',
    options: {
      rootDir: `${__dirname}/public`,
      //exclude: `^(?!.*/20).*$`, //this currently causes build to fail, have submitted a PR to fix this.
      collectionSchema: {
        name: "posts_v1",
        fields: [
          {
            name: "postTitle",
            type: "string"
          },
          {
            name: "postCategory",
            type: "string",
            optional: true
          },
          {
            name: "postKind",
            type: "string",
          },
          // {
          //   name: "tags",
          //   type: "string[]"
          // },
          {
            name: "page_path",
            type: "string"
          },
          {
            name: "page_priority_score",
            type: "int32",
          },
        ],
        default_sorting_field: "page_priority_score",
      },
      server: {
        apiKey: "kwDD7JzNzqEpi4afZ",
        //apiKey: "xyz",
        nodes: [
          {
            //host: "165.227.231.194",
            host: '127.0.0.1',
            port: "8108",
            protocol: "http",
          },
        ],
      },
    }
  },
],
};