import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import IntroText from "../components/introText"

import photoStyles from "./photography.module.scss"

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
        <div className={photoStyles.photoGrid}>
          {data.allContentfulPhotoEntry.edges.map(edge => (
            <div className={photoStyles.photo}>
              <Link to={`/photography/${edge.node.slug}`}>
                <img
                  src={edge.node.cardImage.file.url}
                  alt={edge.node.cardImage.title}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Photography
