import Portal from '@mui/core/Portal'
import ImageLoader from '../images/Spinner-2.gif'

export default function Loader() {

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
