import React from "react";
import styled from "@emotion/styled";

const Checkbox = ({ label, id }) => {
  const StyledLabel = styled.label`
    display: flex;
    align-items: flex-start;
    margin-top: 25px;
    margin-bottom: 25px;
  `;

  const StyledInput = styled.input`
    width: 100px;
    width: 50px;
    height: 20px;
    margin-right: 12.34px;
  `;

  return (
    <StyledLabel>
      <StyledInput type="checkbox" id={id}></StyledInput>
      <span>{label}</span>
    </StyledLabel>
  );
};

export default Checkbox;
