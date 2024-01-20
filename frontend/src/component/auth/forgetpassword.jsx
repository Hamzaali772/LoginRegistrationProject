import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
const Forgetpassword = () => {
  return (
    <>
        <div className="container mb-1 mt-4">
            <Grid container>
                <Grid item xs={12}  >
                    <Grid item xs={12} md={6} sx={{mx:'auto'}}>
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        placeholder='@gmail.com'
                    />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} sx={{m:'1rem auto',textAlign:'center'}} >
                <Button variant='contained'  endIcon={<SendIcon />}>send</Button>
                </Grid>
            </Grid>
        
        </div>
    </>
  )
}

export default Forgetpassword