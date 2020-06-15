import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import blogStyles from "./blog.module.scss"
import IntroText from "../components/introText"

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
      <Head title="Journal"></Head>
      <div>
        <IntroText>
          <b>Guides and assorted meditations.</b> Sometimes I'm inspired to write:
        </IntroText>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map(edge => (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
