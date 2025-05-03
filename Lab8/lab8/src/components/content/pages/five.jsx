import { useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../../App";
import Feedback_list from "../../feedback_list/feedback_list";
import Login from "../../forms/auth_form/auth_form";
import Feedback_form from "../../forms/feedback_form/feedback_form";
import { Box, Grid, Typography } from '@mui/material';

function Five() {
    let theme = useContext(ThemeContext);

    return (
        <>
            <Typography variant="h4" className={"Contentheader_" + theme} gutterBottom>
                Лабораторная 5(6)
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Feedback_form />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Feedback_list />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Five;