import React, { useState } from 'react';
import { Box, Stack, IconButton, InputBase, Drawer } from '@mui/material';
import { Menu, Search, FavoriteBorder } from '@mui/icons-material';

import DrawerList from './DrawerList';
import { useSearchContext } from '../contexts/SearchContext';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const { setSearch } = useSearchContext();

  const onSubmit = (e) => {
    setSearch(text.toLowerCase());
    e.preventDefault();
  }

  return (
    <>
      <Stack
        direction={'row'}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems='center'
        justifyContent='space-between'
        backgroundColor="rgb(40,40,40)"
        py={1}
        px={{ xs: 0, sm: 1, md: 3 }}
        position="fixed"
        width="100%" >
        <IconButton sx={{ color: '#fff' }} onClick={() => setIsOpen(true)} >
          <Menu sx={{ fontSize: { xs: '2rem', sm: '3rem' } }} />
        </IconButton>
        <Box
          onSubmit={onSubmit}
          component='form'
          sx={{
            display: 'flex',
            maxWidth: '600px',
            width: '100%',
            backgroundColor: 'rgb(50,50,50)',
            borderRadius: '10px'
          }}>
          <InputBase
            sx={{ ml: 1, flex: 1, color: '#fff' }}
            placeholder="Search City"
            value={text}
            onInput={(e) => setText(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: '10px', color: '#fff' }}>
            <Search />
          </IconButton>
        </Box>
        <IconButton type="submit" sx={{ p: '10px', color: '#fff' }}>
          <FavoriteBorder sx={{ fontSize: { xs: '2rem', sm: '3rem' } }} />
        </IconButton>
      </Stack>
      <Drawer
        anchor='left'
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DrawerList setIsOpen={setIsOpen} />
      </Drawer>
    </>
  )
}

export default Navbar;