import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form from './Form';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    // bgcolor: 'black',
    background: 'linear-gradient(to right, #000000, #5c8d0700)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MessageUS() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant="outlined" size="small"
            onClick={handleOpen} style={{ color: "white" }} color="success" startIcon={<MessageIcon />}>Message US</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        
                       <Form close={handleClose}/>
                    </Box>
                </Fade>
            </Modal>

        </div>
    )
}
