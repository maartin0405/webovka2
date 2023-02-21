import React, { useState } from "react";
import styled from "@emotion/styled";
import Input from "../Input";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Text from "../Text";
import Header from "../Header";
import LinkAsAButton from "../LinkAsAButton";
import InputPassword from "../InputPassword";

const StyledForm = styled.form`
  margin-top: 48.5px;
  margin-right: 65px;
  margin-left: 65px;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-bottom: 25px;
  margin-top: 25px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 25px;
`;

const StyledLinkAsAButton = styled(LinkAsAButton)`
  margin-bottom: 35px;
  margin-top: 5px;
`;

const RegisterForm = (props) => {
  const [registerValues, setRegisterValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [checkbox, setCheckbox] = useState(false);

  const handleChange = (event) => {
    setRegisterValues({
      ...registerValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = () => {
    setCheckbox(!checkbox);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    setErrors(errors);
    console.log(errors);
    /*const validateForm = () => {

      if (!checkbox) {
        errors.checkbox = true;
      } else {
        errors.checkbox = false;
      }

      return errors;
    };*/
  };
  const validateName = () => {
    if (!registerValues.name) {
      errors.name = "Name is required";
    } else if (registerValues.name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    } else {
      delete errors.name;
    }
  };

  const validateEmail = () => {
    if (!registerValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(registerValues.email)) {
      errors.email = "Invalid email address";
    } else {
      delete errors.email;
    }
  };

  const validatePassword = () => {
    if (!registerValues.password) {
      errors.password = "Password is required";
    } else if (registerValues.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else {
      delete errors.password;
    }
  };

  const validateConfirmPassword = () => {
    if (registerValues.password !== registerValues.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    } else if (!registerValues.confirmPassword) {
      errors.confirmPassword = "Cannot be empty";
    } else {
      delete errors.confirmPassword;
    }
  };

  return (
    <StyledForm
      onSubmit={handleSubmit}
      className={props.className}
      color={props.color}
    >
      <Text>Take your business to a new level.</Text>
      <Header size={1}>Create a new account</Header>
      <Input
        onChange={handleChange}
        name="name"
        type="text"
        label="Your name"
        error={errors.name}
      />
      <Input
        onChange={handleChange}
        name="email"
        type="text"
        label="Email"
        error={errors.email}
      />
      <InputPassword
        onChange={handleChange}
        name="password"
        type="password"
        label="Password"
        error={errors.password}
      />
      <InputPassword
        onChange={handleChange}
        name="confirmPassword"
        type="password"
        label="Confirm password"
        error={errors.confirmPassword}
      />
      <StyledCheckbox
        onChange={handleCheckboxChange}
        checked={checkbox}
        error={errors.checkbox}
        label="I agree with the Terms and Conditions, the Processing of Personal Data and the Processor Agreement." // split this into checkbox and text because i dont think i can style the checkbox and the label by themselves, maybe by passing props but that seems weird
      />
      <StyledButton type="submit" background="#0980CD">
        Create account
      </StyledButton>
      <Text>Already have an account?</Text>
      <StyledLinkAsAButton to="/login">Log in</StyledLinkAsAButton>
    </StyledForm>
  );
};

export default RegisterForm;
