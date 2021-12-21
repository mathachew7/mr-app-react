import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, Divider, IconButton, Fab } from '@mui/material';

import { useState } from 'react';
import InputField from '../InputField';
import SwitchButton from '../SwitchButton';

import { Close, Email, Phone, Save, TextFormat, Masks, Apartment, School, Badge, Add, Download, Print } from '@mui/icons-material';


const Doctor = () => {
    const headers = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'Full Name', width: 150 },
        { field: 'department', headerName: 'Department', width: 150 },
        { field: 'qualification', headerName: 'Qualification', width: 150 },
        { field: 'post', headerName: 'Post', width: 150 },
        { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'Status', headerName: 'Status', width: 150 },
    ];

    const doctors = [
        { id: 1, name: 'Aashish Aryal', department: 'ENT Department', qualification: 'MBBS', 'post': 'Surgeon', phoneNumber: '9876512341', email: 'aashish@gmail.com', },
        { id: 2, name: 'Sunil Aryal', department: 'ENT Department', qualification: 'MBBS', 'post': 'Surgeon', phoneNumber: '9876512341', email: 'sunil@gmail.com', },
        { id: 3, name: 'Prakash Bista', department: 'ENT Department', qualification: 'MBBS', 'post': 'Surgeon', phoneNumber: '9876512341', email: 'prakash@gmail.com', },
        { id: 4, name: 'Nabin Adhikari', department: 'ENT Department', qualification: 'MBBS', 'post': 'Surgeon', phoneNumber: '9876512341', email: 'nabin@gmail.com', },

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
                <h1 className="text-2xl uppercase"> <Masks fontSize='large'></Masks> Doctors</h1>
                <div className="flex items-center space-x-2">
                    <Fab color='primary' size='small' onClick={handleClickOpen}>
                        <Add></Add>
                    </Fab>
                    <Fab style={{ background: '#f44336' }} size='small'>
                        <Download className='text-white'></Download>
                    </Fab>
                    <Fab style={{ background: '#43a047' }} size='small'>
                        <Print className='text-white'></Print>
                    </Fab>
                </div>
            </div>

            <DataGrid rows={doctors} columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />


            <Dialog open={open} onClose={handleClose} fullWidth maxWidth='lg' disableEscapeKeyDown="true" onBackdropClick="false">
                <div className='flex items-center justify-between bg-sky-700 text-white py-2 px-5'>
                    <h1 className='text-xl'>Add Doctor</h1>
                    <IconButton onClick={handleClose}>
                        <Close className='text-white'></Close>
                    </IconButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                    <InputField label={'Full Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                    <InputField label={'Department'} type={'text'} required={'required'} icon={<Apartment></Apartment>}></InputField>
                    <InputField label={'Qualification'} type={'text'} required={'required'} icon={<School></School>}></InputField>
                    <InputField label={'Post'} type={'email'} required={'required'} icon={<Badge></Badge>}></InputField>
                    <InputField label={'Email'} type={'email'} required={'required'} icon={<Email></Email>}></InputField>
                    <InputField label={'Phone Number'} type={'number'} required={'required'} icon={<Phone></Phone>}></InputField>
                    <SwitchButton></SwitchButton>
                </div>
                <Divider sx={{ marginTop: '10px' }}></Divider>
                <DialogActions>
                    <Button variant='text' sx={{ color: '#424242' }} onClick={handleClose} startIcon={<Close></Close>}>
                        Cancel
                    </Button>
                    <Button variant='contained' endIcon={<Save></Save>}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}

export default Doctor;