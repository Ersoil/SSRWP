import { useContext } from "react";
import { ThemeContext } from "../../../App";
import Button from "../../button/button";
import { useDispatch, useSelector } from "react-redux";
import { score } from "../../store/score";
let increase = {
        type: "increase",
        inc: 1,
}
let decrease = {
    type: "decrease",
    dec: 1,
}
function Four() {
    let theme = useContext(ThemeContext)
    let dispatch  = useDispatch()
    let count = useSelector((state)=>score)
    return(
        <>
            <h1 className={"Contentheader_"+theme}>Лабораторная 4</h1>
            <p className={"Contenttext_"+theme}>
                <li>Реализовать изменение темы (день/ночь) используя Context</li>
                <li>useState и useEffect - простые примеры
                    <li>useEffect на монтировании и размонтировании страницы</li>
                </li>               
                <li>Внедрить в проект react-router
                    <li>В меню проекта реализовать ссылки переходы </li>
                    <li>В Content реализовать обработчик роутов</li>
                </li>
                
                <li>Внедрить в проект redux
                    <li>Реализовать несколько action и reducer, например increment/ decrement счетчика</li>
                </li>
                <div style={{display: "flex"}}>
                    <Button Name="Increase" Info="Increase score by 1" OnClick={()=>dispatch(increase)}/>
                    <Button Name="Decrease" Info="Decrease score by 1" OnClick={()=>dispatch(decrease)}/>   
                </div>
                  
            </p>
        </> 
    );
  }
  
  export default Four;