import { DataGrid } from '@mui/x-data-grid';
import { Fab } from '@mui/material';
import { useState } from 'react';
import { Download, Add, Print, PhoneCallback } from '@mui/icons-material';
import DailyCallReportDialog from '../Dialogs/AddDailyCallReport';


const DailyCallReport = () => {
    const headers = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'Full Name', width: 150 },
        { field: 'type', headerName: 'Type', width: 150 },
        { field: 'product', headerName: 'Product', width: 150 },
        { field: 'productDetails', headerName: 'Product Details', width: 200 },
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'actions', headerName: 'Actions', width: 150 },
    ];

    const callReports = [
        { id: 1, name: 'Aashish Aryal', type: 'Chemist', product: 'Product 1', productDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '2021-12-22', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque numquam consequuntur provident iste ratione, nobis laborum odio explicabo recusandae assumenda sed molestias magnam praesentium id deleniti voluptatibus modi possimus.', },
        { id: 2, name: 'Sunil Aryal', type: 'Stokist', product: 'Product 2', productDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '2021-12-22', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque numquam consequuntur provident iste ratione, nobis laborum odio explicabo recusandae assumenda sed molestias magnam praesentium id deleniti voluptatibus modi possimus.', },
        { id: 3, name: 'Prakash Bista', type: 'Chemist', product: 'Product 3', productDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '2021-12-22', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque numquam consequuntur provident iste ratione, nobis laborum odio explicabo recusandae assumenda sed molestias magnam praesentium id deleniti voluptatibus modi possimus.', },
        { id: 4, name: 'Nabin Adhikari', type: 'Stokist', product: 'Product 4', productDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '2021-12-22', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque numquam consequuntur provident iste ratione, nobis laborum odio explicabo recusandae assumenda sed molestias magnam praesentium id deleniti voluptatibus modi possimus.', },

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
                <h1 className="text-2xl uppercase"> <PhoneCallback></PhoneCallback> Daily Call Report</h1>
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

            <DataGrid rows={callReports} columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />
            <DailyCallReportDialog open={open} handleClose={handleClose}></DailyCallReportDialog>
        </div>
    );
}

export default DailyCallReport;