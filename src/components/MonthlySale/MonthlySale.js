import { DataGrid } from '@mui/x-data-grid';
import { Fab } from '@mui/material';

import { useState } from 'react';
import { Download, Add, Print, Paid, Publish } from '@mui/icons-material';
import MonthlySaleDialog from '../Dialogs/AddMonthlySale';

const MonthlySale = () => {
    const headers = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'type', headerName: 'Stokiest/Chemist', width: 200 },
        { field: 'medicineName', headerName: 'Medicine Name', width: 250 },
        { field: 'boxesNumber', headerName: 'No. of Boxes', width: 200 },
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
                <h1 className="text-2xl uppercase"> <Paid className='mb-0.5'></Paid> Monthly Sale</h1>
                <div className="flex items-center space-x-2">
                    <Fab color='primary' size='small' onClick={handleClickOpen}>
                        <Add></Add>
                    </Fab>
                    <Fab style={{ background: '#f44336' }} size='small'>
                        <Download className='text-white'></Download>
                    </Fab>
                    <Fab style={{ background: '#fbc02d' }} size='small'>
                        <Publish className='text-white'></Publish>
                    </Fab>
                    <Fab style={{ background: '#43a047' }} size='small'>
                        <Print className='text-white'></Print>
                    </Fab>
                </div>
            </div>

            <DataGrid columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />
            <MonthlySaleDialog open={open} handleClose={handleClose}></MonthlySaleDialog>
        </div>
    );
}

export default MonthlySale;