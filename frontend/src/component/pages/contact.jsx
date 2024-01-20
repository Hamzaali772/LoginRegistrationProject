import React from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Contact = () => {
  return (
    <>
         <div className="container pt-5 pb-1  " >
        <Box mb={10} className="text-center mx-auto " sx={{width:{xs:'100%',md:'50%'}}}>
          <Typography variant="h4" color="initial" className='fw-bold'>Need Help? Don't Forget to Contact With Us</Typography>
          <Typography variant="body1" color="#aaa">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia.
          </Typography>
        </Box>
        <Box >
          <Grid container gap={7} sx={{flexDirection:{xs: 'column-reverse', lg: 'row',}}}>
            <Grid item xs={12} lg={2}>
              <Box className='d-flex mb-2'>
                <Box className="p-3 rounded " sx={{border:"1px solid #2273F8",mr:3}}>
                  <PhoneIcon sx={{color:"#2273F8"}}/>
                </Box>
                <Box>
                  <Typography variant="body1" color="#aaa">913751756</Typography>
                  <Typography variant="body1" color="#aaa">912252327</Typography>
                </Box>
              </Box>
              <Box className='d-flex mb-2'>
                <Box className="p-3 rounded " sx={{border:"1px solid #2273F8",mr:3}}>
                  <EmailIcon  sx={{color:"#2273F8"}}/>
                </Box>
                <Box>
                  <Typography variant="body1" color="#aaa">support@email.com</Typography>
                  <Typography variant="body1" color="#aaa">info@email.com</Typography>
                </Box>
              </Box>
              <Box className='d-flex mb-2'>
                <Box className="p-3 rounded " sx={{border:"1px solid #2273F8",mr:3}}>
                  <LocationOnIcon sx={{color:"#2273F8"}} />
                </Box>
                <Box>
                  <Typography variant="body1" color="#aaa">67/A Lake View</Typography>
                  <Typography variant="body1" color="#aaa">New York, USA</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Box component="form" noValidate >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6}>
                    <TextField label="Full name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField label="Email" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} >
                    <TextField label="Subject" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <textarea placeholder='Write your Message here...'></textarea>
                    </Grid>
                    <Grid item xs={12}>
                    <Button type='submit' variant="contained">Submit</Button>
                    </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>

      </div>
    </>
  )
}

export default Contact