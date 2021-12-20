import { useState } from "react";
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { AdminPanelSettings, SupervisedUserCircle, LocalHospital, ManageAccounts, AllInbox, Category, Inbox, Medication, Inventory2, Science, Masks, Flight, PhoneCallback, LocalAtm, Paid, TrackChanges, Article, SupportAgent, Business, Timelapse, ContactPhone } from '@mui/icons-material';

import NavList from "./NavList";

const NavigationDrawer = () => {
    const [UMDrawer, setUMDrawer] = useState(false);
    const [ProductsDrawer, setProductsDrawer] = useState(false);

    const openUserManagement = () => {
        setUMDrawer(!UMDrawer);
    };

    const openProducts = () => {
        setProductsDrawer(!ProductsDrawer);
    };

    return (
        <div className="navigation-drawer py-5 px-2">
            <Link to="/">
                <h1 className="font-black text-lg text-white"> <LocalHospital fontSize='large' className="ml-5 mb-1"></LocalHospital> MR APP</h1>
            </Link>
            <div className="nav-list-wapper mt-3 border rounded-xl bg-white p-1">
                <List sx={{ fontSize: 'body2' }}>
                    <ListItemButton onClick={openUserManagement} sx={{ borderLeft: "20px" }}>
                        <ListItemIcon>
                            <ManageAccounts></ManageAccounts>
                        </ListItemIcon>
                        <ListItemText primary="User Management"></ListItemText>
                        {UMDrawer ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={UMDrawer} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ pl: 2 }}>
                            <Link to="/users">
                                <ListItemButton>
                                    <ListItemIcon >
                                        <SupervisedUserCircle />
                                    </ListItemIcon>
                                    <ListItemText primary="Users" />
                                </ListItemButton>
                            </Link>
                            <ListItemButton>
                                <ListItemIcon >
                                    <AdminPanelSettings />
                                </ListItemIcon>
                                <ListItemText primary="Roles & Permissions" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={openProducts} sx={{ borderLeft: "20px" }}>
                        <ListItemIcon>
                            <AllInbox />
                        </ListItemIcon>
                        <ListItemText primary="Products"></ListItemText>
                        {ProductsDrawer ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={ProductsDrawer} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ pl: 2 }}>
                            <ListItemButton>
                                <ListItemIcon >
                                    <Category />
                                </ListItemIcon>
                                <ListItemText primary="Category" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon >
                                    <Medication />
                                </ListItemIcon>
                                <ListItemText primary="Medicine Generic" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon >
                                    <Inbox />
                                </ListItemIcon>
                                <ListItemText primary="Product" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <NavList title={'Stokiest'} icon={<Inventory2 />}> </NavList>
                    <NavList title={'Chemist'} icon={<Science />}> </NavList>
                    <NavList title={'Doctor'} icon={<Masks />}> </NavList>
                    <NavList title={'Daily Call Report'} icon={<PhoneCallback />}> </NavList>
                    <NavList title={'Doctor Call'} icon={<ContactPhone />}> </NavList>
                    <NavList title={'Expense Process'} icon={<LocalAtm />}> </NavList>
                    <NavList title={'Sale'} icon={<Paid />}> </NavList>
                    <NavList title={'Major Product Target'} icon={<TrackChanges />}> </NavList>
                    <NavList title={'Leave Application'} icon={<Article />}> </NavList>
                    <NavList title={'Customer Relation Management'} icon={<SupportAgent />}> </NavList>
                    <NavList title={'Dr. Business Details'} icon={<Business />}> </NavList>
                    <NavList title={'Product Expiry'} icon={<Timelapse />}> </NavList >
                    <NavList title={'Tour Program'} icon={<Flight />}> </NavList>
                </List>
            </div>

        </div >
    );
}

export default NavigationDrawer;