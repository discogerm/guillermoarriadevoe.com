import React, { useEffect, useState } from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2020)

  useEffect(() => {
    const d = new Date()
    const year = d.getFullYear()
    setCurrentYear(year)
  }, [])

  return (
    <footer>
      <p className={footerStyles.footerContent}>
        &copy; 2019-{currentYear} by Guillermo Arria-Devoe. All rights reserved.{" "}
        <a href="mailto:guillermo.arriadevoe@gmail.com">Contact me.</a>
      </p>
    </footer>
  )
}

export default Footer
