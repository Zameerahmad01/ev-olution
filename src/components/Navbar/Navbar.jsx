import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="nav-logo">Ev-olution</div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About</li>
        <li>Explore</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
