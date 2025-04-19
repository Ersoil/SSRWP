import { ThemeContext } from "../../App";
import "./button.css";
import react, { useContext } from "react";

function Button(props){
    let theme = useContext(ThemeContext)
    var Name="Button";
    var Info="[Description]";
    if(props.Name!=null) Name = props.Name;
    if(props.Info!=null) Info = props.Info;
    return(
        <div className="Button">
            <button className={"dbtn_"+theme} onClick={props.OnClick}>
                <h2 className="title">{Name}</h2>
                    <p>{Info}</p>
            </button>
        </div>
    )
}
export default Button;