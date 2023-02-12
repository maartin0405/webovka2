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

const Login = () => {
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

  return (
    <Layout>
      <StyledLogin>
        <Logo width={90} />
        <Card>
          <LanguageSwitcher />
          <StyledForm>
            <Text>Take your business to a new level.</Text>
            <Header size={1}>Create a new account</Header>
            <Input type="text" label="Your Name" />
            <Input type="text" label="Email" />
            <Input type="password" label="Password" />
            <Input type="password" label="Confirm Password" />
            <Checkbox
              label="I agree with the Terms and Conditions, the Processing of Personal Data and the Processor Agreement."
              id="terms"
            ></Checkbox>
            <Button fill> Create account</Button>
            <Text>Already have an account?</Text>
            <Button fill>Log in</Button>
          </StyledForm>
        </Card>
      </StyledLogin>
    </Layout>
  );
};

export default Login;
