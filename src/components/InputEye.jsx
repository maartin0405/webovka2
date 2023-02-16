import React from "react";
import eye from "../images/eye.svg";
import Input from "./Input";
import styled from "@emotion/styled";

const InputEye = ({ label }) => {
  const StyledButton = styled.button`
    position: absolute;
    border-radius: 5px;
    right: 1%;
    z-index: 2;
    border: none;
    top: 22%;
    height: 32px;
    cursor: pointer;
    background-color: transparent;
  `;

  const StyledDiv = styled.div`
    position: relative;
  `;

  const StyledLabel = styled.label`
    width: 100%;
    margin-top: 15px;
  `;

  return (
    <StyledLabel>
      {label}
      <StyledDiv>
        <Input type="password" />
        <StyledButton>
          <img src={eye} />
        </StyledButton>
      </StyledDiv>
    </StyledLabel>
  );
};

export default InputEye;
