// GATSBY NODE CONFIG FILE, ALLOWS CONNECTION TO APIS
// https://www.gatsbyjs.org/docs/node-apis/

const path = require('path') // NODE CORE MODULE 

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // CREATE SLUG USING PATH METHOD:
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }

}