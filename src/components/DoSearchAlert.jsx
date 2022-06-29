import React from 'react';
import { Alert, AlertTitle, Box } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

const DoSearchAlert = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: 1, py: 2 }}>
      <ArrowUpward className='anim' sx={{ fontSize: '8rem', mb: 3, color:'#fff' }} />
      <Alert severity='warning' sx={{ my: 5, maxWidth: '400px', fontSize: '1.2rem', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} >
        <AlertTitle  >Warning</AlertTitle>
        Please search for a city!
      </Alert>
    </Box>
  )
}

export default DoSearchAlert;