import { useState } from "react";
import { AccountCircle, Lock, Logout, Message, Notifications, Search } from "@mui/icons-material";
import { AppBar, Divider, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";

const TopNavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <AppBar position="sticky" className="p-4" style={{ background: '#99A799' }} elevation={0}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1 bg-white p-2 rounded-3xl w-64 text-gray-800">
                        <Search></Search>
                        <input type="text" placeholder="Search" className="focus:border-collapse outline-none w-full" />
                    </div>

                    <div className="flex items-center space-x-3 justify-end">
                        <IconButton>
                            <Notifications className="text-white"></Notifications>
                        </IconButton>
                        <IconButton>
                            <Message className="text-white"></Message>
                        </IconButton>
                        <IconButton onClick={handleClick}>
                            <AccountCircle className="text-white"></AccountCircle>
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                            <MenuItem>
                                <ListItemIcon>
                                    <AccountCircle></AccountCircle>
                                </ListItemIcon>
                                Profile
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Lock></Lock>
                                </ListItemIcon>
                                Change Password
                            </MenuItem>
                            <Divider></Divider>
                            <MenuItem>
                                <ListItemIcon>
                                    <Logout></Logout>
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </AppBar>
        </div>
    );
}

export default TopNavBar;