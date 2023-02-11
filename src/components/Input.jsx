import React from "react";
import styled from "@emotion/styled";

const Input = ({ type }) => {
  const StyledInput = styled.input`
    width: 100%;
  `;

  return <StyledInput type={type}></StyledInput>;
};

export default Input;
