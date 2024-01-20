import React,{useState}  from 'react'
import { Alert, Box, Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useUserRegisterMutation } from '../../service/userAuth';

const Registration = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
    
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
    
  // RTK

  const [sendUserData] = useUserRegisterMutation()
  const [error,setError]= useState({
    status:false,
    type:'',
    msg:''
  })

  const [userData,setUserData]=useState({
    fname:'',
    lname:'',
    email:'',
    password:'',
    confirm_password:'',
    tc:''
  })

  const onTextFieldChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]:e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };
  const onRegistrationFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { fname, lname, email, password, confirm_password, tc } = userData;
        if(fname && lname && email && password && confirm_password){
            if(tc === true){
              if(password === confirm_password){
                const res = await sendUserData(userData);
                    if (res.data.status === 'success') {
                      setError({ status: 'true', msg: res.data.message, type: 'success' });
                      setTimeout(() => {
                          document.getElementById("regist-Form").reset();
                        setError({})
                      }, 1000);
                    } else {
                      setError({ status: 'true', msg: res.data.message, type: 'error' });
                    }
              }else{
                setError({status:'true',msg:'password do not match!!',type:'error'})
              }
            }else{  
              setError({status:'true',msg:'Check the term and policy!!',type:'error'})
            }
        }else{
          setError({status:'true',msg:'All field are Required!!',type:'error'})
        }
    } catch (error) {
      setError({ status: 'true', msg: 'An error occurred', type: 'error' });
    }
  };

  return (
    <>
      <Box component="form" noValidate onSubmit={onRegistrationFormSubmit} id='regist-Form'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                      id="fname"
                      name="fname"
                      label="Firt Name *"
                      type='text'
                      fullWidth
                      onChange={onTextFieldChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                      id="lname"
                      name="lname"
                      label="Last Name *"
                      type='text'
                      onChange={onTextFieldChange}
                      fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                      id="email"
                      name="email"
                      label="Email *"
                      type='email'
                      onChange={onTextFieldChange}
                      fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                      id="password"
                      name="password"
                      label="Password *"
                      type={showPassword ? 'text' : 'password'}
                      onChange={onTextFieldChange}
                      fullWidth
                      InputProps={{
                        endAdornment:(
                            <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> :  <VisibilityOff />}
                            </IconButton>
                            </InputAdornment>
                        )
                     }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                      id="confirm_password"
                      name="confirm_password"
                      label="Re-Type Password *"
                      type={showConfirmPassword ? 'text' : 'password'}
                      onChange={onTextFieldChange}
                      fullWidth
                      InputProps={{
                        endAdornment:(
                            <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showConfirmPassword ? <Visibility /> :  <VisibilityOff />}
                            </IconButton>
                            </InputAdornment>
                        )
                     }}
                    />
                </Grid>
                <Grid item xs={12} >
                <FormControlLabel 
                    control={<Checkbox name='tc' id='tc' checked={userData.tc === true}  onChange={onTextFieldChange}  />}
                    label="I agree to terms and conditions"
                    
                />
                </Grid>
                <Grid item xs={6} my={1}>
                    <Button type='submit' variant="contained" sx={{backgroundColor:'#2273F8'}} >Registration</Button>
                </Grid>
            </Grid>
                {
                  error.status ? <Alert severity={error.type}>{error.msg}</Alert> : " "
                }
        </Box>
    </>
  )
}

export default Registration