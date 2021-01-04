import React, { useEffect, useState } from "react"

import footerStyles from "./Footer.module.scss"

import SocialMenu from "./SocialMenu"

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2020)

  useEffect(() => {
    const d = new Date()
    const year = d.getFullYear()
    setCurrentYear(year)
  }, [])

  return (
    <footer>
      <div className={footerStyles.contentContainer}>
        {/* <SocialMenu /> */}
        <p className={footerStyles.copyright}>
          &copy; 2019-{currentYear} by Guillermo Arria-Devoe.{" "}
          <a href="mailto:guillermo.arriadevoe@gmail.com">Questions?</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
