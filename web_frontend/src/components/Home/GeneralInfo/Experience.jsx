import React from "react";
import { Box, Typography, Card } from '@mui/material';

const wcuexp = [
    {item: "Setup and maintained a server with multiple VM's."},
    {item: 'Involved multiple operating systems and programming languages.'}
];

function Experience() {
    return (
        <>
            <Typography variant="h4" mt={1}>
                Experience
            </Typography>
            <Box my={2} display='inline-flex'>
                <Card variant="outlined" sx={{ bgcolor: "rgba(236, 240, 241, 1)", maxWidth: '70%', padding: 2 }}>
                    <Typography variant="h5">
                        Computer Operations (Work Study) - West Chester University
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }}> 
                    January 2022 - May 2022 
                    </Typography>
                    <Box mx={3}>
                        <Typography variant='subtitle1'>
                            {wcuexp.map(items => (
                                <li>{items.item}</li>
                            ))}
                        </Typography>
                    </Box>
                </Card>
            </Box>
        </>
    );
}

export default Experience