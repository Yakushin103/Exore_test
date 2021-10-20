import { useFormik } from 'formik'
import * as Yup from 'yup'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

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
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      description: '',
      public: false,
    },
    validationSchema: CreateSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const { errors, touched } = formik
  console.log('errors', touched)
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

          <Grid item>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Public"
              name="public"
              value={formik.values.public}
              checked={formik.values.public}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item>
            {errors.title && touched.title ? (
              <Typography variant="p">
                {errors.title}
              </Typography>
            ) : null}
          </Grid>

          <Button
            disabled={Object.values(errors).length}
            type="submit"
          >
            Submit
          </Button>
        </form>

      </Grid>
    </Container>
  )
}
