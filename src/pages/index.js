import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import blogStyles from "./index.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            slug
            tags
            preview {
              preview
            }
            previewImage {
              fluid {
                src
              }
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div>
        <Head title="Blog" />
        <div>
          <ol className={blogStyles.posts}>
            {data.allContentfulBlogPost.edges.map(edge => (
              <li className={blogStyles.post}>
                <div className={blogStyles.postTitleContainer}>
                  <h3 className={blogStyles.postTitle}>
                    <Link to={`/blog/${edge.node.slug}`}>
                      {edge.node.title}
                    </Link>
                  </h3>
                  <p className={blogStyles.postDate}>
                    {edge.node.publishedDate}
                  </p>
                </div>
                <div className={blogStyles.postTags}>
                  {edge.node.tags.map(tag => (
                    <span>{tag}</span>
                  ))}
                </div>
                <div className={blogStyles.postPreviewContainer}>
                  <div className={blogStyles.postPreviewImageContainer}>
                    <Link to={`/blog/${edge.node.slug}`}>
                      <img
                        src={edge.node.previewImage.fluid.src}
                        alt={edge.node.previewImage.title}
                      />
                    </Link>
                  </div>
                  <div className={blogStyles.postPreview}>
                    {edge.node.preview.preview}
                    <div className={blogStyles.postExpand}>
                      <Link to={`/blog/${edge.node.slug}`}>&#x27f6; Read more </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
