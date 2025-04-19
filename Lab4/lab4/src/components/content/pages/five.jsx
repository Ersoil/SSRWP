import { useContext } from "react";
import { ThemeContext } from "../../../App";
function Five() {
    let theme = useContext(ThemeContext)
    return(
        <>
            <h3>Лабораторная </h3>
            <p>Something...</p>
        </> 
    );
  }
  
  export default Five;