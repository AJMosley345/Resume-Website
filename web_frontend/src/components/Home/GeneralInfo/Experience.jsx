import React from "react";
import { Box, Typography, List, ListItem } from '@mui/material';

const wcuexp = [
    {item: "Setup and maintained a server with multiple VM's."},
    {item: 'Involved multiple operating systems and programming languages.'}
];

function Experience() {
    return (
        <Box my={2}>
            <Typography variant="h4">
                Experience
            </Typography>
            <Typography variant="h5">
                Computer Operations (Work Study) - West Chester University
            </Typography>
            <Typography variant='subtitle1'> 
            January 2022 - May 2022 
            </Typography>
            <Box mx={3}>
                <Typography variant='subtitle2'>
                    {wcuexp.map(items => (
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

export default Experience