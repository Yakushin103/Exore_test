import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import { createNewProduct } from '../../store/products/thunks'

import './Create.scss'

const CreateSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  price: Yup.number()
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(300, 'Too Long!')
    .required('Required'),
});

export default function Create() {
  const dispatch = useDispatch()
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

          <Button
            disabled={
              Object.values(errors).length !== 0 ||
              formik.values.title === ""
            }
            type="submit"
          >
            Submit
          </Button>
        </form>

      </Grid>
    </Container>
  )
}
