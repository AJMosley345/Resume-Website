import React from "react";
import { Container, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import './GeneralInfo.css';
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import Courses from "./Courses";

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
                <Education />
                <Experience />
                <Courses />
            </Container>
        </ThemeProvider>
    );
}

export default General