import Navbar from "./components/navbar/navbar";
import Button from "./components/button/button";
import Container from "./components/container/container";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";
import { score } from "./components/store/score";


import { BrowserRouter} from "react-router-dom";
import React, { useState } from "react";
import { Provider } from "react-redux";
import MainPage from "./components/MainPage/mainpage";

export let ThemeContext = React.createContext();
let ThemeIndicator = true;


function App() {
  const [theme,set_theme] = useState("light");
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
      <MainPage ChangeTheme={changeTheme}></MainPage>
      </ThemeContext.Provider>
      </Provider>
    </div>
    </BrowserRouter>
  );
}
export default App;
