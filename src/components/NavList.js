import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

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