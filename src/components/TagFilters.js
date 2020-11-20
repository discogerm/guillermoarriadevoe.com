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
    <ol>
      {create_tag_collection(props.edges).map(tag => (
        <li>{tag}</li>
      ))}
    </ol>
  )
}

export default TagFilters
