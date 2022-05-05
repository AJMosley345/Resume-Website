import React from "react";
import SkillsCard from "./SkillsCard";
import '../Home.css'
import { Grid, Typography, Container } from "@mui/material";

const Skills = () => {

    const frontend = {
        name:'Frontend',
        skills:['JavaScript','React','Material UI', 'HTML','CSS']
    }
    const backend = {
        name: "Backend",
        skills: ['Java', 'Python', 'Django']
    }
    const gameDev = {
        name:"Game Development",
        skills:['Unity', 'PyGame']
    }

    return (
        <Container>
            <Typography variant= "h4"  my={3} fontWeight="bold">
                Skills
            </Typography>
            <Grid container direction="row"  id="fonts">
                <SkillsCard skills = {frontend} />
                <SkillsCard skills = {backend} />
                <SkillsCard skills = {gameDev} />
            </Grid>
        </Container>
    )
}

export default Skills