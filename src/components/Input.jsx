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

const Input = ({ type, label, onChange }) => {
  return (
    <StyledDiv>
      <label for={label}>{label}</label>
      <StyledInput id={label} onChange={onChange} type={type} />
    </StyledDiv>
  );
};

export default Input;
