import React from 'react';
import SkillsList from './SkillsList';
import { Grid, 
        Card, 
        CardContent, 
        Box, 
        Typography, 
        ThemeProvider, 
        createTheme,
        Stack  
} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Sora',
            'sans-serif'
        ].join(','),
        fontWeight: 'bold',
    },

    palette: {
        primary: {
          main: "rgba(236, 240, 241, 1)"
        }
    }
});

const SkillsCard = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <Grid item md={3} variant="outlined">
                <Box sx={{ boxShadow: 3, height: 200 }} m={2}>
                    <Card variant="outlined" sx={{ bgcolor: "primary.main", height: 200 }}>
                        <Typography align="center" variant="h5">
                            {props.skills.name}
                        </Typography>
                        <CardContent>
                            <SkillsList skills={props.skills.skills} />
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </ThemeProvider>
    )
}

export default SkillsCard