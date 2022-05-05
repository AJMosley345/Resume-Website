import React from "react";
import { Box, Typography } from '@mui/material';

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
            <Typography sx={{ fontWeight: 'bold' }}>
                August 2020 - May 2024
            </Typography>
            <Box mx={3}>
                <Typography variant="subtitle1">
                    {edu.map(items =>(
                        <li>{items.item}</li>
                    ))}
                </Typography>
            </Box>
        </Box>
    );
}

export default Education