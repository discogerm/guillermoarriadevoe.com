import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import BlogPostCard from "../components/BlogPostCard"
import TagFilters from "../components/TagFilters"
import DropdownFilters from "../components/DropdownFilters"

import blogStyles from "./index.module.scss"

const BlogPage = () => {
  const [currentFilter, setCurrentFilter] = useState("Show All")
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

  const selectFilter = e => {
    setCurrentFilter(e.target.textContent)
  }

  return (
    <Layout>
      <div>
        <Head title="Blog" />
        <div>
          <DropdownFilters />
          <TagFilters
            edges={data.allContentfulBlogPost.edges}
            onClickHandler={selectFilter}
          />
          <ol className={blogStyles.postContainer}>
            {currentFilter === "Show All"
              ? data.allContentfulBlogPost.edges.map(edge => (
                  <BlogPostCard
                    key={edge.node.slug}
                    slug={edge.node.slug}
                    title={edge.node.title}
                    tags={edge.node.tags}
                    previewImage={edge.node.previewImage}
                    preview={edge.node.preview}
                    publishedDate={edge.node.publishedDate}
                  />
                ))
              : data.allContentfulBlogPost.edges.map(edge =>
                  edge.node.tags.includes(currentFilter) ? (
                    <BlogPostCard
                      key={edge.node.slug}
                      slug={edge.node.slug}
                      title={edge.node.title}
                      tags={edge.node.tags}
                      previewImage={edge.node.previewImage}
                      preview={edge.node.preview}
                      publishedDate={edge.node.publishedDate}
                    />
                  ) : (
                    []
                  )
                )}
          </ol>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
