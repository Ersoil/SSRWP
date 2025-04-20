import { useContext } from "react";
import "./navbar.css";
import { ThemeContext } from "../../App";
import ToggleButton from "../togglebutton/togglebutton";
import {useSelector} from "react-redux";
import { score } from "../store/score";

function Navbar(props){

    let theme = useContext(ThemeContext)
    let count  = useSelector((state)=>state)
    return(
        <div className={"nav_"+theme}>
            <nav className="nav">
              <div className="container">
                  <div className="nav-row">
                      <a href="./index.html" className="logo"><strong>Vaverko 4.205-1</strong> modern tools for web development</a>
                      <ul className="nav-list">
                            <ToggleButton onClick={props.ChangeTheme}/>
                            <li className="nav-list__item">{"Score:"+count}</li>
                            <li className="nav-list__item"><a href="./index.html" className="nav-list__link nav-list__link--active">Home</a></li>
                            <li className="nav-list__item"><a href="./works.html" className="nav-list__link">Lab-works</a></li>
                      </ul>
                  </div>
              </div>
          </nav>
        </div>
    )
}
export default Navbar;