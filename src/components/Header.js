import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to='/' className='logo'>BookOps</Link>
      <Link to='/login'>Logout</Link>
    </header>
  )
}

export default Header
