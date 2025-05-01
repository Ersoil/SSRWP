import { useContext } from "react";
import { ThemeContext } from "../../../App";
function Six() {
    let theme = useContext(ThemeContext)
    return(
        <>
        <h1 className={"Contentheader_"+theme}>Лабораторная 6</h1>
        <ul>
         <li className={"Contenttext_"+theme}>Реализовать или использовать простой REST сервер</li>
         <li className={"Contenttext_"+theme}>Реализовать несколько (GET, POST, PUT, DELETE) запросов на сервер используя промисы JS (fetch, axios).
        <ul>
         <li className={"Contenttext_"+theme}>Использовать формы (авторизации, регистрации, обратной связи) отправки данных на сервер из лабораторной работы №5.</li>
         <li className={"Contenttext_"+theme}>Добавить возможность редактирования профиля полььзователя</li>
         <li className={"Contenttext_"+theme}><span>Вывести результаты GET запроса от сервера на экран, например, все отзывы обратной связи.</span></li>
         <li className={"Contenttext_"+theme}>Добавить возможность&nbsp;удаления записей обратной связи</li>
        </ul>
        </li>
         <li className={"Contenttext_"+theme}><span>Для оптимизации использовать redux</span></li>
         <li className={"Contenttext_"+theme}>Разместить лабораторную работу в репозиторий в github отдельным коммитом</li>
         <li className={"Contenttext_"+theme}>Прикрепить сылку на проект в виде текста</li>
        </ul>   
        </> 
    );
  }
  
  export default Six;