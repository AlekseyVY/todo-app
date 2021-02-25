import {applyMiddleware, createStore} from "redux";
import {todoReducer} from "./todoReducer/todoReducer";
import thunk from "redux-thunk";





export const store = createStore(todoReducer, applyMiddleware(thunk))