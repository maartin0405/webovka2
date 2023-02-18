import React from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 12.34px;
  cursor: pointer;
`;

const Checkbox = ({ label }) => {
  return (
    <StyledDiv>
      <StyledInput type="checkbox"></StyledInput>
      <span>{label}</span>
    </StyledDiv>
  );
};

export default Checkbox;
