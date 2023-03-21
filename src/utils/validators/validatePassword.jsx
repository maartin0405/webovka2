import React from "react";
import { FormattedMessage } from "react-intl";

const validatePassword = (password) => {
  if (!password) {
    return <FormattedMessage id="errorPassword" />;
  } else if (password.length < 8) {
    return <FormattedMessage id="errorPasswordLength" />;
  }
  return undefined;
}; // make it so there has to be atleast 1 special charac ter, 1 big letter and 1 number and maybe special character
export default validatePassword;
