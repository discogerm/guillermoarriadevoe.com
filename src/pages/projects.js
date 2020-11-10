import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
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
            gitHubUrl
            projectUrl
            previewImage {
              file {
                url
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
        <div className={projectStyles.cardContainer}>
          {data.allContentfulPortfolioProject.edges.map(edge => (
            <ProjectCard
              title={edge.node.title}
              technologyUsed={edge.node.technologyUsed}
              previewImage={edge.node.previewImage}
              description={edge.node.description.description}
              gitHubUrl={edge.node.gitHubUrl}
              projectUrl={edge.node.projectUrl}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
