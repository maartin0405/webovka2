import React from "react";
import styled from "@emotion/styled";

const Form = ({ className, children, color }) => {
  const StyledForm = styled.form`
    background-color: ${({ color }) => (color ? "pink" : "transparent")};
  `;
  return (
    <StyledForm className={className} color={color}>
      {children}
    </StyledForm>
  );
};

export default Form;
