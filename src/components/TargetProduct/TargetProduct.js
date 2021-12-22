import { DataGrid } from '@mui/x-data-grid';
import { Fab } from '@mui/material';
import { useState } from 'react';
import { Add, Print, Download, TrackChanges } from '@mui/icons-material';
import TargetProductDialog from '../Dialogs/AddTargetProduct';

const TargetProduct = () => {

    const headers = [
        { field: 'id', headerName: 'ID' },
        { field: 'medicineName', headerName: 'Medicine Name', width: 150 },
        { field: 'boxesPerMonth', headerName: 'Boxes Per Month', width: 180 },
        { field: 'majorPrescriber', headerName: 'Major Prescriber', width: 200 },
        { field: 'Status', headerName: 'Status', width: 150 },
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
                <h1 className="text-2xl uppercase"> <TrackChanges></TrackChanges> Major Product Target</h1>
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
            <TargetProductDialog open={open} handleClose={handleClose}></TargetProductDialog>
        </div>
    );
}

export default TargetProduct;