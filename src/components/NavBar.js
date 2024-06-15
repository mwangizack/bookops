import React from 'react'
import UserDetails from './UserDetails'
import { NavLink } from 'react-router-dom'
import SpeedIcon from '@mui/icons-material/Speed';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

function NavBar() {
  return (
    <nav>
      <UserDetails />

      <p className='nav-group-title'>CORE</p>

      <div className='nav-item'>
        <SpeedIcon fontSize='small'/>
        <NavLink className='nav-link' to='/'>Dashboard</NavLink>
      </div>

      <p className='nav-group-title'>BOOKS MANAGEMENT</p>

      <div className='nav-item'>
        <LibraryBooksOutlinedIcon fontSize='small' />
        <NavLink className='nav-link' to='/books'>Books</NavLink>
      </div>
    </nav>
  )
}

export default NavBar
