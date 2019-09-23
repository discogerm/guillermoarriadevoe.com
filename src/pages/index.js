import React from "react"
import { Link } from "gatsby" // GATSBY BUILT-IN ROUTING

import Layout from "../components/layout"
import Head from "../components/head"

import headshot from "../assets/headshot.jpg"
import styled from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <Head title="Home" />
        <div className={styled.topContent}>
          <img src={headshot} alt="headshot" width="30%" />
          <div className={styled.introduction}>
            <h1>Hello,</h1>
            <h2>
              I'm an experienced team leader with an academic background in
              environmental engineering.
            </h2>
            <p>
              Currently learning to leverage data to direct strategic and
              operational decisions.
            </p>
            <Link className={styled.button} to="/contact">
              CONTACT ME
            </Link>
          </div>
        </div>
        <div className={styled.summary}>
          <h2>EXPERTISE</h2>
          <ul>
            <li>Python, Pandas, data wrangling</li>
            <li>Matplotlib, Seaborn, storytelling and visualization</li>
            <li>Scikit-Learn, predictive modeling</li>
            <li>HTML5, CSS3, React, Redux, single page applications, state management</li>
            <li>Node.js, Express.js, REST APIs, server-side JavaScript</li>
            <li>User experience (UX) and user interface (UI) design</li>
          </ul>
        </div>
        <div className={styled.summary}>
          <h2>PRACTICES</h2>
          <ul>
            <li>Collaboration, transparency, communication</li>
            <li>Self-organized and outcome-orientied</li>
            <li>Focused on customer needs and company goals</li>
            <li>Consistent, semantic code with modularity in mind</li>
          </ul>
        </div>
        <div className={styled.summary}>
          <h2>EXPERIENCE</h2>
          <ul>
            <li>5 years experience leading succesful teams (habitat restoration & urban forestry)</li>
            <li>
              Previous Team Lead for two of Lambda School's full-stack web development cohorts, WEB20 & WEBPT7
            </li>
            <li>
              Most recently, Section Lead for Lambda School's data science cohort, DS9
            </li>
            <li>
              <a href="https://www.linkedin.com/in/guillermo-arria-devoe/" target="__blank">Read more on LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
