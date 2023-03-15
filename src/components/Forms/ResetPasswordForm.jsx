import React, { useState } from "react";
import styled from "@emotion/styled";
import { InputPassword, Text, Button } from "../utils";
import Header from "../Header";
import validateEmail from "../../utils/validators/validateEmail";
import { FormattedMessage } from "react-intl";
import { sendPasswordResetEmail } from "firebase/auth";
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
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm() !== undefined) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          switch (errorCode) {
            case "auth/user-not-found":
              setError(<FormattedMessage id="userNotFound" />);
              break;
            case "auth/invalid-email":
              setError(<FormattedMessage id="invalidEmail" />);
              break;
            default:
              console.log(errorCode);
          }
          // ..
        });
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const validateForm = () => {
    const validationError = validateEmail(email);
    setError(validationError);
    if (validationError) {
      return;
    }
    return ":O";
  };

  const handleBlur = (event) => {
    const validationError = validateEmail(event.target.value);
    setError(validationError);
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
        name="email"
        type="text"
        label="Email"
        required
        error={error}
      />
      <InputPassword
        onChange={handleChange}
        onBlur={handleBlur}
        name="email"
        type="text"
        label="Email"
        required
        error={error}
      />
      <StyledButton type="submit" background="#0980CD">
        <FormattedMessage id="sendResetEmail" />
      </StyledButton>
    </StyledForm>
  );
};

export default ResetPasswordForm;
