import React from "react"

import socialStyles from "./SocialMenu.module.scss"

import { IconContext } from "react-icons"
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai"
import { FaInstagramSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <div className={socialStyles.menuContainer}>
      <ul className={socialStyles.menuList}>
        <li>
          <a
            href="https://www.linkedin.com/in/guillermo-arria-devoe/"
            target="__blank"
            rel="noopener"
          >
            <IconContext.Provider value={{ size: "1.8em" }}>
              <AiFillLinkedin />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/arriadevoe/"
            target="__blank"
            rel="noopener"
          >
            <IconContext.Provider value={{ size: "1.8em" }}>
              <FaInstagramSquare />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/arriadevoe/"
            target="__blank"
            rel="noopener"
          >
            <IconContext.Provider value={{ size: "1.8em" }}>
              <AiFillGithub />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="mailto:guillermo.arriadevoe@gmail.com">
            <IconContext.Provider value={{ size: "1.8em" }}>
              <AiFillMail />
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
