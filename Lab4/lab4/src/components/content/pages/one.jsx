import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../App";
function One() {
    let theme = useContext(ThemeContext)
    return(
        <>
            <h1 className={"Contentheader_"+theme}>Лабораторная 1</h1>
            <p className={"Contenttext_"+theme}>
                <li>Реализовать скрипт, который уведомит о полной загрузке страницы</li>
                <li>Реализовать кнопку счетчик, которая будет увеличивать счетчик на "1" и вывести его значение на страницу (button onclick)</li>
                <li>Реализовать кнопку счетчик, которая будет уменьшать счетчик на "1" реализовать с помощью listener click</li>
                <li>Реализовать форму аутентификации пользователя (form)</li>
                <li>Реализовать скрипт очистки данных формы</li>
                <li>Реализовать скрипт отправки данных формы с помощью listener submit.</li>
                <li>Без отправки на сервер провести валидацию введенных данных, если login=="admin" & pass=="admin" вывести сообщение об успехе, иначе сообщение о неуспехе</li>
                <li>Реализовать скрипт сохранения учетных данных и автоподстановку оных с помощью localStorage</li>
            </p>
        </> 
    );
  }
  
 export default One;