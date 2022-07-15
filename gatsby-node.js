/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")

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
  })
}