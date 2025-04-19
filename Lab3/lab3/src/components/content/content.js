import react from "react";
import "./content.css"
function Content() {
    return(
        <div className="myContent">
            <h1 className="Contentheader">Лабораторная 3</h1>
            <p className="Contenttext">
                <li>Продолжаем задание "Реализовать шаблон страницы и разместить на нем компоненты навигации" (Можно использовать готовые библиотеки Mui/Bootstrap и тд)</li>
                <li>Реализуем компоненты Header, Footer, Menu и Content</li>
                <li>В меню выводим список лабораторных работ</li>
                <li>В Content  выводим содержимое лабораторной работы </li>
                <li>Разместить проект в репозиторий в github</li>
                <li>Прикрепить текстовый файл с сылкой на проект</li>
            </p>
        </div>
    );
  }
  
  export default Content;