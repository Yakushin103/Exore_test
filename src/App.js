import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import Router from './Router/Router'
import Loader from './components/Loader'
import { getUser } from './store/isAuth/thunks'

import 'react-toastify/dist/ReactToastify.css'
import './App.scss'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(getUser({auth: false}));

      setIsAuth(true);
    })();
  }, [dispatch]);

  if (!isAuth) { return <Loader show /> }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />

      <Router />
    </>
  )
}

export default App
