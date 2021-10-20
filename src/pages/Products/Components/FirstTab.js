
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import SelectFilter from './SelectFilter'

export default function FirstTab({
  productsData,
  pieces,
  setPieces,
  piecesArr,
  catArray,
  setCatFilter,
  catFilter }) {
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
      </Grid>
      {
        productsData.map((prod) => (
          <Grid key={prod.id} item xs={4}>
            <Card sx={{ maxWidth: 345, height: '100%' }}>
              <CardActionArea>
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