import { useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../../App";
import Feedback_list from "../../feedback_list/feedback_list";
import  Login  from "../../forms/auth_form/auth_form";
import Feedback_form from "../../forms/feedback_form/feedback_form";

function Five() {
    let theme = useContext(ThemeContext)
    return(
        <>
        <div style={{display:"flex"}}>
        <Feedback_form></Feedback_form>
        <Feedback_list/>
        </div>
        </> 
    );
  }
  
  export default Five;