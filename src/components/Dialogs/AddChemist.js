import { Save, Close, Email, TextFormat, Phone, PhoneAndroid, ContactPhone, Home } from "@mui/icons-material";
import { Button, Dialog, DialogActions, Divider, IconButton } from '@mui/material';

import InputField from "../InputFields/InputField";
import SwitchButton from '../InputFields/SwitchButton';

const ChemistDialog = ({ open, handleClose }) => {
    return (
        <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='lg' disableEscapeKeyDown="true" onBackdropClick="false">
            <div className='dialog-title'>
                <h1 className='text-xl'>Add Chemist</h1>
                <IconButton onClick={() => handleClose()}>
                    <Close className='text-white'></Close>
                </IconButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                <InputField label={'Full Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                <InputField label={'Email'} type={'email'} required={'required'} icon={<Email></Email>}></InputField>
                <InputField label={'Phone Number'} type={'number'} required={'required'} icon={<Phone></Phone>}></InputField>
                <InputField label={'Contact Number'} type={'number'} required={'required'} icon={<PhoneAndroid></PhoneAndroid>}></InputField>
                <InputField label={'Contact Person'} type={'text'} required={'required'} icon={<ContactPhone></ContactPhone>}></InputField>
                <InputField label={'Address'} type={'text'} required={'required'} icon={<Home></Home>}></InputField>
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
    );
}

export default ChemistDialog;