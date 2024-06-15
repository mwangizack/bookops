import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';

function UserDetails() {
  return (
    <Stack direction="row" spacing={1} className='user-details'>
      <AccountCircleIcon sx={{ fontSize: 50, color: '#2f4f4f' }} />
      <div className='user-name-role'>
        <p className='user-role'>Administrator</p>
        <p className='username'>Username</p>
      </div>
    </Stack>
  )
}

export default UserDetails
