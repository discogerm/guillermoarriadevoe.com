import React from "react"

// import introTextStyles from "./introText.module.scss"

const projectCard = props => {
  return (
    <div>
      <img src={require(`../assets/${props.imgUrl}`)} alt={props.imgAlt} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <a href={props.github} target="__blank" rel="noopener">
        GitHub
      </a>
    </div>
  )
}

export default projectCard
