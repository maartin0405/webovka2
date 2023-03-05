import React, { useState } from "react";
import styled from "@emotion/styled";
import Card from "../components/Card";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Layout from "../components/Layout";

const StyledLogin = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled(LoginForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginPage = () => {
  return (
    <Layout>
      <StyledLogin>
        <Logo width={90} />
        <Card>
          <LanguageSwitcher />
          <StyledForm />
        </Card>
      </StyledLogin>
    </Layout>
  );
};

export default LoginPage;
