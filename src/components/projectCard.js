import React from "react"

import cardStyles from "./projectCard.module.scss"

const ProjectCard = props => {
  return (
    <div className={cardStyles.card}>
      <h2 className={cardStyles.cardTitle}>{props.title}</h2>
      <div className={cardStyles.technologyUsed}>
        {props.technologyUsed.map(tag => (
          <span>{tag}</span>
        ))}
      </div>
      <div className={cardStyles.postPreviewImageContainer}>
        <img
          src={props.previewImage.fluid.src}
          alt={props.previewImage.title}
        />
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
