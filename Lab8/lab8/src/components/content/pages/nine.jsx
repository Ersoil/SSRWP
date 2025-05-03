import { useContext } from "react";
import { ThemeContext } from "../../../App";
function Nine() {
    let theme = useContext(ThemeContext)
    return(
        <>
        <h1 className={"Contentheader_"+theme}>Лабораторная 9</h1>
        <ul>
             <li className={"Contenttext_"+theme}>Написать тест для компонента кнопки</li>
             <li className={"Contenttext_"+theme}>Провести рефакторинг страницы со списком данных с сервера. Переписать запрос к backend через rtk-query(useGetPostsQuery</li>
             <li className={"Contenttext_"+theme}>Используя isError, isLoading, isFetching отрисовать спиннер загрузки, сообщение об ошибке и результат успешного запроса</li>
             <li className={"Contenttext_"+theme}>Результат работы разместить на github отдельным коммитом.</li>
             <li className={"Contenttext_"+theme}>Ссылку на репозиторий приложить к заданию</li>
        </ul>
        </> 
    )
  }
  
  export default Nine;