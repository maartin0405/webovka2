import React from "react";
import { FormattedMessage } from "react-intl";

const validateCheckbox = (checkbox) => {
  return !checkbox ? <FormattedMessage id="errorCheckbox" /> : undefined;
};

export default validateCheckbox;
