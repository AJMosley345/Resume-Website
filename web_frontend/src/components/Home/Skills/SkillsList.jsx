import React from "react";
import { Typography } from "@mui/material";


const SkillsList = (props) => {

    return (
        <>
            {props.skills.map(skill => (
                <Typography display="flex" justifyContent="center" key={skill}>
                    {skill}
                </Typography>  
            ))}
        </>
    )
}

export default SkillsList