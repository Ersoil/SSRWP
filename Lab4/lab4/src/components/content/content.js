import {Children, useContext, useEffect} from "react";
import react from "react";
import {useNavigate, Router,Route, Link, BrowserRouter, replace, Routes } from "react-router-dom";
import One from "./pages/one";
import Two from "./pages/two";
import Three from "./pages/three";
import Four from "./pages/four";
import Five from "./pages/five";
import Six from "./pages/six";
import Seven from "./pages/seven";
import Eith from "./pages/eith";
import Nine from "./pages/nine";
import "./content.css"
import { ThemeContext } from "../../App"; 

function Content({children}) {
    let theme = useContext(ThemeContext)
    return(
        <div className={"myContent_"+theme}>
            <Routes>
                <Route path="One" element={<One/>}/>
                <Route path="Two" element={<Two/>}/>
                <Route path="Three" element={<Three/>}/>
                <Route path="Four" element={<Four/>}/>
                <Route path="Five" element={<Five/>}/>
                <Route path="Six" element={<Six/>}/>
                <Route path="Seven" element={<Seven/>}/>
                <Route path="Eith" element={<Eith/>}/>
                <Route path="Nine" element={<Nine/>}/>
            </Routes> 
        </div>
    );
  }
  export default Content;