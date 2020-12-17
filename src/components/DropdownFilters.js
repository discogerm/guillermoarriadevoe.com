import React, { useState } from "react"

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])

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
