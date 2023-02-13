import React from "react";
import eye from "../images/eye.svg";
import Input from "./Input";
import styled from "@emotion/styled";
import Button from "./Button";

const InputEye = ({ label }) => {
  const StyledLabel = styled.label`
    width: 100%;
    gap: 5px;
    margin-top: 15px;
  `;

  const StyledButton = styled.button`
    border: none;
    outline: none;
    height: auto;
    background-color: transparent;
  `;
  return (
    <StyledLabel>
      {label}
      <StyledButton>
        <img src={eye} />
      </StyledButton>
      <Input type="password"></Input>
    </StyledLabel>
  );
};

export default InputEye;
