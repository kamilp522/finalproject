import React from "react";

import { Wrapper } from "../UI/Wrapper/Wrapper";
import { H2 } from "../UI/Text/Text";

const NotLogged = () => {
  return (
    <Wrapper>
      <H2 style={{ borderBottom: "none" }}>
        Section restricted to registered users.
      </H2>
    </Wrapper>
  );
};

export default NotLogged;
