// GATSBY NODE CONFIG FILE, ALLOWS CONNECTION TO APIS
// ESSENTIAL!!
// https://www.gatsbyjs.org/docs/node-apis/

const path = require('path') // NODE CORE MODULE 

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
    query{
      allContentfulBlogPost {
        edges{
          node{
            slug  
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => (
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  ))
}