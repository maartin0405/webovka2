import React from "react";
import styled from "@emotion/styled";

const Input = ({ type, label }) => {
  const StyledInput = styled.input`
    width: 100%;
  `;
  const StyledLabel = styled.label`
    width: 100%;
  `;

  return (
    <StyledLabel>
      {label}
      <StyledInput type={type}></StyledInput>
    </StyledLabel>
  );
};

export default Input;
