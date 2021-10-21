import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import Button from '@mui/material/Button'
import { getUser } from '../store/isAuth/thunks'

import './Header.scss'

export default function Header() {
  const history = useHistory()
  const dispatch = useDispatch()

  const onHandleLogOut = () => {
    dispatch(getUser({ auth: false }))
    history.push('/')
  }

  return (
    <div className="header">
      <NavLink exact to="/products">
        <Button>Products</Button>
      </NavLink>

      <NavLink exact to="/product/:id">
        <Button>Product</Button>
      </NavLink>

      <NavLink exact to="/create">
        <Button>Create</Button>
      </NavLink>

      <NavLink exact to="/edit/:id">
        <Button>Edit</Button>
      </NavLink>

      <NavLink exact to="/">
        <Button onClick={onHandleLogOut}>Log Out</Button>
      </NavLink>
    </div>
  )
}
