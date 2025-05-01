import { useContext } from "react";
import { ThemeContext } from "../../../App";
function Three() {
    let theme = useContext(ThemeContext)
    return(
        <>
            <h1 className={"Contentheader_"+theme}>Лабораторная 3</h1>
            <p className={"Contenttext_"+theme}>
                <li>Продолжаем задание "Реализовать шаблон страницы и разместить на нем компоненты навигации" (Можно использовать готовые библиотеки Mui/Bootstrap и тд)</li>
                <li>Реализуем компоненты Header, Footer, Menu и Content</li>
                <li>В меню выводим список лабораторных работ</li>
                <li>В Content  выводим содержимое лабораторной работы </li>
                <li>Разместить проект в репозиторий в github</li>
                <li>Прикрепить текстовый файл с сылкой на проект</li>
            </p>
        </> 
    );
  }
  
  export default Three;