
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import { useState } from 'react';

import FabButtons from '../FabButtons/FabButtons';
import { SupervisedUserCircle } from '@mui/icons-material';
import UserDialog from '../Dialogs/AddUser';


const Users = () => {

    const headers = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'phone', headerName: 'Phone', width: 150 },
        { field: 'address', headerName: 'Address', width: 150 },
        { field: 'actions', headerName: 'Actions', width: 150 },
    ];

    const users = [
        { id: 1, firstName: 'Aashish', lastName: 'Aryal', email: 'aashish@gmail.com', phone: '9876512341', address: 'Smakhusi' },
        { id: 2, firstName: 'Sunil', lastName: 'Aryal', email: 'sunil@gmail.com', phone: '9876512341', address: 'Maitidevi' },
        { id: 3, firstName: 'Prakash', lastName: 'Bista', email: 'prakash@gmail.com', phone: '9876512341', address: 'Surkhet' },
        { id: 4, firstName: 'Nabin', lastName: 'Adhikari', email: 'nabin@gmail.com', phone: '9876512341', address: 'Banepa' },
    ];

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <div className="flex justify-between items-center">
                <Typography variant='h4'>
                    <SupervisedUserCircle fontSize='large' className='mb-1' /> Users
                </Typography>

                <FabButtons handleClickOpen={handleClickOpen} />
            </div>
            <DataGrid rows={users} columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />
            <UserDialog open={open} handleClose={handleClose} />
        </div>
    );
}

export default Users;
