import React, { useState } from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

import Media from "react-media"
import HamburgerMenu from "react-hamburger-menu"

import SocialMenu from "./socialMenu"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const displayHamburgerBtn = () => {
    return (
      <HamburgerMenu
        className={headerStyles.hamburgerButton}
        isOpen={menuOpen}
        menuClicked={() => openMenu()}
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
        <SocialMenu />
        <ul className={headerStyles.navList}>
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
      </div>
    )
  }

  return (
    <div className={headerStyles.mainHeaderContainer}>
      <header className={headerStyles.mainHeader}>
        <Link className={headerStyles.mhLogo} to="/">
          DISCOGERM
        </Link>
        <Media
          queries={{
            medium: "(min-width: 1000px)",
          }}
        >
          {screen => (
            <>
              {screen.medium
                ? displayNavigation(headerStyles.navBar)
                : displayHamburgerBtn()}
            </>
          )}
        </Media>
      </header>
      <Media
        queries={{
          medium: "(max-width: 999px)",
        }}
      >
        {screen => (
          <>
            {screen.medium & menuOpen
              ? displayNavigation(headerStyles.hamburgerDropdown)
              : null}
          </>
        )}
      </Media>
    </div>
  )
}

export default Header
