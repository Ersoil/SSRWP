import "./container.css";
import {Children, useContext} from "react";
import Button from "../button/button";
import { ThemeContext } from "../../App";

function Container({children}){
    let theme = useContext(ThemeContext)
    if(theme === "dark") document.body.style.background="#343434"
    else document.body.style.background="white"
    return(
    <>        
    <div className={"mycontainer_"+theme}>
            {children}
        </div>
    </>
    )
}
export default Container;