import { DataGrid } from '@mui/x-data-grid';
import { Fab } from '@mui/material';

import { useState } from 'react';
import { Download, Add, Print, Medication } from '@mui/icons-material';

import MedicineGenericDialog from '../Dialogs/AddMedicineGeneric';

const GenericName = () => {
    const headers = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'categoryName', headerName: 'Generic Name', width: 150},
        { field: 'actions', headerName: 'Actions', width: 150 },
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
                <h1 className="text-2xl uppercase"> <Medication className='mb-0.5'></Medication> Medicine Generic </h1>
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
            <DataGrid columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />
            <MedicineGenericDialog open={open} handleClose={handleClose}></MedicineGenericDialog>
        </div>
    );
}

export default GenericName;
