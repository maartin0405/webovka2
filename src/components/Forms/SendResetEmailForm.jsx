import React, { useState } from "react";
import styled from "@emotion/styled";
import { Input, Text, Button } from "../utils";
import Header from "../Header";
import validateEmail from "../../utils/validators/validateEmail";
import { FormattedMessage } from "react-intl";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/auth";
import Form from "./StyledForm";

const StyledButton = styled(Button)`
  margin-top: 25px;
  margin-bottom: 25px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 18px;
  padding-right: 65px;
  padding-left: 65px;
  padding-bottom: 28px;
`;

const SendResetEmailForm = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm() !== undefined) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setEmailSent(true);
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

  if (emailSent === false) {
    return (
      <Form
        onSubmit={handleSubmit}
        className={props.className}
        noValidate
      >
        <Header size={1}>
          <FormattedMessage id="forgotPasswordHeader" />
        </Header>
        <Text>
          <FormattedMessage id="enterResetEmail" />
        </Text>
        <Input
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
      </Form>
    );
  }
  return (
    <StyledDiv>
      <Header size={2}>
        <FormattedMessage id="emailSent" />
      </Header>
      <Text>
        <FormattedMessage id="feelFreeToClose" />
      </Text>
    </StyledDiv>
  );
};

export default SendResetEmailForm;
