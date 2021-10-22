import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import FirstTab from './Components/FirstTab'
import SecondTab from './Components/SecondTab'
import {
  getProducts,
  getCategories,
  getProductsWithFilter
} from '../../store/products/thunks'
import {
  updateCreatedProduct
} from '../../store/products/reducer'

import './Products.scss'

export default function Products() {
  const [tab, setTab] = useState('first')
  const [catFilter, setCatFilter] = useState('All')
  const [pieces, setPieces] = useState('8')
  const [checked, setChecked] = useState(true)
  const dispatch = useDispatch()
  const products = useSelector(({ products }) => products)
  const createdProduct = useSelector(({ products }) => products.createdProduct)


  useEffect(() => {
    const stateStr = localStorage.getItem('createdProduct')
    if (stateStr) {
      dispatch(updateCreatedProduct(JSON.parse(stateStr)))
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('createdProduct', JSON.stringify(createdProduct))
  }, [createdProduct])

  useEffect(() => {
    if (catFilter === 'All') {
      dispatch(getProducts(pieces))
    } else {
      dispatch(getProductsWithFilter({ pieces, catFilter }))
    }
  }, [dispatch, pieces, catFilter])

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const handleChangeTab = (event, newValue) => {
    setTab(newValue)
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangeTab} >
            <Tab label="Products" value="first" />

            <Tab label="Created Product" value="second" />
          </TabList>
        </Box>

        <TabPanel value="first">
          <FirstTab
            productsData={products.productsData}
            pieces={pieces}
            setPieces={setPieces}
            catArray={products.categories}
            catFilter={catFilter}
            setCatFilter={setCatFilter}
          />
        </TabPanel>

        <TabPanel value="second">
          <SecondTab
            checked={checked}
            setChecked={setChecked}
            createdProduct={createdProduct}
          />
        </TabPanel>
      </TabContext>
    </Box>
  )
}
