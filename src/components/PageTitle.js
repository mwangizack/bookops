import React from 'react'
import Box from '@mui/material/Box';

function PageTitle({title}) {
  return (
    <Box component="section" sx={{ p: 2, borderBottom: '1px solid lightgray', fontWeight: '700', fontSize: '1.5rem' }} >
      <p>{title}</p>
    </Box>
  )
}

export default PageTitle
