import React from "react"

import socialStyles from "./socialMenu.module.scss"

import { IconContext } from "react-icons"
import { AiFillLinkedin } from "react-icons/ai"
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
            <IconContext.Provider value={{ color: "blue", size: "2em" }}>
              <div>
                <AiFillLinkedin />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/guillearria/"
            target="__blank"
            rel="noopener"
          >
            <IconContext.Provider value={{ color: "blue", size: "2em" }}>
              <div>
                <FaInstagramSquare />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/arriadevoe/"
            target="__blank"
            rel="noopener"
          >
            <img
              src="https://img.icons8.com/nolan/40/github.png"
              alt="github"
            />
          </a>
        </li>
        <li>
          <a href="mailto:guillermo.arriadevoe@gmail.com">
            <img
              src="https://img.icons8.com/ultraviolet/37/000000/email-open.png"
              alt="email"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
