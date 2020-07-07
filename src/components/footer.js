import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.footerContent}>
        {/* <p className={footerStyles.footerQuote}>
          "A man's true delight is to do the things he was made for. He was made
          to show goodwill to his kind, to rise above the promptings of his
          senses, to distinguish appearances from realities, and to pursue the
          study of universal Nature and her works." - Marcus Aurelius
        </p> */}
        <p className={footerStyles.footerQuote}>
          "The world into which we are born is brutal and cruel, and at the same time one of divine beauty. Which element we think outweighs the other, whether meaninglessness or meaning, is a matter of temperament." - C.G. Jung
        </p>
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
