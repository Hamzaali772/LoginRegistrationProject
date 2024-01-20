import React from 'react'
import bgImg from '../../assets/home-bg.png'
import { Box, Button, Grid, Typography } from '@mui/material'
import watchBg from '../../assets/watch-bg.png'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <Box className="custom-Home" style={{ backgroundImage: `url(${bgImg})` }} >
        <Box className="container" >
        <Grid container columnSpacing={2} >
            <Grid item xs={12} md={7} lg={6} sx={{my:{xs:8,md:5}}} >
                <Typography variant="h2" color="white" sx={{fontWeight:'bold',fontSize:{xs:'2rem',md:'4rem'}}}>
                Best Landing Page For Online Product Marketing
                </Typography>
                <Typography variant="body1" color="white" my={3}>
                    Best Landing Page For Online Product Marketing
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non.
                </Typography>
                <Button variant='contianed' component={NavLink} to="/product" sx={{ color: 'white',backgroundColor:'black', textTransform: 'capitalize','&:hover':{backgroundColor:'white',color:"black"} }} >
                     Order
                </Button>
            </Grid>
            <Grid item xs={12} md={5} lg={6} my={8} sx={{display:{xs:'none',md:'block'}}}>
                <img src={watchBg} alt="" width="90%" />
            </Grid>
        </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Home
