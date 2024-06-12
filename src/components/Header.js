import React from 'react'
import { Link } from 'react-router-dom'
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';

function Header() {
  return (
    <header>
      <Link to='/' className='logo'>BookOps</Link>
      <div className='logout-section'>
        <Link to='/login' className='logout'>Logout</Link>
        <PowerSettingsNewOutlinedIcon fontSize='small' />
      </div>
    </header>
  )
}

export default Header
