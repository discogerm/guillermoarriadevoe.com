import React from "react"
import { Link } from "gatsby" // GATSBY BUILT-IN ROUTING

import Layout from "../components/layout"
import Head from "../components/head"

import styled from "./index.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <Head title="About" />
        <div className={styled.topContent}>
          {/* <img src={headshot} alt="headshot" width="30%" /> */}
          <div className={styled.introduction}>
            <h1>Hello,</h1>
            <h2>
              I'm a software engineer and experienced team player with a background in environmentalism.
            </h2>
            <p>
              My professional career sprung its first roots in 2014 while serving to restore and protect native habitats in South Florida with a local non-profit organization. Nearly three years later I had led teams to restore entire ecosystems, managed multiple nurseries, coordinated effective grassroot movements, and earned the organization over $10,000.
            </p>
            <p>
              Around the same time I began studying environmental engineering at Florida International University. There I cultivated a passion for the complex systems that keep our chaotic world in order. I graduated with a bachelor's degree and spent some time in research and urban forestry before deciding to make a jump to software engineering.
            </p>
            <p>
              Through <a href="https://lambdaschool.com/" target="__blank">Lambda School</a> I was able to find the support, community, and resources necessary to succeed. Now after spending nearly a year learning all about the software development cycle and working in student leadership I have officially transferred to their data science program. There I'm currently learning how to leverage data, communicate effectively, and deliver data-driven results.
            </p>
            <p>
              On my off-time I enjoy reading, discovering music, traveling, and spending time with my dearest friends and family.
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
            <li>
              <a href="https://github.com/sapinspys" target="__blank">Follow me on GitHub</a>
            </li>
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

export default AboutPage
