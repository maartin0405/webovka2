import React from "react";
import styled from "@emotion/styled";
import Card from "../components/Card";
import Logo from "../components/Logo";
import RegisterForm from "../components/RegisterForm";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Layout from "../components/Layout";

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

const Register = () => {
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

export default Register;
