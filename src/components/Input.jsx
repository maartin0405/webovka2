import React from "react";
import styled from "@emotion/styled";
import eye from "../images/eye.svg";

const Input = ({ type, label }) => {
  const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #bfbfbf;
    margin-top: 5px;
  `;
  const StyledLabel = styled.label`
    width: 100%;
    gap: 5px;
    margin-top: 15px;
  `;

  return (
    <StyledLabel>
      {label}
      <StyledInput type={type}></StyledInput>
    </StyledLabel>
  );
};

export default Input;
