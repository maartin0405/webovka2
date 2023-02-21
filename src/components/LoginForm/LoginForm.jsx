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

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setLoginValues({
      ...loginValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validateForm = () => {
      let errors = {};

      if (!loginValues.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(loginValues.email)) {
        errors.email = "Invalid email address";
      } else {
        errors.email = "";
      }

      if (!loginValues.password) {
        errors.password = "Password is required";
      } else if (loginValues.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      } // i cant set a "errors.password = """ because then the object below will be filled with objects and it wont return the form even if it has tehcnically 0 errors, the empty string is still an error

      return Object.keys(errors).length > 0 ? errors : {};
    };

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log(loginValues);
    } else {
      setErrors(validationErrors);
    }
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
      <StyledCheckbox label="Remember the password" />
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
