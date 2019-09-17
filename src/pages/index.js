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
            <h2>I'm a full-stack developer recently transplanted to Oregon.</h2>
            <p>Available for full-time, part-time, and contract opportunities. <Link to="/contact">Let's connect!</Link></p>
          </div>
        </div>
        <div>
          <h2>Expertise</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div> 
    </Layout>
  )
}

export default IndexPage;