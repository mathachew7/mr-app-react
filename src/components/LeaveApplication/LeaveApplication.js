import { DataGrid } from '@mui/x-data-grid';
import { Fab } from '@mui/material';

import { useState } from 'react';
import { Download, Add, Print, Article } from '@mui/icons-material';
import LeaveApplicationDialog from '../Dialogs/AddLeaveApplication';

const LeaveApplication = () => {

    const headers = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'Full Name', width: 150 },
        { field: 'subject', headerName: 'Subject', width: 200 },
        { field: 'reason', headerName: 'Reason', width: 200 },
        { field: 'startDate', headerName: 'Start Date', width: 150 },
        { field: 'endDate', headerName: 'End Date', width: 200 },
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
                <h1 className="text-2xl uppercase"> <Article className='mb-0.5'></Article> Leave Application</h1>
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
            <LeaveApplicationDialog open={open} handleClose={handleClose}></LeaveApplicationDialog>
        </div>
    );
}

export default LeaveApplication;