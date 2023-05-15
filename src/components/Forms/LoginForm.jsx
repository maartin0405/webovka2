import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Input,
  Text,
  InputPassword,
  Button,
  LinkAsAButton,
  Checkbox,
  Link,
} from "../utils";
import Header from "../Header";
import validateEmail from "../../utils/validators/validateEmail";
import { FormattedMessage } from "react-intl";
import { onAuthStateChanged, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/auth";
import navigate from "../../utils/intl/navigate";
import Form from "./StyledForm";
import {
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

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
    checkbox: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;

    setLoginValues({
      ...loginValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/")
    } else {
      // User is signed out
      // ...
    }
  });



  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm() !== undefined) {
      setPersistence(
        auth,
        loginValues.checkbox
          ? browserLocalPersistence
          : browserSessionPersistence
      )
        .then(() => {
          return signInWithEmailAndPassword(
            auth,
            loginValues.email,
            loginValues.password
          )
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              navigate("/");
            })
            .catch((error) => {
              const errorCode = error.code;
              switch (errorCode) {
                // add translations to this !
                case "auth/user-not-found":
                  setErrors({ email: <FormattedMessage id="userNotFound" /> });
                  break;
                case "auth/invalid-email":
                  setErrors({ email: <FormattedMessage id="invalidEmail" /> });
                  break;
                case "auth/wrong-password":
                  setErrors({
                    password: <FormattedMessage id="incorrectPassword" />,
                  });
                  break;
                default:
                  console.log(errorCode);
              }
            });
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  const validateForm = () => {
    const validationErrors = {
      email: validateEmail(loginValues.email),
      password: validatePassword(),
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

  const validatePassword = () => {
    if (!loginValues.password) {
      return "Password is required";
    } else if (loginValues.password.length < 8) {
      return "Password must be at least 8 characters";
    }
    return undefined;
  };

  return (
    <Form onSubmit={handleSubmit} className={props.className} noValidate>
      <Text>
        <FormattedMessage id="welcomeBack" />
      </Text>
      <Header size={1}>
        <FormattedMessage id="login" />
      </Header>
      <Input
        name="email"
        type="text"
        label="Email"
        onChange={handleChange}
        error={errors.email}
        required
      />
      <InputPassword
        name="password"
        type="password"
        label={<FormattedMessage id="password" />}
        onChange={handleChange}
        error={errors.password}
        required
      />
      <StyledCheckbox
        label={<FormattedMessage id="rememberPassword" />}
        name="checkbox"
        onChange={handleChange}
      />
      <StyledLink to="/login/reset-password">
        <FormattedMessage id="forgotPassword" />
      </StyledLink>
      <StyledButton type="submit" background="#0980CD">
        <FormattedMessage id="login" />
      </StyledButton>
      <Text>
        <FormattedMessage id="dontHaveAccountYet" />
      </Text>
      <StyledLinkAsAButton to={`/register`}>
        <FormattedMessage id="register" />
      </StyledLinkAsAButton>
    </Form>
  );
};

export default LoginForm;
