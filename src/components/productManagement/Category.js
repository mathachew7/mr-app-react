import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogTitle, Divider, styled } from '@mui/material';
import { CalendarToday, Camera, Cancel, Email, Flag, GroupAdd, Home, Lock, Map, Phone, Photo, Save, TextFormat, Add } from '@mui/icons-material';
import { useState } from 'react';
import InputField from '../InputField';
// import SwitchButton from '../SwitchButton';


const Category = () => {

    const headers = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'categoryName', headerName: 'Category Name', width: 150},
        
        { field: 'actions', headerName: 'Actions', width: 150 },
    ];

    const users = [
        { id: 1, categoryName: 'Tablet', },
        { id: 2, categoryName: 'Capsule', actions: '' },
        { id: 3, categoryName: 'Syrup',  }
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
                <h1 className="text-2xl font-semibold uppercase">Category</h1>
                <div className="flex items-center">
                    <Button onClick={handleClickOpen} color='primary' variant='contained' startIcon={<Add />}>
                        Add Category
                    </Button>
                </div>
            </div>
            <DataGrid rows={users} columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '8px' }} />

         
                <Dialog open={open} onClose={handleClose} maxWidth='sm' disableEscapeKeyDown>
                    <DialogTitle>
                        Add Category
                    </DialogTitle>


                    <div className="grid grid-cols-1 px-5 mt-2">
                        <InputField label={'Category Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
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

export default Category;
