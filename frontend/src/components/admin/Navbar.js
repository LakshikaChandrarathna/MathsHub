import React from 'react';
import { Paper, Avatar, Box, IconButton, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';

function Navbar() {
    const paperStyle = {
        padding: 20,
        height: '20px', // Adjust height for better visibility
        width: '100%',
        backgroundColor: '#3f51b5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    // const avatarStyle = {
    //     position: 'absolute',
    //     top: 10,
    //     right: 10,
    // };

    return (
        <Paper elevation={10} style={paperStyle}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
            

            <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Avatar>L</Avatar>
            </Box>
        </Paper>
    );
}

export default Navbar;

