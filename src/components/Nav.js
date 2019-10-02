import React, { useState } from 'react'
import Link from 'gatsby-link'
import { Menu, X } from 'react-feather'

import Logo from './Logo'
import './Nav.css'

const Nav = ({ siteTitle }) => {
  const [active, setActive] = useState(false)

  const handleMenuToggle = () => setActive(!active)

  // Only close nav if it is open
  const handleLinkClick = () => active && handleMenuToggle()

  const NavLink = ({ className, children, ...props }) => (
    <Link
      {...props}
      className={`NavLink ${className || ''}`}
      onClick={handleLinkClick}
    >
      {children}
    </Link>
  )

  return (
    <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
      <div className="Nav--Container container">
        <Link to="/" onClick={handleLinkClick} title={siteTitle}>
          <Logo />
        </Link>
        <div className="Nav--Links">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/about/" exact>
            About
          </NavLink>
          <NavLink to="/blog/" exact>
            Blog
          </NavLink>
          <NavLink to="/default/" exact>
            Default
          </NavLink>
          <NavLink to="/contact/" exact>
            Contact
          </NavLink>
        </div>
        <button
          className="Button-blank Nav--MenuButton"
          aria-label="Toggle navigation menu button"
          onClick={handleMenuToggle}
        >
          {active ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  )
}

export default Nav
