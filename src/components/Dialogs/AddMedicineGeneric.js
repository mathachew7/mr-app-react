import { Save, Close, LocalPharmacy } from "@mui/icons-material";
import { Button, Dialog, DialogActions, Divider, IconButton } from '@mui/material';
import InputField from "../InputFields/InputField";
import SwitchButton from '../InputFields/SwitchButton';


const MedicineGenericDialog = ({ open, handleClose }) => {
    return (
        <div>
            <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='sm' disableEscapeKeyDown="true" onBackdropClick="false">
                <div className='flex items-center justify-between bg-sky-700 text-white py-2 px-5'>
                    <h1 className='text-xl'>ADD Medicine Generic</h1>
                    <IconButton onClick={() => handleClose()}>
                        <Close className='text-white'></Close>
                    </IconButton>
                </div>
                <div className="grid grid-cols-1 px-8 gap-y-7 mt-8">
                        <InputField label={'Medicine Generic'} type={'text'} required={'required'} icon={<LocalPharmacy></LocalPharmacy>}></InputField>
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
            </Dialog >
        </div >
    );
}

export default MedicineGenericDialog;
