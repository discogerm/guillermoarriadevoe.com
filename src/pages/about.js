import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import IntroText from "../components/introText"

import aboutStyles from "./about.module.scss"

import face from "../assets/upg_colorado.jpg"

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <Head title="About" />
        <IntroText>
          <b>Hi,</b> my name is Guillermo. I'm a software engineer currently
          residing in sunny Central Florida. I was born in Caracas, Venezuela
          but I have lived in Florida since I was a boy. My guiding purpose in
          life is to leverage modern technology to create a brighter future for
          humanity and the environment. I'm also a passionate hobby ecologist
          and surfer, spending most of my free time in the ocean or exploring
          new trails. <br />
          <br /> This website was built from scratch by myself using modern web
          development technology. It is a living document of my experiences and
          I hope you enjoy it. Thanks for stopping by!
        </IntroText>
      </div>
    </Layout>
  )
}

export default AboutPage
