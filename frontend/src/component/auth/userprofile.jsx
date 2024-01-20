import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  FormControlLabel,
  Grid,
  Rating,
  Switch,
  Typography,
  Alert,
  Tab,
  Tabs,
} from '@mui/material';
import styled from '@emotion/styled';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useUserLoggedQuery, useUserDeleteMutation } from '../../service/userAuth';
import { getToken, removeToken } from '../../service/localstoretoken';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import AboutUser from './aboutuser';
import Changepassword from './changepassword';
const Userprofile = () => {
  function CustomTabPanel(props) {
    const { children, value, index} = props;
  
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

  const navigate = useNavigate();
  const Input = styled('input')({
    display: 'none',
  });

  const [updateData, setUpdateData] = useState({
    fname: '',
    lname: '',
    age: '',
    email: '',
    image: '',
    gender: '',
    qulification: '',
    rating: 2,
  });

  const [isChecked, setIsChecked] = useState(false);

  const [error, setError] = useState({
    status: false,
    type: '',
    msg: '',
  });

  const token = getToken();
  const { data, isSuccess } = useUserLoggedQuery(token);

  useEffect(() => {
    if (data && isSuccess) {
      setUpdateData({
        fname: data.user.fname,
        lname: data.user.lname,
        email: data.user.email,
        age: data.user.age,
        gender: data.user.gender,
        image: data.user.image,
        qulification: data.user.qulification,
        rating: data.user.rating,
      });
    }
  }, [data, isSuccess]);


  const onTextFeiledChange = (e) => {
    e.preventDefault();
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
    });
  };

  const editUnable = () => {
    setIsChecked(!isChecked);
  };

  const userDataUpdate = async (e) => {
    e.preventDefault();
    try {
      const { fname, lname, age, email, image, gender, qulification, rating } = updateData;
      if (fname || lname || age || email || image || gender || qulification || rating) {
        const res = await axios.put(`http://localhost:8000/api/user/update/${data.user._id}`, updateData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set content type to JSON
          },
        });
        if(res.data.status === 'success'){
          setError({ status: true, msg: res.data.message, type: 'success' });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      }
    } catch (error) {
      setError({ status: true, msg: error.response.data.message, type: 'error' }); // Use error.response.data.message
    }
   
  };
  
  const userLogout=()=>{
    removeToken('token')
    navigate('/user')
  }
  const [useDeleteId] = useUserDeleteMutation()
  const userDelete =async()=>{
    try {
      const res = await useDeleteId(data.user._id)
      if(res.data.status === 'success'){
        removeToken('token')
        setError({status:true,msg:res.data.message,type:'success'})
        setTimeout(() => {
          navigate('/user')
        }, 1000);
      }
    } catch (error) {
      setError({status:true,msg:res.data.message,type:'error'})
    }
  }
  return (
    <Box className="container pt-4 pb-1">
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} md={2}>
            <Box className='position-relative ' sx={{ width: { xs: '200px', md: '150px' }, height: { xs: '200px', md: '150px' }, my: 1 }}>
            <Avatar
                src={updateData.image ? `http://localhost:8000/${updateData.image}` : 'click on save'}
                alt="User Avatar"
                sx={{ width: '100%', height: '100%' }}
              />
              <label htmlFor="profile-photo" className='position-absolute bottom-0 end-0  overflow-hidden rounded-5'>
                <Input accept="image/*" name="image" id="profile-photo" type="file" onChange={onTextFeiledChange}   {...(isChecked ? {} : { disabled: true })} />
                <AddCircleIcon {...(isChecked ? {} : { disabled: true })} color="primary" sx={{ fontSize: { xs: '1.5rem', md: '2.5rem' } }} />
              </label>
            </Box>
          </Grid>
          <Grid item xs={12} md={10}>
            <Box className="overflow-hidden">
              <FormControlLabel sx={{ float: 'right' }} control={<Switch checked={isChecked} onChange={editUnable} />} label={isChecked ? 'Enable' : 'Unabled'} />
            </Box>
            <Box className='mb-3 '>
              <Typography variant="h3" color="initial" >
                {data?.user?.fname} {data?.user?.lname}
              </Typography>
              <Typography variant="body1" >
                {data?.user?.gender}
              </Typography>
              <Rating
                name="rating"
                value={parseInt(updateData.rating, 10)} 
                precision={0.5}
                onChange={onTextFeiledChange}
                {...(isChecked ? {} : { disabled: true })}
              />
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab label="About"  />
                <Tab label="Change Password" />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <AboutUser
                userDataUpdate={userDataUpdate} updateData={updateData} 
                onTextFeiledChange ={onTextFeiledChange} isChecked={isChecked }
                userLogout={userLogout } userDelete={userDelete }
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Changepassword/>
            </CustomTabPanel>
          
          </Grid>
        </Grid>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ' '}
      </Box>
    </Box>
  );
};

export default Userprofile;
