import React from "react"

import cardStyles from "./projectCard.module.scss"

const ProjectCard = props => {
  return (
    <div className={cardStyles.card}>
      {/* <img src={require(`../assets/${props.imgUrl}`)} alt={props.imgAlt} /> */}
      <h2 className={cardStyles.cardTitle}>
        <a href={props.url} target="__blank" rel="noopener">
          {props.title}
        </a>
      </h2>
      <p className={cardStyles.cardDes}>{props.desc}</p>
      <div className={cardStyles.cardGithub}>
        <img src="https://img.icons8.com/nolan/24/github.png" />
        <a href={props.github} target="__blank" rel="noopener">
          GitHub
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
