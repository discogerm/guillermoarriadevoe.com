import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.mainHeader}>
      <Link
        className={headerStyles.mhLogo}
        activeClassName={headerStyles.activeNavItem}
        to="/"
      >
        GAD
      </Link>
      <nav className={headerStyles.mainNav}>
        <ul>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/journal"
            >
              Journal
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/photography"
            >
              Photography
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
