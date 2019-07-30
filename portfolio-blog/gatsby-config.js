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
    { // BELOW ENABLES `file` and `allFile` GRAPHQL QUERIES (LOADS RAW FILES)
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/` // NODE, GIVES US ACCESS TO SRC FOLDER
      }
    },
    'gatsby-transformer-remark' // BELOW PARSES RAW MD FROM ABOVE INTO DATA
  ]
}
