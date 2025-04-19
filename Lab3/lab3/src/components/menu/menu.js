import react from "react";
import Button from "../button/button";
import Container from "../container/container";
import "./menu.css"
function Menu() {
    return(
        <menu type="toolbar" className="mymenu">
            <li className="menuitem"><Button Name="Лабораторная 1" Info="Введение. История развития frontend"/></li>
            <li className="menuitem"><Button Name="Лабораторная 2" Info="Основы React. Работа с объектами JS"/></li>
            <li className="menuitem"><Button Name="Лабораторная 3" Info="Основы React. Работа с объектами JS"/></li>
            <li className="menuitem"><Button Name="Лабораторная 4" Info="Хуки React. Работа с Redux. Работа с роутингом. Формы"/></li>
            <li className="menuitem"><Button Name="Лабораторная 5" Info="Хуки React. Работа с Redux. Работа с роутингом. Формы"/></li>
            <li className="menuitem"><Button Name="Лабораторная 6" Info="Ассинхрон. Нововведения в JS 2015-2022. Работа с сервером"/></li>
            <li className="menuitem"><Button Name="Лабораторная 7" Info="Библиотеки UI. Работа с таблицами. Виртуализация."/></li>
            <li className="menuitem"><Button Name="Лабораторная 8" Info="Библиотеки UI. Работа с таблицами. Виртуализация."/></li>
            <li className="menuitem"><Button Name="Лабораторная 9" Info="Тестирование. Git. TypeScript. Оптимизация. React/Tanstack/Rtk-query"/></li>
        </menu>
    );
  }
  
  export default Menu;