import { Save, Close, Email, TextFormat, Phone, School, Badge, Apartment } from "@mui/icons-material";
import { Button, Dialog, DialogActions, Divider, IconButton } from '@mui/material';

import InputField from "../InputFields/InputField";
import SwitchButton from '../InputFields/SwitchButton';

const DoctorDialog = ({ open, handleClose }) => {
    return (
        <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='lg' disableEscapeKeyDown="true" onBackdropClick="false">
            <div className='flex items-center justify-between bg-sky-700 text-white py-2 px-5'>
                <h1 className='text-xl'>Add Doctor</h1>
                <IconButton onClick={() => handleClose()}>
                    <Close className='text-white'></Close>
                </IconButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                <InputField label={'Full Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                <InputField label={'Department'} type={'text'} required={'required'} icon={<Apartment></Apartment>}></InputField>
                <InputField label={'Qualification'} type={'text'} required={'required'} icon={<School></School>}></InputField>
                <InputField label={'Post'} type={'email'} required={'required'} icon={<Badge></Badge>}></InputField>
                <InputField label={'Email'} type={'email'} required={'required'} icon={<Email></Email>}></InputField>
                <InputField label={'Phone Number'} type={'number'} required={'required'} icon={<Phone></Phone>}></InputField>
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

export default DoctorDialog;