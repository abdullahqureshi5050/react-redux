import React, {useState} from "react";

import { 
  //Provider, 
  //connect,
  useSelector,
  useDispatch  
} from "react-redux";

import { loginReducer } from "../redux2/login/reducer";

// import { store } from "../redux2/store";

//const username = "admin";
const userPassword = "123";

// const loginReduxState = () => {
//   return {
//     //...state,
//     isLoggedIn: true,
//   };
// };

// const loginDispach = () => {};

function App() {
  //- selectors - use to get all store state and filter out what is needed. 
  const state = useSelector((state) => state);
  const isLoggedin = state.isLoggedIn;
console.log("isLogged in");
console.log((isLoggedin));
  //- dispatch - use to update states via reducer functions as per action.
  const dispatch = useDispatch();

  console.log("current state: ",isLoggedin);
  const [password, setPassword] = useState("");

  const loginHandler = (props) => {
    const { pass } = props;
    if (pass === userPassword) {
      console.log(`logged in sucessful`);
      dispatch(loginReducer());
      console.log(isLoggedin);
    } else console.log("login failed!");
  };

  const onChangeHandler = (props) => {
    console.log(props);
    setPassword(props);
  };

  return (
    <div>
      <div>Index</div>
      <span>state: {JSON.stringify(state)}</span>
      <input
        onChange={(e) => onChangeHandler(e.target.value)}
        type="password"
        value={password}
      ></input>
      <button onClick={() => loginHandler({ pass: password })}>Login</button>
    </div>
  );
}

export default App;
// export default connect(loginReduxState, loginDispach)(App);