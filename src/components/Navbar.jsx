
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css' // Importamos los estilos

export default function Navbar() {
  const [showSolutions, setShowSolutions] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">DARK UI</Link>
        </div>

        {/* Menú principal */}
        <ul className="nav-links">
          <li><Link to="/about">About us</Link></li>

          <li
            className="dropdown"
            onMouseEnter={() => setShowSolutions(true)}
            onMouseLeave={() => setShowSolutions(false)}
          >
            <span>Solutions ▾</span>
            {showSolutions && (
              <div className="dropdown-menu">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/settings">Settings</Link>
              </div>
            )}
          </li>

          <li><a href="#">Resources</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>

        {/* Botón */}
        <div className="cta-button">
          <a href="#">Try for free</a>
        </div>
      </div>
    </nav>
  )
}
