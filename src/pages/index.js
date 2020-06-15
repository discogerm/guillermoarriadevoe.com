import React from "react"
// import { Link } from "gatsby" // GATSBY BUILT-IN ROUTING

import Layout from "../components/layout"
import Head from "../components/head"
import IntroText from "../components/introText"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <Head title="Home" />
        <IntroText>
          Guillermo Arria-Devoe is a Florida-based software engineer, currently
          enrolled in Lambda School's Data Science program and looking for work.
        </IntroText>
      </div>
    </Layout>
  )
}

export default IndexPage
