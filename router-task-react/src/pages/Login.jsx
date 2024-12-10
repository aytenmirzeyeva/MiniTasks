import React, { useState } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onHandleUsername = (e) => {
    setUsername(e.target.value);
  };
  const onHandlePassword = (e) => {
    setPassword(e.target.value);
  };
  const sendDatas = () => {
    const data = {
      username,
      password,
    };
    console.log(data);
    setUsername("");
    setPassword("");
  };
  return (
    <div className="container">
      <h1>Log In</h1>
      <div className="login-form">
        <div className="input-group">
          <Label whatFor="username" labelText="Username" />
          <Input
            inputId="username"
            placeholder="Enter username..."
            type="text"
            onchange={onHandleUsername}
            value={username}
          />
        </div>
        <div className="input-group">
          <Label whatFor="password" labelText="Password" />
          <Input
            inputId="password"
            placeholder="Enter password..."
            type="password"
            onchange={onHandlePassword}
            value={password}
          />
        </div>
        <Button
          btnText="Log In"
          onclick={sendDatas}
          disabled={username == "" || password == "" ? true : false}
        />
      </div>
    </div>
  );
};

export default Login;
