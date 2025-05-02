import "./togglebutton.css";
import {Children, useContext} from "react";
import Button from "../button/button";
import { ThemeContext } from "../../App";

function ToggleButton(props){
    let theme = useContext(ThemeContext)
    return(
        <button className="togglebutton" theme={theme} onClick={props.onClick}>
            <p style={{color: "white"}}>{props.Name}</p>
        </button>
    )
}
export default ToggleButton;