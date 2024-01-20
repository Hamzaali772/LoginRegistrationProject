import { Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  const currentYear = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date());
  return (
    <>
    <div className="container ">
      <hr />
      <Typography pb={2} variant="body2" color="textSecondary" align="center">
      &copy; {currentYear}  Hamza Ali. All Rights Reserved.
        </Typography>
    </div>
    </>
  )
}

export default Footer