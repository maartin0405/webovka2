import React from "react";
import Card from "../components/Card";
import styled from "@emotion/styled";
import Logo from "../components/Logo";

const Login = () => {
  const StyledLogin = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <StyledLogin>
      <Logo width={90} />
      <Card>hiiii</Card>
    </StyledLogin>
  );
};

export default Login;
