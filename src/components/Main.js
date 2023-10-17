import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Templates from './Templates'; // Check the path to the Templates component

const array = [1, 2, 3, 4];

const Main = () => {
  return (
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
      <Container sx={{ display: `flex`, flexWrap:"wrap", justifyContent:"space-between" }}>
        {array.map((val) => <Templates count={`${val}`} key={val} />)}
      </Container>
    </Container>
  );
}

export default Main;
