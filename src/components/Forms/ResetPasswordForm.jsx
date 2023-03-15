import React, { useState } from "react";
import styled from "@emotion/styled";
import { InputPassword, Text, Button } from "../utils";
import Header from "../Header";
import validateConfirmPassword from "../../utils/validators/validateConfirmPassword";
import validatePassword from "../../utils/validators/validatePassword";
import { FormattedMessage } from "react-intl";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import auth from "../../firebase/auth";
import navigate from "../../utils/intl/navigate";

const StyledForm = styled.form`
  padding-top: 48.5px;
  padding-right: 65px;
  padding-left: 65px;
`;

const StyledButton = styled(Button)`
  margin-top: 25px;
  margin-bottom: 25px;
`;

const ResetPasswordForm = (props) => {
  const [passwordValues, setPasswordValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const actionCode = new URLSearchParams(window.location.search).get("oobCode");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm() !== undefined) {
      verifyPasswordResetCode(auth, actionCode)
        .then((email) => {
          const accountEmail = email;

          // Save the new password.
          confirmPasswordReset(auth, actionCode, passwordValues.password)
            .then((resp) => {
              navigate("/login");
            })
            .catch((error) => {
              switch (errorCode) {
                case "auth/expired-action-code":
                  setError(<FormattedMessage id="userNotFound" />);
                  break;
                case "auth/invalid-action-code":
                  setError(<FormattedMessage id="invalidEmail" />);
                  break;
                case "auth/user-disabled":
                  setError(<FormattedMessage id="invalidEmail" />);
                  break;
                case "auth/user-not-found":
                  setError(<FormattedMessage id="invalidEmail" />);
                  break;
                case "auth/user-not-found":
                  setError(<FormattedMessage id="invalidEmail" />);
                  break;
                default:
                  console.log(errorCode);
              }
            });
        })
        .catch((error) => {
          // Invalid or expired action code. Ask user to try to reset the password
          // again.
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
      (error) => error !== ""
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

  return (
    <StyledForm onSubmit={handleSubmit} className={props.className} noValidate>
      <Header size={1}>
        <FormattedMessage id="forgotPasswordHeader" />
      </Header>
      <Text>
        <FormattedMessage id="enterResetEmail" />
      </Text>
      <InputPassword
        onChange={handleChange}
        onBlur={handleBlur}
        name="password"
        type="text"
        label="Password"
        required
        error={errors.password}
      />
      <InputPassword
        onChange={handleChange}
        onBlur={handleBlur}
        name="confirmPassword"
        type="text"
        label="Confirm Password"
        required
        error={errors.confirmPassword}
      />
      <StyledButton type="submit" background="#0980CD">
        <FormattedMessage id="sendResetEmail" />
      </StyledButton>
    </StyledForm>
  );
};

export default ResetPasswordForm;
