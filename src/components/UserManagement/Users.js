
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, Divider, FormControl, IconButton, InputLabel, MenuItem, Select, styled } from '@mui/material';
import { CalendarToday, Close, Email, GroupAdd, Home, Lock, Map, Phone, Photo, Save, SupervisedUserCircle, TextFormat } from '@mui/icons-material';
import { useState } from 'react';
import InputField from '../InputFields/InputField';
import SwitchButton from '../InputFields/SwitchButton';


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

    const [country, setcountry] = useState('');

    const handleCountrySelect = (e) => {
        setcountry(e.target.value);
    }

    const Input = styled('input')(
        {
            display: 'none',
        }
    );

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl uppercase"> <SupervisedUserCircle fontSize='large'></SupervisedUserCircle> Users</h1>
                <div className="flex items-center">
                    <Button onClick={handleClickOpen} color='primary' variant='contained' startIcon={<GroupAdd />}>
                        Add User
                    </Button>
                </div>
            </div>
            <DataGrid rows={users} columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />


            <Dialog open={open} onClose={handleClose} fullWidth maxWidth='lg' disableEscapeKeyDown="true" onBackdropClick="false">
                <div className='flex items-center justify-between bg-sky-700 text-white py-2 px-5'>
                    <h1 className='text-xl'>Add User</h1>
                    <IconButton onClick={handleClose}>
                        <Close className='text-white'></Close>
                    </IconButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                    <InputField label={'First Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                    <InputField label={'Middle Name'} type={'text'} icon={<TextFormat></TextFormat>}></InputField>
                    <InputField label={'Last Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                    <InputField label={'Email'} type={'email'} required={'required'} icon={<Email></Email>}></InputField>
                    <InputField label={'Phone'} type={'number'} required={'required'} icon={<Phone></Phone>}></InputField>
                    <InputField label={'Date of Birth'} type={'date'} required={'required'} icon={<CalendarToday></CalendarToday>}></InputField>
                    <FormControl>
                        <InputLabel id="country-select-label">Country</InputLabel>
                        <Select
                            required="true"
                            labelId="country-select-label"
                            id="demo-simple-select"
                            value={country}
                            label="Country"
                            onChange={handleCountrySelect}
                        >
                            <MenuItem value=''>
                                <em>None</em> </MenuItem>
                            <MenuItem value='Nepal'> Nepal </MenuItem>
                            <MenuItem value='India'> India </MenuItem>
                            <MenuItem value='China'> China </MenuItem>
                        </Select>
                    </FormControl>
                    <InputField label={'City'} type={'text'} required={'required'} icon={<Map></Map>}></InputField>
                    <InputField label={'Address'} type={'text'} required={'required'} icon={<Home></Home>}></InputField>
                    <InputField label={'Password'} type={'password'} required={'required'} icon={<Lock></Lock>}></InputField>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="outlined" sx={{ height: '56px' }} fullWidth component="span" startIcon={<Photo></Photo>}>
                            Profile Image
                        </Button>
                    </label>
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

export default Users;
