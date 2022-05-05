import React from "react";
import { Box, Typography } from "@mui/material";

const edu = [
    {item: 'GPA: 3.67'},
    {item: "Have maintained A's in Computer Science courses"},
    {item: 'Currently participating in CSC Club'}
];

function Education() {
    return (
        <>
            <Typography variant="h3">
                Education
            </Typography>
            <Typography variant="h4">
                West Chester University of PA
            </Typography>
            <Typography variant="subtitle1">
                {edu.map(items =>(
                    <li>{items.item}</li>
                ))}
            </Typography>
            
        </>
    );
}

export default Education