import React from "react";
import { FormattedMessage } from "react-intl";

const validateCheckbox = (checkbox) => {
  return !checkbox ? <FormattedMessage id="errorCheckbox" /> : "";
};

export default validateCheckbox;
