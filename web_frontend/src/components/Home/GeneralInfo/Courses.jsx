import React from "react";
import { Typography, Box } from '@mui/material';

const courses = [
    {item: 'CSC 240 - Computer Science III'},
    {item: 'CSC 241 - Data Structures and Algorithms'},
    {item: 'CSC 231 - Computer Systems'},
    {item: 'MAT 151 - Discrete Mathematics'}
];

function Courses() {
    return (
        <>
            <Typography variant="h3">
                Relevant Courses
            </Typography>
            <Typography variant='subtitle2'>
                {courses.map(items => (
                    <li>{items.item}</li>
                ))}
            </Typography>

        </>
    );
}

export default Courses