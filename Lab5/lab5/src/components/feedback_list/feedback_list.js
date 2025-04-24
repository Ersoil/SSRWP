import react, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../App";
import "./feedback_list.css"

function addli(value,theme){
    return (
        <li className={"flitem"}>
            <h3 className={"flhead_"+theme}>{value.feedback}</h3>
            <p className={"fltext_"+theme}>{value.text}</p>
        </li>
    );
}
function Feedback_list(props) {
    let elements = []
    let all_feedback = useSelector((state)=>state.all_feedback)
    let theme = useContext(ThemeContext)
    
    if(all_feedback!=null)
        for(let i=0;i<all_feedback.length;i++){
            elements.push(addli(all_feedback[i],theme))
        }

    return(
        <div className={"fl_"+theme}>
            {elements}
        </div>
    );
  }
  
  export default Feedback_list;