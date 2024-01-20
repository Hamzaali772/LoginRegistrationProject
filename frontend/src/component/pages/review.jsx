import { Box, Avatar, Typography, Rating } from '@mui/material'
import React from 'react'
import { register } from 'swiper/element/bundle';
import { ReviewData } from './dynameData/reviewData';
register();
const Review = () => {
  const [value, setValue] = React.useState(5);
  return (
    <>
    <div className="container-fluid pt-5  position-relative ">
    <Box className="custome-review " sx={{width:{xs:'100%',md:"50%"}}}>
    <swiper-container  autoplay="true" >
        {ReviewData.map((data,i)=>(
          <swiper-slide key={i}>
            <Box className="d-flex flex-column justify-content-center align-items-center"  >
                <Avatar alt="Remy Sharp" src={data.img} sx={{ width: '100px', height: '100px' }}  />
                <Typography  variant="body1" color="white"  sx={{ fontSize: {xs: '1.5rem' } }}  >{data.nm} </Typography>
                <Typography  variant="body1" color="white"  sx={{ fontSize: {xs: '15px' } }}  >marketer</Typography>
                <Box>
                  <Typography  variant="body1" color="white" className='my-3 text-center '>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quas maxime vel alias minima possimus corrupti est voluptatum, iusto excepturi, veniam similique et. Officia fugit voluptatibus.
                  </Typography>
                  <Box className="text-center">
                  <Rating name="read-only" value={value} readOnly />
                  </Box>
                </Box>
              </Box>
            </swiper-slide>
        ))}
      </swiper-container> 
    </Box>
    <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2872ED" fillOpacity="1" d="M0,256L40,245.3C80,235,160,213,240,224C320,235,400,277,480,293.3C560,309,640,299,720,256C800,213,880,139,960,106.7C1040,75,1120,85,1200,80C1280,75,1360,53,1400,42.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

    </div>
    </>
  )
}

export default Review