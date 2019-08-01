import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
            }
            fields{
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => (
            <li>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
              </Link>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage;