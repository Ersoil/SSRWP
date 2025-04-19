import Navbar from "./components/navbar/navbar";
import Button from "./components/button/button";
import Container from "./components/container/container";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";

function App() {
  var Elements = [<Button OnClick={()=>console.log("Button pressed")}/>,<Button/>,<Button/>,<Button/>,<Button/>]
  return (
    <div className="App">
        <Navbar/>
        <Container>
          <Menu/>
          <Content/>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;
