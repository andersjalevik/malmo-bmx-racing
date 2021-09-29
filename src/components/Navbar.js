import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = ()=> {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <Link className="navbar-item" to="/">
          Start
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
    </nav>
    )
  }


export default Navbar
