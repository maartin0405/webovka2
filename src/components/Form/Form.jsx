import React from "react";
import styled from "@emotion/styled";

const StyledForm = styled.form`
  margin-top: 48.5px;
  margin-right: 65px;
  margin-left: 65px;
`;

const Form = ({ className, children, color }) => {
  return (
    <StyledForm className={className} color={color}>
      {children}
    </StyledForm>
  );
};

export default Form;
