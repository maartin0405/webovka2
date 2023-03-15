import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Input,
  Text,
  Button,
  Checkbox,
  LinkAsAButton,
  InputPassword,
} from "../utils";
import Header from "../Header";
import validateName from "../../utils/validators/validateName";
import validateConfirmPassword from "../../utils/validators/validateConfirmPassword";
import validateCheckbox from "../../utils/validators/validateCheckbox";
import validateEmail from "../../utils/validators/validateEmail";
import validatePassword from "../../utils/validators/validatePassword";
import { FormattedMessage } from "react-intl";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/auth";
import navigate from "../../utils/intl/navigate";

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
    if (validateForm() !== undefined) {
      createUserWithEmailAndPassword(
        auth,
        registerValues.email,
        registerValues.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/"); // maybe make a function that handles currentLangKey?
          
        })
        .catch((error) => {
          const errorCode = error.code;
          switch (errorCode) {
            // add translations to this !
            case "auth/email-already-in-use":
              setErrors({ email: <FormattedMessage id="emailAlreadyInUse" /> });
              break;
            default:
              console.log(errorCode);
          }
        });
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
    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== ""
    );
    if (hasErrors) {
      return;
    }
    return ":O";
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const validationError = validateInput(registerValues[name], name);
    setErrors({ ...errors, [name]: validationError });
  };

  const validateInput = (value, name) => {
    switch (name) {
      case "name":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "password":
        return validatePassword(value);
      case "confirmPassword":
        return validateConfirmPassword(
          registerValues.password,
          registerValues.confirmPassword
        );
      default:
        return "";
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit} className={props.className} noValidate>
      <Text>
        <FormattedMessage id="BusinessToANewLevel" />
      </Text>
      <Header size={1}>
        <FormattedMessage id="createNewAccount" />
      </Header>
      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        name="name"
        type="text"
        label={<FormattedMessage id="yourName" />}
        error={errors.name}
        required
      />
      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        name="email"
        type="text"
        label="Email"
        error={errors.email}
        required
      />
      <InputPassword
        onChange={handleChange}
        onBlur={handleBlur}
        name="password"
        type="password"
        label={<FormattedMessage id="password" />}
        error={errors.password}
        required
      />
      <InputPassword
        onChange={handleChange}
        onBlur={handleBlur}
        name="confirmPassword"
        type="password"
        label={<FormattedMessage id="confirmPassword" />}
        error={errors.confirmPassword}
        required
      />
      <StyledCheckbox
        onChange={handleChange}
        name="checkbox"
        error={errors.checkbox}
        label={<FormattedMessage id="termsOfService" />}
        required
      />
      <StyledButton type="submit" background="#0980CD">
        <FormattedMessage id="createAccount" />
      </StyledButton>
      <Text>
        <FormattedMessage id="alreadyHaveAnAccount" />
      </Text>
      <StyledLinkAsAButton to={`/login`}>
        <FormattedMessage id="login" />
      </StyledLinkAsAButton>
    </StyledForm>
  );
};

export default RegisterForm;
