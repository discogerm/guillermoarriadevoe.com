import React from "react"

import cardStyles from "./projectCard.module.scss"

const ProjectCard = props => {
  return (
    <div className={cardStyles.card}>
      {/* <img src={require(`../assets/${props.imgUrl}`)} alt={props.imgAlt} /> */}
      <h2 className={cardStyles.cardTitle}>{props.title}</h2>
      <div className={cardStyles.technologyTags}>
        {props.technologyTags.map(tag => (
          <span>{tag}</span>
        ))}
      </div>
      <p className={cardStyles.cardDes}>{props.description}</p>
      <div className={cardStyles.cardGithub}>
        <img src="https://img.icons8.com/nolan/24/github.png" alt="github" />
        <a href={props.githubUrl} target="__blank" rel="noopener">
          {props.githubUrlTitle}
        </a>
      </div>
      <a href={props.projectUrl} target="__blank" rel="noopener">
        {props.projectUrlTitle}
      </a>
    </div>
  )
}

export default ProjectCard
