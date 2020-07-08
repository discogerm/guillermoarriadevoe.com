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
          <b>Yo!</b> I'm Guillermo. I'm an engineer currently living in the
          sunshine state. I'm passionate about building and designing apps,
          classifying plants, and learning all about Data Science with my peers
          at{" "}
          <a href="https://lambdaschool.com/" target="__blank" rel="noopener">
            Lambda School
          </a>
          .
        </IntroText>
        <div className={aboutStyles.summary}>
          <div className={aboutStyles.summaryContent}>
            <h2>Education</h2>
            <ul>
              <li>
                <b>Lambda School</b>
                <br />
                2019 - now
                <br />
                Data Science Track
              </li>
              <li>
                <b>Lambda School</b>
                <br />
                2018 - 2019
                <br />
                Full Stack Web Development Track
              </li>
              <li>
                <b>Florida International University</b>
                <br />
                2013 - 2017
                <br />
                B.S. - Environmental Engineering
              </li>
            </ul>
            <img src={face} alt="sup" />
          </div>
          <div className={aboutStyles.summaryContent}>
            <h2>Experience</h2>
            <ul>
              <li>
                <b>Lambda School</b>
                <br />
                Sept 2019 - Feb 2020
                <br />
                Remote Section Lead
              </li>
              <li>
                <b>Lambda School</b>
                <br />
                Apr 2019 - Aug 2020
                <br />
                Remote Team Lead
              </li>
              <li>
                <b>The Education Fund: Miami</b>
                <br />
                Jun 2018 - Oct 2018
                <br />
                Independent Consultant
              </li>
              <li>
                <b>Florida International University</b>
                <br />
                April 2017 - Oct 2017
                <br />
                Research Assistant
              </li>
              <li>
                <b>Urban Paradise Guild</b>
                <br />
                Jan 2017 - Jun 2017
                <br />
                Senior Intern
              </li>
              <li>
                <b>Urban Paradise Guild</b>
                <br />
                Apr 2014 - Jan 2016
                <br />
                Volunteer Intern
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
