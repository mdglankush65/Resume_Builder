import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
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
                        Resume Builder
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5, textDecoration: `none` }}
                        >
                            Resume Templates
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/MyResume"
                            sx={{ my: 1, mx: 1.5, textDecoration: `none` }}
                        >
                            My Resumes
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/About"
                            sx={{ my: 1, mx: 1.5, textDecoration: `none` }}
                        >
                            About Us
                        </Link>
                    </nav>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}