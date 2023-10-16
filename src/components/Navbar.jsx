import * as React from 'react';
import { Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Button } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Navbar() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `0px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} >
            <Link to="/" style={{ color: 'black', textDecoration: 'none' }} >Resume Builder</Link>
          </Typography>
          <nav>
            <Link to="/">
              <Button variant="button" style={{ color: 'black' }} sx={{ my: 1, mx: 1, textDecoration: `none` }}>Resume Templates</Button>
            </Link>
            <Link to="my_resumes" >
              <Button variant="button" style={{ color: 'black' }} sx={{ my: 1, mx: 1, textDecoration: `none` }}> My Resumes </Button>
            </Link>
            <Link to="about">
              <Button variant="button" sx={{ my: 1, mx: 1, textDecoration: `none` }} style={{ color: 'black' }} > About Us </Button>
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}