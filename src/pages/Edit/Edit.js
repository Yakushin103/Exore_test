import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Alert from '@mui/material/Alert'
import ModalWindow from '../../components/ModalWindow'
import { CreateSchema } from '../../utils/shema'
import { updateProductById } from '../../store/products/reducer'

import './Edit.scss'

const intial = {
  title: '',
  price: '',
  description: ''
}

export default function Edit() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const createdProduct = useSelector(({ products }) => products.createdProduct)
  const product = useSelector(({ products }) => products.createdProduct.filter(item => item._id === id))

  useEffect(() => {
    localStorage.setItem('createdProduct', JSON.stringify(createdProduct))
  }, [createdProduct])

  const { title, price, description } = !!product.length ? product[0] : intial

  const formik = useFormik({
    initialValues: {
      title: title,
      price: price,
      description: description,
      public: !!product.length ? product[0].public : false,
    },
    validationSchema: CreateSchema,
    onSubmit: values => {
      dispatch(updateProductById({
        ...product[0],
        ...values
      }))
      toast.success('Product updated!!!')
    },
  })

  if (!product.length) {
    return <Alert className="product-item-alert" severity="info">
      You need to select a product to edit
    </Alert>
  }

  return (
    <Container className="edit">
      <form onSubmit={formik.handleSubmit}>
        <Grid item>
          <TextField
            className="create-input"
            label="Title"
            variant="standard"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </Grid>

        <Grid item>
          <TextField
            className="create-input"
            label="Price"
            variant="standard"
            name="price"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </Grid>

        <Grid item>
          <TextField
            className="create-input"
            label="Description"
            name="description"
            multiline
            rows={4}
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </Grid>

        <Grid item className="create-checkbox">
          <Typography variant="p" gutterBottom >
            Public
          </Typography>
          <Checkbox
            label="Public"
            name="public"
            value={formik.values.public}
            checked={formik.values.public}
            onChange={formik.handleChange}
          />
        </Grid>

        <Grid item className="create-buttons">
          <Button
            type="submit"
          >
            Update
          </Button>

          <ModalWindow
            global={false}
            id={id}
          />
        </Grid>
      </form>
    </Container>
  )
}