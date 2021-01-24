import React, { useState } from "react"

import { IconContext } from "react-icons"
import {
  FaCloud,
  FaChevronRight,
  FaTags,
  FaFileUpload,
  FaTree,
  FaSmileBeam,
  FaDatabase,
  FaCode,
  FaBook,
  FaMobileAlt,
} from "react-icons/fa"
import { SiPython, SiJavascript } from "react-icons/si"

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

  const selectIcon = tag => {
    switch (tag) {
      case "Python":
        return <SiPython />
      case "JavaScript":
        return <SiJavascript />
      case "Environment":
        return <FaTree />
      case "Personal":
        return <FaSmileBeam />
      case "Data":
        return <FaDatabase />
      case "Coding":
        return <FaCode />
      case "Research":
        return <FaBook />
      case "React Native":
        return <FaMobileAlt />
      default:
        return <FaCloud />
    }
  }

  return (
    <div className={ddStyles.ddWrapper}>
      <span className={ddStyles.title}>TAGS</span>
      <ul className={ddStyles.ddList}>
        <li className={ddStyles.item}>
          <button onClick={e => props.onClickHandler(e)}>
            <IconContext.Provider value={{ size: "1.2em" }}>
              <FaTags className={ddStyles.icon} />
            </IconContext.Provider>
            <span>Show All</span>
          </button>
        </li>
        {create_tag_collection(props.edges).map((tag, i) => (
          <li key={i} className={ddStyles.item}>
            <button onClick={e => props.onClickHandler(e)}>
              <IconContext.Provider value={{ size: "1.2em" }}>
                {selectIcon(tag)}
              </IconContext.Provider>
              <span>{tag}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
