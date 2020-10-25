import React, { useEffect, useState } from "react"

import footerStyles from "./footer.module.scss"

import SocialMenu from "./socialMenu"

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
        <SocialMenu />
        <p className={footerStyles.footerContent}>
          &copy; 2019-{currentYear} by Guillermo Arria-Devoe.{" "}
          <a href="mailto:guillermo.arriadevoe@gmail.com">Questions?</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
