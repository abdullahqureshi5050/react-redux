import { LOGIN } from "./type";

export const action = (payload = false)=>{
    console.log("payload  ===", payload);
    return {
            type: LOGIN,
            info: "allow user to login in"
        }
}
