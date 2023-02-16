import React from "react";
import styled from "@emotion/styled";

const Checkbox = ({ label }) => {
  const StyledDiv = styled.div`
    display: flex;
    align-items: flex-start;
  `;

  const StyledInput = styled.input`
    width: 50px;
    height: 20px;
    margin-right: 12.34px;
    cursor: pointer;
  `;

  return (
    <StyledDiv>
      <StyledInput type="checkbox"></StyledInput>
      <span>{label}</span>
    </StyledDiv>
  );
};

export default Checkbox;
