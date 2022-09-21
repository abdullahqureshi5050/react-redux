import { combineReducers, createStore, applyMiddleware } from "redux";
import { loginReducer } from  "./login/reducer";
import logger from 'redux-logger';
// const rootReducer = combineReducers({
//     login: loginReducer
//   })
export const store = createStore(loginReducer, applyMiddleware(logger));
console.log("store ===",store.getState());
