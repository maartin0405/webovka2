import React from "react";
import styled from "@emotion/styled";

const Input = ({ type }) => {
  const StyledInput = styled.input`
    width: 100%;
  `;

  return (
    <label>
      Do you like peas?
      <StyledInput type={type}></StyledInput>
    </label>
  );
};

export default Input;
