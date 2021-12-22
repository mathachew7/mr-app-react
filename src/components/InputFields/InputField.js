import { TextField, InputAdornment } from "@mui/material";

const InputField = ({ label, type, required, icon }) => {
    return (
        <div className="col-span-1">
            <TextField
                fullWidth
                required={required}
                label={label}
                type={type}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            {icon}
                        </InputAdornment>
                    )
                }}
            />
        </div>
    );
}

export default InputField;