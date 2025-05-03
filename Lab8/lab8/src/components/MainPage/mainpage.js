import Navbar from "../navbar/navbar";
import Container from "../container/container";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
import Content from "../content/content";
import Login, { useLoginState } from "../forms/auth_form/auth_form";
import FeedbackMenu from "../feedback_menu/feedback_menu";
import {Switch} from "react-dom"

function Autorizate(login,changetheme){
    if(login) return(
      <>
      <Navbar ChangeTheme={changetheme}/>
      <Container>
        <Menu/>
        <FeedbackMenu/>
        <Content>
        </Content>
      </Container>
      <Footer/>
      </>
    )
    else return(
      <Login></Login>
    )
  }

function MainPage(props) {
    let isLoggedIn = useLoginState(); 
return (
    <div className="MainPage">
        {Autorizate(isLoggedIn,props.ChangeTheme)}
    </div>
  );
}
export default MainPage;