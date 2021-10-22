import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import TextField from '@mui/material/TextField'
import Loader from '../../../components/Loader'
import SelectFilter from './SelectFilter'
import { searchFieldArr, piecesArr } from '../../../utils/constants'

export default function FirstTab({
  productsData,
  pieces,
  setPieces,
  catArray,
  setCatFilter,
  catFilter,
  isLoader }) {
  const [searchText, setSearchText] = useState('')
  const [searchField, setSearchField] = useState('category')
  const history = useHistory()
  const [array, SetArray] = useState([])

  useEffect(() => {
    SetArray(productsData)
  }, [productsData])

  const handleChange = (id) => {
    history.push(`/product/${id}`)
  }

  const onSearchText = (e) => {
    let arr = productsData.filter(item => item[searchField].match(e.target.value))
    SetArray(arr)
    setSearchText(e.target.value)
  }

  return (
    <Grid container spacing={1}>
      <Grid
        className="products-filter"
        item
        xs={12}
      >
        <SelectFilter
          value={pieces}
          setFunc={setPieces}
          arr={piecesArr}
          title="Pieces"
        />

        <SelectFilter
          value={catFilter}
          setFunc={setCatFilter}
          arr={catArray}
          title="Categories"
        />

        <SelectFilter
          value={searchField}
          setFunc={setSearchField}
          arr={searchFieldArr}
          title="Search field"
        />

        <TextField
          label="Search text"
          type="search"
          value={searchText}
          onChange={onSearchText}
        />
      </Grid>
      {
        isLoader ?
          <Loader /> :
          array.map((prod) => (
            <Grid key={prod.id} item xs={4}>
              <Card sx={{ maxWidth: 345, height: '100%' }}>
                <CardActionArea onClick={() => handleChange(prod.id)}>
                  <CardMedia
                    className="products-card-image"
                    component="img"
                    height="250px"
                    image={prod.image}
                    alt={prod.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {prod.title}
                    </Typography>

                    <Typography gutterBottom variant="h6" component="div">
                      Price: {prod.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
      }
    </Grid>

  )
}