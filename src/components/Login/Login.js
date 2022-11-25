import React from "react";
import LoginForm from "../Forms/LoginForm";
import {
  LoginWrapper,
  LoginSmall,
  LoginSmallWrapper,
  SignInLink,
} from "./LoginElements";

const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm />
      <LoginSmallWrapper>
        <LoginSmall>
          Don't have an account?
          <SignInLink to="/signin"> Sign in </SignInLink>
          right now!
        </LoginSmall>
      </LoginSmallWrapper>
    </LoginWrapper>
  );
};

export default Login;
