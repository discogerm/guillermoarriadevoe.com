import React from "react"
import { Link } from "gatsby" // GATSBY BUILT-IN ROUTING

import Layout from "../components/layout"
import Head from "../components/head"

// import headshot from "../assets/headshot.jpg"
import styled from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <Head title="Home" />
      
      </div>
    </Layout>
  )
}

export default IndexPage
