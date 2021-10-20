import React, { memo, Suspense } from 'react'

import Loader from '../../components/Loader'

export default function lazyWrapper(Component) {
  const Wrapped = (props) => (
    <Suspense fallback={<Loader show />}>
      <Component {...props} />
    </Suspense>
  )

  return memo(Wrapped)
}