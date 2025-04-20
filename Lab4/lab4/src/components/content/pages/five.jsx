import { useContext } from "react";
import { ThemeContext } from "../../../App";
import  Login  from "../../forms/auth_form/auth_form";
import Feedback_form from "../../forms/feedback_form/feedback_form";
function Five() {
    let theme = useContext(ThemeContext)
    return(
        <>
        <div>
        <Login/>
        <Feedback_form></Feedback_form>
        </div>
        
        </> 
    );
  }
  
  export default Five;