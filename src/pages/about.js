import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import IntroText from "../components/introText"

import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <Head title="About" />
        <IntroText>
          <b>Yo!</b> I'm Guillermo. I'm an engineer currently living in the sunshine state. I'm passionate about building and designing apps, classifying plants, and learning all about Data
          Science with my peers at{" "}
          <a href="https://lambdaschool.com/" target="__blank" rel="noopener">
            Lambda School
          </a>
          .
        </IntroText>
        <div className={aboutStyles.summary}>
          <h2>EDUCATION</h2>
          <ul>
            <li>
              <b>Lambda School</b>&nbsp;&nbsp;&nbsp;&nbsp;2019 - now
              <br />
              Data Science Track
            </li>
            <li>
              <b>Lambda School</b>&nbsp;&nbsp;&nbsp;&nbsp;2018 - 2019
              <br />
              Full Stack Web Development Track
            </li>
            <li>
              <b>Florida International University</b>
              &nbsp;&nbsp;&nbsp;&nbsp;2013 - 2017
              <br />
              Bachelor of Science - Environmental Engineering
            </li>
          </ul>
        </div>
        <div className={aboutStyles.summary}>
          <h2>EXPERIENCE</h2>
          <ul>
            <li>
              <b>Lambda School</b>&nbsp;&nbsp;&nbsp;&nbsp; September 2019 -
              February 2020
              <br />
              Remote Section Lead
            </li>
            <li>
              <b>Lambda School</b>&nbsp;&nbsp;&nbsp;&nbsp; April 2019 - August
              2020
              <br />
              Remote Team Lead
            </li>
            <li>
              <b>The Education Fund - Miami</b>&nbsp;&nbsp;&nbsp;&nbsp; June
              2018 - October 2018
              <br />
              Independent Consultant
            </li>
            <li>
              <b>Florida International University</b>&nbsp;&nbsp;&nbsp;&nbsp;
              April 2017 - October 2017
              <br />
              Research Assistant
            </li>
            <li>
              <b>Urban Paradise Guild</b>&nbsp;&nbsp;&nbsp;&nbsp; January 2017 -
              June 2017
              <br />
              Senior Intern
            </li>
            <li>
              <b>Urban Paradise Guild</b>&nbsp;&nbsp;&nbsp;&nbsp; April 2014 -
              January 2016
              <br />
              Volunteer Intern
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
