import React, {useState} from 'react'
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Typography from '@mui/material/Typography';


const CustomTip = ({textTip, customStyle}) => {

    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
                PopperProps={{
                disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={<Typography fontSize={15}>{textTip}</Typography>}
                sx={{...customStyle}}
            >
                <Button onClick={handleTooltipOpen}>
                    <InfoIcon sx={{fontSize: 'medium', color:"black"}}/>
                </Button>
            </Tooltip>
        </ClickAwayListener>
    );
}

export default CustomTip