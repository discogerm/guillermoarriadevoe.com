import React, { useState } from "react"

function Dropdown(props) {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])

  const toggle = () => setOpen(!open)

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
        onKeyPress={() => toggle()}
        onClick={() => toggle()}
      >
        <div className="title">
          <p>{props.title}</p>
        </div>
        <div className="action">
          <p>{open ? "Close" : "Open"}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          <li className="dd-list-item">
            <button onClick={e => props.onClickHandler(e)}>Show All</button>
          </li>
          {create_tag_collection(props.edges).map((tag, i) => (
            <li key={i} className="dd-list-item">
              <button onClick={e => props.onClickHandler(e)}>{tag}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
