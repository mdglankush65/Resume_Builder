import React from 'react'
<<<<<<< HEAD
import Experience from "./subRoutes/Experience";

import { Container } from '@mui/material';
=======
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Templates from './Templates';
>>>>>>> 5f56519483c03c3d2bde07c2125e0fc5875064c1

const array=[1,2,3,4,5,6,7,8,9,10,12,13,14,15];
const Main = () => {
 
  return (
<<<<<<< HEAD
    <Container>
    <Experience/>
  </Container>
=======
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Resume Templates
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        Explore our meticulously designed resume templates to effortlessly create a professional and eye-catching CV that stands out to potential employers.
      </Typography>
      <Container sx={{display: `flex`}}>
        {array.map((val) => <Templates count={`${val}`} key={val} />)};
      </Container>
    </Container>
>>>>>>> 5f56519483c03c3d2bde07c2125e0fc5875064c1
  )
}

export default Main;
