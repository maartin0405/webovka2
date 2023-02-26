import React, { useState } from "react";
import styled from "@emotion/styled";
import InputPassword from "../InputPassword";
import LinkAsAButton from "../LinkAsAButton";
import Text from "../Text";
import Header from "../Header";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Button from "../Button";
import validateEmail from "../../utils/validators/validateEmail";
import { Link } from "gatsby";

const StyledForm = styled.form`
  padding-top: 48.5px;
  padding-right: 65px;
  padding-left: 65px;
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
    checkbox: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;

    setLoginValues({
      ...loginValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    const validationErrors = {
      email: validateEmail(loginValues.email),
      password: validatePassword(),
    };
    setErrors(validationErrors);
    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== ""
    );
    if (!hasErrors) {
      console.log(loginValues);
    }
  };

  const validatePassword = () => {
    if (!loginValues.password) {
      return "Password is required";
    } else if (loginValues.password.length < 8) {
      return "Password must be at least 8 characters";
    }
    return "";
  };

  return (
    <StyledForm
      onSubmit={handleSubmit}
      className={props.className}
      color={props.color}
    >
      <Text>welcome back</Text>
      <Header size={1}>log in</Header>
      <Input
        name="email"
        type="text"
        label="Email"
        onChange={handleChange}
        error={errors.email}
      />
      <InputPassword
        name="password"
        type="password"
        label="Password"
        onChange={handleChange}
        error={errors.password}
      />
      <StyledCheckbox
        label="Remember the password"
        name="checkbox"
        onChange={handleChange}
      />
      <StyledLink to="/register">I forgot my password</StyledLink>
      <StyledButton type="submit" background="#0980CD">
        Log in
      </StyledButton>
      <Text>Don't have an account yet?</Text>
      <StyledLinkAsAButton to="/register">Register</StyledLinkAsAButton>
    </StyledForm>
  );
};

export default LoginForm;
