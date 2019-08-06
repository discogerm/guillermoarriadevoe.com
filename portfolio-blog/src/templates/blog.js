import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

// No useStaticQuery for templates (uses slugs), FOR MARKDOWN
// export const query = graphql`
//   query ($slug: String!) {
//     markdownRemark(
//       fields: {
//         slug: {
//           eq: $slug
//         }
//       }
//     ) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

// FOR CONTENTFUL
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body
    }
  }
`;


const Blog = (props) => {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {/* <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div> */}
    </Layout>
  )
}

export default Blog;