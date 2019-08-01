// GATSBY NODE CONFIG FILE, ALLOWS CONNECTION TO APIS
// ESSENTIAL!!
// https://www.gatsbyjs.org/docs/node-apis/

const path = require('path') // NODE CORE MODULE 

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // CREATE SLUG USING PATH METHOD:
  if (node.internal.type === 'MarkdownRemark') {
    // https://nodejs.org/dist/latest-v10.x/docs/api/path.html#path_path_basename_path_ext
    const slug = path.basename(node.fileAbsolutePath, '.md')
    
    // Slug found in query>edges>node>fields>slug
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }

}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
    query{
      allMarkdownRemark{
        edges{
          node{
            fields{
              slug
            }
          }
        }
      }
    }
  `)

  // 1. get path to template
  // 2. get MD data
  // 3. create new pages!
  res.data.allMarkdownRemark.edges.forEach(edge => (
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  ))
}