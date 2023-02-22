import React from "react";
import styled from "@emotion/styled";
import errorStar from "../images/Vector.svg";

const StyledDiv = styled.div`
  position: relative;
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
`;

const StyledImg = styled.img`
  position: absolute;
  display: none;
  &.errorClass {
    display: inline-block;
  }
  top: -5px;
  left: 25.31px;
`;

const Checkbox = ({ className, label, error, checked, onChange, name }) => {
  return (
    <StyledDiv className={className}>
      <StyledInput
        name={name}
        type="checkbox"
        id="label"
        checked={checked}
        onChange={onChange}
      />
      <StyledLabel htmlFor="label">{label}</StyledLabel>
      <StyledImg
        src={errorStar}
        className={error ? "errorClass" : null}
      ></StyledImg>
    </StyledDiv>
  );
};

export default Checkbox;
