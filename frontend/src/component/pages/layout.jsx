import CssBaseline from '@mui/material/CssBaseline';
import React from 'react'
import Navbar from '../navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';

const Layout = () => {
  return (
    <>
     <CssBaseline />
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout