import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import FirstTab from './Components/FirstTab'
import {
  getProducts,
  getCategories,
  getProductsWithFilter
} from '../../store/products/thunks'

import { toggleLoader } from '../../store/products/reducer'

import './Products.scss'

const piecesArr = [
  { label: '8 pieces', value: '8' },
  { label: '16 pieces', value: '16' },
  { label: 'All pieces', value: 'all' },
]

export default function Products() {
  const [tab, setTab] = useState('first')
  const [catFilter, setCatFilter] = useState('All')
  const [pieces, setPieces] = useState('8')
  const dispatch = useDispatch()
  const products = useSelector(({ products }) => products)

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
            <Tab label="Item One" value="first" />

            <Tab label="Item Two" value="second" />
          </TabList>
        </Box>

        <TabPanel value="first">
          <FirstTab
            productsData={products.productsData}
            pieces={pieces}
            setPieces={setPieces}
            piecesArr={piecesArr}
            catArray={products.categories}
            catFilter={catFilter}
            setCatFilter={setCatFilter}
          />
        </TabPanel>

        <TabPanel value="second">Item Two</TabPanel>
      </TabContext>
    </Box>
  )
}
