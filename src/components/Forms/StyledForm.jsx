import React from "react";
import styled from "@emotion/styled";

const StyledForm = styled.form`
  padding-top: 48.5px;
  padding-right: 65px;
  padding-left: 65px;
`;

const Form = (props) => {
  return <StyledForm className={props.className}>{props.children}</StyledForm>;
};

export default Form;
