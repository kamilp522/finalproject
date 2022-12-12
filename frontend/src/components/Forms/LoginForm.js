import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "../../reducers/loginReducer";
import { setNotification } from "../../reducers/notificationReducer";

import loginService from "../../services/login";

import { Form, Input, FormButtonWrapper } from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const clearInput = () => {
    setUsername("");
    setPassword("");
  };

  const setMessageAndError = (message, error) => {
    dispatch(setNotification({ message, error }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggedMidtraderUser", JSON.stringify(user));

      dispatch(loginUser(user));
      setMessageAndError(`user ${username} logged in`);

      clearInput();
    } catch (exception) {
      const errorMessage = exception.response.data.error;
      setMessageAndError(`${errorMessage}`, true);
      clearInput();
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <Input
        id="login-username"
        type="text"
        value={username}
        placeholder="username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <Input
        id="login-password"
        type="password"
        value={password}
        placeholder="password"
        onChange={({ target }) => setPassword(target.value)}
      />
      <FormButtonWrapper>
        <Button id="login-button">log in</Button>
      </FormButtonWrapper>
    </Form>
  );
};

export default LoginForm;
