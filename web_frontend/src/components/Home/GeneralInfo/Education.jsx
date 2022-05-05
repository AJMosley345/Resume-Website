import React from "react";
import { Box, Typography, List, ListItem } from '@mui/material';

const edu = [
    {item: 'GPA: 3.67'},
    {item: "Have maintained A's in Computer Science courses"},
    {item: 'Currently participating in CSC Club'}
];

function Education() {
    return (
        <Box my={2}>
            <Typography variant="h4">
                Education
            </Typography>
            <Typography variant="h5">
                West Chester University of PA
            </Typography>
            <Box mx={3}>
                <Typography variant="subtitle1">
                    {edu.map(items =>(
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

export default Education