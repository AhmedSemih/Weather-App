import React from 'react';
import { Box } from '@mui/material';

const Background = ({ children, imageUrl }) => {
    return (
        <Box sx={{
            w: '100vw',
            height: 'content',
            minHeight: '100vh',
            pt: 10,
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: { xs: '2400px 2000px', sm: '1920px 1300px' },
            backgroundColor:'rgb(50,50,50)'
        }}>
            {children}
        </Box>
    )
}

export default Background