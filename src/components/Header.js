import { NavLink } from 'react-router-dom'

import Button from '@mui/material/Button'

import './Header.scss'

export default function Header() {
  return (
    <div className="header">
      <NavLink exact to="/">
        <Button>Main</Button>
      </NavLink>

      <NavLink exact to="/products">
        <Button>Products</Button>
      </NavLink>

      <NavLink exact to="/product/:id">
        <Button>Product</Button>
      </NavLink>

      <NavLink exact to="/create">
        <Button>Product</Button>
      </NavLink>

      <NavLink exact to="/edit/:id">
        <Button>Edit</Button>
      </NavLink>
    </div>
  )
}
