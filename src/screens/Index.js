import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { login, logout } from '../redux/slices/login';

const username = "admin";
const userPassword = "123";

function Index() {
  const isLoggedin = useSelector((state) => state.login.isLoggedin);
  const dispatch = useDispatch();
  console.log(isLoggedin);
  const [password, setPassword] = useState("");

  const loginHandler = (props) => {
    const { pass } = props;
    if (pass === userPassword) {
      console.log(`logged in sucessful`);
      dispatch(login(true));
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
      <input
        onChange={(e) => onChangeHandler(e.target.value)}
        type="password"
        value={password}
      ></input>
      <button onClick={() => loginHandler({ pass: password })}>Login</button>
    </div>
  );
}

export default Index;

