import "./container.css";
import react from "react";
import Button from "../button/button";

function Container(props){
    var list_elements = props.Elements
    return(
        <div className="mycontainer">
            {list_elements}
        </div>
    )
}
export default Container;