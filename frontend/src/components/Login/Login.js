import React from "react";
import LoginForm from "../Forms/LoginForm";
import { LoginSmall, LoginSmallWrapper, SignInLink } from "./LoginElements";
import { Wrapper } from "../UI/Wrapper/Wrapper";

const Login = () => {
    return (
        <Wrapper>
            <LoginForm />
            <LoginSmallWrapper>
                <LoginSmall>
          Don&apos;t have an account?
                    <SignInLink to="/register"> Sign up </SignInLink>
          right now!
                </LoginSmall>
            </LoginSmallWrapper>
        </Wrapper>
    );
};

export default Login;
