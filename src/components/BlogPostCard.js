import React from "react"
import { Link } from "gatsby"

import cardStyles from "./BlogPostCard.module.scss"

export default BlogPostCard = (props) => {
  return (
    <li className={cardStyles.postCard}>
      <h2 className={cardStyles.postTitle}>
        <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
      </h2>
      <div className={cardStyles.postTags}>
        {edge.node.tags.map(tag => (
          <span>{tag}</span>
        ))}
      </div>
      <div className={cardStyles.postPreviewContainer}>
        <div className={cardStyles.postPreviewImageContainer}>
          <Link to={`/blog/${edge.node.slug}`}>
            <img
              src={edge.node.previewImage.fluid.src}
              alt={edge.node.previewImage.title}
            />
          </Link>
        </div>
        <div className={cardStyles.postPreviewText}>
          <p>{edge.node.preview.preview}</p>
          <div className={cardStyles.postExpand}>
            <Link to={`/blog/${edge.node.slug}`}>&#x27f6; Read more </Link>
            <p className={cardStyles.postDate}>{edge.node.publishedDate}</p>
          </div>
        </div>
      </div>
    </li>
  )
}
