import React from "react";
import { Container, createTheme, ThemeProvider, CssBaseline, Divider } from '@mui/material';
import './GeneralInfo.css';
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Sora',
            'sans-serif'
        ].join(','),
        fontWeight: 'bold',
    },
});

function General() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth='lg'>
                <PersonalInfo />
                <Divider />
                <Education />
                <Divider />
                <Experience />
                <Divider />
            </Container>
        </ThemeProvider>
    );
}

export default General