import React from "react";
import { Breadcrumbs, Link, Box } from "@mui/material"
import { Link as ExLink } from "react-router-dom"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';

function NavBar(){
    return (
        <>
            <Box mt={1} display='flex'>
                <Breadcrumbs aria-label="breadcrumb" separator='|'>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/"
                    >
                        <HomeOutlinedIcon sx={{ mt: 1, mr: 0.5}} fontSize="large" />
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/projects"
                    >
                        <AppsOutlinedIcon sx={{ mr: 0.5 }} fontSize="large" />
                        Projects
                    </Link>
                    <Link
                        component={'a'}
                        href="https://drive.google.com/file/d/1hJOn2cpzfNLHALvozhVUqC7-HMG7lONZ/view?usp=sharing" 
                        target="_blank"
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                    >
                        <BookIcon sx={{ mr: 0.5 }} fontSize="large" />
                        Resume
                    </Link>
                    <Link
                        component={'a'}
                        href="https://github.com/AJMosley345"
                        target="_blank" 
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                    >
                        <GitHubIcon sx={{ mr: 0.5 }} fontSize="large" />
                            Github
                    </Link>
                </Breadcrumbs>
            </Box>
        </>
    );
}

export default NavBar;