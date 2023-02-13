import React from "react";
import styled from "@emotion/styled";

const Checkbox = ({ label, id }) => {
  const StyledDiv = styled.div`
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    align-items: flex-start;
  `;

  const StyledInput = styled.input`
    -webkit-appearance: none;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 5px;
  `;
  return (
    <StyledDiv>
      <StyledInput type="checkbox" id={id}></StyledInput>
      <label for={id}>{label}</label>
    </StyledDiv>
  );
};

export default Checkbox;
