
// src/components/Navbar.jsx
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ background: '#222', padding: '1rem' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0 }}>
        <li><Link style={{ color: 'white' }} to="/">Home</Link></li>
        <li><Link style={{ color: 'white' }} to="/about">About</Link></li>
        <li><Link style={{ color: 'white' }} to="/dashboard">Dashboard</Link></li>
        <li><Link style={{ color: 'white' }} to="/settings">Settings</Link></li>
      </ul>
    </nav>
  )
}
