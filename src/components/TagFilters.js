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
      <button onClick={e => props.selectFilter(e)}>Show All</button>
      {create_tag_collection(props.edges).map((tag, i) => (
        <button key={i} onClick={e => props.selectFilter(e)}>
          {tag}
        </button>
      ))}
    </div>
  )
}

export default TagFilters
