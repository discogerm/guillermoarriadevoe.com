import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

import blogStyles from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
      tags
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} />
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title}></Head>
      <h1 className={blogStyles.postTitle}>
        {props.data.contentfulBlogPost.title}
      </h1>
      <div className={blogStyles.postHeader}>
        <div className={blogStyles.userContainer}>
          <Link className={blogStyles.avatar} to="/blog/about-me">
            <img
              src={require("../assets/apple-touch-icon.png")}
              alt="avatar"
              width="50"
            />
          </Link>
          <div className={blogStyles.name}>
            <span>Guillermo Arria-Devoe</span>
          </div>
          <div className={blogStyles.publishInformation}>
            <span className={blogStyles.postDate}>
              {props.data.contentfulBlogPost.publishedDate}
            </span>
            <div className={blogStyles.postTags}>
              {props.data.contentfulBlogPost.tags.map(tag => (
                <span>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className={blogStyles.socialMenu}></div>
      </div>

      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
    </Layout>
  )
}

export default Blog
