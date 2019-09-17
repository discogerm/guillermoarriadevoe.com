import React from 'react'
import { Link } from 'gatsby' // GATSBY BUILT-IN ROUTING

import Layout from '../components/layout'
import Head from '../components/head'

import headshot from "../assets/headshot.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <Head title="Home" /> 
        <img src={headshot} alt="headshot" width="40%"/>
        <h1>Helloo!</h1>
        <h2>I'm Guillermo, a full-stack engineer transitioning from Florida to Utah.</h2>
        <p>Does your team need a developer? <Link to="/contact">Let's talk!</Link></p>
      </div> 
    </Layout>
  )
}

export default IndexPage;