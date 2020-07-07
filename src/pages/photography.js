import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import IntroText from "../components/introText"

const Photography = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPhotoEntry {
        edges {
          node {
            cardImage {
              file {
                url
              }
              title
            }
            slug
          }
        }
      }
    }  
  `)

  return (
    <Layout>
      <div>
        <Head title="Home" />
        <IntroText>
          One of my favorite hobbies is identifying and researching interesting
          species I find along trails and travels.
        </IntroText>
        <div>
          <ul>
            {data.allContentfulPhotoEntry.edges.map(edge => (
              <li>
                <Link to={`/blog/${edge.node.slug}`}>
                  <img src={edge.node.cardImage.file.url} alt={edge.node.cardImage.title} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Photography
