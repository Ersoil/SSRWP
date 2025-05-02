import { useContext } from "react";
import { ThemeContext } from "../../../App";
function Seven() {
let theme = useContext(ThemeContext)
    return(
        <>
            <h1 className={"Contentheader_"+theme}>Лабораторная 7</h1>
            <ul>
            <li className={"Contenttext_"+theme}>Внедрить в проект UI Kit Mui/Bootstrap или им подобное, для возможности адаптива.</li>

             <li className={"Contenttext_"+theme}>Реализовать Menu (Drawer/Slider) - Меню по прежнему должно открывать список лабораторных, но должно быть скрываемым и вызываться из Header по кнопке-иконке.</li>
             <li className={"Contenttext_"+theme}>В нижнем меню организовать вызов быстрых действий (обратная связь и пр)</li>
             <li className={"Contenttext_"+theme}>* Проконтролировать, что приложение стало адаптивным под разные устройства.</li>
             <li className={"Contenttext_"+theme}>Разместить лабораторную работу в репозиторий в github отдельным коммитом</li>
             <li className={"Contenttext_"+theme}>Реализовать Header (Главная, О себе) - отдельные страницы.
            <ul>
             <li className={"Contenttext_"+theme}>Изменение темы на темную перенести в Header.</li>
             <li className={"Contenttext_"+theme}>Привести профиль пользователя в стандарт библиотеки&nbsp;Mui/Bootstrap</li>
            </ul>
            </li> <li className={"Contenttext_"+theme}>Прикрепить сылку на проект в виде текста</li>
            </ul>
        </> 
    );
  }
  
  export default Seven;