import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { getUser } from '../../store/isAuth/thunks'

import './Auth.scss'

export default function Auth() {
  const dispatch = useDispatch()
  const history = useHistory()

  const handeleClick = () => {
    dispatch(getUser({ auth: true }))
    history.push('/products')
  }

  return (
    <Container className="auth">
      <Box className="auth-box">
        <TextField
          label="UserName"
          variant="standard"
        />

        <TextField
          type="password"
          label="Password"
          variant="standard"
        />

        <Button onClick={handeleClick}>
          Go store!
        </Button>
      </Box>
    </Container>
  )
}
