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
  color: white;
  text-decoration: none;
  width: 100%;
  text-align: center;
  background-color: rgba(207, 19, 34, 0.8);
  border-radius: 5px;
  padding: 14px 0px;
  font-size: 15px;
  line-height: 14px;
  cursor: pointer;
  letter-spacing: 0.15px;
  margin-top: 5px;
  margin-bottom: 35px;
  font-weight: 600;
`;

const Register = () => {
  return (
    <Layout>
      <StyledLogin>
        <Logo width={90} />
        <Card>
          <LanguageSwitcher />
          <StyledForm>
            <Text>Take your business to a new level.</Text>
            <Header size={1}>Create a new account</Header>
            <Input fill weight="bold" type="text" label="Your name" />
            <Input type="text" label="Email" />
            <InputPassword type="password" label="Password" />
            <InputPassword type="password" label="Confirm password" />
            <Checkbox
              label="I agree with the Terms and Conditions, the Processing of Personal Data and the Processor Agreement." // split this into checkbox and text because i dont think i can style the checkbox and the label by themselves, maybe by passing props but that seems weird
            ></Checkbox>
            <Button fill background="#0980CD">
              Create account
            </Button>
            <Text>Already have an account?</Text>
            <StyledLink to="/login">Log in</StyledLink>
          </StyledForm>
        </Card>
      </StyledLogin>
    </Layout>
  );
};

export default Register;
