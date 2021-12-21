import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, Divider, IconButton, FormControl, InputLabel, Select, MenuItem, TextField, Fab } from '@mui/material';

import { useState } from 'react';
import InputField from '../InputField';
import { Close, Save, TextFormat, Inbox, CalendarToday, Download, Add, Print, PhoneCallback } from '@mui/icons-material';


const DailyCallReport = () => {
    const headers = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'Full Name', width: 150 },
        { field: 'type', headerName: 'Type', width: 150 },
        { field: 'product', headerName: 'Product', width: 150 },
        { field: 'productDetails', headerName: 'Product Details', width: 200 },
        { field: 'Date', headerName: 'Date', width: 150 },
        { field: 'Description', headerName: 'Description', width: 200 },
    ];

    const callReports = [
        { id: 1, name: 'Aashish Aryal', type: 'Chemist', product: 'Product 1', productDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '2021-12-22', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque numquam consequuntur provident iste ratione, nobis laborum odio explicabo recusandae assumenda sed molestias magnam praesentium id deleniti voluptatibus modi possimus.', },
        { id: 2, name: 'Sunil Aryal', type: 'Stokist', product: 'Product 2', productDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '2021-12-22', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque numquam consequuntur provident iste ratione, nobis laborum odio explicabo recusandae assumenda sed molestias magnam praesentium id deleniti voluptatibus modi possimus.', },
        { id: 3, name: 'Prakash Bista', type: 'Chemist', product: 'Product 3', productDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '2021-12-22', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque numquam consequuntur provident iste ratione, nobis laborum odio explicabo recusandae assumenda sed molestias magnam praesentium id deleniti voluptatibus modi possimus.', },
        { id: 4, name: 'Nabin Adhikari', type: 'Stokist', product: 'Product 4', productDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '2021-12-22', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque numquam consequuntur provident iste ratione, nobis laborum odio explicabo recusandae assumenda sed molestias magnam praesentium id deleniti voluptatibus modi possimus.', },

    ];

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [type, setType] = useState('');

    const handleTypeSelect = (e) => {
        setType(e.target.value);
    }

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl uppercase"> <PhoneCallback fontSize='large'></PhoneCallback> Daily Call Report</h1>
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

            <DataGrid rows={callReports} columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth='lg' disableEscapeKeyDown="true" onBackdropClick="false">
                <div className='flex items-center justify-between bg-sky-700 text-white py-2 px-5'>
                    <h1 className='text-xl'>Daily Call Report</h1>
                    <IconButton onClick={handleClose}>
                        <Close className='text-white'></Close>
                    </IconButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                    <FormControl>
                        <InputLabel id="type-select-label">Type</InputLabel>
                        <Select
                            required="true"
                            labelId="type-select-label"
                            value={type}
                            label="Type"
                            onChange={handleTypeSelect}
                        >
                            <MenuItem value='Stokiest'> Stokiest </MenuItem>
                            <MenuItem value='Chemist'> Chemist </MenuItem>
                        </Select>
                    </FormControl>
                    <InputField label={'Full Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                    <InputField label={'Date'} type={'date'} required={'required'} icon={<CalendarToday></CalendarToday>}></InputField>
                    <InputField label={'Product'} type={'text'} required={'required'} icon={<Inbox></Inbox>}></InputField>
                    <TextField multiline rows={5} label='Product Details'></TextField>
                    <TextField multiline rows={5} label='Description'></TextField>
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
        </div>
    );
}

export default DailyCallReport;