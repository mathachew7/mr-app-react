import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { LocalHospital } from '@mui/icons-material';

const NavList = ({ title, icon }) => {

    return (
        <div className="nav-list">
            <ListItemButton>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText>{title}</ListItemText>
            </ListItemButton>

        </div>
    );
}

export default NavList;