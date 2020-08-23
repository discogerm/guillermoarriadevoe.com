import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import IntroText from "../components/introText"

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
                <Link to={`/blog/${edge.node.slug}`}>
                  <h3 className={blogStyles.postTitle}>{edge.node.title}</h3>
                  <p className={blogStyles.postDate}>
                    {edge.node.publishedDate}
                  </p>
                  <div className={blogStyles.postTags}>
                    <span>Test, </span>
                    <span>Test, </span>
                    <span>Test, </span>
                    <span>Test</span>
                  </div>
                  <div className={blogStyles.postPreview}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto, reprehenderit voluptatum dignissimos ipsum,
                    minus voluptas rem ullam, expedita error aperiam officia
                    distinctio quas incidunt sed!
                  </div>
                  <div className={blogStyles.postExpand}>
                    <Link to={`/blog/${edge.node.slug}`}>
                      Read more...
                    </Link>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
