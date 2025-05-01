import react, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "../../App";
import Button from "../button/button";
import axios from "axios";
import "./feedback_list.css"

function addli(value,theme,i){
    return (
        <li className={"flitem"} key={i}>
            <h3 className={"flhead_"+theme}>{value.feedback+"\nComment Id:"+value.id}</h3>
            <p className={"fltext_"+theme}>{value.info}</p>
        </li>
    );
}
function loadAll(dispatch){
    axios.get('http://localhost:8000/feedbacks')
    .then(response=>
      {
        let values = structuredClone(response.data.map((element) => element));
        dispatch({type:"clearfeedback"})
        for(let i = 0; i<values.length;i++){
            dispatch({type: "addfeedback", element: values[i]})
        }        
      }
    )
    .catch(error=>
      {
      console.log("Ошибка выгрузки:",error)
      }
    )
}
function delComment(dispatch,id){
    axios.delete('http://localhost:8000/feedbacks/'+id,)
    .then(response=>
      {
        loadAll(dispatch);
        }        
    )
    .catch(error=>
      {
      console.log("Ошибка удаления:",error)
      }
    )
}

function Feedback_list(props) {
    let elements = []
    let all_feedback = useSelector((state)=>state.all_feedback)
    let dispatch = useDispatch()
    let theme = useContext(ThemeContext)
    
    if(all_feedback!=null)
        for(let i=0;i<all_feedback.length;i++){
            elements.push(addli(all_feedback[i],theme,i))
        }

    return(
        <div>
            <div className={"fl_"+theme}>
                {elements}
            </div>
            <div style={{display: "flex"}}>
            <Button Name="Загрузить все отзывы" Info="" OnClick={()=>loadAll(dispatch)}/> 
            <Button Name="Удалить комментарий" Info="" OnClick={()=>delComment(dispatch,prompt("Id",1))}/> 
            </div>
        </div>
    );
  }
  
  export default Feedback_list;