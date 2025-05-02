import React, { useContext } from "react";
import Button from "../button/button";
import { Container, Typography, List, ListItem} from "@mui/material";
import { ThemeContext } from "../../App";
import "./footer.css";
import { useDispatch } from "react-redux";

function Footer() {
    const theme = useContext(ThemeContext);
    const dispatch = useDispatch()
    const toggleDrawer = () => {
        dispatch({ type: "toggleFeedbackMenu" }); 
    };
    
    return (
        <footer className={"myFooter_" + theme}>
            <Container sx={{display: "flex"}}>
                <List>
                    <ListItem className={"Footeritem_" + theme}>
                        <Typography variant="body2" className={"Footertext_" + theme}>
                            A block at the bottom of a page. Contains useful but not essential information.
                        </Typography>
                        <Button Name="Оставить отзыв"Info="" OnClick={toggleDrawer}/>
                    </ListItem>
                </List>
                
            </Container>
        </footer>
    );
}

export default Footer;