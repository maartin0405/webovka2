import React, { useState } from "react";
import styled from "@emotion/styled";
import InputPassword from "../InputPassword";
import LinkAsAButton from "../LinkAsAButton";
import Text from "../Text";
import Header from "../Header";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Button from "../Button";
import { Link } from "gatsby";

const StyledForm = styled.form`
  margin-top: 48.5px;
  margin-right: 65px;
  margin-left: 65px;
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
  margin-top: 25px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 25px;
`;

const StyledLinkAsAButton = styled(LinkAsAButton)`
  margin-top: 5px;
  margin-bottom: 35px;
`;

const LoginForm = (props) => {
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setLoginValues({ ...loginValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user created", loginValues);
  };

  return (
    <StyledForm
      onSubmit={handleSubmit}
      className={props.className}
      color={props.color}
    >
      <Text>welcome back</Text>
      <Header size={1}>log in</Header>
      <Input name="email" type="text" label="Email" onChange={handleChange} />
      <InputPassword
        name="password"
        type="password"
        label="Password"
        onChange={handleChange}
      />
      <StyledCheckbox label="Remember the password" />
      <StyledLink to="/register">I forgot my password</StyledLink>
      <StyledButton type="submit" fill background="#0980CD">
        Log in
      </StyledButton>
      <Text>Don't have an account yet?</Text>
      <StyledLinkAsAButton to="/register">Register</StyledLinkAsAButton>
    </StyledForm>
  );
};

export default LoginForm;
