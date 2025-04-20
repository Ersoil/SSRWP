import "./container.css";
import {Children} from "react";
import Button from "../button/button";

function Container({children}){
    return(
        <div className="mycontainer">
            {children}
        </div>
    )
}
export default Container;