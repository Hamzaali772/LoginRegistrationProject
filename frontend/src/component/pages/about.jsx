import { Box, Card, CardMedia, Grid, Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react'
import infoWatch from '../../assets/about-img.jpg'
const About = () => {
  return (
    <>
    <Box className="container" >
      <Grid container columnSpacing={2} py={5} >
      <Grid item xs={12} md={6}  >
        <Box>
          <Typography variant="h6" mb={1} sx={{color:"#2273F8"}}>
          About The Watch
          </Typography>
          <Typography variant="h3" color="initial" mb={1} sx={{fontWeight:'bold',fontSize:{xs:'1.5rem',md:'2.5rem'}}}>
          Best and Fashionable Smart Watch For Easy Life.
          </Typography>
          <Typography variant="body1" color="#aaa" mb={1} >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
          </Typography>
          <Box mb={1} sx={{listStyle:'none'}} >
            <li>
            <CheckCircleOutlineIcon sx={{color:"#2273F8",fontSize:"17px"}} />
            &nbsp;Attractive Interface with Many Options
            </li>
            <li>
            <CheckCircleOutlineIcon sx={{color:"#2273F8",fontSize:"17px"}} /> 
            &nbsp;Live Chat and Instant Notification
            </li>
            <li>
            <CheckCircleOutlineIcon sx={{color:"#2273F8",fontSize:"17px"}} /> 
            &nbsp;Install App with Unlimited Features
            </li>
          </Box>
        </Box>
      </Grid>
      <Grid item  xs={12} md={6} >
        <Card className='rounded-3'>
          <CardMedia
            component="img"
            alt="smart watch"
            image={infoWatch}
          />
        </Card>
      </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default About