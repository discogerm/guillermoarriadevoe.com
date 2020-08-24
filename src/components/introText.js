import React from "react"

import introTextStyles from "./introText.module.scss"

const IntroText = props => {
  return (
    <div className={introTextStyles.topContent}>
      {props.children}
    </div>
  )
}

export default IntroText
