import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import Portal from '@mui/core/Portal'
import ImageLoader from '../images/Spinner-2.gif'

export default function Loader({ show }) {
  // const showLoader = useSelector(({ products }) => products.showLoader)

  // if (!showLoader && !show) { return null }
  // if (!show) { return null }

  console.log("loader", show)

  return (
    <Portal>
      <img
        className="loader"
        src={ImageLoader}
        alt="loader"
      />
    </Portal>
  )
}

// export default memo(Loader);
