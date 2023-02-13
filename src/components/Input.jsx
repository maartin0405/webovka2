import React from "react";
import styled from "@emotion/styled";
import eye from "../images/eye.svg";

const Input = ({ type, label, fill }) => {
  const EyeDisplay = styled.button`
    display: ${({ fill }) => (fill ? "block" : "none")};
  `; // fill prop not being read for some reason??? works in button component but not here. is this the className issue like from before?

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
      <EyeDisplay>
        <img src={eye} alt="Czech" />
      </EyeDisplay>
    </StyledLabel>
  );
};

export default Input;
