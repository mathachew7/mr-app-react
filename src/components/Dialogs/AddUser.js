import { Button, Dialog, DialogActions, Divider, FormControl, IconButton, InputLabel, MenuItem, Select, styled } from '@mui/material';
import { useState } from 'react';
import InputField from '../InputFields/InputField';
import SwitchButton from '../InputFields/SwitchButton';
import { CalendarToday, Close, Email, Home, Lock, Map, Phone, Photo, Save, TextFormat } from '@mui/icons-material';

const UserDialog = ({ open, handleClose }) => {

    const [country, setcountry] = useState('');

    const handleCountrySelect = (e) => {
        setcountry(e.target.value);
    }

    const Input = styled('input')(
        {
            display: 'none',
        }
    );

    return (
        <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='lg' disableEscapeKeyDown="true" onBackdropClick="false">
            <div className='dialog-title'>
                <h1 className='text-xl'>Add User</h1>
                <IconButton onClick={() => handleClose()}>
                    <Close className='text-white'></Close>
                </IconButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                <InputField label={'First Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                <InputField label={'Middle Name'} type={'text'} icon={<TextFormat></TextFormat>}></InputField>
                <InputField label={'Last Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                <InputField label={'Email'} type={'email'} required={'required'} icon={<Email></Email>}></InputField>
                <InputField label={'Phone'} type={'number'} required={'required'} icon={<Phone></Phone>}></InputField>
                <InputField label={'Date of Birth'} type={'date'} required={'required'} icon={<CalendarToday></CalendarToday>}></InputField>
                <FormControl>
                    <InputLabel id="country-select-label">Country</InputLabel>
                    <Select
                        required="true"
                        labelId="country-select-label"
                        id="demo-simple-select"
                        value={country}
                        label="Country"
                        onChange={handleCountrySelect}
                    >
                        <MenuItem value=''>
                            <em>None</em> </MenuItem>
                        <MenuItem value='Nepal'> Nepal </MenuItem>
                        <MenuItem value='India'> India </MenuItem>
                        <MenuItem value='China'> China </MenuItem>
                    </Select>
                </FormControl>
                <InputField label={'City'} type={'text'} required={'required'} icon={<Map></Map>}></InputField>
                <InputField label={'Address'} type={'text'} required={'required'} icon={<Home></Home>}></InputField>
                <InputField label={'Password'} type={'password'} required={'required'} icon={<Lock></Lock>}></InputField>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="outlined" sx={{ height: '56px' }} fullWidth component="span" startIcon={<Photo></Photo>}>
                        Profile Image
                    </Button>
                </label>
                <SwitchButton></SwitchButton>
            </div>
            <Divider sx={{ marginTop: '10px' }}></Divider>
            <DialogActions>
                <Button sx={{ color: '#424242' }} onClick={() => handleClose()} startIcon={<Close></Close>}>
                    Cancel
                </Button>
                <Button variant='contained' endIcon={<Save></Save>}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default UserDialog;