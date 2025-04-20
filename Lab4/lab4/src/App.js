import Navbar from "./components/navbar/navbar";
import Button from "./components/button/button";
import Container from "./components/container/container";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";
import { score } from "./components/store/score";


import { BrowserRouter} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";

export let ThemeContext = React.createContext("dark");
let ThemeIndicator = true;
let last_visit;



function App() {
  const [theme,set_theme] = useState("dark");
function changeTheme(){
  if(ThemeIndicator){set_theme("dark");
    ThemeIndicator=false;
  }
  else{
    set_theme("light");
    ThemeIndicator=true;
  }
}
return (
    <BrowserRouter>
    <div className="App">
      <Provider store={score}>
      <ThemeContext.Provider value={theme}>
        <Navbar ChangeTheme={changeTheme}/>
        <Container>
          <Menu/>
          <Content>
          </Content>
        </Container>
        <Footer/>
      </ThemeContext.Provider>
      </Provider>
    </div>
    </BrowserRouter>
  );
}
export default App;
