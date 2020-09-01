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
      slug
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
      <div className={blogStyles.postTags}>
        {props.data.contentfulBlogPost.tags.map(tag => (
          <span>{tag}</span>
        ))}
      </div>
      <div className={blogStyles.postHeader}>
        <div className={blogStyles.menuContainer}>
          <ul className={blogStyles.menuList}>
            <li>
              <a
                href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fguillermoarriadevoe.com%2Fblog%2F${props.data.contentfulBlogPost.slug}`}
                target="__blank"
                rel="noopener"
              >
                <img
                  src="https://img.icons8.com/fluent/32/000000/twitter.png"
                  alt="twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/guillermo-arria-devoe/"
                target="__blank"
                rel="noopener"
              >
                <img
                  src="https://img.icons8.com/color/32/000000/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/arriadevoe/"
                target="__blank"
                rel="noopener"
              >
                <img
                  src="https://img.icons8.com/color/32/000000/facebook.png"
                  alt="facebook"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={blogStyles.userCardContainer}>
          <Link className={blogStyles.avatar} to="/blog/about-me">
            <img
              src={require("../assets/apple-touch-icon.png")}
              alt="avatar"
              width="50"
            />
          </Link>
          <div className={blogStyles.publishingInformation}>
            <span className={blogStyles.name}>Guillermo Arria-Devoe</span>
            <span className={blogStyles.date}>
              {props.data.contentfulBlogPost.publishedDate}
            </span>
          </div>
        </div>
      </div>

      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
    </Layout>
  )
}

export default Blog
