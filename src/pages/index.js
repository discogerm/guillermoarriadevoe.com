import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import IntroText from "../components/introText"

import journalStyles from "./index.module.scss"

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
        <IntroText>
          Guides and assorted meditations. Sometimes I'm inspired to
          write:
        </IntroText>
        <div>
          <ol className={journalStyles.posts}>
            {data.allContentfulBlogPost.edges.map(edge => (
              <li className={journalStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h3 className={journalStyles.postTitle}>{edge.node.title}</h3>
                  <p className={journalStyles.postDate}>
                    {edge.node.publishedDate}
                  </p>
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
