import React from "react";
import { Box, Typography } from "@mui/material";

const wcuexp = [
    {item: "Setup and maintained a server with multiple VM's."},
    {item: 'Involved multiple operating systems and programming languages.'}
];

function Experience() {
    return (
        <>
            <Typography variant="h3">
                Experience
            </Typography>
            <Typography variant="h4">
                Computer Operations (Work Study) - West Chester University
            </Typography>
            <Typography variant='subtitle1'> 
            January 2022 - May 2022 
            </Typography>
            <Typography variant='subtitle2'>
                {wcuexp.map(items => (
                    <li>{items.item}</li>
                ))}
            </Typography>
        </>
    );
}

export default Experience