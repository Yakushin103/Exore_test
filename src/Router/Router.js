import { lazy } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import lazyWrapper from '../utils/HOK/lazyWrapper'
import Main from '../pages/Main/Main'
import Header from '../components/Header'

const Products = lazyWrapper(lazy(() => import('../pages/Products/Products')))
const Product = lazyWrapper(lazy(() => import('../pages/Product/Product')))
const Create = lazyWrapper(lazy(() => import('../pages/Create/Create')))
const Edit = lazyWrapper(lazy(() => import('../pages/Edit/Edit')))
const Auth = lazyWrapper(lazy(() => import('../pages/Auth/Auth')))

export default function Router() {
  const user = useSelector(({ user }) => user.user)

  if (!Object.values(user).length) { return <Auth /> }
  
  return (
    <div>
      <Header />
      <Switch>
        <Route
          path="/products"
          component={Products}
          exact
        />

        <Route
          path="/"
          component={Main}
          exact
        />

        <Route
          path="/product/:id"
          component={Product}
          exact
        />

        <Route
          path="/create"
          component={Create}
          exact
        />

        <Route
          path="/edit/:id"
          component={Edit}
          exact
        />
      </Switch>
    </div>
  )
}
