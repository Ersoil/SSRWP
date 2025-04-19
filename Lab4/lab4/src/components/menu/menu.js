import {useNavigate} from "react-router-dom";
import Button from "../button/button";
import "./menu.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";
function Menu() {
    const navigate = useNavigate()
    let theme = useContext(ThemeContext)
    return(
    <>
            <menu className={"mymenu_"+theme}>
                <li className={"menuitem_"+theme}><Button Name="Лабораторная 1" Info="Введение. История развития frontend" OnClick={()=>navigate('One',{replace:false})}/></li>
                <li className={"menuitem_"+theme}><Button Name="Лабораторная 2" Info="Основы React. Работа с объектами JS" OnClick={()=>navigate('Two',{replace:false})}/></li>
                <li className={"menuitem_"+theme}><Button Name="Лабораторная 3" Info="Основы React. Работа с объектами JS" OnClick={()=>navigate('Three',{replace:false})}/></li>
                <li className={"menuitem_"+theme}><Button Name="Лабораторная 4" Info="Хуки React. Работа с Redux. Работа с роутингом. Формы" OnClick={()=>navigate('Four',{replace:false})}/></li>
                <li className={"menuitem_"+theme}><Button Name="Лабораторная 5" Info="Хуки React. Работа с Redux. Работа с роутингом. Формы" OnClick={()=>navigate('Five',{replace:false})}/></li>
                <li className={"menuitem_"+theme}><Button Name="Лабораторная 6" Info="Ассинхрон. Нововведения в JS 2015-2022. Работа с сервером" OnClick={()=>navigate('Six',{replace:false})}/></li>
                <li className={"menuitem_"+theme}><Button Name="Лабораторная 7" Info="Библиотеки UI. Работа с таблицами. Виртуализация." OnClick={()=>navigate('Seven',{replace:false})}/></li>
                <li className={"menuitem_"+theme}><Button Name="Лабораторная 8" Info="Библиотеки UI. Работа с таблицами. Виртуализация." OnClick={()=>navigate('Eith',{replace:false})}/></li>
                <li className={"menuitem_"+theme}><Button Name="Лабораторная 9" Info="Тестирование. Git. TypeScript. Оптимизация. React/Tanstack/Rtk-query" OnClick={()=>navigate('Nine',{replace:false})}/></li>
            </menu>
    </>
    );
  }
  
  export default Menu;