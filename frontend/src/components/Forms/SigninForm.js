import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "../../reducers/loginReducer";

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

      clearInput();
    } catch (exception) {
      console.log(exception);
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
