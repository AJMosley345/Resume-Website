import React from "react";
import { Container, Stack } from '@mui/material';
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import Courses from "./Courses";

function General() {
    return (
            <Container >
                <PersonalInfo />
                <Education />
                <Experience />
                <Courses />
            </Container>
    );
}

export default General