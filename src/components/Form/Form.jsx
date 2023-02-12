import React from "react";
import styled from "@emotion/styled";

const Form = ({ children }) => {
  const StyledForm = styled.form``;
  return <StyledForm>{children}</StyledForm>;
};

export default Form;
