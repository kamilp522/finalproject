import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "../../reducers/loginReducer";

import { setMessageAndError } from "../../helpers/setMessageAndError";

import userService from "../../services/users";
import loginService from "../../services/login";

import {
    Form,
    Input,
    FormButtonWrapper,
    Label,
} from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";

const RegisterForm = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");

    const clearInput = () => {
        setUsername("");
        setPassword("");
        setRepeatedPassword("");
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

            setMessageAndError(dispatch, `user ${username} signed up`);

            clearInput();
        } catch (exception) {
            const errorMessage = exception.response.data.error;
            setMessageAndError(dispatch, `${errorMessage}`, true);
            clearInput();
        }
    };

    return (
        <Form onSubmit={handleRegister}>
            <Label>username: </Label>
            <Input
                id="register-username"
                type="text"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
            />
            <Label>password: </Label>
            <Input
                id="register-password"
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
            />
            <Label>repeat password:</Label>
            <Input
                id="register-repeated-password"
                type="password"
                value={repeatedPassword}
                onChange={({ target }) => setRepeatedPassword(target.value)}
            />
            <FormButtonWrapper>
                <Button id="register-button">sign up</Button>
            </FormButtonWrapper>
        </Form>
    );
};

export default RegisterForm;
