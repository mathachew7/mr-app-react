
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogTitle, Divider, styled } from '@mui/material';
import { CalendarToday, Camera, Cancel, Email, Add, Flag, GroupAdd, Home, Lock, Map, Phone, Photo, Save, TextFormat } from '@mui/icons-material';
import { useState } from 'react';
import InputField from '../InputField';
import SwitchButton from '../SwitchButton';


const Product = () => {

    const headers = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'medicineName', headerName: 'Medicine Name', width: 150 },
        { field: 'genericName', headerName: 'Medicine Generic', width: 150 },
        { field: 'companyName', headerName: 'Company Name', width: 150 },
        { field: 'numOfStock', headerName: 'Num of Boxes in stock', width: 180 },
        { field: 'expireDate', headerName: 'Expire Date', width: 150 },
        { field: 'actions', headerName: 'Actions', width: 150 },
    ];

    const users = [
        // { id: 1, medicineName: '', genericName: '', email: 'aashish@gmail.com', phone: '9876512341', address: 'Smakhusi' },
        // { id: 2, firstName: 'Sunil', lastName: 'Aryal', email: 'sunil@gmail.com', phone: '9876512341', address: 'Maitidevi' },
        // { id: 3, firstName: 'Prakash', lastName: 'Bista', email: 'prakash@gmail.com', phone: '9876512341', address: 'Surkhet' },
        // { id: 4, firstName: 'Nabin', lastName: 'Adhikari', email: 'nabin@gmail.com', phone: '9876512341', address: 'Banepa' },
    ];

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Input = styled('input')(
        {
            display: 'none',
        }
    );

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold uppercase">Products</h1>
                <div className="flex items-center">
                    <Button onClick={handleClickOpen} color='primary' variant='contained' startIcon={<GroupAdd />}>
                        Add Product
                    </Button>
                </div>
            </div>
            <DataGrid rows={users} columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '8px' }} />


            <Dialog open={open} onClose={handleClose} fullWidth maxWidth='lg' disableEscapeKeyDown>
                <DialogTitle>
                    Add Product
                </DialogTitle>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-2">
                    <InputField label={'Medicine Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                    <InputField label={'Generic Name'} type={'text'} icon={<TextFormat></TextFormat>}></InputField>
                    <InputField label={'Purchase Price Per Piece'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                    <InputField label={'Selling Price Per Piece'} type={'email'} required={'required'} icon={<Email></Email>}></InputField>
                    <InputField label={'Num of Boxes in Stocks'} type={'password'} required={'required'} icon={<Lock></Lock>}></InputField>
                    <InputField label={'Items Each Box'} type={'number'} required={'required'} icon={<Phone></Phone>}></InputField>
                    <InputField label={'Medicine Expire Date'} type={'date'} required={'required'} icon={<CalendarToday></CalendarToday>}></InputField>
                    <InputField label={'Medicine Stocks Number'} type={'text'} required={'required'} icon={<Home></Home>}></InputField>
                    <InputField label={'Company Name'} type={'text'} required={'required'} icon={<Map></Map>}></InputField>
                    <InputField label={'Medicine Description'} type={'text'} required={'required'} icon={<Flag></Flag>}></InputField>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="outlined" size='large' fullWidth component="span" startIcon={<Photo></Photo>}>
                            Profile Image
                        </Button>
                    </label>
                    <SwitchButton></SwitchButton>
                </div>
                <Divider sx={{ marginTop: '10px' }}></Divider>
                <DialogActions>
                    <Button onClick={handleClose} startIcon={<Cancel></Cancel>}>
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

export default Product;
