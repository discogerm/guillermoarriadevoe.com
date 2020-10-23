import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import IntroText from "../components/introText"
import ProjectCard from "../components/projectCard"

import indexStyles from "./projects.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioProject(sort: { fields: order, order: ASC }) {
        edges {
          node {
            order
            title
            technologyUsed
            description {
              description
            }
            gitHubUrlTitle
            gitHubUrl
            projectUrlTitle
            projectUrl
            previewImage {
              fluid {
                src
              }
            }
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
          Guillermo Arria-Devoe is a Florida-based software engineer, currently
          enrolled in Lambda School's Data Science program and looking for work.
        </IntroText>
        <div className={indexStyles.cardContainer}>
          {data.allContentfulPortfolioProject.edges.map(edge => (
            <ProjectCard
            title={edge.node.title}
            technologyUsed={edge.node.technologyUsed}
            previewImage={edge.node.previewImage}
            description={edge.node.description.description}
            gitHubUrlTitle={edge.node.gitHubUrlTitle}
            gitHubUrl={edge.node.gitHubUrl}
            projectUrlTitle={edge.node.projectUrlTitle}
            projectUrl={edge.node.projectUrl}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
