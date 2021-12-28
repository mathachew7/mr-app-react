import { DataGrid } from '@mui/x-data-grid';
import { Fab } from '@mui/material';

import { useState } from 'react';
import { Download, Add, Print, Inbox } from '@mui/icons-material';

import ProductDialog from '../Dialogs/AddProducts';

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
                <h1 className="text-2xl uppercase"> <Inbox className='mb-0.5'></Inbox> Products</h1>
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
            <ProductDialog open={open} handleClose={handleClose}></ProductDialog>
        </div>
    );
}

export default Product;
