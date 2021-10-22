import { useHistory } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import ModalWindow from '../../../components/ModalWindow'

export default function SecondTab({
  createdProduct,
  checked,
  setChecked }) {
  const history = useHistory()

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const onEditProduct = (id) => {
    history.push(`/edit/${id}`)
  }

  const isCheckedArr = createdProduct.filter(prod => prod.public === checked)

  return (
    <Grid className="second-tab" container spasing={1}>
      <Grid className="second-tab-filter" item xs={12}>
        <Typography gutterBottom variant="p" component="div">
          Public
        </Typography>

        <Switch
          checked={checked}
          disabled={createdProduct.length === 0}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </Grid>
      {
        isCheckedArr.length > 0 ?
          isCheckedArr.map(product => (
            <Grid
              className="product-item"
              key={product._id}
              item
              xs={3}
            >
              <Typography gutterBottom variant="h6">
                Title: {product.title}
              </Typography>

              <Typography gutterBottom variant="p">
                Price: {product.price}
              </Typography>

              <Typography gutterBottom variant="p">
                Description: {product.description}
              </Typography>
              <Grid item className="product-item-buttons">
                <Button onClick={() => onEditProduct(product._id)}>
                  Update
                </Button>
                <ModalWindow
                  global={false}
                  id={product._id}
                />
              </Grid>
            </Grid>
          ))
          :
          <Alert className="product-item-alert" severity="info">
            You need to add products
          </Alert>
      }
    </Grid>
  )
}
