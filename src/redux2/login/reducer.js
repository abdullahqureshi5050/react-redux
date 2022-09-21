import { LOGIN } from "./type";

//initialState
const initialState = {
    isLoggedIn: false
}

export const loginReducer = (state = initialState, action)=>{
    console.log("action ===========",action)
    
    switch (action.type) {
        case LOGIN: 
            return {
                ...state,
                isLoggedIn: true
            }
           // break;
    
        default:
            return state;
           // break;
    }
}
