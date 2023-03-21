import React from "react";
import { FormattedMessage } from "react-intl";

const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return <FormattedMessage id="cannotBeEmpty" />;
  } else if (password !== confirmPassword) {
    return <FormattedMessage id="errorConfirmPassword" />;
  }
  return undefined;
};

export default validateConfirmPassword;
