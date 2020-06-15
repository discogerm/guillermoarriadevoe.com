import React from "react"
// import { Link } from "gatsby" // GATSBY BUILT-IN ROUTING

import Layout from "../components/layout"
import Head from "../components/head"
import IntroText from "../components/introText"

import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <Head title="About" />
        <IntroText>
          <b>Yo!</b> I'm Guillermo. I'm an engineer currently living in
          Sebring, Florida. While I enjoy both building and designing apps, I
          also thoroughly enjoy classifying plants and learning all about Data Science
          with my peers at{" "}
          <a href="https://lambdaschool.com/" target="__blank">
            Lambda School
          </a>
          .
        </IntroText>
        <div className={aboutStyles.summary}>
          <h2>EDUCATION</h2>
          <ul>
            <li>
              5 years experience leading succesful teams (habitat restoration &
              urban forestry)
            </li>
            <li>
              Previous Team Lead for two of Lambda School's full-stack web
              development cohorts, WEB20 & WEBPT7
            </li>
            <li>
              Most recently, Section Lead for Lambda School's data science
              cohort, DS9
            </li>
          </ul>
        </div>
        <div className={aboutStyles.summary}>
          <h2>EXPERTISE</h2>
          <ul>
            <li>Python, Pandas, data wrangling</li>
            <li>Matplotlib, Seaborn, storytelling and visualization</li>
            <li>Scikit-Learn, predictive modeling</li>
            <li>
              HTML5, CSS3, React, Redux, single page applications, state
              management
            </li>
            <li>Node.js, Express.js, REST APIs, server-side JavaScript</li>
            <li>User experience (UX) and user interface (UI) design</li>
          </ul>
        </div>
        <div className={aboutStyles.summary}>
          <h2>PRACTICES</h2>
          <ul>
            <li>Collaboration, transparency, communication</li>
            <li>Self-organized and outcome-orientied</li>
            <li>Focused on customer needs and company goals</li>
            <li>Consistent, semantic code with modularity in mind</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
