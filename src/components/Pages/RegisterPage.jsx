import React from "react";
import styled from "@emotion/styled";
import Card from "../Card";
import Logo from "../Logo";
import { RegisterForm } from "../Forms";
import { LanguageSwitcher } from "../utils";
import Layout from "../Layout";

const StyledLogin = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled(RegisterForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterPage = () => {
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

export default RegisterPage;
