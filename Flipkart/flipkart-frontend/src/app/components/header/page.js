"use client"
import React, { useState } from 'react';
import styles from './Header.module.css'; // Import CSS Modules
import { AppBar, Toolbar, InputBase, IconButton, Badge, Typography, Modal, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SignInForm from '../login/page';

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <AppBar position="static" className={styles.navbar}>
                <Toolbar className='relative w-full flex justify-around'>
                    <img src="/flipkart.svg" alt="Logo" className={styles.logo} />
                    
                    <div className={styles.search}>
                        <SearchIcon sx={{color:'black',m:1}}/>
                        <InputBase
                            placeholder="Search for Products, Brands and More"
                            classes={{
                                root: styles.inputRoot,
                                input: styles.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    
                    <div className={styles.grow} />
                    <div className='flex justify-around'>
                        {/* ✅ Fix: Use handleOpen instead of calling SignInForm directly */}
                        <IconButton aria-label="login" onClick={handleOpen}>
                            <AccountCircleOutlinedIcon sx={{ color: 'black' }} />
                            <Typography className='p-2 text-black '>Login</Typography>
                        </IconButton>

                        <IconButton aria-label="cart">
                            <Badge badgeContent={0} sx={{ color: 'black' }}>
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                            <Typography className='p-2 text-black'>Cart</Typography>
                        </IconButton>

                        <IconButton aria-label="seller">
                            <StorefrontOutlinedIcon/>
                            <Typography className='p-2 text-black'>Become a Seller</Typography>
                        </IconButton>

                        <IconButton edge="end" aria-label="more">
                            <MoreIcon sx={{ color: 'black' }} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            {/* ✅ Add a Modal for Login */}
            <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                    <SignInForm />
                </Box>
            </Modal>
        </>
    );
};

export default Header;

/* ✅ Modal Styling */
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 760,
    height:560,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px'
};
