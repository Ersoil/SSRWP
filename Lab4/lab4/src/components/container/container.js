import "./container.css";
import {Children, useContext} from "react";
import Button from "../button/button";
import { ThemeContext } from "../../App";

function Container({children}){
    let theme = useContext(ThemeContext)
    return(
    <>        
    <div className={"mycontainer_"+theme}>
            {children}
        </div>
    </>
    )
}
export default Container;