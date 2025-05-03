import { useContext } from "react";
import { ThemeContext } from "../../../App";
function Eith() {
    let theme = useContext(ThemeContext)
    return(
        <>
        <h1 className={"Contentheader_"+theme}>Лабораторная 8</h1>
            <ul>
             <li className={"Contenttext_"+theme}>Внедрить в проект&nbsp; таблицы react-table.</li>
             <li className={"Contenttext_"+theme}>Добавить роли пользователей admin, user</li>
             <li className={"Contenttext_"+theme}>Реализовать блок администрирования&nbsp;для роли admin
            <ul>
             <li className={"Contenttext_"+theme}>Реализовать страницу список пользователей в виде таблицы&nbsp;</li>
             <li className={"Contenttext_"+theme}>Добавить действия Удалить, Заблокировать и тд</li>
             <li className={"Contenttext_"+theme}>Перенести в блок администрирования блок обратной связи</li>
             <li className={"Contenttext_"+theme}>Добавить действия Удалить, Заблокировать и тд</li>
            </ul>
            </li>
             <li className={"Contenttext_"+theme}>В пользовательском приложении оставить блок обратной связи только на чтение</li>
             <li className={"Contenttext_"+theme}>Добавить возможность сортировки и перетаскивания колонок.
            <ul>
             <li className={"Contenttext_"+theme}>* Реализовать динамическую подгрузку данных (виртуализация) при скроллировании</li>
             <li className={"Contenttext_"+theme}>* Для просмотра на мобильных устройствах зафиксировать первую колонку, остальные скроллировать.</li>
            </ul>
            </li>
             <li className={"Contenttext_"+theme}>Разместить лабораторную работу в репозиторий в github отдельным коммитом</li>
             <li className={"Contenttext_"+theme}>Прикрепить&nbsp; сылку на проект в виде текста</li>
            </ul>
        </> 
    );
  }
  
  export default Eith;