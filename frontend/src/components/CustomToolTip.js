import React, {useState} from 'react'
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import ClickAwayListener from '@mui/material/ClickAwayListener';


const CustomTip = ({textTip}) => {

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
                title={textTip}
            >
                <Button onClick={handleTooltipOpen}>
                    <InfoIcon sx={{fontSize: 'medium', color:"black"}}/>
                </Button>
            </Tooltip>
        </ClickAwayListener>
    );
}

export default CustomTip