import React from 'react';
import { Box } from '@mui/material';

const Background = ({ children, imageUrl }) => {
    return (
        <Box sx={{
            w: '100vw',
            height: '100vh',
            pt:10,
            backgroundImage: `url(https://images.unsplash.com/photo-1537967520749-fb2dd3c6dcc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2106&q=80)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100vw 100vh'
        }}>
            {children}
        </Box>
    )
}

export default Background