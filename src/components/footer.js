import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.footerContent}>
        <ul className={footerStyles.footerMenu}>
          <li>
            <a
              href="https://www.linkedin.com/in/guillermo-arria-devoe/"
              target="__blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/guillearria/"
              target="__blank"
              rel="noopener"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sapinspys/"
              target="__blank"
              rel="noopener"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:guillermo.arriadevoe@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
