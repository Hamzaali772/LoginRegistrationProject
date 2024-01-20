import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, TextField,Alert } from '@mui/material'
import { useUserLoginMutation } from '../../service/userAuth'
import { storeToken } from '../../service/localstoretoken';
import LoginIcon from '@mui/icons-material/Login';
const Login = () => {
  const navigate = useNavigate();
  const [userLogin]=useUserLoginMutation();

  const [error,setError]=useState({
    status:false,
    type:'',
    msg:''
  })
  const [userData,setUserData]=useState({
    email:'',
    password:''
  })

  const onTextFieldChange=(e)=>{
    setUserData({
      ...userData,
      [e.target.name]:e.target.value
    })
  }

  const loginFormSubmit=async(e)=>{
    e.preventDefault();
    try {
      const {email,password} = userData 
      if(email && password){
          const res = await userLogin(userData)
          if(res.data.status === 'success'){
            setError({status:'ture',msg:res.data.message,type:'success'})
            storeToken(res.data.token)
            setTimeout(() => {
              setError({})
              document.getElementById("login-form").reset();
              navigate('/user/profile')
            }, 1000);
          }else{
            setError({status:'ture',msg:res.data.message,type:'error'})
          }
      }else{
        setError({status:'ture',msg:'All field required!',type:'error'})
      }
    } catch (error) {
      setError({status:'ture',msg:'server issue',type:'error'})
    }
  }
  return (
    <div>
        <Box component="form" onSubmit={loginFormSubmit} id='login-form' noValidate>
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                      margin='dense'
                      onChange={onTextFieldChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                      id="password"
                      name="password"
                      label="password"
                      type='password'
                      fullWidth
                      margin='dense'
                      onChange={onTextFieldChange}
                    />
                </Grid>
                <Grid item xs={6} my={1}>
                    <Button type='submit' variant="contained" sx={{backgroundColor:'#2273F8'}} endIcon={<LoginIcon/>} >Login</Button>
                </Grid>
            </Grid>
            {
              error.status ? <Alert severity={error.type}>{error.msg}</Alert> : " "
            }
        </Box>

    </div>
  )
}

export default Login