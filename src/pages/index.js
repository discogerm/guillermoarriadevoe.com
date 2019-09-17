import React from 'react'
import { Link } from 'gatsby' // GATSBY BUILT-IN ROUTING

import Layout from '../components/layout'
import Head from '../components/head'

import headshot from "../assets/headshot.jpg"
import styled from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <Head title="Home" /> 
        <div className={styled.topContent}>
          <img src={headshot} alt="headshot" width="30%"/>
          <div className={styled.introduction}>
            <h1>Hello</h1>
            <h2>I'm a full-stack developer with a touch of designer recently transplanted to Oregon.</h2>
            <p>Currently available for full-time, part-time, or contract opportunities. <Link to="/contact">Let's connect!</Link></p>
          </div>
        </div>
        <div>
          <h2>Expertise</h2>
          <ul>
            <li>Node.js, Express.js, SQLite, server-side JavaScript</li>
            <li>HTML5, CSS3, JavaScript, single page applications</li>
            <li>React, Redux, state management</li>
            <li>User experience and design</li>
            <li>RESTful APIs</li>
            <li>Team leadership, collaboration, communication</li>
            <li>Python, Pandas, Matplotlib, Scikit-Learn, Seaborn</li>
            <li>Data wrangling, storytelling, predictive modeling</li>
            <li><Link>Learn more</Link></li>
          </ul>
        </div>

      </div> 
    </Layout>
  )
}

export default IndexPage;