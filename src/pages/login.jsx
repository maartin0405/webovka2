import React, { useState } from "react";
import styled from "@emotion/styled";
import Card from "../components/Card";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Text from "../components/Text";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Layout from "../components/Layout";
import InputPassword from "../components/InputPassword";
import LinkAsAButton from "../components/LinkAsAButton";
import { Link } from "gatsby";

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

const StyledLink = styled(Link)`
  color: #cf1322;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.15px;
  text-decoration: none;
  margin-bottom: 25px;
  display: block;
  width: 100%;
  align-self: left;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-bottom: 15px;
`;

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

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
            <StyledCheckbox label="Remember the password"></StyledCheckbox>
            <StyledLink to="/register">I forgot my password</StyledLink>
            <Button fill background="#0980CD">
              Log in
            </Button>
            <Text>Don't have an account yet?</Text>
            <LinkAsAButton to="/register">Register</LinkAsAButton>
          </StyledForm>
        </Card>
      </StyledLogin>
    </Layout>
  );
};

export default Login;
