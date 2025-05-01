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
        <h1 className={"Contentheader_"+theme}>Лабораторная 5(6)</h1>
        <div style={{display:"flex"}}>
        <Feedback_form></Feedback_form>
        <Feedback_list/>
        </div>
        </> 
    );
  }
  
  export default Five;