import React from "react";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  background: #ffffff;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
`;

const StyledDiv = styled.div`
  width: 100%;
  padding: 0px;
  margin-top: 15px;
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.15px;
`;

const Input = ({ type, label, onChange }) => {
  return (
    <StyledDiv>
      <StyledLabel for={label}>{label}</StyledLabel>
      <StyledInput id={label} onChange={onChange} type={type} />
    </StyledDiv>
  );
};

export default Input;
