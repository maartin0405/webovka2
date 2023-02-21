import React from "react";
import styled from "@emotion/styled";
import errorStar from "../images/Vector.svg";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 35px auto;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 20.31px;
  height: 20.31px;
  margin-right: 12.34px;
  cursor: pointer;
  grid-column: 1;
`;

const StyledLabel = styled.label`
  display: block;
  align-self: center;
  font-style: normal;
  font-size: 14px;
  letter-spacing: 0.15px;
  color: #322e35;
  line-height: 21px;
  display: flex;
  align-items: flex-start;
`;

const StyledImg = styled.img`
  display: inline-block;
  margin-left: 3.35px;
  &.errorClass {
    display: inline-block;
  }
  top: 0%;
`;

const Checkbox = ({ className, label }) => {
  return (
    <StyledDiv className={className}>
      <StyledInput type="checkbox" id="label" />
      <StyledLabel htmlFor="label">
        {label}
        <StyledImg src={errorStar}></StyledImg>
      </StyledLabel>
    </StyledDiv>
  );
};

export default Checkbox;
