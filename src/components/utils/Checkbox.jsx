import React from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 35px auto;
  grid-template-rows: auto auto;
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
  &::after {
    &:required {
      content: "*";
      color: #cf1322;
      margin-left: 3px;
    }
  }
`;
const StyledErrorDiv = styled.div`
  display: none;
  &.errorClass {
    display: inline-block;
  }
  margin-top: 5px;
  grid-column: 1 / span 2;
  height: 15px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 140%;
  letter-spacing: 0.15px;
  color: #cf1322;
`;

const Checkbox = ({
  className,
  label,
  checked,
  onChange,
  name,
  required,
  error,
}) => {
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
      <StyledErrorDiv className={error ? "errorClass" : null}>
        {error}
      </StyledErrorDiv>
    </StyledDiv>
  );
};

export default Checkbox;
