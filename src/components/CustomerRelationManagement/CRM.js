import { DataGrid } from '@mui/x-data-grid';
import { Fab } from '@mui/material';
import { useState } from 'react';
import { Add, Download, Print, SupportAgent } from '@mui/icons-material';
import CRMDialog from '../Dialogs/AddCRM';

const CRM = () => {

    const headers = [
        { field: 'id', headerName: 'ID', width: '70' },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'userType', headerName: 'User Type', width: 120 },
        { field: 'inputType', headerName: 'Input Type', width: 120 },
        { field: 'inputName', headerName: 'Input Name', width: 150 },
        { field: 'quantity', headerName: 'Quantity', width: 150 },
        { field: 'remarks', headerName: 'Remarks', width: 150 },
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
                <h1 className="text-2xl uppercase"> <SupportAgent fontSize='large'></SupportAgent> Customer Relation Management</h1>
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
            <CRMDialog open={open} handleClose={handleClose}></CRMDialog>
        </div >
    );
}

export default CRM;