import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About Me</h1>
        <p>
          Actively seeking full-time opportunities in full-stack development. I
          am proficient with HTML, CSS, LESS/SASS pre-processing, JavaScript,
          ReactJS, NodeJS Express servers, SQLite databases created with KnexJS,
          and always eager to learn how to leverage new technology.
        </p>

        <p>
          I've dedicated thousands of hours learning full-stack and now
          currently study data science under the guidance of Lambda School. I
          also served as Team Lead for two full-stack cohorts where I ensured
          student success through daily project reviews, group standups, 1:1s,
          and mentorship.
        </p>

        <p>
          My professional background before web development started with an
          undergraduate education in environmental engineering and ended with
          four years of dedicated habitat restoration in South Florida before I
          decided to make a drastic career change.
        </p>

        <p>
          I love traveling, camping, reading, hiking, teaching, learning, and
          making friends.
        </p>

        <p>
          Does your team need a developer?{" "}
          <Link to="/contact">Let's talk!</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
