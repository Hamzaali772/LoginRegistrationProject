import React from 'react'
import { Box ,Grid,Typography } from '@mui/material'

import { FeatureData } from './dynameData/featureData';

FeatureData
const Features = () => {
  return (
    <>
      <div className="container pt-5 pb-1 " >
        <Box mb={10} className="text-center mx-auto " sx={{width:{xs:'100%',md:'50%'}}}>
          <Typography variant="h4" color="initial" className='fw-bold'>Many Features are Available in The Watch</Typography>
          <Typography variant="body1" color="#aaa">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia.
          </Typography>
        </Box>
        <Box >
          <Grid container rowSpacing={5}>
            {FeatureData.map((data,i)=>(
              <Grid item xs={12} md={6} lg={4} className='text-center' key={i}>
                <Box p={2}  className="border border-1 rounded-5  d-inline-block shadow-sm" sx={{bgcolor:'white'}}>
                  <ion-icon name={`${data.icon}-outline`} style={{fontSize:"2rem",color: "#2273F8",display:'flex'}}></ion-icon>
                </Box>
                <Typography variant="h6" color="initial">
                {data.title}
                </Typography>
                <Typography variant="body1" color="#aaa">
                Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
                </Typography>
              </Grid>
              ))}
          </Grid>
        </Box>

      </div>
    </>
  )
}

export default Features