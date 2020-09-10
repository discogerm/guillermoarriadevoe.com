import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
import Media from "react-media"

import HamburgerMenu from "react-hamburger-menu"
import SocialMenu from "./socialMenu"

import headerStyles from "./header.module.scss"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  const displayHamburgerMenu = () => {
    return (
      <HamburgerMenu
        className={headerStyles.hamburgerButton}
        isOpen={menuOpen}
        menuClicked={() => handleClick()}
        width={25}
        height={18}
        strokeWidth={2}
        rotate={0}
        color="#b8cbe0"
        borderRadius={0}
        animationDuration={0.5}
      />
    )
  }

  const displayNavigation = selector => {
    return (
      <div className={selector}>
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
          </ul>
        </nav>
        <SocialMenu />
      </div>
    )
  }

  return (
    <div className={headerStyles.mainHeaderContainer}>
      <header className={headerStyles.mainHeader}>
        <Link className={headerStyles.mhLogo} to="/">
          GAD
        </Link>
        <Media
          queries={{
            small: "(max-width: 800px)",
            medium: "(min-width: 800px)",
          }}
        >
          {matches => (
            <Fragment>
              {matches.medium
                ? displayNavigation(headerStyles.nav)
                : displayHamburgerMenu()}
            </Fragment>
          )}
        </Media>
      </header>
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 800px)",
        }}
      >
        {matches => (
          <Fragment>
            {matches.medium ? null
              : menuOpen ? displayNavigation(headerStyles.hamburgerDropdown)
              : null}
          </Fragment>
        )}
      </Media>
    </div>
  )
}

export default Header
