import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'

import { getProductById } from '../../store/products/thunks'

import './Product.scss'

export default function Product() {
  const dispatch = useDispatch()
  const product = useSelector(({ products }) => products.product)
  const { id } = useParams()

  useEffect(() => {
    dispatch(getProductById(id))
  }, [id, dispatch])

  if (!product) {
    return <Alert className="product-item-alert" severity="info">
      You need to select a product to view
    </Alert>
  }

  return (
    <div className="product">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">
              {product.title}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <img src={product.image} alt={product.title} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">
              Category: {product.category}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">
              Price: {product.price}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">
              Rate: {product.rating.rate} and Count: {product.rating.count}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="p">
              Description: {product.description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
