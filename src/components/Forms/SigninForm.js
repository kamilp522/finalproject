import React from "react";

import { Form, Input, FormButtonWrapper } from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";

const LoginForm = () => {
  return (
    <Form>
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="repeat password" />
      <FormButtonWrapper>
        <Button style={{ marginTop: "0.5rem" }}>Sign in</Button>
      </FormButtonWrapper>
    </Form>
  );
};

export default LoginForm;
