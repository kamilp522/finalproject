import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "../../reducers/loginReducer";
import { setNotification } from "../../reducers/notificationReducer";

import userService from "../../services/users";
import loginService from "../../services/login";

import { Form, Input, FormButtonWrapper } from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const clearInput = () => {
    setUsername("");
    setPassword("");
    setRepeatedPassword("");
  };

  const setMessageAndError = (message, error) => {
    dispatch(setNotification({ message, error }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      await userService.register({
        username,
        password,
        repeatedPassword,
      });

      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggedMidtraderUser", JSON.stringify(user));

      dispatch(loginUser(user));

      setMessageAndError(`user ${username} signed up`);

      clearInput();
    } catch (exception) {
      const errorMessage = exception.response.data.error;
      setMessageAndError(`${errorMessage}`, true);
      clearInput();
    }
  };

  return (
    <Form onSubmit={handleRegister}>
      <Input
        id="register-username"
        type="text"
        value={username}
        placeholder="username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <Input
        id="register-password"
        type="password"
        value={password}
        placeholder="password"
        onChange={({ target }) => setPassword(target.value)}
      />
      <Input
        id="register-repeated-password"
        type="password"
        value={repeatedPassword}
        placeholder="repeat password"
        onChange={({ target }) => setRepeatedPassword(target.value)}
      />
      <FormButtonWrapper>
        <Button id="register-button">sign up</Button>
      </FormButtonWrapper>
    </Form>
  );
};

export default LoginForm;
