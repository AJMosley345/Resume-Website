import React from "react";
import { Box, Typography, Card } from '@mui/material';

const edu = [
    {item: 'GPA: 3.67'},
    {item: "Have maintained A's in Computer Science courses"},
    {item: 'Currently participating in CSC Club'}
];

function Education() {
    return (
        <>
            <Typography variant="h4" mt={1}>
                Education
            </Typography>
            <Box my={2} display='inline-flex'>
                <Card variant="outlined" sx={{ bgcolor: "rgba(236, 240, 241, 1)", maxWidth: '70%',  padding: 2 }}>
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
                </Card>
            </Box>
        </>
    );
}

export default Education