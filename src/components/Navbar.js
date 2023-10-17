import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import {Link} from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';

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
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ flexGrow: 1, my: 1, mx: 1.5, textDecoration: `none`, color:'black', cursor:'pointer' }} >Resume Builder</Link>
                    </Typography>
                    <nav>
                        <Link
                            to="/"
                            style={{ my: 1, mx: 1.5, textDecoration: `none`,color:'black', cursor:'pointer' }}
                        >
                            Resume Templates
                        </Link>
                        <Link
                            to="/myresumes"
                            style={{ my: 1, mx: 1.5, textDecoration: `none`, color:'black', cursor:'pointer' }}
                        >
                            My Resumes
                        </Link>
                        <Link
                            to="/about"
                            style={{ my: 1, mx: 1.5, textDecoration: `none`, cursor:'pointer', color:'black' }}
                        >
                            About Us
                        </Link>
                    </nav>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}