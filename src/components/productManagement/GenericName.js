import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogTitle, Divider, styled } from '@mui/material';
import { Cancel, Save, TextFormat, Add } from '@mui/icons-material';
import { useState } from 'react';
import InputField from '../InputField';
// import SwitchButton from '../SwitchButton';


const GenericName = () => {

    const headers = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'genericName', headerName: 'Generic Name', width: 150},
        
        { field: 'actions', headerName: 'Actions', width: 150 },
    ];

    const users = [
        { id: 1, genericName: 'Tablet', },
        { id: 2, genericName: 'Capsule', actions: '' },
        { id: 3, genericName: 'Syrup',  }
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
                <h1 className="text-2xl font-semibold uppercase">Medicine Generic</h1>
                <div className="flex items-center">
                    <Button onClick={handleClickOpen} color='primary' variant='contained' startIcon={<Add />}>
                        Add Generic Name
                    </Button>
                </div>
            </div>
            <DataGrid rows={users} columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '8px' }} />

         
                <Dialog open={open} onClose={handleClose} maxWidth='sm' disableEscapeKeyDown>
                    <DialogTitle>
                        Add Generic Name
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

export default GenericName;
