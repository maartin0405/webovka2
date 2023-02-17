import React from "react";
import styled from "@emotion/styled";

const StyledForm = styled.form`
  background-color: ${({ color }) => (color ? "pink" : "transparent")};
  margin-top: 48.5px;
  margin-right: 65px;
  margin-left: 65px;
  margin-bottom: 50px;
`;

const Form = ({ className, children, color }) => {
  return (
    <StyledForm className={className} color={color}>
      {children}
    </StyledForm>
  );
};

export default Form;
