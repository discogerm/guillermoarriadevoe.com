import React, { useState, useEffect } from "react"
// import { Link } from "gatsby" // GATSBY BUILT-IN ROUTING

import Layout from "../components/layout"
import Head from "../components/head"
import IntroText from "../components/introText"
import ProjectCard from "../components/projectCard"

import indexStyles from "./index.module.scss"

const site = "https://www.inaturalist.org"
const client_id = "f7022a1d52ed0cfc580afb41853130e78f4739d6a297e8c52605061be38cda59"
const client_secret = "625999f7a5746e0063ae69862b110c4b960e19a9efbf99c1350eec5d4024237e"
const redirect_uri = "http://localhost:8000/photography"
const username = "guillermoarriadevoe"
const password = "greenday123"

const payload = {
  client_id,
  client_secret,
  grant_type: "password",
  username,
  password,
}

const Photography = () => {
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <Layout>
      <div>
        <Head title="Home" />
        <IntroText>
          One of my favorite hobbies is identifying and researching interesting
          species.
        </IntroText>
        {/* <div className={indexStyles.cardContainer}>
          {projects.map(p => (
            <ProjectCard
              url={p.url}
              title={p.title}
              desc={p.desc}
              github={p.github}
            />
          ))}
        </div> */}
      </div>
    </Layout>
  )
}

export default Photography
