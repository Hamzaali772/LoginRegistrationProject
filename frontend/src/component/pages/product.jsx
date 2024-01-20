import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { ProductData } from './dynameData/productData'

const Product = () => {
  return (
    <div className="container pt-5 pb-1  " >
        <Box mb={10} className="text-center mx-auto " sx={{width:{xs:'100%',md:'50%'}}}>
          <Typography variant="h4" color="initial" className='fw-bold'>Our Awesome Products.<br/> Choose Best One</Typography>
          <Typography variant="body1" color="#aaa">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia.
          </Typography>
        </Box>
        <Box >
          <Grid container rowSpacing={5} >
            {ProductData.map((data,i)=>(
              <Grid item xs={12} sm={6} md={4} lg={3} className='text-center d-flex flex-column  justify-content-center  align-items-center ' key={i}>
                <Card>
                <Typography variant="h6" sx={{color:"#2273F8",fontWeight:'bold'}}>
                  {data.nm}
                </Typography>
                  <CardMedia
                    component='img'
                    alt='product'
                    image={data.img}
                    sx={{width:'200px',my:{xs:2}}}
                  />
                <Typography variant="h6" sx={{fontWeight:'bold'}}>
                  ${data.pr}
                </Typography>
                <Button variant='contianed'  sx={{ color: 'white',backgroundColor:'#2273F8',my:1,'&:hover':{backgroundColor:'white',color:"black"} }} >
                     Order
                </Button>
                </Card>
              </Grid>
              ))}
          </Grid>
        </Box>
      </div>
  )
}

export default Product