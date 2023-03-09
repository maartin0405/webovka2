import React, { useState } from "react";
import styled from "@emotion/styled";
import Card from "../Card";
import Logo from "../Logo";
import LoginForm from "../LoginForm";
import LanguageSwitcher from "../LanguageSwitcher";
import Layout from "../Layout";

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