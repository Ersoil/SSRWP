import { createStore } from "redux";
let defaultState ={
    totalscore: 0,
    login: false,
    all_feedback: new Array(),
}
function Reducer(state=defaultState ,action){
  switch(action.type){
    case "increase":
      return {...state, totalscore: state.totalscore +action.inc}
    case "decrease":
      return {...state, totalscore: state.totalscore -action.dec}
    default:
      return state;
    case "login":
      return {...state, login: state.logIn = true}
    case "logout":
      return {...state, login: state.logIn = false}
    case "addfeedback":
      return { ...state, all_feedback: [...state.all_feedback, action.element] };
  }
}
export let score = createStore(Reducer);

