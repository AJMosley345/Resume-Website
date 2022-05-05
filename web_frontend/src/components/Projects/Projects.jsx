import React, {useState,useEffect} from "react";
import projects from './Get_Projects';
import './Projects.css';
import { 
    Typography, 
    ThemeProvider, 
    createTheme, 
    Container, 
    Grid, 
    Button,
    Stack,
    Card,
    Box,
    CardMedia,
    CardContent,
} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Sora',
            'sans-serif'
        ].join(','),
        fontWeight: 'bold',
    },

    palette: {
        primary: {
          main: "rgba(236, 240, 241, 1)"
        }
    }
});



const Projects = () => {
    const [projectInfo, setProjectInfo] = useState([]);

    const fetchProjects = async () => {
        const response = await projects.get('/projects/')
        setProjectInfo(response.data)
    };

    function refreshPage() {
        setTimeout(function(){ window.location.reload(false); }, 200);
    };

    const deleteProject = (id) => {
        projects
        .delete(`/projects/${id}`)
        .then(refreshPage());
    };

    const createProjectCards = () => {
        return(
            <>
                {projectInfo.map(project => {

                    if(!project){
                        return <div>Loading...</div>

                    } else {

                        return (
                            <>
                                <Card 
                                    sx={{ 
                                        bgcolor: "primary.main",
                                        display: "inline-grid",
                                        boxShadow: 3,
                                        maxWidth: 345
                                    }}
                                    >
                                    <Box sx={{ boxShadow: 3 }}>
                                        <CardMedia 
                                            style={{
                                                width: "auto",
                                                maxHeight: "300px",
                                            }}
                                            component="img"
                                            image = {project.image}
                                        />
                                    </Box>
                                    <Stack>
                                        <CardContent>
                                            <Typography variant='h5'>
                                                {project.name}
                                            </Typography>
                                            <Typography variant='body1'>
                                                {project.description}
                                            </Typography>
                                        </CardContent>
                                        <Box mx={1} my={1}>
                                            <a href={project.github} target="_blank">
                                                <Button variant="contained" color="primary">
                                                    Code
                                                </Button>
                                            </a>
                                        </Box>
                                    </Stack>
                                    <Button 
                                        variant="contained" 
                                        color="primary"
                                        className='Delete-Button'
                                        onClick={function(event){
                                            deleteProject(project.id);
                                        }}
                                        >
                                            Delete
                                    </Button>
                                </Card>
                            </>
                        )    
                    }
            })}
            </>   
        )
    }

    useEffect(()=>{
        fetchProjects()
    },[])

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>
                    <Typography variant="h2" my={3}>
                        Projects
                    </Typography>
                    <Stack spacing={3}>
                        {createProjectCards()}
                    </Stack>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Projects