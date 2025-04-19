import Navbar from "./components/navbar/navbar";
import Button from "./components/button/button";
import Container from "./components/container/container";


function App() {
  var Elements = [<Button OnClick={()=>console.log("Button pressed")}/>,<Button/>,<Button/>,<Button/>,<Button/>]
  return (
    <div className="App">
        <Navbar/>
        <Container Elements={Elements}/> 
    </div>
  );
}

export default App;
