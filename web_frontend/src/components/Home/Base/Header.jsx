import React from 'react';
import Title from './Title';
import NavBar from './NavBar';
import { Container, ThemeProvider, CssBaseline, createTheme, Box } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Sora',
            'sans-serif'
        ].join(','),
        fontWeight: 'bold',
    },
});

function Header() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Box my={2}>
                    <Title />
                    <NavBar />
                </Box>
            </Container>
        </ThemeProvider>
    );
}
export default Header