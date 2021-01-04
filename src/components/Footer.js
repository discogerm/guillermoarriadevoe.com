import React from "react"

import footerStyles from "./Footer.module.scss"


const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.contentContainer}>
        {/* <SocialMenu /> */}
        <p className={footerStyles.copyright}>
          Made with &hearts; by Guillermo Arria-Devoe.{" "}
          <a href="mailto:guillermo.arriadevoe@gmail.com">Questions?</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
