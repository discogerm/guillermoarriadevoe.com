import React from "react"
import { Link } from "gatsby" // GATSBY BUILT-IN ROUTING

import Layout from "../components/layout"
import Head from "../components/head"

import headshot from "../assets/headshot.jpg"
import styled from "./index.module.scss"

import { makeStyles, withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"

const ConnectBtn = withStyles(theme => ({
  root: {
    backgroundColor: "rgba(137, 164, 187, 0.2)",
    textDecoration: 'none',
    "&:hover": {
      backgroundColor: "rgba(137, 164, 187, 0.3)",
    },
  },
}))(Button)

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div>
        <Head title="Home" />
        <div className={styled.topContent}>
          <img src={headshot} alt="headshot" width="30%" />
          <div className={styled.introduction}>
            <h1>Hello,</h1>
            <h2>
              I'm an experienced team leader with an academic background in environmental engineering.
            </h2>
            <p>Currently learning to leverage data to direct strategic and operational decisions.</p>
            {/* <Button variant="contained" className={classes.button}>
              <Link className={styled.contactBtn} to="/contact">
                Contact Me
              </Link>
            </Button> */}
            <ConnectBtn
              variant="contained"
              color="primary"
              className={classes.margin}
              href="/contact"
            >
              <Link className={styled.button} to="/contact">
                Connect
              </Link>
              <Icon className={classes.rightIcon}>send</Icon>
            </ConnectBtn>
          </div>
        </div>
        <div className={styled.summary}>
          <h2>EXPERTISE</h2>
          <ul>
            <li>HTML5, CSS3, single page applications</li>
            <li>SQLite, server-side JavaScript</li>
            <li>React, Redux, state management</li>
            <li>User experience (UX) and user interface (UI) design</li>
            <li>Node.js, Express.js, REST APIs</li>
            <li>Team leadership, transparency, communication</li>
            <li>Data wrangling with Python Pandas</li>
            <li>Python, Pandas, Matplotlib, Scikit-Learn, Seaborn</li>
            <li>Data wrangling, storytelling, predictive modeling</li>
          </ul>
        </div>
        <div className={styled.summary}>
          <h2>PRACTICES</h2>
          <ul>
            <li>Agile software development</li>
            <li>Collaborative project management</li>
            <li>Focused, small, testable components</li>
            <li>Consistent and semantic code</li>
          </ul>
        </div>
        <div className={styled.summary}>
          <h2>EXPERIENCE</h2>
          <ul>
            <li>Freelance web designer and developer</li>
            <li>
              Team lead for Lambda School's full-stack web development cohorts
            </li>
            <li>5 years experience leading different teams to success</li>
            <li>
              <Link>Read more</Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
