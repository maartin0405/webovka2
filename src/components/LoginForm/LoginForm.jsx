import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledForm = styled.form`
  margin-top: 48.5px;
  margin-right: 65px;
  margin-left: 65px;
`;

const LoginForm = (props) => {
  return (
    <StyledForm className={props.className} color={props.color}>
      {props.children}
    </StyledForm>
  );
};

export default LoginForm;
