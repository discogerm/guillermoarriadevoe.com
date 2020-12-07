import React from "react"
import { Link } from "gatsby"

import headerStyles from "./Header.module.scss"

import SocialMenu from "./SocialMenu"

const Header = () => {
  const displayNavigation = selector => {
    return (
      <div className={selector}>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog/about-me"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/projects"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className={headerStyles.mainHeaderContainer}>
      <header className={headerStyles.mainHeader}>
        <Link className={headerStyles.mhLogo} to="/">
          Guillermo AD
        </Link>
        {displayNavigation(headerStyles.navBar)}
        <SocialMenu />
      </header>
      {displayNavigation(headerStyles.navDropdown)}
    </div>
  )
}

export default Header
