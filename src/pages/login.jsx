import React from "react";
import Card from "../components/Card";
import styled from "@emotion/styled";
import Logo from "../components/Logo";
import Input from "../components/Input";

const Login = () => {
  const StyledLogin = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <StyledLogin>
      <Logo width={90} />
      <Card>
        <Input type={"text"} />
        <Input type={"text"} />
        <Input type={"text"} />
        <Input type={"text"} />
      </Card>
    </StyledLogin>
  );
};

export default Login;
