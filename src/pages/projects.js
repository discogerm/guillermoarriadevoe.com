import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import IntroText from "../components/introText"
import ProjectCard from "../components/projectCard"

import indexStyles from "./projects.module.scss"

const projects = [
  {
    url: "https://github.com/sapinspys/GAD-Portfolio-Website",
    title: "Portfolio Site",
    desc:
      "The current website was built from scratch using JavaScript, SCSS, Gatsby.js, GraphQL, and Contentful.",
    github: "https://github.com/sapinspys/GAD-Portfolio-Website",
  },
  {
    url: "https://mentorsinternational.org/",
    title: "Mentors International Training Reminders",
    desc: "Web application for international microfinance training program.",
    github: "https://github.com/mentors-international-schedule/client",
  },
  {
    url:
      "https://github.com/team-soup/Ill-Serve-Soup-Marketing-Page--Guillermo-Arria-Devoe",
    title: "Everybody Eats! Soup Kitchen",
    desc: "Marketing page for soup kitchen management software.",
    github:
      "https://github.com/team-soup/Ill-Serve-Soup-Marketing-Page--Guillermo-Arria-Devoe",
  },
]

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioProject(sort: { fields: order, order: DESC }) {
        edges {
          node {
            order
            title
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
          {projects.map(p => (
            <ProjectCard
              url={p.url}
              title={p.title}
              desc={p.desc}
              github={p.github}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
