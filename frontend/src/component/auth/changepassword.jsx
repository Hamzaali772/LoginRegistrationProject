import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { getToken } from '../../service/localstoretoken';
import { useChangePasswordMutation, useUserLoggedQuery } from '../../service/userAuth';

const Changepassword = () => {
  const token=getToken();
  const {data,isSuccess}=useUserLoggedQuery(token);

  const [showPassword, setShowPassword] = React.useState(false);
  const [showCPassword, setShowCPassword] = React.useState(false);
  const [pass, setPass] = useState({
    oldpassword: '',
    password: '',
    confirmPass: '',
  });
  const [error, setError] = useState({
    status: false,
    type: '',
    msg: '',
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowCPassword = () => setShowCPassword((show) => !show);

  const onTextFieldValueChange = (e) => {
    setPass({
      ...pass,
      [e.target.name]: e.target.value,
    });
  };
  const [userData, setUserData] = useState({
    id: '',
  });
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        id: data.user._id,
      });
    }
  }, [data, isSuccess]);

  const [passId] = useChangePasswordMutation();
  const formChangePassword=async(e)=>{
    e.preventDefault();
    const {oldpassword,password,confirmPass} = pass
    console.log(oldpassword)
    if(oldpassword && password && confirmPass){
      if(password === confirmPass){
            try {
            let datapass={
              id:userData.id,
              pass:pass,
              token:token
            }
            const res = await passId(datapass)
            if(res.data.status === 'success'){
              setError({status:true,msg:res.data.message,type:'success'})
              document.getElementById('update_Pass').reset()
            }else{
              setError({status:true,msg:res.data.message,type:'error'})
            }
          } catch (error) {
            setError({status:true,msg:res.data.message,type:'error'})
          }
          }
      }else{
        setError({status:true,msg:res.data.message,type:'error'})
      }    
  }

  return (
    <>
      <Box mt={5} component="form" noValidate onSubmit={formChangePassword}  id="update_Pass">
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12}>
            <TextField
              id="oldpassword"
              name="oldpassword"
              label="Old Password"
              type="password"
              variant="outlined"
              onChange={onTextFieldValueChange}
              sx={{ width: { xs: '100%', md: '50%' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              name="password"
              label="New Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              onChange={onTextFieldValueChange}
              sx={{ width: { xs: '100%', md: '50%' } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="confirmPass"
              name="confirmPass"
              label="Re-Type New Password"
              type={showCPassword ? 'text' : 'password'}
              onChange={onTextFieldValueChange}
              sx={{ width: { xs: '100%', md: '50%' } }}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowCPassword} edge="end">
                      {showCPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained"  sx={{ my: 3, backgroundColor:'#2273F8' }}>
          Save
        </Button>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
        <br />
      </Box>
    </>
  );
}

export default Changepassword