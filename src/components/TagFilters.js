import React from "react"

import filterStyles from "./TagFilters.module.scss"

const TagFilters = props => {
  const create_tag_collection = edges => {
    var tagCollection = []

    edges.map(edge => tagCollection.push(...edge.node.tags))

    let uniqueTags = [...new Set(tagCollection)]
    return uniqueTags
  }

  return (
    <div className={filterStyles.tagContainer}>
      <span className={filterStyles.description}>Filter by Topic:</span>
      {create_tag_collection(props.edges).map(tag => (
        <span onClick={(e) => props.selectFilter(e)}>{tag}</span>
      ))}
    </div>
  )
}

export default TagFilters
