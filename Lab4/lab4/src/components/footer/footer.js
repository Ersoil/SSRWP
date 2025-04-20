import react, { useContext } from "react";
import Button from "../button/button";
import Container from "../container/container";
import "./footer.css"
import { ThemeContext } from "../../App";
function Footer() {
    let theme = useContext(ThemeContext)
    return(
        <footer className={"myFooter_"+theme}>
            <li className={"Footeritem_"+theme}>
            <p className={"Footertext_"+theme}>A block at the bottom of a page. Contains useful but not essential information.</p>
            </li>
        </footer>
    );
  }
  
  export default Footer;