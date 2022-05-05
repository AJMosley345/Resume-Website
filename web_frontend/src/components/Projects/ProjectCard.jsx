import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Button,
    Typography,
    Grid,
    Box,
    Stack,
} from '@mui/material';

const ProjectCard = (props) => {
    return (
        <>
            <Stack>
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
                            image = {props.image}
                        />
                    </Box>
                    <Stack>
                        <CardContent>
                            <Typography variant='h5'>
                                {props.name}
                            </Typography>
                            <Typography variant='body1'>
                                {props.description}
                            </Typography>
                        </CardContent>
                        <Box mx={1} my={1}>
                            <a href={props.github} target="_blank">
                                <Button variant="contained" color="primary">
                                    Code
                                </Button>
                            </a>
                        </Box>
                    </Stack>
                </Card>
            </Stack>
        </>
    )
}

export default ProjectCard