import { DataGrid } from '@mui/x-data-grid';
import { Fab } from '@mui/material';

import { useState } from 'react';
import { Download, Add, Print, LocalAtm } from '@mui/icons-material';
import ExpenseProcessDialog from '../Dialogs/AddExpenseProcess';

const ExpenseProcess = () => {
    const headers = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'expenseTopic', headerName: 'Expense Topic', width: 200 },
        { field: 'bill', headerName: 'Bill', width: 150 },
        { field: 'Amount', headerName: 'Department Name', width: 200 },
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
                <h1 className="text-2xl uppercase"> <LocalAtm className='mb-0.5'></LocalAtm> Expense Process</h1>
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
            <ExpenseProcessDialog open={open} handleClose={handleClose}></ExpenseProcessDialog>
        </div>
    );
}

export default ExpenseProcess;