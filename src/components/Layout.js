import React from "react"

import Footer from "./Footer"
import Header from "./Header"

import "../styles/layout.scss"
import layoutStyles from "./Layout.module.scss"

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
