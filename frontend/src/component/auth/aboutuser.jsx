import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import LogoutIcon from '@mui/icons-material/Logout';
const AboutUser = ({userDataUpdate,onTextFeiledChange,updateData,isChecked,userLogout,userDelete     }) => {

  return (
      <Box component="form" noValidate onSubmit={userDataUpdate} >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="fname"
                    name='fname'
                    type='text'
                    fullWidth
                    label="First Name"
                    value={updateData.fname}
                    onChange={onTextFeiledChange}
                    {...(isChecked ? {} : { disabled: true })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="lname"
                    name='lname'
                    type='text'
                    fullWidth
                    label="Last Name"
                    value={updateData.lname}
                    onChange={onTextFeiledChange}
                    {...(isChecked ? {} : { disabled: true })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="email"
                    name='email'
                    type='email'
                    fullWidth
                    label="Email"
                    value={updateData.email}
                    onChange={onTextFeiledChange}
                    {...(isChecked ? {} : { disabled: true })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="age"
                    name='age'
                    type='text'
                    fullWidth
                    label="Age"
                    value={updateData.age}
                    onChange={onTextFeiledChange}
                    {...(isChecked ? {} : { disabled: true })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth {...(isChecked ? {} : { disabled: true })}>
                    <InputLabel>Qulification</InputLabel>
                    <Select name="qulification" label="qulification" value={updateData.qulification} onChange={onTextFeiledChange}>
                      <MenuItem value={"Graduation"}>Graduation</MenuItem>
                      <MenuItem value={'Intermidate'}>Intermidate</MenuItem>
                      <MenuItem value={"Matric"}>Matric</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth {...(isChecked ? {} : { disabled: true })}>
                        <FormLabel sx={{ color: 'primary' }}>Gender</FormLabel>
                        <RadioGroup row id="gender" name="gender" value={updateData.gender} onChange={onTextFeiledChange}>
                          <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                          <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
                          <FormControlLabel value="Other" control={<Radio color="primary" />} label="Other" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} className='d-flex flex-row justify-content-center align-items-center'>
                      <Button variant='contained' className="mx-1" onClick={userLogout} sx={{backgroundColor:'#2273F8'}} endIcon={<LogoutIcon/>}>
                        Logout
                      </Button>
                      <Button variant='contained' className="mx-1" onClick={userDelete} sx={{backgroundColor:'#2273F8'}}  endIcon={<DeleteIcon />}>
                        Delete
                      </Button>
                      <Button type="submit" variant='contained' className="mx-1" sx={{backgroundColor:'#2273F8'}}   endIcon={<SaveIcon />}>
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
  );
};

export default AboutUser;
