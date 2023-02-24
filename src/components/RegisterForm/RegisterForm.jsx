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
  padding-top: 48.5px;
  padding-right: 65px;
  padding-left: 65px;
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
  });

  const [errors, setErrors] = useState({});
  const [checkbox, setCheckbox] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (event) => {
    setRegisterValues({
      ...registerValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = () => {
    setCheckbox(!checkbox);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    const validationErrors = {
      name: validateName(),
      email: validateEmail(),
      password: validatePassword(),
      confirmPassword: validateConfirmPassword(),
      checkbox: validateCheckbox(),
    };
    setErrors(validationErrors);
    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== ""
    );
    if (!hasErrors) {
      console.log(registerValues); // this will be the submit thing
    }
  };

  const validateName = () => {
    if (!registerValues.name) {
      return "Name is required";
    }
    return registerValues.name.length < 2
      ? "Name must be at least 2 characters"
      : "";
  };

  const validateEmail = () => {
    if (!registerValues.email) {
      return "Email is required";
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(registerValues.email) // why the fuck does this not work
    ) {
      return "Invalid email address";
    }
    return ""; //i could ternary this
  };

  const validatePassword = () => {
    if (!registerValues.password) {
      return "Password is required";
    }
    return registerValues.password.length < 8
      ? "Password must be at least 8 characters"
      : "";
  }; // make it so there has to be atleast 1 special character, 1 big letter and 1 number and maybe special character

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      return "Cannot be empty";
    }
    return registerValues.password !== confirmPassword
      ? "Passwords do not match"
      : "";
  };

  const validateCheckbox = () => {
    return !checkbox ? true : "";
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
        onChange={handleConfirmPasswordChange}
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
