import React from "react"
import { Link } from "gatsby"

import { IconContext } from "react-icons"
import { FaReact, FaChevronRight, FaTags, FaFileUpload } from "react-icons/fa"

import cardStyles from "./BlogPostCard.module.scss"

const BlogPostCard = props => {
  return (
    <Link to={`/blog/${props.slug}`}>
      <li className={cardStyles.postCard}>
        <div className={cardStyles.postIcon}>
          <IconContext.Provider value={{ size: "2em" }}>
            <FaReact />
          </IconContext.Provider>
        </div>
        <div className={cardStyles.postContent}>
          <div className={cardStyles.postTitle}>{props.title}</div>
          <div className={cardStyles.postSubHeading}>
            <div className={cardStyles.postPublishedDateIcon}>
              <IconContext.Provider value={{ size: "0.9em" }}>
                <FaFileUpload />
              </IconContext.Provider>
            </div>
            <span className={cardStyles.postPublishedDate}>{props.publishedDate}</span>
            <div className={cardStyles.postTagsIcon}>
              <IconContext.Provider value={{ size: "0.9em" }}>
                <FaTags />
              </IconContext.Provider>
            </div>
            <div className={cardStyles.postTags}>
              {props.tags.map((tag, i) => (
                <span key={i}>{(i ? ", " : "") + tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className={cardStyles.postChevron}>
          <IconContext.Provider value={{ size: "1em" }}>
            <FaChevronRight />
          </IconContext.Provider>
        </div>
      </li>
    </Link>
  )
}

export default BlogPostCard
