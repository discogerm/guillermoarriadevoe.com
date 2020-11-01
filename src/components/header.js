import React, { useState } from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

import Media from "react-media"
import HamburgerMenu from "react-hamburger-menu"

import SocialMenu from "./socialMenu"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuStyle, setMenuStyle] = useState({ display: "none" })

  const openMenu = () => {
    setMenuOpen(!menuOpen)

    if (menuOpen) {
      setMenuStyle({ display: "none" })
    } else {
      setMenuStyle({ display: "flex"})
    }
  }

  const displayHamburgerBtn = () => {
    return (
      <HamburgerMenu
        className={headerStyles.hamburgerBtn}
        isOpen={menuOpen}
        menuClicked={() => openMenu()}
        width={25}
        height={18}
        strokeWidth={2}
        rotate={0}
        color="#b8cbe0"
        borderRadius={0}
        animationDuration={0.7}
      />
    )
  }

  const displayNavigation = (selector, dropdownStyles={}) => {
    return (
      <div className={selector} style={dropdownStyles}>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Blog Home
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
        <SocialMenu />
      </div>
    )
  }

  return (
    <div className={headerStyles.mainHeaderContainer}>
      <header className={headerStyles.mainHeader}>
        <Link className={headerStyles.mhLogo} to="/">
          DISCOGERM
        </Link>
        {displayNavigation(headerStyles.navBar)}
        {displayHamburgerBtn()}
      </header>
      {displayNavigation(headerStyles.hamburgerDropdown, menuStyle)}
    </div>
  )
}

export default Header

// return (
//   <div className={headerStyles.mainHeaderContainer}>
//     <header className={headerStyles.mainHeader}>
//       <Link className={headerStyles.mhLogo} to="/">
//         DISCOGERM
//       </Link>
//       <Media
//         queries={{
//           medium: "(min-width: 1000px)",
//         }}
//       >
//         {screen => (
//           <>
//             {screen.medium
//               ? displayNavigation(headerStyles.navBar)
//               : displayHamburgerBtn()}
//           </>
//         )}
//       </Media>
//     </header>
//     <Media
//       queries={{
//         medium: "(max-width: 999px)",
//       }}
//     >
//       {screen => (
//         <>
//           {screen.medium & menuOpen
//             ? displayNavigation(headerStyles.hamburgerDropdown)
//             : null}
//         </>
//       )}
//     </Media>
//   </div>
// )