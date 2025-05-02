import { createStore } from "redux";

// Начальное состояние
let defaultState = {
    totalscore: 0,
    login: false,
    all_feedback: new Array(),
    isMenuOpen: false,
    isFeedbackMenuOpen: false, 
};

// Редьюсер
function Reducer(state = defaultState, action) {
    switch (action.type) {
        case "increase":
            return { ...state, totalscore: state.totalscore + action.inc };
        case "decrease":
            return { ...state, totalscore: state.totalscore - action.dec };
        case "login":
            return { ...state, login: true };
        case "logout":
            return { ...state, login: false };
        case "addfeedback":
            return { ...state, all_feedback: [...state.all_feedback, action.element] };
        case "clearfeedback":
            return { ...state, all_feedback: [] };
        case "toggleMenu":
            return { ...state, isMenuOpen: !state.isMenuOpen };
        case "toggleFeedbackMenu":
            return { ...state, isFeedbackMenuOpen: !state.isFeedbackMenuOpen };
        default:
            return state;
    }
}

// Создание хранилища
export let score = createStore(Reducer);

