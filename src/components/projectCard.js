import React from "react"

// import introTextStyles from "./introText.module.scss"

const ProjectCard = props => {
  return (
    <div>
      {/* <img src={require(`../assets/${props.imgUrl}`)} alt={props.imgAlt} /> */}
      <a href={props.url} target="__blank" rel="noopener">
        <h2>{props.title}</h2>
      </a>
      <p>{props.desc}</p>
      <a href={props.github} target="__blank" rel="noopener">
        GitHub
      </a>
    </div>
  )
}

export default ProjectCard
