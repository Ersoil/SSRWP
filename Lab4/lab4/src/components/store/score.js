import { createStore } from "redux";
let defaultState ={
    totalscore: 0,
}
function Reducer(state=0,action){
  switch(action.type){
    case "increase":
      return state+action.inc
    case "decrease":
      return state-action.dec
    default:
      return state;
  }
}
export let score = createStore(Reducer);

