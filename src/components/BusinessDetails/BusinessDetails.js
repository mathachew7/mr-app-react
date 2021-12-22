import { DataGrid } from '@mui/x-data-grid';
import { Fab } from '@mui/material';
import { useState } from 'react';
import { Add, Business, Download, Print } from '@mui/icons-material';
import BusinessDetailsDialog from "../Dialogs/AddBusinessDetails";

const BusinessDetails = () => {

    const headers = [
        { field: 'id', headerName: 'ID', width: '70' },
        { field: 'doctorName', headerName: 'Doctor', width: 120 },
        { field: 'departmentName', headerName: 'Department', width: 150 },
        { field: 'hospitalName', headerName: 'Hospital', width: 130 },
        { field: 'productName', headerName: 'Product', width: 130 },
        { field: 'tentativeSales', headerName: 'Tentative Sales', width: 150 },
        { field: 'competitorActivities', headerName: 'Competitor Activities', width: 200 },
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
                <h1 className="text-2xl uppercase"> <Business className='mb-1' fontSize='large'></Business> Dr. Business Details </h1>
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
            <BusinessDetailsDialog open={open} handleClose={handleClose}></BusinessDetailsDialog>
        </div>
    );
}

export default BusinessDetails;