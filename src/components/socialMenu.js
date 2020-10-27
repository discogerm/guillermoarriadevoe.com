import React from "react"

import socialStyles from "./socialMenu.module.scss"

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
            <IconContext.Provider value={{ size: "1.5em" }}>
              <div>
                <AiFillLinkedin />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/disco.germ/"
            target="__blank"
            rel="noopener"
          >
            <IconContext.Provider value={{ size: "1.5em" }}>
              <div>
                <FaInstagramSquare />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/discogerm/"
            target="__blank"
            rel="noopener"
          >
            <IconContext.Provider value={{ size: "1.5em" }}>
              <div>
                <AiFillGithub />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="mailto:guillermo.arriadevoe@gmail.com">
          <IconContext.Provider value={{ size: "1.5em" }}>
              <div>
                <AiFillMail />
              </div>
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
