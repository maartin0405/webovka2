import React from "react";
import { FormattedMessage } from "react-intl";

const validateName = (name) => {
  if (!name) {
    return <FormattedMessage id="errorName" />;
  } else if (name.length < 2) {
    return <FormattedMessage id="errorNameLength" />;
  }
  return undefined;
};

export default validateName;
