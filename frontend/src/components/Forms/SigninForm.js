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

  const handleSignin = async (event) => {
    event.preventDefault();

    try {
      await userService.signin({
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
    <Form onSubmit={handleSignin}>
      <Input
        type="text"
        value={username}
        placeholder="username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <Input
        type="password"
        value={password}
        placeholder="password"
        onChange={({ target }) => setPassword(target.value)}
      />
      <Input
        type="password"
        value={repeatedPassword}
        placeholder="repeat password"
        onChange={({ target }) => setRepeatedPassword(target.value)}
      />
      <FormButtonWrapper>
        <Button>Sign in</Button>
      </FormButtonWrapper>
    </Form>
  );
};

export default LoginForm;
