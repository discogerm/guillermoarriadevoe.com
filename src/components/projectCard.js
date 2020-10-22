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
        <a href={props.gitHubUrl} target="__blank" rel="noopener">
          {props.gitHubUrlTitle}
        </a>
      </div>
      {props.githubUrlTitle}
      <a href={props.projectUrl} target="__blank" rel="noopener">
        {props.projectUrlTitle}
      </a>
    </div>
  )
}

export default ProjectCard
