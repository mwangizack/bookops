import React from 'react'
import UserDetails from './UserDetails'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <UserDetails />
      <p className='nav-group-title'>CORE</p>
      <NavLink className='nav-link' to='/'>Dashboard</NavLink>
      <p className='nav-group-title'>BOOKS MANAGEMENT</p>
      <NavLink className='nav-link' to='/books'>Books</NavLink>
    </nav>
  )
}

export default NavBar
