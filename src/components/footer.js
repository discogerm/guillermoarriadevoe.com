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
              <img
                src="https://img.icons8.com/color/32/000000/linkedin.png"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/guillearria/"
              target="__blank"
              rel="noopener"
            >
              <img
                src="https://img.icons8.com/fluent/32/000000/instagram-new.png"
                alt="instagram"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/arriadevoe/"
              target="__blank"
              rel="noopener"
            >
              <img
                src="https://img.icons8.com/nolan/32/github.png"
                alt="github"
              />
            </a>
          </li>
          <li>
            <a href="mailto:guillermo.arriadevoe@gmail.com">
              <img
                src="https://img.icons8.com/ultraviolet/32/000000/email-open.png"
                alt="email"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
