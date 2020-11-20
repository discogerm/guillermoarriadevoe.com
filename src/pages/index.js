import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import BlogPostCard from "../components/BlogPostCard"
import TagFilters from "../components/TagFilters"

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
          <TagFilters edges={data.allContentfulBlogPost.edges} />
          {/* <div>
            {data.allContentfulBlogPost.edges.map(edge =>
              edge.node.tags.includes("Personal") ? (
                <div>{edge.node.tags}</div>
              ) : (
                []
              )
            )}
          </div> */}
          <ol className={blogStyles.postContainer}>
            {data.allContentfulBlogPost.edges.map(edge => (
              <BlogPostCard
                slug={edge.node.slug}
                title={edge.node.title}
                tags={edge.node.tags}
                previewImage={edge.node.previewImage}
                preview={edge.node.preview}
                publishedDate={edge.node.publishedDate}
              />
            ))}
          </ol>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
