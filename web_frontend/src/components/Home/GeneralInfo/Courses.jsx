import React from "react";
import { Box, Typography, List, ListItem } from '@mui/material';

const courses = [
    {item: 'CSC 240 - Computer Science III'},
    {item: 'CSC 241 - Data Structures and Algorithms'},
    {item: 'CSC 231 - Computer Systems'},
    {item: 'MAT 151 - Discrete Mathematics'}
];

function Courses() {
    return (
        <Box my={2}>
            <Typography variant="h4">
                Relevant Courses
            </Typography>
            <Box mx={3}>
                <Typography variant='subtitle2'>
                    {courses.map(items => (
                        <List disablePadding>
                            <ListItem sx={{ display: 'list-item' }} disablePadding>
                                {items.item}
                            </ListItem>
                        </List>                
                    ))}
                </Typography>
            </Box>
        </Box>
    );
}

export default Courses