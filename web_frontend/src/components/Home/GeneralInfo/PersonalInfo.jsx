import React from "react";
import { Box, Typography } from '@mui/material';

function PersonalInfo() {
    return (
        <Box my={2}>
            <Typography variant="h4">
                Personal Information
            </Typography>
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
        </Box>

    );
}

export default PersonalInfo