import React from "react"
// import { Link } from "gatsby" // GATSBY BUILT-IN ROUTING

import Layout from "../components/layout"
import Head from "../components/head"
import IntroText from "../components/introText"
import ProjectCard from "../components/projectCard"

const projects = [{ title: "Personal Site",  }]

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <Head title="Home" />
        <IntroText>
          Guillermo Arria-Devoe is a Florida-based software engineer, currently
          enrolled in Lambda School's Data Science program and looking for work.
        </IntroText>
        <div>
          <ProjectCard
            imgUrl="pear.png"
            imgAlt="pear"
            title="Project 1"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem autem natus provident atque, beatae fugiat voluptatibus a velit necessitatibus!"
            github="https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png"
          />
          {/* <ProjectCard
            imageUrl="../assets/pear.png"
            imageAlt="pear"
            title="Project 1"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem autem natus provident atque, beatae fugiat voluptatibus a velit necessitatibus!"
            github="https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png"
          /> */}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
