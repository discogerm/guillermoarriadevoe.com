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
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    { // BELOW ENABLES `file` and `allFile` GRAPHQL QUERIES (LOADS RAW FILES)
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/` // NODE, GIVES US ACCESS TO SRC FOLDER
      }
    },
    'gatsby-plugin-sharp',
    // PARSES RAW MD FROM ABOVE INTO DATA
    // ALSO ENABLES 'markdownRemark' FOR INDV POSTS and 'allMarkdownRemark' TO GET LIST OF POSTS 
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin:0;'
            }
          }
        ]
      }
    }
  ]
}
