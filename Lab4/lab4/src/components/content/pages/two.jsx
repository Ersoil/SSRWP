import { useContext } from "react";
import { ThemeContext } from "../../../App";
function Two() {
    let theme = useContext(ThemeContext)
    return(
        <>
            <h1 className={"Contentheader_"+theme}>Лабораторная 2</h1>
            <p className={"Contenttext_"+theme}>
                <li>Создать "Hello World" приложение на основе React.</li>
                <li>Для создания можно использовать create-react-app или vite</li>
                <li>Реализовать компонент кнопку, контейнер и использовать их на странице</li>
                <li>Реализовать форму аутентификации пользователя (form)</li>
                <li>Реализовать шаблон страницы и разместить на нем компоненты навигации&nbsp;</li>
                <li>Разместить проект в репозиторий в github</li>
                <li>Прикрепить текстовый файл с сылкой на проект</li>
            </p>
        </>  
    );
  }
  
  export default Two;