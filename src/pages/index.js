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
                <h3 className={blogStyles.postTitle}>
                  <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
                </h3>
                <p className={blogStyles.postDate}>{edge.node.publishedDate}</p>
                <div className={blogStyles.postTags}>
                  <span>JavaScript</span> <span>Machine Learning</span>{" "}
                  <span>Python</span> <span>Database</span>
                </div>
                <div className={blogStyles.postPreview}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto, reprehenderit voluptatum dignissimos ipsum, minus
                  voluptas rem ullam, expedita error aperiam officia distinctio
                  quas incidunt sed!
                </div>
                <div className={blogStyles.postExpand}>
                  <Link to={`/blog/${edge.node.slug}`}>Read more...</Link>
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
