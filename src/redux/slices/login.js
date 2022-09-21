import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedin: false,
  },
  reducers: {
    login: (state, action) => {
        console.log(action);
        if(action.payload===true)
            state.isLoggedin = true;
        else  state.isLoggedin=false;
    },
    logout: (state) => {
        state.isLoggedin=false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions

export default loginSlice.reducer