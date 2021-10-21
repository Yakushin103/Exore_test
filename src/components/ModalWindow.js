import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { removeProductById } from '../store/products/thunks'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #ccc',
  boxShadow: 24,
  p: 4,
}

export default function ModalWindow({ global, id }) {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  const dispatch = useDispatch()

  const onHandleRemove = () => {
    dispatch(removeProductById({ global, id }))
    setOpen(false)
  }


  return (
    <div>
      <Button onClick={handleOpen}>Remove</Button>
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Are you sure you want to remove this product
            </Typography>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button onClick={onHandleRemove}>Yup</Button>

              <Button onClick={handleClose}>No</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}