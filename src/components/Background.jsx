import React from 'react';
import { Box } from '@mui/material';

const Background = ({ children, imageUrl }) => {
    return (
        <Box sx={{
            w: '100vw',
            height: '100vh',
            pt:10,
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100vw 100vh'
        }}>
            {children}
        </Box>
    )
}

export default Background