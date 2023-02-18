import React from "react";
import styled from "@emotion/styled";
import Card from "../components/Card";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Text from "../components/Text";
import Header from "../components/Header";
import Form from "../components/Form";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Layout from "../components/Layout";
import InputPassword from "../components/InputPassword";
import { Link } from "gatsby";

const StyledLogin = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Login = () => {
  return (
    <Layout>
      <StyledLogin>
        <Logo width={90} />
        <Card>
          <LanguageSwitcher />
          <StyledForm>
            <Text>welcome back</Text>
            <Header size={1}>log in</Header>
            <Input type="text" label="Email" />
            <InputPassword type="password" label="Password" />
            <Checkbox label="Remember the password"></Checkbox>
            <Text>I forgot my password</Text>
            <Button fill background="#0980CD">
              Log in
            </Button>
            <Text>Don't have an account yet?</Text>
            <Button fill background="rgba(207, 19, 34, 0.8);">
              <StyledLink to="/register">Create an account</StyledLink>
            </Button>
          </StyledForm>
        </Card>
      </StyledLogin>
    </Layout>
  );
};

export default Login;
