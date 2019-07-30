/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Spreading Meadows',
    author: 'Guillermo Arria-Devoe'
  },
  plugins: [
    'gatsby-plugin-sass',
    { // BELOW ENABLES `file` and `allFile` GRAPHQL QUERIES
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/` // NODE, GIVES US ACCESS TO SRC FOLDER
      }
    }
  ]
}
