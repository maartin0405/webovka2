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
    width: 50px;
    height: 40px;
    background: white;
    border-radius: 5px;
    margin-top: 0px;
    margin-right: 12.34px;
  `;
  return (
    <StyledDiv>
      <StyledInput type="checkbox" id={id}></StyledInput>
      <label for={id}>{label}</label>
    </StyledDiv>
  );
};

export default Checkbox;
