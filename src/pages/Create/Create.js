import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import { createNewProduct } from '../../store/products/thunks'
import { CreateSchema } from '../../utils/shema'

import './Create.scss'

export default function Create() {
  const dispatch = useDispatch()
  const createdProducts = useSelector(({ products }) => products.createdProduct)

  useEffect(() => {
    localStorage.setItem('createdProduct', JSON.stringify(createdProducts))
  }, [createdProducts])

  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      description: '',
      public: false,
    },
    validationSchema: CreateSchema,
    onSubmit: values => {
      dispatch(createNewProduct({ ...values, createAt: new Date() }))
    },
  })

  const { errors } = formik
  return (
    <Container className="create">
      <Grid direction="column" container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom >
            Create new product
          </Typography>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <Grid item xs={12}>
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

          <Grid item>
            <Button
              disabled={
                Object.values(errors).length !== 0 ||
                formik.values.title === ""
              }
              type="submit"
            >
              Add
            </Button>
          </Grid>
        </form>

      </Grid>
    </Container>
  )
}
