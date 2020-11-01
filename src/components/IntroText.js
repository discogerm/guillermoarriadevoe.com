import React from "react"

import introTextStyles from "./IntroText.module.scss"

const IntroText = props => {
  return (
    <div className={introTextStyles.topContent}>
      {props.children}
    </div>
  )
}

export default IntroText
