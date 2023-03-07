import React, { useState } from "react";
import styled from "@emotion/styled";
import Input from "../Input";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Text from "../Text";
import Header from "../Header";
import LinkAsAButton from "../LinkAsAButton";
import InputPassword from "../InputPassword";
import validateName from "../../utils/validators/validateName";
import validateConfirmPassword from "../../utils/validators/validateConfirmPassword";
import validateCheckbox from "../../utils/validators/validateCheckbox";
import validateEmail from "../../utils/validators/validateEmail";
import validatePassword from "../../utils/validators/validatePassword";
import { FormattedMessage } from "react-intl";  

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
    confirmPassword: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setRegisterValues({
      ...registerValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== ""
    );
    if (hasErrors) {
      return;
    }
  };

  const validateForm = () => {
    const validationErrors = {
      name: validateName(registerValues.name),
      email: validateEmail(registerValues.email),
      password: validatePassword(registerValues.password),
      confirmPassword: validateConfirmPassword(
        registerValues.password,
        registerValues.confirmPassword
      ),
      checkbox: validateCheckbox(registerValues.checkbox),
    };
    setErrors(validationErrors);
    return validationErrors;
  };
  return (
    <StyledForm
      onSubmit={handleSubmit}
      className={props.className}
      color={props.color}
    >
      <Text>
        <FormattedMessage id="BusinessToANewLevel" />
      </Text>
      <Header size={1}>
        <FormattedMessage id="createNewAccount" />
      </Header>
      <Input
        onChange={handleChange}
        name="name"
        type="text"
        label={<FormattedMessage id="yourName" />}
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
        label={<FormattedMessage id="password" />}
        error={errors.password}
      />
      <InputPassword
        onChange={handleChange}
        name="confirmPassword"
        type="password"
        label={<FormattedMessage id="confirmPassword" />}
        error={errors.confirmPassword}
      />
      <StyledCheckbox
        name="checkbox"
        onChange={handleChange}
        error={errors.checkbox}
        label={<FormattedMessage id="termsOfService" />} // split this into checkbox and text because i dont think i can style the checkbox and the label by themselves, maybe by passing props but that seems weird
      />
      <StyledButton type="submit" background="#0980CD">
        <FormattedMessage id="createAccount" />
      </StyledButton>
      <Text>
        <FormattedMessage id="alreadyHaveAnAccount" />
      </Text>
      <StyledLinkAsAButton to="/login">
        <FormattedMessage id="login" />
      </StyledLinkAsAButton>
    </StyledForm>
  );
};

export default RegisterForm;
