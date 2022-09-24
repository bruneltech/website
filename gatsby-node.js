/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)


// gatsby-node.js
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")
  const PageTemplate = path.resolve("./src/templates/PagePost.js")
  const CategoryArchiveTemplate = path.resolve("./src/templates/CategoryArchive.js")
  const EventPostTemplate = path.resolve("./src/templates/EventPost.js")

  // TODO TOMMOROW: Add allWpEvent queries.

  const result = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            id
            uri
          }
        }
      }

      allWpCategory {
        edges {
          node {
            id
            uri
          }
        }
      }

      allWpEvent{
        edges {
          node {
            id
            uri
          }
        }
      }

      allWpPage {
        edges {
          node {
            id
            uri
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const BlogPosts = result.data.allWpPost.edges
  BlogPosts.forEach(post => {
    console.log("Creating a page for: " + post.node.uri);
    createPage({
      path: `${post.node.uri}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.id,
      },
    })
  });

  const Pages = result.data.allWpPage.edges
  Pages.forEach(page => {
    console.log("Creating a page for: " + page.node.uri);
    createPage({
      path: `${page.node.uri}`,
      component: PageTemplate,
      context: {
        id: page.node.id,
      },
    })
  });

  const Categories = result.data.allWpCategory.edges
  Categories.forEach(category => {
    console.log("Creating a category page for: " + category.node.uri);
    createPage({
      path: `${category.node.uri}`,
      component: CategoryArchiveTemplate,
      context: {
        id: category.node.id,
      },
    })
  });

  const Events = result.data.allWpEvent.edges
  Events.forEach(event => {
    console.log("Creating a event page for: " + event.node.uri);
    createPage({
      path: `${event.node.uri}`,
      component: EventPostTemplate,
      context: {
        id: event.node.id,
      },
    })
  });
}