import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const currentPath = window.location.pathname

  const isActive = (path) => currentPath === path

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          PortPhoenix
        </Link>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link
              to="/gallery"
              className={isActive('/gallery') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/#features" onClick={() => setMenuOpen(false)}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/#pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={isActive('/dashboard') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
          </li>
        </ul>

        <div className="navbar-actions">
          <Link to="/signin" className="btn-ghost">
            Sign In
          </Link>
          <Link to="/gallery" className="btn-primary">
            Get Started
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
