import React from "react";
import SkillsCard from "./SkillsCard";
import { Grid, Typography, Container, ThemeProvider, createTheme, Box } from "@mui/material";


const theme = createTheme({
    typography: {
        fontFamily: [
            'Sora',
            'sans-serif'
        ].join(','),
        fontWeight: 'bold',
    },
});

const frontend = {
    name:'Frontend',
    skills:['JavaScript','React','Material UI', 'HTML','CSS']
}
const backend = {
    name: "Backend",
    skills: ['Java', 'Python', 'Django']
}
const SysAdmin = {
    name:"Systems Administration",
    skills:['ESXi', 'Proxmox', 'Networking']
}

const Skills = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='lg'>
                <Box>
                    <Typography variant= "h4" my={2}>
                        Skills
                    </Typography>
                    <Grid container direction="row">
                        <SkillsCard skills = {frontend} />
                        <SkillsCard skills = {backend} />
                        <SkillsCard skills = {SysAdmin} />
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Skills