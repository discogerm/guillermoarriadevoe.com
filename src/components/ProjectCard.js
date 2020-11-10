import React from "react"

import cardStyles from "./ProjectCard.module.scss"

const ProjectCard = props => {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.topContent}>
        <div className={cardStyles.imageContainer}>
          <a href={props.projectUrl}>
            <img
              src={props.previewImage.file.url}
              alt={props.previewImage.title}
            />
          </a>
        </div>
        <h2 className={cardStyles.cardTitle}>
          <a href={props.projectUrl}>{props.title}</a>
        </h2>
        <div className={cardStyles.technologyTags}>
          {props.technologyUsed.map(tag => (
            <span>{tag}</span>
          ))}
        </div>
        <p className={cardStyles.cardDes}>{props.description}</p>
      </div>
      <div className={cardStyles.linkContainer}>
        <a href={props.gitHubUrl}>&#10230; Explore on GitHub</a>
        <a href={props.projectUrl}>&#10230; View Deployed</a>
      </div>
    </div>
  )
}

export default ProjectCard
