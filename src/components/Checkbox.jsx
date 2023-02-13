import React from "react";
import styled from "@emotion/styled";

const Checkbox = ({ label, id }) => {
  const StyledDiv = styled.div`
    margin-top: 25px;
    margin-bottom: 25px;
  `;
  return (
    <StyledDiv>
      <input type="checkbox" id={id}></input>
      <label for={id}>{label}</label>
    </StyledDiv>
  );
};

export default Checkbox;
