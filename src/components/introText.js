import React from "react"

import introTextStyles from "./introText.module.scss"

const IntroText = props => {
  return (
    <div className={introTextStyles.topContent}>
      <p>{props.children}</p>
    </div>
  )
}

export default IntroText
