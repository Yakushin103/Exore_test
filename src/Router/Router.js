import { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import lazyWrapper from '../utils/HOK/lazyWrapper'
import Main from '../pages/Main/Main'
import Header from '../components/Header'

const Products = lazyWrapper(lazy(() => import('../pages/Products/Products')))


export default function Router() {
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
        />
      </Switch>
    </div>
  )
}
