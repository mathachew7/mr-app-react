import { Save, Close,  Medication, TextFormat,ConfirmationNumber, SellOutlined, FormatListBulleted, Business, CalendarToday, AttachMoney, Inventory2Outlined } from "@mui/icons-material";
import { Button, Dialog, DialogActions, Divider, IconButton } from '@mui/material';
import InputField from "../InputFields/InputField";
import SwitchButton from '../InputFields/SwitchButton';

const ProductDialog = ({ open, handleClose }) => {
    return (
        <div>
            <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='lg' disableEscapeKeyDown="true" onBackdropClick="false">
            <div className='flex items-center justify-between bg-sky-700 text-white py-2 px-5'>
                <h1 className='text-xl'>Add Product</h1>
                <IconButton onClick={() => handleClose()}>
                    <Close className='text-white'></Close>
                </IconButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                <InputField label={'Medicine Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                <InputField label={'Medicine Generic'} type={'text'} required={'required'} icon={< Medication></ Medication>}></InputField>
                <InputField label={'Purchase Price Per Piece'} type={'number'} required={'required'} icon={<AttachMoney></AttachMoney>}></InputField>
                <InputField label={'Selling Price Per Piece'} type={'number'} required={'required'} icon={<SellOutlined></SellOutlined>}></InputField>
                <InputField label={'Num of Boxes in Stock'} type={'number'} required={'required'} icon={<Inventory2Outlined></Inventory2Outlined>}></InputField>
                <InputField label={'Items Each Box'} type={'number'} required={'required'} icon={< FormatListBulleted></ FormatListBulleted>}></InputField>
                <InputField label={'Medicine Stocks No'} type={'number'} required={'required'} icon={<ConfirmationNumber></ConfirmationNumber>}></InputField>
                <InputField label={'Company Name'} type={'text'} required={'required'} icon={<Business></Business>}></InputField>
                <InputField label={'Medicine Expiry Date'} type={'date'} required={'required'} icon={<CalendarToday></CalendarToday>}></InputField>
                <SwitchButton></SwitchButton>
            </div>
            <Divider sx={{ marginTop: '10px' }}></Divider>
            <DialogActions>
                <Button variant='text' sx={{ color: '#424242' }} onClick={() => handleClose()} startIcon={<Close></Close>}>
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

export default ProductDialog;
