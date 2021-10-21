import { ToastContainer } from 'react-toastify'

import Products from './pages/Products/Products'
import Loader from './components/Loader'
import Router from './Router/Router'

import 'react-toastify/dist/ReactToastify.css'
import './App.scss'

function App() {
  return (
    <>
      {/* <Loader /> */}
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
