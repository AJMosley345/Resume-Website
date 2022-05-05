import React from "react";
import { Box, Typography, Card } from '@mui/material';

function PersonalInfo() {
    return (
        <>
            <Typography variant="h4" mt={1}>
                Personal Information
            </Typography>
            <Box my={2} display='inline-flex'>
                <Card variant="outlined" sx={{ bgcolor: "rgba(236, 240, 241, 1)", maxWidth: '70%',  padding: 2 }}>
                    <Typography variant="h5" >
                        Anthony Mosley Jr.
                    </Typography>
                    <Typography variant="subtitle1" >
                        109 Woodcock Rd • Oxford, PA 19363
                    </Typography>
                    <Typography variant="subtitle1" >
                        AM950104@wcupa.edu • AJMosley345@gmail.com • (717)-371-0907
                    </Typography>
                    <Typography variant="subtitle1" >
                        Student at West Chester University of PA
                    </Typography>
                </Card>
            </Box>
        </>
    );
}

export default PersonalInfo