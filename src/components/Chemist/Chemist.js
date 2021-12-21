import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, Divider, IconButton, Fab } from '@mui/material';

import { useState } from 'react';
import InputField from '../InputField';
import SwitchButton from '../SwitchButton';

import { Close, Email, Home, Phone, Save, TextFormat, PhoneAndroid, ContactPhone, Add, Download, Print, Science } from '@mui/icons-material';


const Chemists = () => {
    const headers = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Full Name', width: 150 },
        { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'address', headerName: 'Address', width: 150 },
        { field: 'contactPerson', headerName: 'Contact Person', width: 180 },
        { field: 'mobileNumber', headerName: 'Contact Number', width: 150 },
        { field: 'Status', headerName: 'Status', width: 150 },
    ];

    const chemists = [
        { id: 1, name: 'Aashish Aryal', phoneNumber: '5562149', email: 'aashish@gmail.com', mobileNumber: '9876512341', address: 'Smakhusi', contactPerson: 'Null' },
        { id: 2, name: 'Sunil Aryal', phoneNumber: '5562148', email: 'sunil@gmail.com', mobileNumber: '9876512341', address: 'Maitidevi', contactPerson: 'Null' },
        { id: 3, name: 'Prakash Bista', phoneNumber: '5562147', email: 'prakash@gmail.com', mobileNumber: '9876512341', address: 'Surkhet', contactPerson: 'Null' },
        { id: 4, name: 'Nabin Adhikari', phoneNumber: '5562146', email: 'nabin@gmail.com', mobileNumber: '9876512341', address: 'Banepa', contactPerson: 'Null' },
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
                <h1 className="text-2xl uppercase"> <Science fontSize='large'></Science> Chemists</h1>
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

            <DataGrid rows={chemists} columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth='lg' disableEscapeKeyDown="true" onBackdropClick="false">
                <div className='flex items-center justify-between bg-sky-700 text-white py-2 px-5'>
                    <h1 className='text-xl'>Add Chemist</h1>
                    <IconButton onClick={handleClose}>
                        <Close className='text-white'></Close>
                    </IconButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                    <InputField label={'Full Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                    <InputField label={'Email'} type={'email'} required={'required'} icon={<Email></Email>}></InputField>
                    <InputField label={'Phone Number'} type={'number'} required={'required'} icon={<Phone></Phone>}></InputField>
                    <InputField label={'Contact Number'} type={'number'} required={'required'} icon={<PhoneAndroid></PhoneAndroid>}></InputField>
                    <InputField label={'Contact Person'} type={'text'} required={'required'} icon={<ContactPhone></ContactPhone>}></InputField>
                    <InputField label={'Address'} type={'text'} required={'required'} icon={<Home></Home>}></InputField>
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

export default Chemists;