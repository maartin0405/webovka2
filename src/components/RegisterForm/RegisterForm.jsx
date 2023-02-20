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

const RegisterForm = (props) => {
  const StyledCheckbox = styled(Checkbox)`
    margin-bottom: 15px;
    margin-top: 25px;
  `;

  const StyledButton = styled(Button)`
    margin-bottom: 25px;
  `;

  const StyledLinkAsAButton = styled(LinkAsAButton)`
    margin-bottom: 35px;
    margin-top: 5px;
  `;

  const [registerValues, setRegisterValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setRegisterValues({
      ...registerValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user created", registerValues);
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
        fill
        weight="bold"
        type="text"
        label="Your name"
      />
      <Input onChange={handleChange} name="email" type="text" label="Email" />
      <InputPassword
        onChange={handleChange}
        name="password"
        type="password"
        label="Password"
      />
      <InputPassword
        onChange={handleChange}
        name="confirmPassword"
        type="password"
        label="Confirm password"
      />
      <StyledCheckbox
        label="I agree with the Terms and Conditions, the Processing of Personal Data and the Processor Agreement." // split this into checkbox and text because i dont think i can style the checkbox and the label by themselves, maybe by passing props but that seems weird
      />
      <StyledButton type="submit" fill background="#0980CD">
        Create account
      </StyledButton>
      <Text>Already have an account?</Text>
      <StyledLinkAsAButton to="/login">Log in</StyledLinkAsAButton>
    </StyledForm>
  );
};

export default RegisterForm;
