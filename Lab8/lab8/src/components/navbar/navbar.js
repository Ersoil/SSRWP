import { use, useContext, useEffect } from "react";
import "./navbar.css";
import { ThemeContext } from "../../App";
import ToggleButton from "../togglebutton/togglebutton";
import {useDispatch, useSelector} from "react-redux";
import {Box,AppBar, Typography, IconButton } from "@mui/material";
import { Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



function Navbar(props){

    let theme = useContext(ThemeContext)
    let count  = useSelector((state)=>state.totalscore)
    let dispatch = useDispatch()

    const toggleDrawer = () => {
        dispatch({ type: "toggleMenu" });
    };

    return(
       <AppBar position="static" className={"nav_" + theme} sx={{ backgroundColor: theme === 'dark' ? '#333' : '#fff' }}>
              <div className="container">
                  <div className="nav-row">
                    <IconButton onClick={toggleDrawer}  style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
                        <MenuIcon />
                     </IconButton>
                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <a href="./index.html" className="logo" style={{ textDecoration: 'none', color: theme === 'dark' ? '#fff' : '#000' }}>
                        <strong>Vaverko 4.205-1</strong> modern tools for web development
                    </a>
                    </Typography>
                      <Box  sx={{ display: { lg: "flex", xs: 'inline', sm: 'none' }, color: theme === 'dark' ? '#fff' : '#000'}}>
                      <ul className="nav-list">                 
                            <ToggleButton onClick={props.ChangeTheme}/>
                            <Avatar sx={{color: theme === 'dark' ? '#333' : '#fff',bgcolor: theme === 'dark' ? '#fff' : '#000'}} onClick={()=> dispatch({type: "logout"})}>{localStorage.getItem("login")[0]}</Avatar> 
                            <li className="nav-list__item">{"Score:"+count}</li>
                      </ul>
                      </Box >
                  </div>
              </div>
        </AppBar>
    )
}
export default Navbar;