import React, { useState } from "react";
import styled from "@emotion/styled";
import { InputPassword, Text, Button, LinkAsAButton } from "../utils";
import Header from "../Header";
import validateConfirmPassword from "../../utils/validators/validateConfirmPassword";
import validatePassword from "../../utils/validators/validatePassword";
import { FormattedMessage } from "react-intl";
import { confirmPasswordReset } from "firebase/auth";
import auth from "../../firebase/auth";
import Form from "./StyledForm";

const StyledButton = styled(Button)`
  margin-top: 25px;
  margin-bottom: 25px;
`;

const StyledLinkAsAButton = styled(LinkAsAButton)`
  margin-bottom: 35px;
  margin-top: 5px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 18px;
  padding-right: 65px;
  padding-left: 65px;
`;

const ResetPasswordForm = (props) => {
  const [passwordValues, setPasswordValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [passwordReset, setPasswordReset] = useState(false);
  const actionCode = new URLSearchParams(window.location.search).get("oobCode");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm() !== undefined) {
      confirmPasswordReset(auth, actionCode, passwordValues.password)
        .then((resp) => {
          //  navigate("/login");
          setPasswordReset(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          switch (errorCode) {
            case "auth/expired-action-code":
              setErrors({
                authError: <FormattedMessage id="expiredOobCode" />,
              });
              break;
            case "auth/invalid-action-code":
              setErrors({
                authError: <FormattedMessage id="invalidOobCode" />,
              });
              break;
            default:
              console.log(errorCode);
          }
        });
    }
  };
  const handleChange = (event) => {
    setPasswordValues({
      ...passwordValues,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const validationErrors = {
      password: validatePassword(passwordValues.password),
      confirmPassword: validateConfirmPassword(
        passwordValues.password,
        passwordValues.confirmPassword
      ),
    };
    setErrors(validationErrors);
    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== undefined
    );
    if (hasErrors) {
      return;
    }
    return ":O";
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const validationErrors = {
      ...errors,
      [name]: validatePassword(value),
    };
    setErrors(validationErrors);
  };

  if (errors.authError) {
    return (
      <StyledDiv>
        <Header size={2}>{errors.authError}</Header>
        <StyledLinkAsAButton to="/login/reset-password">
          Send Email Again
        </StyledLinkAsAButton>
      </StyledDiv>
    );
  } else if (passwordReset === false) {
    return (
      <Form onSubmit={handleSubmit} className={props.className} noValidate>
        <InputPassword
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          type="text"
          label={<FormattedMessage id="newPassword" />}
          required
          error={errors.password}
        />
        <InputPassword
          onChange={handleChange}
          onBlur={handleBlur}
          name="confirmPassword"
          type="text"
          label={<FormattedMessage id="confirmNewPassword" />}
          required
          error={errors.confirmPassword}
        />
        <StyledButton type="submit" background="#0980CD">
          <FormattedMessage id="sendResetEmail" />
        </StyledButton>
      </Form>
    );
  }

  return (
    <StyledDiv>
      <Header size={2}>
        <FormattedMessage id="passwordReset" />
      </Header>
      <Text>
        <FormattedMessage id="backToLogin" />
      </Text>
      <StyledLinkAsAButton to="/login">Login</StyledLinkAsAButton>
    </StyledDiv>
  );
};

export default ResetPasswordForm;
