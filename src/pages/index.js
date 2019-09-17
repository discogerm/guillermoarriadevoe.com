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
            <h2>I'm a full-stack developer, with a touch of designer, learning to turn data into valuable insight</h2> 
            <h2>Portland, Oregon</h2>
            <p>Currently available for full-time, part-time, or contract opportunities. <Link to="/contact">Let's connect!</Link></p>
          </div>
        </div>
        <div className={styled.summary}>
          <h2>EXPERTISE</h2>
          <ul>
            <li>Node.js, Express.js, SQLite, server-side JavaScript</li>
            <li>HTML5, CSS3, JavaScript, single page applications</li>
            <li>React, Redux, state management</li>
            <li>User experience (UX) and user interface (UI) design</li>
            <li>RESTful APIs</li>
            <li>Team leadership, transparency, communication</li>
            <li>Python, Pandas, Matplotlib, Scikit-Learn, Seaborn</li>
            <li>Data wrangling, storytelling, predictive modeling</li>
          </ul>
        </div>
        <div className={styled.summary}>
          <h2>PRACTICES</h2>
          <ul>
            <li>Agile software development</li>
            <li>Collaborative project management</li>
            <li>Focused, small, testable components</li>
            <li>Consistent and semantic code</li>
          </ul>
        </div>
        <div className={styled.summary}>
          <h2>EXPERIENCE</h2>
          <ul>
            <li>Freelance web designer and developer</li>
            <li>Team lead for Lambda School's full-stack web development cohorts</li>
            <li>5 years experience leading different teams to success</li>
            <li><Link>Read more</Link></li>
          </ul>
        </div>
      </div> 
    </Layout>
  )
}

export default IndexPage;