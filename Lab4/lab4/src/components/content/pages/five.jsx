import { useContext } from "react";
import { ThemeContext } from "../../../App";
import Basic from "../../forms/auth_form/auth_form";
function Five() {
    let theme = useContext(ThemeContext)
    return(
        <>
        <Basic></Basic>
        </> 
    );
  }
  
  export default Five;