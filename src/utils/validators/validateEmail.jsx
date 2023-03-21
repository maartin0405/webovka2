import React from "react";
import { FormattedMessage } from "react-intl";

const validateEmail = (email) => {
  if (!email) {
    return <FormattedMessage id="errorEmail" />;
  } else if (
    /^[\w.%+-]+([.-]?[\w%+-]+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email) === false
  ) {
    return <FormattedMessage id="errorEmailFormat" />;
  }
  return undefined;
};
export default validateEmail;
