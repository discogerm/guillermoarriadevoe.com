import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import IntroText from "../components/IntroText"
import ProjectCard from "../components/ProjectCard"

import projectStyles from "./projects.module.scss"

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
              title
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
          Guillermo Arria-Devoe is a flexible software engineer nearing graduation
          from Lambda School's Data Science program and looking for work.
        </IntroText>
        <div className={projectStyles.cardContainer}>
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
