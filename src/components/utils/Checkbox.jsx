import React from "react";
import styled from "@emotion/styled";
import ErrorDiv from "./ErrorDiv";
import { useId } from "react";

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
  &.required {
    ::after {
      content: "*";
      color: #cf1322;
      margin-left: 2px;
      height: 15px;
      font-style: normal;
      letter-spacing: 0.15px;
      font-family: workSans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 400;
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
      top: -0.5em;
    }
  }
`;
const StyledErrorDiv = styled(ErrorDiv)`
  display: block;
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
  const id = useId();
  return (
    <StyledDiv className={className}>
      <StyledInput
        name={name}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <StyledLabel className={required ? "required" : null} htmlFor={id}>
        {label}
      </StyledLabel>
      {error !== undefined && (
        <StyledErrorDiv error={error}>{error}</StyledErrorDiv>
      )}
    </StyledDiv>
  );
};

export default Checkbox;
