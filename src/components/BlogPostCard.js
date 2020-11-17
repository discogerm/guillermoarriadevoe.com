import React from "react"
import { Link } from "gatsby"

import cardStyles from "./BlogPostCard.module.scss"

export default BlogPostCard = (props) => {
  return (
    <li className={cardStyles.postCard}>
      <h2 className={cardStyles.postTitle}>
        <Link to={`/blog/${props.slug}`}>{props.title}</Link>
      </h2>
      <div className={cardStyles.postTags}>
        {props.tags.map(tag => (
          <span>{tag}</span>
        ))}
      </div>
      <div className={cardStyles.postPreviewContainer}>
        <div className={cardStyles.postPreviewImageContainer}>
          <Link to={`/blog/${props.slug}`}>
            <img
              src={props.previewImage.fluid.src}
              alt={props.previewImage.title}
            />
          </Link>
        </div>
        <div className={cardStyles.postPreviewText}>
          <p>{props.preview.preview}</p>
          <div className={cardStyles.postExpand}>
            <Link to={`/blog/${props.slug}`}>&#x27f6; Read more </Link>
            <p className={cardStyles.postDate}>{props.publishedDate}</p>
          </div>
        </div>
      </div>
    </li>
  )
}
