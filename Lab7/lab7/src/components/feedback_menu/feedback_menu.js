import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import {useDispatch, useSelector} from "react-redux";
import { Drawer,Box, List} from "@mui/material";
import Feedback_form from "../forms/feedback_form/feedback_form";
import Feedback_list from "../feedback_list/feedback_list";

function FeedbackMenu(props) {
    const navigate = useNavigate();
    const theme = useContext(ThemeContext);
    const isFeedbackMenuOpen = useSelector(state => state.isFeedbackMenuOpen);
    const dispatch = useDispatch()

    const toggleDrawer = () => {
        dispatch({ type: "toggleFeedbackMenu" }); 
    };

    return (
        <>
            <Drawer anchor="bottom" open={isFeedbackMenuOpen} onClose={toggleDrawer}>
                <Box sx={{display: "flex", backgroundColor: theme === 'dark' ? 'black' : '#fff'}}>
                <Feedback_form></Feedback_form>
                <Feedback_list/>
                </Box>
            </Drawer>
        </>
    );
}

export default FeedbackMenu;
