import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import IntroText from "../components/introText"

const Photography = () => {
  return (
    <Layout>
      <div>
        <Head title="Home" />
        <IntroText>
          One of my favorite hobbies is identifying and researching interesting
          species.
        </IntroText>
      </div>
    </Layout>
  )
}

export default Photography
