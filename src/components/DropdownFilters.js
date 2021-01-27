import React, { useState } from "react"

import ddStyles from "./DropdownFilters.module.scss"

function Dropdown(props) {
  const [open, setOpen] = useState(true)

  const toggle = () => setOpen(!open)

  const create_tag_collection = edges => {
    var tagCollection = []

    edges.forEach(edge => tagCollection.push(...edge.node.tags))

    let uniqueTags = [...new Set(tagCollection)]
    uniqueTags.sort(function(a, b) {
      return a.length - b.length
    })

    return uniqueTags
  }

  return (
    // <div className={ddStyles.ddWrapper}>
    //   <div
    //     tabIndex={0}
    //     className={ddStyles.ddHeader}
    //     role="button"
    //     onKeyPress={() => toggle()}
    //     onClick={() => toggle()}
    //   >
    //     <div>
    //       <p className={ddStyles.title}>{props.title}</p>
    //     </div>
    //     <div className={ddStyles.action}>
    //       <p>{open ? "Close" : "Open"}</p>
    //     </div>
    //   </div>
    //   {open && (
    //     <ul className={ddStyles.ddList}>
    //       <li className={ddStyles.item}>
    //         <button onClick={e => props.onClickHandler(e)}>Show All</button>
    //       </li>
    //       {create_tag_collection(props.edges).map((tag, i) => (
    //         <li key={i} className={ddStyles.item}>
    //           <button onClick={e => props.onClickHandler(e)}>{tag}</button>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
    <div className={ddStyles.ddWrapper}>
      <span className={ddStyles.title}>TAGS</span>
      <ul className={ddStyles.ddList}>
        <li className={ddStyles.item}>
          <button onClick={e => props.onClickHandler(e)}>Show All</button>
        </li>
        {create_tag_collection(props.edges).map((tag, i) => (
          <li key={i} className={ddStyles.item}>
            <button onClick={e => props.onClickHandler(e)}>{tag}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
