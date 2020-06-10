import React from "react"

import introTextStyles from "./introText.module.scss"

const IntroText = props => {
  return (
    <div className={introTextStyles.topContent}>
      <div className={introTextStyles.introduction}>
        <p>{props.children}</p>
      </div>
    </div>
  )
}

export default IntroText
