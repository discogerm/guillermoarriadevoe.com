import React, { useState } from "react"
import { Link } from "gatsby"

import HamburgerMenu from "react-hamburger-menu"
import SocialMenu from "./socialMenu"

import headerStyles from "./header.module.scss"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  let content = (
    <div className={headerStyles.hamburgerDropdown}>
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
              onClick={()=>handleLinkClick() }
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Hire me
            </Link>
          </li> */}
        </ul>
      </nav>
      <SocialMenu />
    </div>
  )

  return (
    <div className={headerStyles.mainHeaderContainer}>
      <header className={headerStyles.mainHeader}>
        <Link className={headerStyles.mhLogo} to="/">
          GAD
        </Link>
        <HamburgerMenu
          className={headerStyles.hamburgerButton}
          isOpen={menuOpen}
          menuClicked={() => handleClick()}
          width={25}
          height={18}
          strokeWidth={2}
          rotate={0}
          color="white"
          borderRadius={0}
          animationDuration={0.5}
        />
      </header>
      {menuOpen ? content : null}
    </div>
  )
}

export default Header
