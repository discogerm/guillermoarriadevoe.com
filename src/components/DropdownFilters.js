import React, { useState } from "react"

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])

  // How many times is this running?
  const create_tag_collection = edges => {
    var tagCollection = []

    edges.map(edge => tagCollection.push(...edge.node.tags))

    let uniqueTags = [...new Set(tagCollection)]
    return uniqueTags
  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={}
        onClick={}
      >
        <div className="title">
          <p>{filter}</p>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
