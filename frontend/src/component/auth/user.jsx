import React from 'react'
import { useRef, useState } from 'react';
import {Box, Grid, Tab, Tabs} from '@mui/material'
import Lottie from 'lottie-react'
import imgForm from '../../assets/animation/formAnimation.json'
import Login from './login';
import Registration from './registration';

const User = () => {
  // Tabs
  function CustomTabPanel(props) {
    const { children, value, index } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Lottie
  const LogAnimRuf=useRef(null)

  return (
    <>
    <Box className="container pt-5 pb-1 ">
      <Grid container spacing={5} >
          <Grid item xs={12} md={5} sx={{display:{xs:'none',md:'block'}}}>
          <Lottie  animationData={imgForm} loop={2} autoplay={true}
             lottieRef={LogAnimRuf} onLoopComplete={()=>{
              LogAnimRuf.current.setDirection(-1)
            }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} >
                <Tab label="Login"  />
                <Tab label="Registration"  />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Login/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Registration/>
            </CustomTabPanel>
          </Box>
          </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default User