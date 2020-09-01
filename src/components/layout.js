import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

import "../styles/layout.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Header></Header>
      <div className={layoutStyles.content}>{props.children}</div>
      <Footer></Footer>
    </div>
  )
}

export default Layout
