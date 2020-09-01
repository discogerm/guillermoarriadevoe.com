import React from "react"
import { Link } from "gatsby"

import SocialMenu from "./socialMenu"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <div className={headerStyles.mainHeaderContainer}>
      <header className={headerStyles.mainHeader}>
        <Link className={headerStyles.mhLogo} to="/">
          GAD
        </Link>
        <nav className={headerStyles.mainNav}>
          <ul>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/"
              >
                Home
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
            {/* <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Hire me
            </Link>
          </li> */}
          </ul>
        </nav>
        <SocialMenu />
      </header>
    </div>
  )
}

export default Header
