import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <h1>Contact</h1>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/guillermo-arria-devoe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sapinspys"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Github
            </a>
          </li>
          <li>
            <a href="mailto:guillermo.arriadevoe@gmail.com">
              guillermo.arriadevoe@gmail.com
            </a>
          </li>
        </ul>
      </Layout>
    </div>
  )
}

export default ContactPage
